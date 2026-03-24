let n = 17;
let primeiro = 0;
let segundo = 1;

for(let i = 2; i < n; i++){
  let proximo = primeiro + segundo;
  console.log(proximo);

  primeiro = segundo;
  segundo = proximo;
}