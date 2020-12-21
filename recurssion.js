const factorial = numb => {
	// Ensure that  numb is only a Number
	if (typeof numb !== 'number') {
		return `You must input a Number`;
	}

	// Since 2 x 1 = 2, short circuit to 2
	if (numb === 2) {
		return 2;
	}
	// Short circuit when numb === 1
	if (numb === 1) return 1;

	// Decrease numb by 1 on each recurssion
	return numb * factorial(numb - 1);
};

factorial(5); // 120;
