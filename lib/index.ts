/**
* @Method: Returns a string of the number passed in, but formatted to currency, like $5.00.
* Accepts a number with implied decimals.
* @Param {number}
* @Return {string}
*/
export function formatToCurrency(args: number): string {
    return `$${(args / 100).toFixed(2)}`;
}