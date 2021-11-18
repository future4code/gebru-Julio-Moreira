//Exercício 1
// a.  undefined
// index.js:5 b.  null
// index.js:8 c.  11
// index.js:11 d.  3
// index.js:14 e.  Array(11)0: 31: 192: 53: 64: 75: 86: 97: 108: 119: 1210: 13length: 11[[Prototype]]: Array(0)
// index.js:17 f.  9

// Exercício 2
// "Subi no ônibus em mirrocos"

//Exercício de escrita

// const emailDoUsuario = prompt("Digite o email do Usuario")
// const nomeDoUsuario = prompt("Digite o nome do Usuario")

// console.log(` O e-mail ${emailDoUsuario} foi cadastrado com sucesso.
// Seja bem-vinda(o), ${nomeDoUsuario}.`);

//exercício 2
// const comidas = ['maionese', 'frango', 'salada', 'quiabo', 'carne'];

// //console.log(comidas);
// //console.log('Essas são as minhas comidas preferidas:', comidas);

// const comidaPreferida = prompt("Qual a sua comida preferida?")

// const semVogalO = comidas.replaceAll('frango',  comidaPreferida)
// console.log(semVogalO);
//exerício  3
listaDeTarefas = []
const pergunta1 = prompt("pergunta 1")
const adicionar1 = listaDeTarefas.push(0)
const pergunta2 = prompt("pergunta 2")
const adicionar2 = listaDeTarefas.push(1)
const pergunta3 = prompt("pergunta 3")
const adicionar3 = listaDeTarefas.push(2)
console.log( pergunta1, pergunta2,pergunta3);
const pergunta4 = prompt("qual tarefa já realizou de 0 a 2")
const perguntas = ( pergunta1, pergunta2,pergunta3);
const removeElementos = listaDeTarefas.splice(pergunta4, perguntas )
console.log(removeElementos)
console.log(perguntas)


