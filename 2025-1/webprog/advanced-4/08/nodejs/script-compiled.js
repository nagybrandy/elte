"use strict";

var _math = _interopRequireDefault(require("./math.js"));
var _cowsay = _interopRequireDefault(require("cowsay"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
console.log((0, _math["default"])(1, 2));
console.log(_cowsay["default"].think({
  text: "wtf js",
  eyes: "xX",
  tongue: "U",
  r: true
}));
