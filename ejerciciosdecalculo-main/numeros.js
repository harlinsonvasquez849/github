/** Número a un nuevo número: Declara una variable num con un valor numérico y
luego crea una nueva variable llamada newNum utilizando la función Number()
para convertir num a un nuevo número. Muestra en consola newNum.*/

let numero=1.2345;
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

/**9.Representación numérica - .toExponential(digits): Declara una variable num y
utiliza el método .toExponential() para mostrar su representación en notación
exponencial con un número específico de dígitos decimales. Muestra el resultado
en consola */

//let numexpo=numero.toExponential(2)

console.log(numero.toExponential(2));

/**10.Representación numérica - .toFixed(digits): Declara una variable num y utiliza
el método .toFixed() para mostrar su representación con un número específico
de dígitos decimales. Muestra el resultado en consola */

console.log(numero.toFixed(2));

/**11.Representación numérica - .toPrecision(size): Declara una variable num y utiliza
el método .toPrecision() para mostrar su representación con una longitud total
específica. Muestra el resultado en consola */

console.log(numero.toPrecision(4));

/**12.Convertir - Number.parseInt(text): Declara una variable text con un valor
numérico en formato de cadena y utiliza Number.parseInt() para convertirlo a un
número entero. Muestra el resultado en consola */

    let numstring="10";
    let numNumero=Number.parseInt(numstring);
    console.log(numNumero);

// Ejercicio 13

 let text1= "22.2";

console.log(Number.parseInt(text1,3));

// Ejercicio 14

 let text2= "412.45";

 console.log(Number.parseFloat(text2));

// Ejercicio 15

 let text3 = "412.01";

 console.log(Number.parseFloat(text3,2));

// Ejercicio 16

let num = 32;

console.log(num.toString());

// Ejercicio 17

let num1 = -48;

console.log(Math.abs(num1));

// Ejercicio 18

let num2 = -89;

console.log(Math.sign(num2));

// Ejercicio 19

let num3 = 9;

console.log(Math.exp(num3));

// Ejercicio 20

let num4 = 4;

console.log(Math.expm1(num4));

// Ejercicio 21

console.log(Math.max(3,5,9));

// Ejercicio 22

console.log(Math.min(3,5,9));

// Ejercicio 23

let num5 = 9;

console.log(Math.pow(num5,2));

// Ejercicio 24

let num6 = 81;

console.log(Math.sqrt(num6));

// Ejercicio 25

let num7 = 40;

console.log(Math.cbrt(num7));
// Ejercicio 28

// console.log(Math.random()*100);

// Ejercicio 29

// let pi = 3.141624;

// console.log(Math.round(pi));

// Ejercicio 30

// let num = 14.6;

// console.log(Math.ceil(num));

// Ejercicio 31

// let num = 13.4;

// console.log(Math.floor(num));

// Ejercicio 32

// let num = 6.46453;

// console.log(Math.fround(num));

// Ejercicio 33

// let num = 47.32;

// console.log(Math.trunc(num));

// Ejercicio 34

// let sin = 8;

// console.log(Math.sin(sin));

// Ejercicio 35

// let cos = 6;

// console.log(Math.cos(cos));

// Ejercicio 36

// let tan = 10;

// console.log(Math.tan(tan));

// Ejercicio 37

// let a = 6;
// let b = 8;

// console.log(Math.hypot(a,b));

// Ejercicio 38

// let num = 3.1416;
// let text = "45";

// console.log(Number.parseInt(num.toFixed(2))+ Number.parseInt(text))

// Ejercicio 39

// let num1 = "74";
// let num2 = "65.9464";

// console.log((Number.parseFloat(num1) + Number.parseFloat(num2)).toPrecision());

// Ejercicio 40

// let num = Math.random();

// console.log(Math.abs(num));

// Ejercicio 41

// console.log(Math.random().toString());

// Ejercicio 42

// console.log(Math.exp(Math.random()));

// Ejercicio 43

// let num = 23;

