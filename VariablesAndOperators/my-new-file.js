/* Activity a: Create two numerical variables and use the sum operator to save the value of the sum of both numbers
 in a third variable.  
*/

const numOne = 5;
const numTwo = 3;
const sum = numOne + numTwo;

console.log(sum);


//Activity b: Create two variables of type String and concatenate them by saving the result in a third variable.//

const textOne = 'hola';
const textTwo = 'mundo';
const textThree = textOne.concat(textTwo);

console.log(textThree);


/* Another way to solve it:

const textOne = 'hola';
const textTwo = 'mundo';
const textThree = textOne + ' ' + textTwo;
console.log (textThree); 

*/


/*
Activity c: Crear two variables of type String and add the length of each variable (numbers of letters in the string),
saving the sum result in a third viariable (use length).
*/

const wordOne = 'Simon';
const wordTwo = 'says';
const wordThree = wordOne.length + wordTwo.length;

console.log (wordThree);