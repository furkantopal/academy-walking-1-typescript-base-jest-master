"use strict";
exports.__esModule = true;
exports.Example = void 0;
var Example = /** @class */ (function () {
    function Example() {
    }
    Example.prototype.isLeapYear = function (a) {
        return a % 4 === 0 && (a % 100 !== 0 || (a % 100 === 0 && a % 400 === 0));
    };
    return Example;
}());
exports.Example = Example;
