/* Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
Ejemplo: 
input: 15 , 3
Output: El 15 es el número más grande
*/

let num1 = parseInt(prompt("Por favor, ingrese un número"));
let num2 = parseInt(prompt("Ingrese otro número"));

if(num1>num2){
    document.write(`${num1} es el número más grande`)
}else{
    document.write(`${num2} es el número más grande`)
};