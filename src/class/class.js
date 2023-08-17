"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Greeter = exports.OKGreeter = void 0;
var Point = /** @class */ (function () {
  function Point() {}
  return Point;
})();
var pt = new Point();
pt.x = 0;
pt.y = 0;
var Point1 = /** @class */ (function () {
  function Point1() {
    this.x = 0;
    this.y = 0;
  }
  return Point1;
})();
var pt1 = new Point1();
console.log(pt1);
// @ts-expect-error - x is number
pt1.x = "";
pt1.x = 3;
var OKGreeter = /** @class */ (function () {
  function OKGreeter() {}
  return OKGreeter;
})();
exports.OKGreeter = OKGreeter;
var Greeter = /** @class */ (function () {
  function Greeter(otherName) {
    this.name = "world";
    if (otherName !== undefined) {
      this.name = otherName;
    }
  }
  Greeter.prototype.err = function () {
    this.name = "foo";
  };
  return Greeter;
})();
exports.Greeter = Greeter;
