const alunos =  [
    {nome: "Isaque", nota: 9.9, bolsista: true},
    {nome: "Sabrina", nota: 9.8, bolsista: false},
]

console.log(alunos.map(a => a.nota))
const resultado =alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
}, 0)
console.log(resultado)