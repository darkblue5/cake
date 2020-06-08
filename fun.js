// #include "stdio.h"


function swap(val1, val2) {
	let tmp = val1;

	val1 = val2;
	val2 = tmp;

	return 0;

}


function max(val1, val2) {
	let tmp = 0;

	if (val1 > val2)
		tmp = val1;
	else
		tmp = val2;

	return tmp;
  
}

module.exports = {
	swap: swap,
	max: max
}
