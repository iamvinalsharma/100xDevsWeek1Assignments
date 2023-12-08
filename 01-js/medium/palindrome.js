/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

// TESTS: https://github.com/100xdevs-cohort-2/assignments/blob/master/01-js/tests/palindrome.test.js

// Pretty straight-forward program to understand.
// Still have any questions? Please drop in your comments.

function isPalindrome(testString) {
  testString = testString.toLowerCase();
  indexes = testString.length - 1;
  let testString1 = "";
  let testString2 = "";
  for (let i = indexes; i >= 0 ; i--) {
    if (testString[indexes - i].match(/[a-z]/i)) {
      testString1 = testString1 + testString[indexes - i];
    }
    if (testString[i].match(/[a-z]/i)) {
      testString2 = testString2 + testString[i];
    }
  }
  if (testString1 == testString2) {
    return true;
  } else {
    return false;
  }
}

module.exports = isPalindrome;
