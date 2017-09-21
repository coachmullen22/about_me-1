
'use strict';

var score = 0;
var userName = prompt('Thanks for stopping by my page! What is your name?');
alert('Hi ' + userName + '!' + ' Let\'s play a game! See if you can guess correct answers about me.');

//Q1
function question1() {
  var answer1 = prompt('Do I like cheese?').toLowerCase();
  console.log('Answer 1 is ' + answer1);

  if (answer1 === 'y' || answer1 === 'yes') {
    alert('Yes, I love cheese! Especially, Havarti!');
    ++score;
  } else {
    alert('Wrong! Who doesn\'t love cheese?');
  }
}
question1();

//Q2
function question2() {
  var answer2 = prompt('Have I ever wrestled a bear?').toLowerCase();
  console.log('Answer 2 is ' + answer2);

  if (answer2 === 'n' || answer2 === 'no') {
    alert('Correct!!, Why would I ever wrestle a bear?');
    ++score;
  } else {
    alert('No way José! That\'s dangerous!');
  }
}
question2();

//Q3
var answer3 = prompt('Do I like to go camping?').toLowerCase();
console.log('Answer 3 is ' + answer3);

if (answer3 === 'y' || answer3 === 'yes') {
  alert('Sure do! Who doesn\'t?!');
  ++score;
} else {
  alert('Wrong! I love camping!');
}

//Q4
var answer4 = prompt('Do I have any siblings?').toLowerCase();
console.log('Answer 4 is ' + answer4);

if (answer4 === 'y' || answer4 === 'yes') {
  alert('Yes! I have 2 brothers!');
  ++score;
} else {
  alert('Incorrect! I have 2 brothers.');
}

//Q5
var answer5 = prompt('Do I have a fear of Tarantulas?').toLowerCase();
console.log('Answer 5 is ' + answer5);

if (answer5 === 'y' || answer5 === 'yes') {
  alert('Correct! I\'m terrified!');
  ++score;
} else {
  alert('Wrong! I\'m terrified!');
}

//Q6
var answer6 = parseInt(prompt('What is my favorite number?'));
console.log('Answer 6 is ' + answer6);

for (var i = 0; i < 3; i++) {
  if (answer6 === 2) {
    alert('Correct!');
    ++score;
    break;
  } else if (answer6 > 2) {
    alert('Too high! Try again.');
    answer6 = parseInt(prompt('What is my favorite number?'));
  } else if (answer6 < 2) {
    alert('Too low!');
    answer6 = parseInt(prompt('What is my favorite number?'));
  }
  console.log('Answer 6 is ' + answer6);
}

if (i === 3) {
  alert('Wrong again! OH NO! NO MORE TRIES!');
}


//Q7
var answer7 = prompt('Can you guess a country I\'ve been to?').toLowerCase();
console.log('Answer 7 is ' + answer7);
var country = ['mexico', 'turkey','england'];

for (var j = 0; j < 5; j++) {
  if (answer7 === country[0] || answer7 === country[1] || answer7 === country[2]) {
    alert('Correct! I\'ve been to Mexico, Turkey, and England');
    ++score;
    break;
  } else {
    alert('Sorry! Try again.');
    answer7 = prompt('Can you guess a country I\'ve been to?').toLowerCase();
  }
  console.log('Answer 7 is ' + answer7);
}
if (i === 3) {
  alert('Wrong again! OH NO! NO MORE TRIES!');
}


alert('I\'ve been to Mexico, Turkey, and England!');
alert('You got ' + score + ' right!' + 'Better luck next time!');
console.log(score);
