//metodos numeros
let numdecimal=1.50;
let Num=2;
let num1="12.3"
//comprueba si un numero es finito
console.log(isFinite(Num))

Number.isInteger(Num)

//determina cuantos numeros despues del punto
console.log(numdecimal.toFixed(1))

//convierte texto a entero
console.log(Number.parseInt(num1))

//convierte texto a float
console.log(Number.parseFloat(num1))


//metodos matematicos

/**La función Math.exp() en JavaScript se utiliza para 
 * calcular el valor de la función exponencial de un número */

console.log(Math.exp(Num))

//DEVUELVE EL NUMERO MAS GRANDE PASADO POR PARAMETROS

console.log(Math.max(numdecimal,Num))

//devuelve el numero menor pasado por parametros

console.log(Math.min(numdecimal,Num))

    //devuelve el numero elevado al numero indicado

    console.log(Math.pow(Num,10))

//devuelve la raiz cuadrada
console.log(Math.sqrt(9))

//devuelve el entero mas cercano
console.log(Math.round(numdecimal))

//devuelve el entero superior mas cercano
console.log(Math.ceil(numdecimal))
//devuelve el entero inferior mas cercano
console.log(Math.floor(numdecimal))


//estructuras de control

//uso basico con if else 

let edad=17;

if(edad>=18){
    console.log("mayor de edad")
}else if(edad>18 && edad<60){
    console.log("no eres tan viejo")
}else if(edad<18){
console.log("eres muy chico")
}else{
    console.log("eres muy viejo")
}

let diaSemana="lunes"
//estructura de control switch
switch(diaSemana){
    case "lunes":
        console.log("es lunes")
        break;
    case "martes":
        console.log("es martes")
        break;
    default:
        console.log("no se que dia es")
}

//estructura for

for (let i=1; i<5; i++){
    console.log(i)
    //en este for imprimimos los nunmeros del 1 al 4
}

for (let i=0, j=10; i<5; i++,j-=2){//en este for urilizamos 2 variables
    //i que va de de cero hasta 4 y j que arranca en 10 y va disminuyendo -2 eb cada iteracion
    console.log(`i:${i}  , j:${j}`)
}

for(let i=1; i<4; i++){
    console.log(`iteracion externa ${i}`)
    //primero hace una externa luego ejecuta todas las internas
    //luego ejecuta la segunda iteracion externa y vuelve a jecutar las internas

    for(let j =1; j<3 ; j++){
        console.log(`iteracion interna${j}`)
    }
}

for(let i=0; i<=10; i++){
    if(i%2==0){
        continue;//con este continue lo que hacemos es saltar la iteracion si el numeor es par
    }
    console.log(i)
}

let colores=["red","green","blue"];

for(let color of colores){//con esta sintaxis creamos una variable que recorre cada elemento del array colores
    console.log(color);
}

let persona={name:"harry", age:"30", job:"developer"}

for(let key in persona){//en esta sintaxis se usa la palabra in para acceder a los elementos de l objeto
    console.log(key +":"+persona[key])
}

//ciclo while

let limite=10;
let conta=1;

while (conta <limite){
    console.log(conta);
    conta++;
}


// sesion nunmero 5


//estructuras de control parte 2

/** forEach es un método disponible para arrays en JavaScript que permite
ejecutar una función proporcionada una vez por cada elemento del array. Es
una forma más moderna y legible de iterar sobre elementos en comparación
con el bucle for tradicional. La función que se pasa como argumento se ejecuta
para cada elemento del array.*/


/**
 * Array of numbers.
 * @type {number[]}
 */
let numeros=[1,2,3,4,5];
numeros.forEach(function(numero){//la palabra numero es cualquier palbra
    console.log(numero)
})

let cuadrados=[];

numeros.forEach(function(numero){
    cuadrados.push(numero*numero)//con el metodo push agregamos al array vacio de cuadrados y ejecutamos la accion sobre los elementos del array de numeros
});
console.log(cuadrados)

//tambien podemos pasarle varios parametros a la funcion como el index y el elemento del index

let frutas=["manzana","banano","sandia","coco"]

frutas.forEach(function(fruta,index){
    console.log(`el index de cada fruta es:${index}:${fruta}`)
})

//uso de forEach EN OBJETOS

Object.keys(persona).forEach(function(key){// Usamos la palabra object para referirnos al objeto que estamos iterando
    console.log(`${key}:${persona[key]}`)
})

//uso de forEach con un array de onjetos

let estudiantes=[
    {name:'harry', grade:30},
    {name:'kelly', grade:33},
    {name:'maxi', grade:1}];

estudiantes.forEach(function(estudiante){
    console.log(`${estudiante.name} : ${estudiante.grade}`)
})

/**Map
map es un método que se encuentra disponible en los arrays de
JavaScript. Su función principal es iterar sobre cada elemento de un
array y aplicar una función proporcionada a cada elemento, creando
así un nuevo array con los resultados de aplicar la función a cada
elemento original. */

const duplicados=numeros.map(function(numero){
    return numero*2;
})
console.log(duplicados)

let palabra=["hola","mundo"]
let mayus=palabra.map(function(mayus){
    return mayus.toUpperCase();//lo uso para convertir todo a mayusculas
})
console.log(mayus)

//uso de de map con filter
//filter lo usamos para filtar y verificar una condicion, luego crea un nuevo array y lo agrega y luego uso el .map para iterar ese nuevo array 
let CuadradosDePares=numeros.filter(numero=>numero%2 ===0).map(numero=>numero*numero);
console.log(CuadradosDePares)


//creamos unnuevo array llamado sumanumero y a numeros lo iteramos con .map y realizamos la operacion, luego con reduce sumamos el resultado de la operacion 
// en este caso seria 1+4=5 luego 5+9 y asi hasta llegar al resultado final
let sumaNumeros=numeros.map(numero=>numero*numero).reduce((acumulador,valorActual)=>acumulador+valorActual,0);
console.log(sumaNumeros)


