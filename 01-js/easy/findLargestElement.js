/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

// TESTS: https://github.com/100xdevs-cohort-2/assignments/blob/master/01-js/tests/findLargestElement.test.js

// Pretty straight-forward program to understand.
// Still have any questions? Please drop in your comments.

function findLargestElement(numbers) {
    let largestElement = numbers[0];
    indexes = numbers.length;
    for (let i = 0; i < indexes; i++) {
        if (numbers[i] > largestElement) {
            largestElement = numbers[i];
        } 
    } 
    return largestElement;
}

module.exports = findLargestElement;
