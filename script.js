/*
const estudante = {
    nome: 'Eric',
    sobrenome: 'Fernandes',
    numeroDaMatricula: 777,
    notaDoSemestre: [7, 8.5, 9, 10, 10]
}

// Prática guiada II
// Criando uma nova propriedade dentro do objeto estudante
estudante.modulo = 3

const acessandoNome = estudante.nome
const segundaNota = estudante.notaDoSemestre[1]
const acessandoModulo = estudante.modulo

console.log(`Acessando o nome no objeto: ${acessandoNome}
Acessando a segunda nota no objeto: ${segundaNota}
Acessando moduto no objeto: ${acessandoModulo}`)

// Prática guiada III
// Copiando o objeto original

const estudanteCopia = {
    ...estudante
}

estudanteCopia.nome = 'Astrodev'
estudanteCopia.notaDoSemestre.push(9)
estudanteCopia.modulo = 4
console.log(estudanteCopia)

const estudanteLabenu = []
estudanteLabenu.push(estudante, estudanteCopia)
console.log(estudanteLabenu)
*/

const carrinho = {
    nome: 'Maria',
    formaDePagamento: ['Débito', 'Crédito', 'Pix', 'Boleto'],
    endereco: 'Rua Sem Nome',
}


carrinho.compras = [
{
    nomeDoProduto: 'Notebook', 
    precoDoProduto: 4200, 
    qtdComprada: 1
},
{
    nomeDoProduto: 'Celular', 
    precoDoProduto: 1800, 
    qtdComprada: 1
}

]

const qtdProdutos = carrinho.compras.length
console.log(qtdProdutos)

const carrinhoCopia = {
    ...carrinho,
    nome: 'Evellyn',
    formaDePagamento: 'Cartão presente'
}

console.log(`Carrinho original:`, carrinho)
console.log(`Carrinho original:`, carrinhoCopia)

