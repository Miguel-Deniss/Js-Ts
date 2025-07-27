function getAgeGroup(age) {
  if (age < 0) {
      console.log('idade inválida');
      return;
  }
  
  if (age >= 0 && age <= 12) {
      return 'criança';
  }
  else if (age > 12 && age <= 17) {
      return 'adolescente';
  }
  else if (age > 17 && age <= 59) {
      return 'adulta';
  }
  else {
      return 'idosa';
  }
}

const readline = require('readline'); 

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite uma idade: ', (age) => {
  const ageGroup = getAgeGroup(parseInt(age));

  if(ageGroup){
      console.log(`Uma pessoa com ${age} anos é classificada como ${ageGroup}.`);
  }
  rl.close();
})