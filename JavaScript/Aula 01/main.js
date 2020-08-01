var nome = 'Tales Oliver'
var idade1 = 35
var idade2 = 6
var frase = 'Japão é o melhor time do Mundo!!'
var lista = ['maça', 'pêra', 'laranja']

alert('Meu primeiro JS!')
// Criando o primeiro alert

alert(`Bem vindo, ${nome}`)
// Chamada de string
// Como eu já fiz outros cursos usei logo a crase

alert(`${nome} tem ${idade}`)
// Concatenando duas variavéis (string e números)

alert("O " +nome + " tem " +idade1 +idade2)
// Aqui o JS interpretou tudo como string

alert(idade1 +idade2)
// Aqui o JS interpretou tudo como número

console.log(nome)
console.log(idade + idade2)
// Exemplificando a parte do 'Client Side' com o console.log usado no browser

console.log(frase)
// Imprimindo a frase no console

console.log(frase.replace('Japão', 'Brasil'))
// Aprendendo a fazer o replace no console

alert(frase.replace('Japão', 'Brasil'))
// Fazendo replace no alert

console.log(frase.toUpperCase())
// Todas maiúsculas

console.log(frase.toLowerCase())
// Todas minúsculas

console.log(idade1 + idade2)
console.log(idade1 - idade2)
console.log(idade1 * idade2)
console.log(idade1 / idade2)
// As 04 operações básicas da matemática

console.log(lista)
// Começando a trabalhar com array
// Aqui impressão array por completo

console.log(lista[0])
console.log(lista[1])
console.log(lista[2])
// Aqui a impressão por itens da lista

alert(lista[1])
// Também posso imprimir o array por itens separados no Alert

lista.push('uva')
// Adicionando mais itens no array
console.log(lista)
// Imprimindo o array novo

lista.pop()
// Remove o último elemento da lista
console.log(lista)

console.log(lista.length)
// Pra saber o tamanho da lista

console.log(lista.reverse())
// Imprime a lista ao contrário

console.log(lista.toString())
// Imprime a lista como uma string e tira aquela característica de array '[ a, b, c]' ->  a, b, c

console.log(lista[0])
// Imprime o primeiro elemento da lista 'maça'
console.log(lista.toString()[0])
// Imprime o primeiro elemente da string 'M'

console.log(lista.join(" - "))
// Imprime o array em string, porém usa o separados '-' ao invés de ','
// O separador por ser escolhido

var fruta = {nome: 'Maça', cor: 'Vermelha'}
// Aprendendo a usar Dicionário
console.log(fruta.nome)
// No dicionário ao invés de ser usado a posição do array '[n]' é usado o termo, no caso 'nome' (ou poderia ser 'cor')
alert(fruta.cor)
// Pode ser usado no Alert também

var frutas = [{nome: 'Maça', cor:'Vermelha'}, {nome: 'Uva', cor:'Roxa'}]
// Não é mais um dicionário; é uma lista de dicionário (?) [Ainda não sei qual a exata funcionalidade do dicionário, imagine da lista de dicionários]
console.log(frutas)
// Imprime a lista de dicionários
alert(frutas[1].nome)
// Vai pegar o 'Dicionário' da lista de posição [1] e imprimir o nome da fruta