// operador ... rest(juntar)/spread(espalhar)
//usar rest com parâmetro de função

//usar spread com objeto
const funcionario = { nome: 'Isaque', salario: 1480}
const clone = { ativo: true, ...funcionario }
console.log(clone)

//usar spread com array
const grupoA = ['Isaque', 'Lara', 'Lucas']
const grupoFinal = ['Cadu', 'Tifani', ...grupoA]
console.log(grupoFinal)