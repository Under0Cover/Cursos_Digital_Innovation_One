function botao(){
//    alert("Obrigado por clicar")
//    document.getElementById("agradecimento")
//    console.log(document.getElementById("agradecimento"))
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar"
}

function redirecionar() {
    window.open("https://maps.google.com")
    window.location.href = "https://maps.google.com"
}

function trocar(){
    alert("Trocar texto!")
}

function texto(elemento){
//    document.getElementById("mudarTexto").innerHTML = "Obrigado por passar o mouse"
    elemento.innerHTML = "Obrigado por passar o mouse"
}

function voltar(elemento){
//    document.getElementById("mudarTexto").innerHTML = "Passe o mouse aqui"
    elemento.innerHTML = "Passe o mouse aqui"
}

function load(){
    alert("Página carregada")
}

function funcaoChange(elemento) {
    console.log("elemento.value")
}