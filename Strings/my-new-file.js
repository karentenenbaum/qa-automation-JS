/* Activity a: Create a variable of type String with at least 10 characters and convert all the text to uppercase
 (use toUpperCase).
 */

const firstWordActA = 'my first word';
const transformTxt = firstWordActA.toUpperCase()

console.log(transformTxt);


/* Activity b: Create a variable of type String with at least 10 characters and generated a new String with the first 5 
characters saving the result of a new variable (use substring). 
*/

const firstWordActB = 'Hello Karen';
const secondWordActB = firstWordActB.substring(0, 6);

console.log(secondWordActB);

/* Activity c : Create a variable of type string with at least 10 characters and generate a new string with the last ones
 3 characters saving the result in a new variable (use substring).
*/

const wordActC = 'Mozilla Firefox';
const finalWord = wordActC.substring(12);

console.log(finalWord);

/* Activity d : Create a variable of type string with at least 10 characters and generate a new string with the first one
capital letter and the others in lowercase. Save the result in a new variable (use substring, toUpperCase,
toLowerCase and the + operator).
*/

const wordOneActD = 'goOgLe cHrOme';
const finalWordActD = wordOneActD.substring(0, 1).toUpperCase() + wordOneActD.substring(1).toLowerCase();

console.log(finalWordActD);

/* Activity e : Create a variable of type string with at least 10 characters and some blank space.
 Find the position of the first whitespace and save it to a variable (use indexOf).
 */

const wordActE = 'Java Script Language';
const whiteSpace = wordActE.indexOf(' ');

console.log(whiteSpace);

/* Activity f : Create a variable of type string with at least 2 long words (10 characters and some space between
means, medium). Use the methods of the previous exercises to generate a new string that has the first letter of both words
uppercase and all other lowercase letters (use indexOf, substring, toUpperCase, toLowerCase, and the + operator).
*/

const longWord = 'iNteRnet exPloreR';
const indexSpace = longWord.indexOf(' ');

const wordOne = longWord.substring(0, 1).toUpperCase() + longWord.substring(1, indexSpace + 1).toLowerCase();

const wordTwo = longWord.substring(indexSpace + 1, indexSpace + 2).toUpperCase() + longWord.substring(indexSpace + 2).toLowerCase();

const finWord = (wordOne + wordTwo);

console.log(finWord);




