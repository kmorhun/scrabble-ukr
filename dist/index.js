"use strict";

var _interopRequireDefault = require("/Users/kmorhun/Repos/scrabble-ukr/node_modules/@babel/runtime/helpers/interopRequireDefault.js").default;
var _interopRequireWildcard = require("/Users/kmorhun/Repos/scrabble-ukr/node_modules/@babel/runtime/helpers/interopRequireWildcard.js").default;
var _react = _interopRequireDefault(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
require("./index.css");
var _App = _interopRequireDefault(require("./App"));
var serviceWorker = _interopRequireWildcard(require("./serviceWorker"));
var _reactIntl = require("react-intl");
var _en = _interopRequireDefault(require("react-intl/locale-data/en"));
var _uk = _interopRequireDefault(require("react-intl/locale-data/uk"));
var _jsxFileName = "/Users/kmorhun/Repos/scrabble-ukr/src/index.js";
(0, _reactIntl.addLocaleData)(_en.default);
(0, _reactIntl.addLocaleData)(_uk.default);
_reactDom.default.render(/*#__PURE__*/_react.default.createElement(_App.default, {
  __self: void 0,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 17
  }
}), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
