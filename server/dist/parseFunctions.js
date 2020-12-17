"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cheerio = require("cheerio");
var unirest = require("unirest");
var fetch = require("node-fetch");

var getCovidInfo = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(elemClasses) {
    var _elemClasses$UKRAINE, url, totalSickClass, totalSickLastDayClass, totalDeathClass, totalDeathLastDayClass;

    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _elemClasses$UKRAINE = elemClasses.UKRAINE, url = _elemClasses$UKRAINE.url, totalSickClass = _elemClasses$UKRAINE.totalSickClass, totalSickLastDayClass = _elemClasses$UKRAINE.totalSickLastDayClass, totalDeathClass = _elemClasses$UKRAINE.totalDeathClass, totalDeathLastDayClass = _elemClasses$UKRAINE.totalDeathLastDayClass;
            return _context2.abrupt("return", new _promise2.default(function () {
              var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(resolve, reject) {
                return _regenerator2.default.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return unirest.get(url).end(function (response) {
                          var body = response.body;
                          var $ = cheerio.load(body);

                          var totalSick = $(totalSickClass).text();
                          var totalSickLastDay = $(totalSickLastDayClass).text();
                          var totalDeath = $(totalDeathClass).text();
                          var totalDeadtLastDay = $(totalDeathLastDayClass).text();

                          var result = {
                            totalSick: totalSick,
                            totalSickLastDay: totalSickLastDay,
                            totalDeath: totalDeath,
                            totalDeadtLastDay: totalDeadtLastDay
                          };

                          resolve(result);
                        });

                      case 2:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, undefined);
              }));

              return function (_x2, _x3) {
                return _ref2.apply(this, arguments);
              };
            }()));

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function getCovidInfo(_x) {
    return _ref.apply(this, arguments);
  };
}();

var getMoneyInfo = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(elemClasses) {
    var response, data, result;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return fetch(elemClasses.url);

          case 2:
            response = _context3.sent;
            _context3.next = 5;
            return response.json();

          case 5:
            data = _context3.sent;
            result = {
              buyDollar: data[0].buy,
              sellDollar: data[0].sale,
              buyEu: data[1].buy,
              sellEu: data[1].sale
            };
            return _context3.abrupt("return", result);

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, undefined);
  }));

  return function getMoneyInfo(_x4) {
    return _ref3.apply(this, arguments);
  };
}();

var getPost = function () {
  var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(elemClasses) {
    var url, titleClass, imgLinkClass, textContentClass, viewsClass, response, body, $, title, imgLink, someBadText, updText, textContent, views, result;
    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            url = elemClasses.url, titleClass = elemClasses.titleClass, imgLinkClass = elemClasses.imgLinkClass, textContentClass = elemClasses.textContentClass, viewsClass = elemClasses.viewsClass;
            _context4.next = 3;
            return unirest.get(url);

          case 3:
            response = _context4.sent;
            _context4.next = 6;
            return response.body;

          case 6:
            body = _context4.sent;
            $ = cheerio.load(body);
            title = $(titleClass).text();
            imgLink = $(imgLinkClass).attr("src");
            someBadText = $(textContentClass).text().split("\t").join(" ").trim().split("\n");
            updText = someBadText.map(function (item) {
              return item.trim();
            });
            textContent = updText.join("");
            views = $(viewsClass).text().trim();
            result = {
              title: title,
              imgLink: imgLink,
              textContent: textContent,
              views: views
            };
            return _context4.abrupt("return", result);

          case 16:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, undefined);
  }));

  return function getPost(_x5) {
    return _ref4.apply(this, arguments);
  };
}();
var check = function check(test) {
  return test;
};

var sleep = function sleep(ms) {
  return new _promise2.default(function (r) {
    return setTimeout(r, ms);
  });
};

exports.default = {
  getPost: getPost,
  getCovidInfo: getCovidInfo,
  getMoneyInfo: getMoneyInfo,
  check: check
};