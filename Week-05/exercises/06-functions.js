/* a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, 
mostrando el valor de dicha variable en la consola del navegador.*/
function suma (a, b) {
return a + b;
}
resultado = suma(7, 11);
console.log(resultado);
/* b. Copiar la función suma anterior y agregarle una validación para controlar si alguno de los parámetros no es un número; 
de no ser un número, mostrar un alert aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.*/
function suma(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        alert('Uno de los parámetros no es un número');
        return NaN;
    }else {
        return a + b;
    }
}
// c. Crear una función “validateInteger” que reciba un número como parámetro y devuelva verdadero si es un número entero.
function validateInteger(number) {
    return Number.isInteger(number);
}
console.log(validateInteger(7));
console.log(validateInteger('loca'));
/* d. Copiar y renombrar la función suma del ejercicio 6b) y agregarle una llamada a la función del ejercicio 6c. y que valide que los números sean enteros. 
En caso que haya decimales mostrar un alert con el error y retornar el número convertido a entero (redondeado).*/
function newNumbers(a, b){
    if (typeof a != 'number' || typeof b != 'number') {
        alert("Uno de los parámetros no es un número");
        return NaN;
    }
    if (validateInteger(a) != true) {
        alert("El parámetro A no es un entero");
        a = Math.round(a);
        console.log("Convertir A a ", a);
    }
    if (validateInteger(b) != true) {
        alert("El parámetro B no es un entero");
        b = Math.round(b);
        console.log("Convertir B a ", b);
    }
    return a + b;
}

var intNumbers = newNumbers(3.7, 5.2);

console.log(intNumbers);
/* e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de una nueva función probando que todo siga funcionando 
igual que en el apartado anterior.*/
function verifyFunction(a, b){
    return newNumbers(a, b);
}

var doesItWork = verifyFunction(3.7, 5.2);

console.log(doesItWork);