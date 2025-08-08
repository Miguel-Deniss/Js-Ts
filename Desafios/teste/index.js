const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite um número: ", (num1) => {
  rl.question("Digite outro número: ", (num2) => {
    num1 = Number(num1);
    num2 = Number(num2);
    console.log(`A soma é: ${num1 + num2}`);
    console.log(`A subtração é: ${num1 - num2}`);
    console.log(`A multiplicação é: ${num1 * num2}`);
    console.log(`A divisão é: ${num1 / num2}`);
    rl.close();
  });
});