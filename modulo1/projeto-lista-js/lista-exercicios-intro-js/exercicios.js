// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
// function soma(num1, num2) {
//   num1 = 2
//   num2 = 4
//   return num1 + num2
// }

// console.log(soma)

// // EXERCÍCIO 0B
//  function imprimeMensagem() {
//   const mensagem = prompt('Digite uma mensagem!')

//   console.log(mensagem)
// }

// // EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// // EXERCÍCIO 01
//  function calculaAreaRetangulo() {
// const altura = 3
// const largura = 5
//  area = altura * largura
//  }
// console.log(area)

// // EXERCÍCIO 02
//  function imprimeIdade() {
//   const anoAtual = prompt('Digite o ano atual!')
//    const anoNasci = prompt('Digite o ano de nascimento!')
//   ano = anoAtual - anoNasci
//  }
//  console.log(ano)

// // EXERCÍCIO 03
//  function calculaIMC(peso, altura) {
//    const peso = 75
//  const  altura = 180
//  imc = peso / altura * altura
// console.log(imc)
//  }


// // EXERCÍCIO 04
// function imprimeInformacoesUsuario() {
//   const nome = prompt('Digite o nome!')
//   const idade = prompt('Digite a idade!')
//   const email = prompt('Digite o email!')
// //   // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
// console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}`)
//  }

// // EXERCÍCIO 05
//  function imprimeTresCoresFavoritas() {
//  // Crie um array com pelo menos 5 raças de cachorro


// // Peça para o usuário inserir um número de 1 a 5
// const cor1 = prompt("cor 1")
// const cor2 = prompt("cor 2")
// const cor3 = prompt("cor 3")

// // Imprima no console a raça correspondente à posição escolhida pelo usuário
// const resultado = `${[cor1,cor2,cor3]}`
// console.log(resultado)
//  }

// // EXERCÍCIO 06
// function retornaStringEmMaiuscula(string) {
 
//    const texto = "oi"
//   return texto.toUpperCase()
   
// }
// console.log(texto)

// // EXERCÍCIO 07
//  function calculaIngressosEspetaculo(custo, valorIngresso) {
   
//    custo = 5000
//    valorIngresso = 50
//    espetaculo = custo / valorIngresso
//    return espetaculo

//  }
//  console.log(espetaculo)

// // EXERCÍCIO 08  depois faço
//  function checaStringsMesmoTamanho(string1, string2) {

//   const string1  = "oi"
//   const string2  = "oi"
//   comparar = string1.lenght === string2.lenght
//   return comparar

//  }

// EXERCÍCIO 09
//  function retornaPrimeiroElemento(array) {
//  array = ["oi", "bb", "cc"]
//  return array[0]
 
// }
// console.log(array[0])

// // EXERCÍCIO 10 nao funcionou corretamente
//  function retornaUltimoElemento(array) {
//     array = ["ola", "abc"]
//     return array
//  }
//  console.log(array.length -1)

// // EXERCÍCIO 11
// function trocaPrimeiroEUltimo(array) {
//   // implemente sua lógica aqui

// }

// // EXERCÍCIO 12 nao funcionou
//  function checaIgualdadeDesconsiderandoCase(string1, string2) {
// const string1 =  "Ola"
// const string2 = "olA"
// resultado =  string1 === string2
//  }
//  console.log(resultado)

// // EXERCÍCIO 13

//  function checaRenovacaoRG() {
//     const anoAtual = Number(prompt('Digite o ano atual!'))
//     const anoNasci = Number(prompt('Digite o ano nascimento!'))
//     const anoCar = Number(prompt('Digite o ano da emissão da carteira!'))
  
    
      
//  }

// // EXERCÍCIO 14
// function checaAnoBissexto(ano) {
//   // implemente sua lógica aqui

// }

// // EXERCÍCIO 15
 function checaValidadeInscricaoLabenu() {
    const idadeAtual = prompt('Você tem mais de 18 anos!')
    const estudo = prompt('Você possui ensino médio completo')
    const horario = prompt('Você possui disponibilidade exclusiva durante os horários do curso!')

    if(idadeAtual => 18 && estudo == "sim" && horario == "sim"){
      console.log(true)
    }
      else(
          console.log(false)
      )
 }