// console.log(Math.sqrt(num));
// console.log(Math.clz32(num));

// Ejercicio 44

// let x = 23;
// let y = x;

// console.log(y);

// Ejercicio 45

// let a = 2;
// let b = a+=3;

// console.log(b);

// Ejercicio 46

// let a = 2;
// let b = 3;

// console.log(a+=b);

// Ejercicio 47

// let a = 2;
// let b = 3;

// console.log(a-=b);

// Ejercicio 48

// let a = 2;
// let b = 3;

// console.log(a*=b);

// Ejercicio 49

// let a = 2;
// let b = 3;

// console.log(a/=b);

// Ejercicio 50

// let a = 2;
// let b = 3;

// console.log(a%=b);

// Ejercicio 51

// let a = 2;
// let b = 3;

// console.log(a**=b);

// Ejercicio 52

// let num = 1;
// num++

// console.log(num);

// Ejercicio 53

// let num = 10;
// num--

// console.log(num);

// Ejercicio 54

// let num = 6;
// let result = ++num;

// console.log(result);

// Ejercicio 55

// let num = 6;
// let result = --num;

// console.log(result);

// Ejercicio 56

// let num = 6;
// let result = -num;

// console.log(result);




// console.log(Math.clz32(num));

// Ejercicio 28

// console.log(Math.random()*100);

// Ejercicio 29

// let pi = 3.141624;

// console.log(Math.round(pi));

// Ejercicio 30

// let num = 14.6;

// console.log(Math.ceil(num));

// Ejercicio 31

// let num = 13.4;

// console.log(Math.floor(num));

// Ejercicio 32

// let num = 6.46453;

// console.log(Math.fround(num));

// Ejercicio 33

// let num = 47.32;

// console.log(Math.trunc(num));

// Ejercicio 34

// let sin = 8;

// console.log(Math.sin(sin));

// Ejercicio 35

// let cos = 6;

// console.log(Math.cos(cos));

// Ejercicio 36

// let tan = 10;

// console.log(Math.tan(tan));

// Ejercicio 37

// let a = 6;
// let b = 8;

// console.log(Math.hypot(a,b));

// Ejercicio 38

// let num = 3.1416;
// let text = "45";

// console.log(Number.parseInt(num.toFixed(2))+ Number.parseInt(text))

// Ejercicio 39

// let num1 = "74";
// let num2 = "65.9464";

// console.log((Number.parseFloat(num1) + Number.parseFloat(num2)).toPrecision());

// Ejercicio 40

// let num = Math.random();

// console.log(Math.abs(num));

// Ejercicio 41

// console.log(Math.random().toString());

// Ejercicio 42

// console.log(Math.exp(Math.random()));

// Ejercicio 43

// let num = 23;

// console.log(Math.sqrt(num));
// console.log(Math.clz32(num));

// Ejercicio 44

// let x = 23;
// let y = x;

// console.log(y);

// Ejercicio 45

// let a = 2;
// let b = a+=3;

// console.log(b);

// Ejercicio 46

// let a = 2;
// let b = 3;

// console.log(a+=b);

// Ejercicio 47

// let a = 2;
// let b = 3;

// console.log(a-=b);

// Ejercicio 48

// let a = 2;
// let b = 3;

// console.log(a*=b);

// Ejercicio 49

// let a = 2;
// let b = 3;

// console.log(a/=b);

// Ejercicio 50

// let a = 2;
// let b = 3;

// console.log(a%=b);

// Ejercicio 51

// let a = 2;
// let b = 3;

// console.log(a**=b);

// Ejercicio 52

// let num = 1;
// num++

// console.log(num);

// Ejercicio 53

// let num = 10;
// num--

// console.log(num);

// Ejercicio 54

// let num = 6;
// let result = ++num;

// console.log(result);

// Ejercicio 55

// let num = 6;
// let result = --num;

// console.log(result);

// Ejercicio 56

// let num = 6;
// let result = -num;

// console.log(result);

