let numero1 = 10;
let numero2 = 5;
let operador = "%";

switch(operador){
  case "+":
    console.log(numero1 + numero2)
      break

  case "-":
    console.log(numero1 - numero2)
      break

  case "*":
    console.log(numero1 * numero2)
      break

  case "/":
    console.log(numero1 / numero2)
      break

  case "**":
    console.log(numero1 ** numero2)
      break

  case "%":
    console.log(numero1 % numero2)
      break

  default:
    console.log("Operação inválida")
}