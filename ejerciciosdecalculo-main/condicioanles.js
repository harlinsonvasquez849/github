/*//punto 1 y 2
let num=Number.parseInt(prompt ("ingresa un numero para saber si es positivo"));

if (num>0){
    console.log("el numero es positivo")
}
else if(num ==0){
    console.log("el nuemro es neutro");
}
else{
    console.log("el nuero es negativo");
}

//punto 3 y 4
let numpar=Number.parseInt(prompt("ingresa un numero para comprobar si es par o impar"));

if(numpar %2 ==0){
    console.log("el numero es par ")
}
else{
    console.log("el numero es impar");

}
//5. Determina si un número es múltiplo de 5

let numMUltiplo=Number.parseInt(prompt("ingresa un numero para saber si es multiplo de 5"));
if (numMUltiplo % 5==0){
    console.log("el numero si es multiplo");
}
else{
    console.log("el numero no es multilplo");
}

//6. Verifica si un número es divisible entre 3.
let numDivisible=Number.parseInt(prompt("ingresa un numero para saber si es divisible de 3"));
if (numMUltiplo % 3==0){
    console.log("el numero si es divisible de 3");
}
else{
    console.log("el numero no divisible");
}

let numMayor=Number.parseInt(prompt("ingresa un numero"));
if(numMayor>100){
    console.log("el numero es mayor a 100");    
}
else{
    console.log("el numero es menor a 100");
}

//8. Verifica si un número es menor que -50.

let numMenor=Number.parseInt(prompt("ingrese un numero "));
if (numMenor< -50){
    console.log("el numero es menor a -50");
}
else{
    console.log("el numero no es menor a -50");
}

//9. Comprueba si un número está en el rango de 20 a 50.
let rangoNum=Number.parseInt(prompt("ingrese un numero para comprobar su rango"));
if(rangoNum>19 && rangoNum <51){
    console.log("el numero esta en el rango permitido 20 a 50");
}
else{
    console.log("numero fuera de rango");
}

//10. Determina si un número es igual a 0.
let numCero=Number.parseInt(prompt("ingrese un numero"));
if(numCero==0){
    console.log("el numero ingresado es cero");

}
else{
    console.log("numero diferente a cero")
}

//11. Verifica si un número es mayor que -10 y menor que 10.
let mayorMenor=Number.parseInt(prompt("ingresa un numero para comprobar si es mayor -10 y menor que 10"));
if (mayorMenor>-10 && mayorMenor<10){
    console.log("numero dentro del rango")
}
else{
    console.log("numero fuera de rango");
}
//12. Determina si un número es un año bisiesto.

let bisiesto=Number.parseInt(prompt("ingrese el año que quiere comprobar si es bisiesto"));
if (bisiesto%4 ==0 || (bisiesto %4==0 && bisiesto%100 !==0) || (bisiesto%100==0 && bisiesto%400==0)){
    console.log("año bisiesto")
}
else{
    console.log("año no bisisesto")
}

//13. Verifica si una persona es mayor de edad (mayor o igual a 18 años)
let edad=Number.parseInt(prompt("ingresa tu edad"));
if(edad>=18){
    console.log("mayor de edad")
}
else{
    console.log("eres menor de edad")
}
//15. Verifica si un número es un cuadrado perfecto.
let num=Number.parseInt(prompt("ingresa un numero para comprobar si es un cuadrado perfecto"))
let raiz=Math.sqrt(num);
if(raiz%1 ==0){
    console.log("el num es un cuadrado perfecto")
}
else{
    console.log("el num no es un cuadrado perfecto")
};

let numFibonacci=Number.parseInt(prompt("ingrese un numero"))


let a=Math.sqrt(5*numFibonacci*numFibonacci+4);
let b=Math.sqrt(5*numFibonacci*numFibonacci-4);

if(a%1==0 || b%1==0){
    console.log(`${numFibonacci} es un numero fibonacci`);
}
else{
    console.log("el numero ingresado no es fibonacci");
}
//Verifica si un número es una potencia de 2.

let numPotencia=Number.parseInt(prompt("ingresa un numero para saber si es potencia de 2"));

if((numPotencia>0) && ((numPotencia & (numPotencia-1))==0)){
    console.log("el numero ingresado es potencia de 2");
}else{
    console.log("no es potencia")
}
//18. Determina si un número es un palíndromo.
 let numPalin=prompt("ingrese un numero para saber si es palindromo");
 let numstring=numPalin.toString();
 let numReverse=numstring.split('').reverse().join('');

 if(numstring===numReverse){
    console.log(`el num ${numPalin} es palindromo ${numReverse}`)
 }
 else{
    console.log("no es palindromo")
 }

//19. Verifica si una cadena de texto contiene la palabra "JavaScript".
let palabra=prompt("ingresa una frase")
palabra=palabra.toLocaleLowerCase();

if (palabra.includes("javascript")){
    console.log(" la frase contiene la palabra javascript")     
}
else{
    console.log(" la frase no incluye la palabra javascript")
}
//20. Determina si una cadena tiene más de 10 caracteres.
let longitud=prompt("introduce una cadena de texto para comprobar su longitud")
let numlongitud=longitud.length;
numlongitud=parseInt(numlongitud);

if(numlongitud>10){
    console.log("la cadena tiene mas de 10 caracteres incluyendo espacios")
}
else{
    console.log("la cadena de texto tiene menos de 10 caracteres")
}
//21. Verifica si una cadena de texto está en minúsculas.
let minus=prompt("ingresa un texto")

minus1=minus.toLocaleLowerCase();
if (minus1===minus){
    console.log("el texto que ingresaste esta en minusculas")
}
else{
    console.log("el texto que ingresaste no estan en minusculas completamente")
}
//22. Determina si una cadena de texto contiene al menos un número.


function tieneNumero(textoAnalizar){
    for(let i=0; i <  textoAnalizar.length; i++){
        if(!isNaN(parseInt(textoAnalizar[i]))){
            return true;
        }
    }
    return false;
}

let textoAnalizar=(prompt("introduce el texto analizar"))
let tieneNumTexto=tieneNumero(textoAnalizar);

if(tieneNumTexto){
    console.log("el texto tiene al menos un numero")
}
else{
    console.log("el texto no tiene nmumeros")
}
//23. Verifica si una cadena de texto termina con un punto (.)

let texto=prompt("escribe un texto");
let ultimoCaracter=texto.trimEnd();
ultimoCaracter=ultimoCaracter.charAt(ultimoCaracter.length -1);

if(ultimoCaracter=="."){
    console.log("el texto ingresado termina con un punto")
}
else{
    console.log("el texto no termina con punto")
}

//24. Determina si una cadena de texto es un pangrama (contiene todas
//las letras del alfabeto)

function esPangrama(texto){
    let letras= new Set();//ESTRUCTURA DE DATOS PARA ALMACENAR DATOS UNICOS
    let alfabeto = 'abcdefghijklmnopqrstuvwxyz';

    for(let i of texto.toLowerCase()){//CONVERSION A MINUSCULAS
        if (alfabeto.includes(i)){//INCLUYES SIRVE PARA COMPROBAR SI UN VALOR ESTA INCLUIDO
            letras.add(i);
        }
    }
    return letras.size===alfabeto.length;
}
let texto=prompt("introduce el texto analizar")
let resul=esPangrama(texto);

if(resul){
    console.log("el texto ingresado es un pangrama")
}
else{
    console.log("el texto ingresado no es pangrama")
}
//25. Verifica si un día de la semana es laborable (de lunes a viernes).
//26. Determina si un día es fin de semana (sábado o domingo)
let diaSemana=prompt("introduce el dia de la semana")

diaSemana=diaSemana.toLocaleLowerCase();

/*if(diaSemana==="sabado" || diaSemana==="domingo"){
    console.log(" el dia que ingresaste no es un dia laboral y ademas es fin de semana")
}
else{
    console.log("el dia que ingresaste es laboral")
}
switch(diaSemana){
    case "lunes":
        console.log("dia laboral")
        break;
    case "martes":
        console.log("dia laboral")
        break;
    case "miercoles":
        console.log("dia laboral")
        break;
    case "jueves":
        console.log("dia laboral")
        break;
    case "viernes":
        console.log("dia laboral")
        break;
    case "sabado":
        console.log("dia no laboral y ademas es fin de semana")
        break;
     case "domingo":
        console.log("dia no laboral y ademas es fin de semana")
        break;
    default:
        console.log("introduce un dia valido");
        break;
}

let numValido=Number.parseInt(prompt("introduce el numero del mes que deseas"))

if(isNaN(numValido)){
    numValido=Number.parseInt(prompt("introduzca un numero valido"))
    if(numValido>=1 && numValido<=12){
        console.log("el numero que ingresaste es valido")}
}
else if(numValido>=1 && numValido<=12){
    console.log("el numero que ingresaste es valido")
}
else{
    console.log("el numero ingresado no esta en el rango permitido 1-12")
}

//28. Determina si una hora está en el rango de 9 AM a 6 PM.
let numValido=Number.parseInt(prompt("introduce la hora que deseas comprobar en formato de 24 horas 00:00 horas hasta 24:00"))

if(isNaN(numValido)){
    numValido=Number.parseInt(prompt("introduzca una hora valida"))
    if(numValido>=9 && numValido<=18){
        console.log("el numero que ingresaste es valido")}
}
else if(numValido>=9 && numValido<=18){
    console.log("la hora que ingresaste esta en el rango de 9 AM a 6PM")
}
else{
    console.log("HORA FUERA DE RANGO")
}

let edad=Number.parseInt(prompt("introduzca la edad "))

if (edad<18){
    console.log("la persona que corresponde a esa edad es menor de edad")
}
else if(edad>65){
    console.log("la persona es mayor de 65 años")

}
else{
    console.log("la edad de la persona ingresada esta entre 18 años y 65ños")
}
//30. Determina si un triángulo es equilátero (tres lados iguales).
let ladoUno=Number.parseInt(prompt("introduzca la medida del lado uno del triangulo"))
let ladoDos=Number.parseInt(prompt("introduzca la medida del lado dos del triangulo"))
let ladoTres=Number.parseInt(prompt("introduzca la medida del lado tres del triangulo"))

if (ladoUno===ladoDos && ladoUno===ladoTres){
    console.log("triangulo equilatero")
}
else{
    console.log("el triangulo no es equilatero")
}

//31. Verifica si un triángulo es isósceles (dos lados iguales).
let ladoUno=Number.parseInt(prompt("introduzca la medida del lado uno del triangulo"))
let ladoDos=Number.parseInt(prompt("introduzca la medida del lado dos del triangulo"))
let ladoTres=Number.parseInt(prompt("introduzca la medida del lado tres del triangulo"))

if (ladoUno===ladoDos || ladoUno===ladoTres || ladoDos===ladoTres){
    console.log("triangulo isosceles")
}
else{
    console.log("el triangulo no es isosceles")
}
//32. Determina si un triángulo es escaleno (todos los lados diferentes).
let ladoUno=Number.parseInt(prompt("introduzca la medida del lado uno del triangulo"))
let ladoDos=Number.parseInt(prompt("introduzca la medida del lado dos del triangulo"))
let ladoTres=Number.parseInt(prompt("introduzca la medida del lado tres del triangulo"))

if (ladoUno!==ladoDos && ladoUno!==ladoTres && ladoDos!==ladoTres){
    console.log("triangulo escaleno")
}
else{
    console.log("el triangulo no es escaleno")
}
let numMayor=Number.parseInt(prompt("introduce un numero"))
let numDoble=Number.parseInt(prompt("introduce un numero a multiplicar x 2"))

numDoble=numDoble*2;
if(numMayor>numDoble){
    console.log("el primer numero ingresado es mayor que el numero multiplicado x2")
}
else{
    console.log("numero menor al numero multiplicado x 2")
}
let num1=Number.parseInt(prompt("ingresa el primer numero"))
let num2=Number.parseInt(prompt("ingresa el segundo numero"))

let suma=num1+num2;
if(suma>100){
    console.log("la suma de los 2 numeros es mayor a 100")
}
else{
    console.log("la suma de los dos numeros es inferior a 100")
}

let num1=Number.parseInt(prompt("ingresa el primer numero"))
let num2=Number.parseInt(prompt("ingresa el segundo numero"))

let resta=num1-num2;
if(resta<50){
    console.log("la resta de los 2 numeros es menor a 50")
}
else{
    console.log("la resta de los dos numeros es mayor a 50")
}

//36. Determina si un número es el doble del otro número.
let num1=Number.parseInt(prompt("ingresa el primer numero"))
let num2=Number.parseInt(prompt("ingresa el segundo numero"))

if(num1===num2*2){
    console.log("el numero uno es el doble del numero 2")

}
else{
    console.log("el numeor no es el doble del segundo numero")
}

37. Verifica si el doble de un número es igual al triple de otro número.

let num1=Number.parseInt(prompt("ingresa el primer numero"))
let num2=Number.parseInt(prompt("ingresa el segundo numero"))

if(num1===num2*3){
    console.log("el numero uno es el triple del numero 2")

}
else{
    console.log("el numeor no es el triple del segundo numero")
}

//38. Determina si la suma de dos números es igual a 50.
let num1=Number.parseInt(prompt("ingresa el primer numero"))
let num2=Number.parseInt(prompt("ingresa el segundo numero"))

let suma=num1+num2;
if(suma==50){
    console.log("la suma de los 2 numeros es igual a 50")
}
else{
    console.log("la suma de los dos numeros es diferente a 50")
}

//39. Verifica si el producto de dos números es mayor que 500.
let num1=Number.parseInt(prompt("ingresa el primer numero"))
let num2=Number.parseInt(prompt("ingresa el segundo numero"))

let producto=num1*num2;
if(producto>500){
    console.log(`el producto de los 2 numeros es mayor a  ${producto}`)
}
else{
    console.log("el producto de los 2 numeros es diferente a 500")
}*/
//40. Determina si la división de dos números es menor que 10.

let num1=Number.parseInt(prompt("ingresa el primer numero"))
let num2=Number.parseInt(prompt("ingresa el segundo numero"))

let divi=num1/num2;
if(divi<10){
    console.log("el resultado de la divi es menor a 10")
}
else{
    console.log("el resultado de la division es mayor a 10")
}

