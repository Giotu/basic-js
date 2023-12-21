const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
	let strDigits = String(n);
	let max = 0;
	for (let i = 0; i < strDigits.length; i++) {
		let newStr = strDigits.slice(0, i) + strDigits.slice(i + 1);
		let num = Number(newStr);
		max = max < num ? num : max;
	}
	return max;
}

module.exports = {
	deleteDigit,
};
