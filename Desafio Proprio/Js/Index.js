// Passo 1 e 2
let nomeUsuario = prompt("Qual é o seu nome?");
let idadeUsuario = parseInt(prompt("Qual é a sua idade?"));

// Passo 3 e 4
let nomeAmigo = prompt("Qual é o nome do seu amigo?");
let idadeAmigo = parseInt(prompt("Qual é a idade do seu amigo?"));

// Passo 5
let querComparar = confirm("Você quer ver quem é mais velho?");

// Passo 6
if (querComparar) {
  if (idadeUsuario > idadeAmigo) {
    alert(nomeUsuario + " é mais velho que " + nomeAmigo + ".");
  } else if (idadeUsuario < idadeAmigo) {
    alert(nomeAmigo + " é mais velho que " + nomeUsuario + ".");
  } else {
    alert(nomeUsuario + " e " + nomeAmigo + " têm a mesma idade.");
  }
}

// Passo 7
let somaIdades = idadeUsuario + idadeAmigo;
alert("A soma das idades é: " + somaIdades);
