
"use strict";


//The questions in the guessing game must require a mix of yes/no answers, and user input must accept either y/n or yes/no responses, with either .toUpperCase() or .toLowerCase() used to validate the user input and accommodate users entering all-caps Y/N or YES/NO answers, too.
//Useful and descriptive console.log() messages in the JS are well written and correctly displaying to the browser console for each question of the guessing game.
//Use CSS to style your page as you see fit, to the level of abilities in CSS that you currently have
//Add, Commit, Push process is being followed; it is evident in GitHub that commits are made regularly, and with good commit messages that explain the WHY of the commit.


//var userName = prompt('Thanks for stopping by my page! What is your name?')
//alert('Hi ' + userName + ', see if you can get the correct answers about me');

//Q1
var answer1 = prompt('Do I have four cats?').toLowerCase();
console.log('Answer 1 is ' + answer1);
if (answer1 === 'n' || answer1 === 'no') {
  //tell user the answewr is correct
  alert('Correct!!');
} else {
  //tell user it was wrong
  alert('Incorrect!!');
}
