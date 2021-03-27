/*Activity a: Create a random number between 0 and 1 using the Math.random () function, if the value is greater than or equal 
to 0.5 show an alert with the message “Greater than 0.5” and if not an alert with the message “Lower than 0.5 "
*/
const num = Math.random();
console.log(num);

if (num >= 0.5) {
    alert('Greater than 0.5');
}
else {
    alert('Lower than 0.5');
}


/*Activity b: Create an "Age" variable that contains an integer between 0 and 100 and displays the following alert messages:
"Baby" if the age is less than 2 years
"Child" if the age is between 2 and 12 years
“Adolescent” if the age is between 13 and 19 years old
"Young" if the age is between 20 and 30 years
"Adult" between 31 and 60 years old
“Elderly” between 61 and 75 years old
"Old man" if older than 75 years.
*/

const age = 60;

if (age > 0 && age < 2) {
    alert('Baby');
} else if (age >= 2 && age <= 12) {
    alert('Child');
} else if (age >= 13 && age <= 19) {
    alert('Adolescent');
} else if (age >= 20 && age <= 30) {
    alert('Young');
} else if (age >= 31 && age <= 60) {
    alert('Adult');
} else if (age >= 61 && age <= 75) {
    alert('Elderly');
} else if (age >= 75 && age <= 100) {
    alert ('Old man');
} else {
    alert('The entered value is invalid');
}    


