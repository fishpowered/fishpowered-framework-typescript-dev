"use strict";
exports.__esModule = true;
/**
 * Example web service
 */
var Calculator = (function () {
    function Calculator() {
        var dependencies = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            dependencies[_i] = arguments[_i];
        }
    }
    /**
     * @param a
     * @param b
     * @returns int
     */
    Calculator.prototype.call = function (a, b) {
        return a + b;
    };
    return Calculator;
}());
exports.Calculator = Calculator;
