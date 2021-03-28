/* Activity a : Given the following array: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 
'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'] display by console the months 5 and 11 (use console.log).
*/

const monthsArray = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

console.log(monthsArray[4]);
console.log(monthsArray[10]);

//Activity b: Sort the array of months alphabetically and display it by console (use sort).//

const monthsAlt = [...monthsArray];
const arrayOrder = monthsAlt.sort();
console.log(arrayOrder);


//Activity c: Add an element to the beginning and end of the array (use unshift and push).//

monthsArray.unshift('Jan');
monthsArray.push('Dec');
console.log(monthsArray);

//Activity d: Remove an element from the beginning and the end of the array (use shift and pop).//

monthsArray.shift();
monthsArray.pop();
console.log(monthsArray);

//Activity e: Reverse the order of the array (use reverse).//

const monthsAlt2 = [...monthsArray];

monthsAlt2.reverse();
console.log(monthsAlt2)

//Activity f: Unite all the elements of the array in a single string where each month is separated by a hyphen - (use join).//

const joinString = monthsArray.join('-')
console.log(joinString);

//Activity g: Create a copy of the array of months that contains from May to November (use slice).//

const copyArray = monthsArray.slice(4, 11);
console.log(copyArray);
