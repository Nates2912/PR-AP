//operadores lógicos
condicao_a = 1 < 2
condicao_b = 10 < 2

//vai dar falso, AND precisa dos dois verdadeiros para dar verdadeiro
console.log(" =AND= ")
console.log(condicao_a && condicao_b)

//! significa não, qualquer coisa com! na frente vai negar
console.log("\n =NOT= ")
console.log(condicao_a && !condicao_b)

console.log("\n =OR= ")
console.log(condicao_a || condicao_b)