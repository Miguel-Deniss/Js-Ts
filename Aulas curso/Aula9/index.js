//String, Number, undefined, null, boolean, symbol

const nome = 'Miguel';   // String  
const nome2 = "Miguel";  // String
const nome3 = `Miguel`;  // String

const num1 = 15; // Number
const num2 = 20; // Number

let nomeAluno; // Undefined -> Não aponta pra local nunhum na memória
const sobrenomeAluno = null; // Nulo -> Não aponta pra local nunhum na memória
const aprovado = false; // Boolean = true, false (lógico)

let a = 5;
const b = a;
console.log(a, b); // 5, 5

a = 10;
console.log(a, b); // 10, 5