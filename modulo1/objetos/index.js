//Exercício 1
// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])
// console.log(filme.elenco[filme.elenco.length - 1])
// console.log(filme.transmissoesHoje[2])

//Matheus Nachtergaele
//Virginia Cavendish

// 2
// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)

// foi impresso
// {nome: 'Juca', idade: 3, raca: 'SRD'}
// {nome: 'Juca', idade: 3, raca: 'SRD'}
// {nome: 'Juca', idade: 3, raca: 'SRD'}
// b) a sintaxe ... faz com que a nova propriedade pegue as variáveis já existentes
// no objeto pai e pode modificá-las


// 3
// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))

// //foi impresso
// false
// undefined
// b)não defini umvalor para altura

// 1

// const pessoa = {
//     nome: "Amanda", 
//     apelidos: ["Amandinha", "Mandinha", "Mandi"]
//  }

// function formarPessoa(pessoa) {
//     const novaPessoa = {
//       ...pessoa,
//       apelidos: ["Amandinha", "Mandinha", "Mandi"],
//       souEu: {
//         nome: "Amanda",
//         idade: 20
//       }
//     }
//console.log(`Eu sou ${novaPessoa.nome}, mas pode me chamar de ${novaPessoa.apelidos} `)
//     console.log(`Eu sou ${novaPessoa.nome}, mas pode me chamar de ${novaPessoa.apelidos} e a
//     minha idade é ${novaPessoa.souEu.idade} `)

//   }
  

// formarPessoa(pessoa)
    
    // 2
    
    // const pessoa = {
    //     nome: "Bruno", 
    //     idade: 23,
    //     profissao: "Instrutor"
    //  }
    
    // function minhaFuncao(pessoa) {
    //     const novaPessoa = {
    //       ...pessoa
    //     }
    // console.log(`${novaPessoa.nome}, ${novaPessoa.nome.lenght},  `)
    
    //   }
      
    
    minhaFuncao(pessoa)

    const carrinho = []

      const fruta = {
     nome: "uva", 
        disponibilidade: true
      }
       
      function minhaFuncao(fruta) {
      
         
     console.log(carrinho)
    
       }
      
    
    minhaFuncao(fruta)





    