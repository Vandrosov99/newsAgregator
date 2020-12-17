const cheerio = require("cheerio");
const unirest = require("unirest");
const fetch = require("node-fetch");

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

const getPost = async elemClasses => {
  const {
    url,
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
const check = test => {
  return test;
};

const sleep = ms => new Promise(r => setTimeout(r, ms));

export default {
  getPost,
  getCovidInfo,
  getMoneyInfo,
  check,
};
