/** Número a un nuevo número: Declara una variable num con un valor numérico y
luego crea una nueva variable llamada newNum utilizando la función Number()
para convertir num a un nuevo número. Muestra en consola newNum.*/

let numero=10;
let newNum=Number(numero);
console.log(newNum);

/**clara una variable indefinido y no le asignes ningún valor.
 *  Muestra en consola su tipo de dato utilizando el operador typeof(). */

let variableSinDefinir;
console.log(typeof variableSinDefinir);

/**Rangos numéricos - Number.MAX_VALUE: Muestra en consola el valor máximo
que puede ser representado en JavaScript utilizando Number.MAX_VALUE */
console.log(Number.MAX_VALUE);

/**Rangos numéricos - Number.MIN_VALUE: Muestra en consola el valor mínimo
positivo que puede ser representado en JavaScript utilizando
Number.MIN_VALUE. */
console.log(Number.MIN_VALUE);

/**Rangos numéricos - Number.MAX_SAFE_INTEGER: Muestra en consola el valor
máximo seguro que puede ser representado con precisión en JavaScript
utilizando Number.MAX_SAFE_INTEGER. */
console.log(Number.MAX_SAFE_INTEGER);


/**Rangos numéricos - Number.MIN_SAFE_INTEGER: Muestra en consola el valor
mínimo seguro que puede ser representado con precisión en JavaScript
utilizando Number.MIN_SAFE_INTEGER. */
console.log(Number.MIN_SAFE_INTEGER);

/**
 * Comprobación numérica - Number.isFinite(number): Declara una variable num
y utiliza el método Number.isFinite() para comprobar si num es un número finito.
Muestra el resultado en consola.
 */
console.log(Number.isFinite(numero));

/**Comprobación numérica - Number.isInteger(number): Declara una variable
num y utiliza el método Number.isInteger() para comprobar si num es un
número entero. Muestra el resultado en consola. */
console.log(Number.isSafeInteger(numero));