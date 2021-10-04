/*
1) Criar uma função anônima para exibir no console um array com os nomes de 5 capitais da região Nordeste do Brasil:

a) Transformar todos os elementos em letras maiúsculas.
*/
console.log('1)')

var maisculas = function(array) {
  var txt = array.toString()
  txt = txt.toUpperCase()
  txt = txt.split(',');
  return txt
}

console.log(maisculas(['Pernambuco', 'Paraíba', 'Alagoas', 'Bahia', 'Maranhão']))

/*
2) Criar uma função anônima que retorna os números pares maiores que 100 e menores que 450.

a) Chamar a função e exibir no console o retorno da função. 
*/

console.log('-------------------')
console.log('2)')

var pares = function() {
  for(var i = 101; i < 450; i++){
    if(i % 2 === 0){
      console.log(i)
    }
  }
  return "Fim"
}

pares()

/*
3) Criar uma função anônima que recebe quatro strings:

a) Concatenar as strings e retornar o resultado.
b) Chamar a função e exibir no console o resultado.
*/
console.log('-------------------')
console.log('3)')

var concat = function(txt1,txt2,txt3,txt4) {
  var txt = txt1+txt2+txt3+txt4
  return console.log(txt)
}

concat("Ola ","mundo, ","Estou aprendendo ","Javascript")