//Exercicio

//crie um vetor com nome de seus familiares, com seis nomes

//use todos os comandos vistos em vetores após criar a lista

const listaDeNomes = ["Noelle", "Susie", "Ralsei", "Toriel", "December", "Asgore"]

console.log("Exbindo todos os elementos: ")
console.log(listaDeNomes)

console.log("\nExbindo só o 1° elemento: ")
console.log(listaDeNomes[5])

console.log("\nAdicionando elementos: ")
listaDeNomes.push("Rudy")
console.log(listaDeNomes)

console.log("\nRemovendo um elemento: ")
listaDeNomes.splice(1,1)
console.log(listaDeNomes)

console.log("\nRemovendo apenas o último elemento: ")
listaDeNomes.splice()
console.log(listaDeNomes)

console.log("\nRemovendo apenas o primeiro elemento: ")
listaDeNomes.shift()
console.log(listaDeNomes)
