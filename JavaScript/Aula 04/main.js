// Trabalhando com funções, variavéis globais e locais
function soma(valor1, valor2){
    return valor1 + valor2
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

alert(soma(5, 10))
alert('Vai Japão', 'Japão', 'Brasil' )

function validadeIdade(idade) {
    var validar
    if (idade >= 18){
        validar = true
    } else {
        validar = false
    }
    return validar
}

var idade = prompt('Qual a sua idade?')
console.log(validadeIdade(idade))