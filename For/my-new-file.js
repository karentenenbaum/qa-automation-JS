/*Activity a: Create an array containing 5 words and loop through the array using a JavaScript 
for loop to display an alert using each word.
*/

const fruitsArray = ['banana', 'apple', 'orange', 'pineapple', 'grapes'];

for (let i = 0; i < fruitsArray.length; i++) {
    alert(fruitsArray[i]);
}

/*Activity b: In the above array, convert the first letter of each word to uppercase and display an alert 
for each modified word.
*/
for (let i = 0; i < fruitsArray.length; i++) {
    const transformWord = fruitsArray[i].substring(0, 1).toUpperCase() + fruitsArray[i].substring(1).toLowerCase();
    alert(transformWord);
}

/*Activity c: Create a variable called "sentence" that has an empty string, then to the array from point a) go through it 
with a for loop to save each word inside the sentence variable. At the end show a single alert with the complete string. 
*/

let sentence = '';

for (let i = 0; i < fruitsArray.length; i++) {
    sentence += fruitsArray[i];
}
alert(sentence);

/*Activity d: Create an empty array and with a for loop of 10 repetitions, fill the array with the repetition number, 
that is, at the end of the execution of the for loop, there should be 10 elements within the array, from number 0 to 
number 9. Display the final array in the browser console (use console.log).
*/

let lastArray = [];

for(i = 0; i < 10; i++) {
    lastArray.push(i);
}
console.log (lastArray);