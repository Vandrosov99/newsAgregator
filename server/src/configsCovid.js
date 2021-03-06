const COUNTRIES = {
  UKRAINE: {
    url:
      "https://news.google.com/covid19/map?hl=uk&mid=%2Fm%2F07t21&gl=UA&ceid=UA%3Auk",
    totalSickClass: ".fNm5wd.qs41qe .UvMayb",
    totalSickLastDayClass: ".fNm5wd.qs41qe .tIUMlb strong",
    totalDeathClass: ".fNm5wd.ckqIZ .UvMayb",
    totalDeathLastDayClass: ".fNm5wd.ckqIZ .tIUMlb strong",
  },
};

const MONEY = {
  url: "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5",
};

const POST = {
  url:
    "https://ua.korrespondent.net/ukraine/politics/4307691-kuleba-dyplomaty-rf-vidmovliauitsia-vid-kontaktiv",
  titleClass: ".post-item__title",
  imgLinkClass: ".post-item__big-photo-img",
  textContentClass: ".post-item__text",
  viewsClass: ".post-item__views span",
};

const URLNEWS = {
  url: "https://ua.korrespondent.net/",
  className: ".article__title a",
};
export default {
  URLNEWS,
  POST,
  COUNTRIES,
  MONEY,
};
