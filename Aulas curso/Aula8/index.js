const nome = 'Miguel'
const sobrenome = 'Denisovas'
const idade = 16
const peso = 56
const alturaEmCm = 1.74
const ano = 2025

let imc; // peso / (altura * altura)
let anoDeNascimento;
imc = ( peso / (alturaEmCm * alturaEmCm));
anoDeNascimento = 2025 - idade;

console.log(imc);
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} Kg, tem uma alura de ${alturaEmCm} e seu imc é ${imc}`);
console.log(`${nome} nasceu em ${anoDeNascimento}`);
