import configs from "./configsCovid.js";

const cheerio = require("cheerio");
const unirest = require("unirest");
const fetch = require("node-fetch");
const fs = require("fs");

const saveResult = (json, name) => {
  fs.writeFile(
    `./data/${name}_result.json`,
    JSON.stringify(json, null, 2),
    err => {
      if (err) console.log("not saved", err.message);
    }
  );
};

const getCovidInfo = async elemClasses => {
  const {
    url,
    totalSickClass,
    totalSickLastDayClass,
    totalDeathClass,
    totalDeathLastDayClass,
  } = elemClasses.UKRAINE;

  return new Promise(async (resolve, reject) => {
    await unirest.get(url).end(response => {
      const body = response.body;
      const $ = cheerio.load(body);

      const totalSick = $(totalSickClass).text();
      const totalSickLastDay = $(totalSickLastDayClass).text();
      const totalDeath = $(totalDeathClass).text();
      const totalDeadtLastDay = $(totalDeathLastDayClass).text();

      const result = {
        totalSick,
        totalSickLastDay,
        totalDeath,
        totalDeadtLastDay,
      };

      resolve(result);
    });
  });
};

const getMoneyInfo = async elemClasses => {
  const response = await fetch(elemClasses.url);
  const data = await response.json();
  const result = {
    buyDollar: data[0].buy,
    sellDollar: data[0].sale,
    buyEu: data[1].buy,
    sellEu: data[1].sale,
  };
  return result;
};

const getPost = async (url, elemClasses) => {
  const {
    titleClass,
    imgLinkClass,
    textContentClass,
    viewsClass,
  } = elemClasses;
  const response = await unirest.get(url);
  const body = await response.body;

  const $ = cheerio.load(body);

  const title = $(titleClass).text();
  const imgLink = $(imgLinkClass).attr("src");
  const someBadText = $(textContentClass)
    .text()
    .split("\t")
    .join(" ")
    .trim()
    .split("\n");
  const updText = someBadText.map(item => {
    return item.trim();
  });
  const textContent = updText.join("");
  const views = $(viewsClass).text().trim();

  const result = {
    title,
    imgLink,
    textContent,
    views,
  };
  return result;
};

const getLinks = async elemObj => {
  const { url, className } = elemObj;

  const response = await unirest.get(url);
  const body = await response.body;

  const $ = cheerio.load(body);

  const links = [];

  $(className).each((_, e) => {
    links.push($(e).attr("href"));
  });

  return links;
};

const fetchLinks = async links => {
  const posts = [];
  for (let i = 0; i < links.length; i++) {
    const post = await getPost(links[i], configs.POST).then(data => data);
    posts.push(post);
  }
  return posts;
};

const check = test => {
  return test;
};

const sleep = ms => new Promise(r => setTimeout(r, ms));

export default {
  saveResult,
  fetchLinks,
  getLinks,
  getPost,
  getCovidInfo,
  getMoneyInfo,
  check,
};
