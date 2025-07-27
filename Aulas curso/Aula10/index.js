/*
Operadores Aritméticos
()
+ Adição / Concatenação (* / -) -> * e / são iniciados primeiros em contas com mais de um operador
** Potenciação 
% Resto da divisão -> iniciado primeiro em contas com mais de um operador

Incremento = ++
Decremento = --
*/

// Variaveis
let num1;
let num2;
let num3;

// Exemplos simples

// Adição
num1 = 10;
num2 = 2;
console.log("Adição:", num1 + num2);

// Subtração
num1 = 14;
num2 = 4;
console.log("Subtração:", num1 - num2);

// Multiplicação
num1 = 5;
num2 = 5;
console.log("Multiplicação:", num1 * num2);

// Divisão
num1 = 100;
num2 = 10;
console.log("Divisão:", num1 / num2);

// Potenciação 
num1 = 2;
num2 = 5;
console.log("Potenciação:", num1 ** num2);

//Resto da divisão

num1 = 10;
num2 = 3;
console.log("Resto da divisão:", num1 % num2);

//Teste com mais de um operador
console.log("Contas com mais de um operador: ");

num1 = 5;
num2 = 4;
num3 = 10;
console.log((num1 + num2) * num3);
console.log(num1 * num2 / num3);

let contador = 2;
contador++; // Aumenta 1
console.log(contador++ * 10) // Contador + 1 * 10 = 30

contador= 3;
contador--; // Diminui 1
console.log(contador-- * 10) // Contador - 1 * 10 = 20

