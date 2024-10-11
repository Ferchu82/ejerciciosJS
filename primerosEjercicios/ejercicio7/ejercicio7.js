/* 7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
Ejemplo: 
input: 15 , 3, 9
Output: El 15 es el número más grande */

let num1 = parseInt(prompt("Ingrese el primer número"));
let num2 = parseInt(prompt("Ingrese el segundo número"));
let num3 = parseInt(prompt("Ingrese el tercer y último número"));

if (num1>num2 && num1>num3){
    document.write(`${num1} es el mayor de los tres números`)
}else{
    if(num2>num1 && num2>num3){
        document.write(`${num2} es el mayor de los tres números`)  
    }else{
        document.write(`${num3} es el mayor de los tres números`)
    }
}