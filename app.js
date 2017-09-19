
'use strict';

var userName = prompt('Thanks for stopping by my page! What is your name?');
alert('Hi ' + userName + '!' + ' Let\'s play a game! See if you can guess correct answers about me.');

//Q1
var answer1 = prompt('Do I like cheese?').toLowerCase();
console.log('Answer 1 is ' + answer1);

if (answer1 === 'y' || answer1 === 'yes') {
  alert('Yes, I love cheese! Especially, Havarti!');
} else {
  alert('Wrong! Who doesn\'t love cheese?');
}

//Q2
var answer2 = prompt('Have I ever wrestled a bear?').toLowerCase();
console.log('Answer 2 is ' + answer2);

if (answer2 === 'n' || answer2 === 'no') {
  alert('Correct!!, Why would I ever wrestle a bear?');
} else {
  alert('No way José! That\'s dangerous!');
}

//Q3
var answer3 = prompt('Do I like to go camping?').toLowerCase();
console.log('Answer 3 is ' + answer3);

if (answer3 === 'y' || answer3 === 'yes') {
  alert('Sure do! Who doesn\'t?!');
} else {
  alert('Wrong! I love camping!');
}

//Q4
var answer4 = prompt('Do I have any siblings?').toLowerCase();
console.log('Answer 4 is ' + answer4);

if (answer4 === 'y' || answer4 === 'yes') {
  alert('Yes! I have 2 brothers!');
} else {
  alert('Incorrect! I have 2 brothers.');
}

//Q5
var answer5 = prompt('Do I have a fear of Tarantulas?').toLowerCase();
console.log('Answer 5 is ' + answer5);

if (answer5 === 'y' || answer5 === 'yes') {
  alert('Correct! I\'m terrified!');
} else {
  alert('Wrong! I\'m terrified!');
}
