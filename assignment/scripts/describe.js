// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We declare a variable called "name" and set its value to "Dane" (a string).
// We then check whether that variable contains the string value "Mary". If it does,
// we will log "Hi, Mary!" to the console. If it does not, we will log
// "How do you do?" to the console. In this case, "How do you do?" is logged to
// the console.

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We declare a variable called "secret", but do not assign it a value.
// Next we declare a variable called "code" and assign it a number value of 123.
// We check whether the value of the variable "code" is equal to the number 123.
// Since it is equal in this case, we assign the string value "super" to the
// variable "secret" that we created earlier.
// Next we multiply the value assigned to the variable
// "code", 123, by 2 (which results in 246) and we assign this new value, 246,
// to the variable "code".
// We then check whether the value assigned to "code" is larger than 250.
// If it were, we would assign the string value "duper" to the "secret" variable,
// but since it's not, nothing happens.
// We log out the value of "secret", so "super" is logged to the console.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We declare a variable called "isStudent" and assigned it a boolean value of
// "true". We next declare a variable called "age" and assign it a number value
// of 34. Then we declare a variable called "zip" and assign it a number value
// of 55407.
// Next we do a series of checks:
// First we check if the value of "isStudent" is true AND the value of "zip" is
// greater than 8000. If this is the case, we will log "You're a student on the West Coast!"
// to the console. If this is not the case, we continue checking for the second
// conditional statement, namely whether "isStudent" is false OR the value of
// "age" is smaller than 30. If either of these two conditions are met,
// we will console log "What are your hobbies?". If neither of these two conditions
// evaluate to true, we will do a third conditional check: we check whether
// "isStudent" is true. If so, we will log "Welcome to Prime!" to the console. If
// this condition is not met, we will log "How about the weather?" to the console.
//
// In this case, we will actually log "Welcome to Prime!" to the console.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// FIX - colorOne should be 'blue' and colorTwo should be 'red'
// should be:
// let colorOne = 'blue';
// let colorTwo = 'red';

let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
// FIX - colorTwo should also change to purple
// should add: colorTwo = 'purple';

}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

// FIX - this should be an AND operator, so the first line should be:
// if (temp > 39 && time >= 4) {
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
// FIX - in this case age >= minAge, so the line below should be:
// console.log('enter');
  console.log('no entry');
} else {
// FIX - in this case age < minAge, so the line below should be:
// console.log('no entry');
  console.log('enter');
// NOTE: another way to fix this code would be to have the first line of the
// conditional be:
// if(minAge > age) {

}
*/
