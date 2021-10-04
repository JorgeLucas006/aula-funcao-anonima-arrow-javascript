/*
1) Criar uma função anônima para exibir todos os elementos do array abaixo que possuam idade entre 28 a 30:

a) Chamar a função e exibir o resultado no console.
*/
console.log("1)")

var anonima = function () {
  var aprovados = [
    { candidato: "Renata Soares", nota: 7.8, idade: 29 },
    { candidato: "Marcos Teixeira", nota: 7.8, idade: 26 },
    { candidato: "Priscila Gomes", nota: 7.8, idade: 30 },
    { candidato: "João Oliveira", nota: 7.8, idade: 27 },
    { candidato: "Adriana Telles", nota: 7.8, idade: 28 },
  ];

  var filter = aprovados.filter((aprovado) => {
    return aprovado.idade > 27 && aprovado.idade < 31;
  });
  return console.log(filter);
};

anonima();

/*
2) Criar um função anônima que recebe uma string como parâmetro:

a) Repetir o valor do parâmetro 37 vezes.
b) Retornar o Resultado.
c) Chamar a função e exibir o resultado no console.
*/
console.log("------------------------")
console.log("2)")

var anonymous = function (str) {
  for (var i = 1; i <= 37; i++){
    console.log(i+" - "+str)
  }
  return console.log("Fim!")
}

anonymous("Boa noite!")