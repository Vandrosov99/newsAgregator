"use strict";

var _parseFunctions = require("./parseFunctions.js");

var _parseFunctions2 = _interopRequireDefault(_parseFunctions);

var _configsCovid = require("./configsCovid.js");

var _configsCovid2 = _interopRequireDefault(_configsCovid);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

console.log("Index starts...");
function start() {
  var covInfo = _parseFunctions2.default.getCovidInfo(
    _configsCovid2.default.COUNTRIES
  );
  covInfo.then(function (data) {
    _parseFunctions2.default.saveResult(data, "covidInfo");
  });
  var moneyInfo = _parseFunctions2.default.getMoneyInfo(
    _configsCovid2.default.MONEY
  );
  moneyInfo.then(function (data) {
    _parseFunctions2.default.saveResult(data, "money");
  });

  // const postInfo = parseFuncService.getPost(configs.POST.url, configs.POST);
  // postInfo.then(data => console.log(data));

  var links = _parseFunctions2.default.getLinks(_configsCovid2.default.URLNEWS);
  links
    .then(function (data) {
      return _parseFunctions2.default.fetchLinks(data);
    })
    .then(function (data) {
      return _parseFunctions2.default.saveResult(data, "news");
    });
}
start();
