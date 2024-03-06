/**1.Declara dos variables, num1 y num2, asignándoles valores numéricos diferentes y muestra en consola el resultado de sumarlos. */
let num1=10;
let num2=5;

let suma=num1+num2;
console.log(suma);


/**2Define dos variables de tipo string, simpleString1 y simpleString2, con valores "Hola" y "Mundo" respectivamente. Muestra en consola la longitud total de ambas cadenas.
 * 
 */
let simpleString1="hola";
let simpleString2="mundo";

console.log(simpleString1.length);
console.log(simpleString2.length);

/**Crea dos variables de tipo string usando la función String(): 
 * stringUsingString1 con el valor "JavaScript" y stringUsingString2 
 * con el valor "Ejercicios". */

let stringUsingString1=new String("Javascript");

let stringUsingString2=new String("Ejercicios");

console.log(stringUsingString1);
console.log(stringUsingString2);

/**
 * Utiliza el operador new para crear dos variables de tipo string: 
 * stringUsingNewString1 
 * con el valor "Concatenar" y stringUsingNewString2 con el valor "Strings".
 */

let stringUsingNewString1=new String("Concatenar");

let stringUsingNewString2=new String("Strings");

console.log(stringUsingNewString1);
console.log(stringUsingNewString2);

/**Calcula e imprime en 
 * consola la posición del substring
 *  "la" en la variable simpleString1. */

let subcadena="la";

let position=simpleString1.indexOf(subcadena);
console.log(position)

/**
 * 6.Comprueba si la variable simpleString2 
 * contiene el substring "ndo" e imprime el resultado en consola.
 */

let subcadena2="ndo";

let siesta=simpleString2.includes(subcadena2);
console.log(siesta);

/** Concatena las variables simpleString1 y simpleString2 utilizando el
 * método concat() y muestra el resultado en consola.*/

console.log(simpleString1.concat(' ',simpleString2));

/**Concatena las variables simpleString1 y simpleString2 utilizando 
 * el operador + y muestra el resultado en consola. */

console.log(simpleString1 + ' '+ simpleString2);

/**Utiliza template strings para concatenar las variables simpleString1 y 
 * simpleString2 e imprime el resultado en consola. */

console.log(`${simpleString1} , ${simpleString2}`);

/**Declara una variable stringWithSpaces1 con el valor " TrimStart" y 
 * otra variable stringWithSpaces2 con el valor "TrimEnd ". Elimina los 
 * espacios en blanco al principio y
 *  al final de ambas cadenas e imprime el resultado en consola. */

let stringWithSpaces1=" TrimStart";
let stringWithSpaces2=" TrimSEnd ";

stringWithSpaces1=stringWithSpaces1.trim();
stringWithSpaces2=stringWithSpaces2.trim();
console.log(stringWithSpaces1)
console.log(stringWithSpaces2)

/**
 * Reemplaza la letra 'o' por la letra 'i' en 
 * la variable simpleString1 e imprime el resultado en consola.
 */

let simpleString=simpleString1.replace(/o/g, 'i');
console.log(simpleString)

/**
 * Utiliza el método slice() para obtener los primeros tres caracteres de 
 * la variable simpleString2 e imprime el resultado en consola.
 */

console.log(simpleString2.slice(0,3))

/**
 * Utiliza el método substring() para obtener una subcadena de la variable simpleString2 
 * que comience en el índice 2 e imprime el resultado en consola.
 */
console.log(simpleString2.substring(2,5))

/**
 * Repite la variable simpleString1 dos veces utilizando el método repeat() e imprime el resultado en consola.
 * 
 */

let newsimpleString1=simpleString1.repeat(2)
console.log(newsimpleString1)

/**Divide la cadena "Esto es una oración de ejemplo" en
 *  un array de palabras y muestra el resultado en consola.
 * 
 */

let oracion="esto es una oración de ejemplo";
let oracionarray=oracion.split(' ');

console.log(oracionarray)
