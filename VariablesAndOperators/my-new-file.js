/* Activity a: Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma 
de ambos números en una 3er variable. 
*/

const numOne = 5;
const numTwo = 3;
const sum = numOne + numTwo;

console.log (sum);


//Activity b: Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.//

const textOne = 'hola';
const textTwo = 'mundo';
const textThree = textOne.concat (' ' + textTwo);

console.log (textThree);


/* Another way to solve it:

const textOne = 'hola';
const textTwo = 'mundo';
const textThree = textOne + ' ' + textTwo;
console.log (textThree); 

*/


/*
Activity c: Crear dos variables de tipo String y sumar el largo de cada variable 
(cantidad de letras del string) guardando el resultado la suma una 3er variable (utilizar length).
*/

const wordOne = 'Simon';
const wordTwo = 'says';
const wordThree = wordOne.length + wordTwo.length;

console.log (wordThree);