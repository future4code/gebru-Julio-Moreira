//Exercício 1

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })
// apresentou no console
//   [
//     {
//         "nome": "Amanda Rangel",
//         "apelido": "Mandi"
//     },
//     {
//         "nome": "Laís Petra",
//         "apelido": "Laura"
//     },
//     {
//         "nome": "Letícia Chijo",
//         "apelido": "Chijo"
//     }
// ]

// Exercício 2
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })
  
//   console.log(novoArrayB)
// imprimiu no console
//   [
//     "Amanda Rangel",
//     "Laís Petra",
//     "Letícia Chijo"
// ]

//Exercício 3

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })
  
//   console.log(novoArrayC)

  // imprimiu no console

//   {
//     "nome": "Amanda Rangel",
//     "apelido": "Mandi"
// }

// Exercício 1

// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

// letra a
//const nomes = pets.map(p => p.nome)
 //console.log(nomes)

 // letra b
 //const racas = pets.map(r => r.raca === "Salsicha")
//console.log(racas)

// Exercício 2

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
//letra a 
 //const nomes = produtos.map(p => p.nome)
 //console.log(nomes)

// letra b
// const nomes = produtos.map(p => p.nome)
// const precos = produtos.map(p => p.preco)
//  console.log(nomes, precos)

letra c
// function categoriaBebidas (value){
//     if (value.categoria == "Bebidas")
//     return value;
// }
// var bebidas = produtos.filter(categoriaBebidas);
//     console.log(bebidas);


