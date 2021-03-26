/* Activity a: Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto
 en mayúscula (utilizar toUpperCase).
 */

const txtOne = 'my first word';
const transformTxt = txtOne.toUpperCase()

console.log(transformTxt);


/* Activity b: Crear una variable de tipo string con al menos 10 caracteres y generar 
un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring). 
*/

const firstWord = 'Hello Karen';
const secondWord = firstWord.substring(0, 6);

console.log(secondWord);

/* Activity c : Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos
 3 caracteres guardando el resultado en una nueva variable (utilizar substring).
*/

const principalWord = 'Mozilla Firefox';
const finalWord = principalWord.substring(12);

console.log(finalWord);

/* Activity d : Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera
letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase,
toLowerCase y el operador +). 
*/

const textOne = 'goOgLe cHrOme';
const finalText = textOne.substring(0, 1).toUpperCase() + textOne.substring(1).toLowerCase();

console.log(finalText);

/* Activity e : Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
 Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
 */

const firstText = 'Java Script Language';
const whiteSpace = firstText.indexOf(' ');

console.log(whiteSpace);

/* Activity f : Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre 
medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras 
en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).
*/

const longWord = 'iNteRnet exPloreR';
const indexSpace = longWord.indexOf(' ');

const wordOne = longWord.substring(0, 1).toUpperCase() + longWord.substring(1, indexSpace + 1).toLowerCase();

const wordTwo = longWord.substring(indexSpace + 1, indexSpace + 2).toUpperCase() + longWord.substring(indexSpace + 2).toLowerCase();

const finWord = (wordOne + wordTwo);

console.log(finWord);




