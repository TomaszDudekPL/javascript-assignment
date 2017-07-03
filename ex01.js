// use _.partial function to implement functions:

var _ = require('lodash');

var addFiveAndSixAnd = _.partial( (...args)=> args.reduce((total, next) => total + next, 0), 5, 6);
var power = _.partial(Math.pow, 2);
var powerTwo = _.partial(Math.pow, _, 2);
var powerThree = _.partial(Math.pow, _, 3);


console.log(addFiveAndSixAnd(4)); //15 (adds 5 + 6 + 4 = 15)

//Evaluates Math.power(2,3)
console.log(power(3)); //8

//Evaluates Math.power(3,2)
console.log(powerTwo(3)); //9

//Evaluates Math.power(3,3)
console.log(powerThree(3)); // 27