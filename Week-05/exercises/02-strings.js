// a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).
var myWord = 'diccionario';
console.log(myWord.toUpperCase());
/* b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres 
guardando el resultado en una nueva variable (utilizar substring).*/
var myWord2 = 'dinosaurio';
var newMyWord2 = myWord2.substring(0,5);
console.log(newMyWord2);
/* c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres 
guardando el resultado en una nueva variable (utilizar substring).*/
var myWord3 = 'administración';
var newMyWord3 = myWord3.substring(myWord3.length - 3);
console.log(newMyWord3);
/* d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. 
Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).*/
var myWord4 = 'reFRIgerADor';
var newMyWord4 = myWord4.substring(0, 1).toUpperCase() + myWord4.substring(1).toLowerCase();
console.log(newMyWord4);
/* e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco 
y guardarla en una variable (utilizar indexOf).*/
var myWord5 = 'labial rojo';
var espacioBlanco = myWord5.indexOf(' ');
console.log(espacioBlanco);
/* f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). 
Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula 
y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).*/
var myWord6 = 'locutorio céntrico';
var espacioBlanco2 = myWord6.indexOf(" ");
var newMyWord6 = myWord6.substring(0, 1).toUpperCase() + myWord6.substring(1, espacioBlanco2).toLowerCase() + " " + myWord6.substring(espacioBlanco2 + 1, espacioBlanco2 + 2).toUpperCase() + myWord6.substring(espacioBlanco2 + 2).toLowerCase();
console.log(newMyWord6);