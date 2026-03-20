const valorBasico = 2.5;

function valorIdade() {
  let idade = Number(document.getElementById("idade").value);
  let tipoUsuario = document.getElementById("tipoUsuario").value;
  let resultado = document.getElementById("resultado");

  if (idade < 6) {
    resultado.textContent = "Você deve pagar: R$ 0,00";
  }
  else if (idade >= 60) {
    resultado.textContent = "Você deve pagar: R$ " + (valorBasico - (valorBasico * 30 / 100)).toFixed(2);
  }
  else if (tipoUsuario === "estudante") {
    resultado.textContent = "Você deve pagar: R$ " + (valorBasico - (valorBasico * 50 / 100)).toFixed(2);
  }
  else {
    resultado.textContent = "Você deve pagar: R$ " + valorBasico.toFixed(2);
  }
}