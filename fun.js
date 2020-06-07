// #include "stdio.h"

function swap(val1, val2) {

	let tmp = val1;

	val1 = val2;
	val2 = tmp;

	return 0;

}


module.exports = {
	swap: swap
}