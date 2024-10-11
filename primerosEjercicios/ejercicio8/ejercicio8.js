/* 8.- Escribe un programa que pida un número y diga si es divisible por 2
Ejemplo: 
input: 10
input: 15
Output: El 10 es divisible por 2.
Output: El 15 no es divisible por 2. */

let num1 = parseInt(prompt("Ingrese un número, por favor"));

if (num1 % 2 === 0){
    document.write(`${num1} es divisible por 2`)
}else{
    document.write(`${num1} no es divisible por 2`)
}