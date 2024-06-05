const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45}',
    '{ "nome": "Caderno", "preco": 13.90}'
]

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

let resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)