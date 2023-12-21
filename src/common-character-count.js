const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
	let objLetters = {};
	for (const letter of s1) {
		if (letter in objLetters) {
			objLetters[letter]++;
		} else {
			objLetters[letter] = 1;
		}
	}

	let count = 0;
	for (const letter of s2) {
		if (objLetters[letter] > 0) {
			objLetters[letter]--;
			count++;
		}
	}
	return count;
}

module.exports = {
	getCommonCharacterCount,
};
