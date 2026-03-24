let n = 20;

for (let numero = 1; numero <= n; numero++) {
  let primo = true;

  if (numero < 2) {
    primo = false;
  } else {
    for (let divisor = 2; divisor < numero; divisor++) {
      if (numero % divisor == 0) {
        primo = false;
        break;
      }
    }
  }

  if (primo) {
    console.log(numero);
  }
}