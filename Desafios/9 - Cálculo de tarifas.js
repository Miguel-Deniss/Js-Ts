let idade = 12;
let usuario1 = "estudante";
const valor = 2.50;
let valorFinal;

if (idade <= 6) {
  valorFinal = 0;
  console.log("Tarifa zero");
} else if (idade >= 60) {
  valorFinal = valor - (valor * 30) / 100;
  console.log("30% de desconto: R$ " + valorFinal.toFixed(2));
} else if (usuario1 == "estudante") {
  valorFinal = valor - (valor * 50) / 100;
  console.log("50% de desconto: R$ " + valorFinal.toFixed(2));
} else {
  valorFinal = valor;
  console.log("Tarifa Normal: R$ " + valorFinal.toFixed(2));
}