const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */

let controls = ["--double-prev", "--double-next", "--discard-prev", "--discard-next"];
function transform(arr) {
	if (!Array.isArray(arr)) {
		throw new Error("'arr' parameter must be an instance of the Array!");
	}
	let newArr = arr.slice();
	for (let i = 0; i < newArr.length; i++) {
		if (i > 0 && i < newArr.length - 1) {
			if (newArr[i] === "--double-next") {
				newArr[i] = newArr[i + 1];
			}
			if (newArr[i] === "--double-prev") {
				newArr[i] = newArr[i - 1];
			}
			if (newArr[i] === "--discard-prev") {
				newArr.splice(i - 1, 2);
				i -= 2;
			}
			if (newArr[i] === "--discard-next") {
				newArr.splice(i, 2);
			}
		}
	}
	newArr.forEach((elem, index, array) => {
		if (controls.includes(elem)) {
			array.splice(index, 1);
		}
	});
	return newArr;
}

module.exports = {
	transform,
};
