//exemplo com vetor de nomes
const listaDeNomes = ["Ana", "Maria", "Joana"]

//exemplo com vetor de numeros
const listaDeNumeros = [1, 2, 3, 4, 5]

//vetor de objetos com dados de nome e idade
//um objeto carrega dados como uma classe
const listaDeUsuarios = [
    {nome: "Ana", idade: 25},
    {nome: "Maria", idade: 35},
    {nome: "Joana", idade: 45},
    {nome: "José", idade: 15}
]

//percorrendo e exibindo os elementos do vetor
//foreach é uma função com laço de repetição
console.log("Exibindo todos os usuários do vetor.")
//use as {} caso precise de mais uma linha
//neste caso não precisa, mas vamos usar
listaDeUsuarios.forEach(usuario => {
    console.log(`${usuario.nome} tem ${usuario.idade} anos`)
})

//como os antigos
console.log("Exibindo todos os usuários do vetor.")
for (let i = 0; i < listaDeUsuarios.length; i++) {
    console.log(`${listaDeUsuarios[i].nome} tem ${listaDeUsuarios[i].idade} anos`)
}

console.log("Filtrando maiorres de 18 anos.")
const maioridade = listaDeUsuarios.filter(usuario => usuario.idade>= 18)
//use as {} caso precise de mais uma linha
//neste caso não precisa, mas vamos usar
maioridade.forEach(usuario =>
    console.log(`${usuario.nome} tem ${usuario.idade} anos.`)
)