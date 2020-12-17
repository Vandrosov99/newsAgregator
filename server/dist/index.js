"use strict";

var _stringify = require("babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

var _parseFunctions = require("./parseFunctions.js");

var _parseFunctions2 = _interopRequireDefault(_parseFunctions);

var _configsCovid = require("./configsCovid.js");

var _configsCovid2 = _interopRequireDefault(_configsCovid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log("Index starts...");
function start() {
  var covInfo = _parseFunctions2.default.getCovidInfo(_configsCovid2.default.COUNTRIES);
  covInfo.then(function (data) {
    return console.log("DATA" + (0, _stringify2.default)(data));
  });
  var moneyInfo = _parseFunctions2.default.getMoneyInfo(_configsCovid2.default.Money);
  moneyInfo.then(function (data) {
    console.log(data);
  });
  var postInfo = _parseFunctions2.default.getPost(_configsCovid2.default.Post);
  postInfo.then(function (data) {
    return console.log(data);
  });
}
start();