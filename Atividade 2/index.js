/*
1)      Criar uma função de seta (arrow function) que recebe um valor numéricos inteiros e positivos como parâmetro:

a) Se o número for múltiplo de 5, retornar "Bora".
b) Se o número for múltiplo de 3, retornar "Dale".
c) Se o número for múltiplo de 5 e 3, retornar "JAVASCRIPT".
d) Chamar a função e exibir no console o resultado.
*/
console.log("1)");

var numero = (num) => {
  if (num % 5 === 0 && num % 3 !== 0) {
    return console.log("Bora");
  } else if (num % 3 === 0 && num % 5 !== 0) {
    return console.log("Dale");
  } else if (num % 5 === 0 && num % 3 === 0) {
    return console.log("JAVASCRIPT");
  }
  return "Fim";
};

numero(10);
numero(9);
numero(15);

/*
2) Criar uma função de seta (arrow function) para receber como parâmetro uma data de aniversário.

a) Escrever o signo referente a data de aniversário de acordo com a tabela acima.
b) Chamar a função e exibir no console o resultado.
*/

console.log("--------------");
console.log("2)");

var signos = (dia, mes) => {
  // Tratando erros
  if (dia > 31 || dia < 1 || mes > 12 || mes < 1 || (mes === 2 && dia > 29)) {
    return console.log("Valor invalido!");
  }
  //  Validando os signos
  if ((dia > 20 && mes === 3) || (dia < 21 && mes === 4)) {
    //  Áries
    return console.log("Seu signo é Áries");
  } else if ((dia > 20 && mes === 4) || (dia < 21 && mes === 5)) {
    //  Touro
    return console.log("Seu signo é Touro");
  } else if ((dia > 20 && mes === 5) || (dia < 21 && mes === 6)) {
    //  Gêmeos
    return console.log("Seu signo é Gêmeos");
  } else if ((dia > 20 && mes === 6) || (dia < 23 && mes === 7)) {
    //  Câncer
    return console.log("Seu signo é Câncer");
  } else if ((dia > 22 && mes === 7) || (dia < 23 && mes === 8)) {
    //  Leão
    return console.log("Seu signo é Leão");
  } else if ((dia > 24 && mes === 8) || (dia < 23 && mes === 9)) {
    //  Virgem
    return console.log("Seu signo é Virgem");
  } else if ((dia > 24 && mes === 9) || (dia < 23 && mes === 10)) {
    //  Libra
    return console.log("Seu signo é Libra");
  } else if ((dia > 24 && mes === 10) || (dia < 22 && mes === 11)) {
    //  Escorpião
    return console.log("Seu signo é Escorpião");
  } else if ((dia > 23 && mes === 11) || (dia < 22 && mes === 12)) {
    //  Sagitário
    return console.log("Seu signo é Sagitário");
  } else if ((dia > 23 && mes === 12) || (dia < 20 && mes === 1)) {
    //  Capricórnio
    return console.log("Seu signo é Capricórnio");
  } else if ((dia > 21 && mes === 1) || (dia < 19 && mes === 2)) {
    //  Aquário
    return console.log("Seu signo é Aquário");
  } else if ((dia > 18 && mes === 2) || (dia < 21 && mes === 3)) {
    //  Peixes
    return console.log("Seu signo é Peixes");
  }
  return console.log("Valor invalido!");
};

// 11 de Janeiro
signos(11, 1);
// 5 de Julho
signos(5, 7);
// 13 de Setembro
signos(13, 9);



