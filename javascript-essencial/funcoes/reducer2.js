const alunos =  [
    {nome: "Isaque", nota: 9.9, bolsista: true},
    {nome: "Sabrina", nota: 9.8, bolsista: false},
]

//Todos são bolsistas
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))
//Algum aluno bolsista
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))
