// A palindrome is a word or phrase which can be read forward and
// backward, disregarding punctuations and capitalization
const isPalindrome = palString => {
	// lowercase the string and then use the regex to disregard special characters
	palString = palString.toLowerCase().replace(/\W/g, '');
	for (let i = 0; i < palString.length; i++) {
		// Check to see if the current iteration is same from the end of the string
		if (palString[i] !== palString[palString.length - 1 - i]) {
			return false;
		}
	}
	return true;
};

// isPalindrome('my name eman ym') // true
// With the help inbuilt methods

const isPalindrome2 = str => {
	str = str.toLowerCase().replace(/\W/g, '');
	return str === str.split('').reverse().join('');
};
