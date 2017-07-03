/*
Given an Array of strings, use Array#reduce to create an object that contains the number of times each string occured in the array. Return the object directly (no need to console.log).

Example

    var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']
    
    console.log(countWords(inputWords))
    
    // =>
    // {
    //   Apple: 2,
    //   Banana: 1,
    //   Durian: 3
    // }

*/


const countWords = inputWords => inputWords.reduce(
  function (report, nextWord) {
    report[nextWord] = (report[nextWord] || 0) + 1;
    return report
  },
  {}
);

var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']

console.log(countWords(inputWords))