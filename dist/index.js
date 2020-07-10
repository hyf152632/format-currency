"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatToCurrency = void 0;
/**
* @Method: Returns a string of the number passed in, but formatted to currency, like $5.00.
* Accepts a number with implied decimals.
* @Param {number}
* @Return {string}
*/
function formatToCurrency(args) {
    return "$" + (args / 100).toFixed(2);
}
exports.formatToCurrency = formatToCurrency;
