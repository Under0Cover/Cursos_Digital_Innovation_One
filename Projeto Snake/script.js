let canvas = document.getElementById("snake");
// ONDE IRÁ RODAR O JOGO
let context = canvas.getContext("2d"); 
// RENDERIZA O QUE IRÁ ACONTECER DENTRO DO CANVAS
let box = 32;
// 32PX CADA QUADRINHO 
let snake = [];
// ARRAY [MOVIMENTO = TIRA UM, COLOCA OUTRO]

snake[0] ={
    x: 8 * box,
    y: 8 * box
}

let direction = "right";
// PODERIA SER QUALQUER UMA DAS QUATROS DIREÇÕES
// SEGUI AS DIREÇÕES DA INSTRUTORA

let food ={
    // ALIMENTO DA COBRINHA
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

function criarBG(){
    // CRIAR BACKGROUND
    context.fillStyle = "lightgreen";
    // DEFININDO A COR DO BACK GROUND - STYLE
    context.fillRect(0, 0, 16*box, 16*box);
    // DESENHA O RETÂNGULO
    // ALTURA E LARGURA DEFINIDAS
}

function criarCobrinha (){
    for(i = 0; i < snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function drawFood (){
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);
}

document.addEventListener("keydown", update);
// PEGA O EVENTO DE CLIQUE DO TECLADO E CHAMA A FUNÇÃO

function update(event){
    if(event.keyCode == 37 && direction != "right") direction = "left";
    if(event.keyCode == 38 && direction != "down") direction = "up";
    if(event.keyCode == 39 && direction != "left") direction = "right";
    if(event.keyCode == 40 && direction != "up") direction = "down";
}

function iniciarJogo(){    
// COMEÇANDO O JOGO
    if(snake[0].x > 15*box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
    if(snake[0].y > 15*box && direction == "down") snake[0].y = 0;
    if(snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;
    // COMANDOS PARA A COBRINHA ATRAVESSAR AS "PAREDES" NO JOGO

    for(i = 1; i < snake.length; i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(jogo);
            alert("YOU DIED!!!!!!!!!");
        }
    }

    criarBG();
    criarCobrinha();
    drawFood();
    //CHAMANDO AS FUNÇÕES 

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if (direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;
    // DECLARANDO OS "MOVIMENTOS"
    // O MAIS E O MENOS SÃO BASEADOS NO PLANO CARTESIANO 
    // PRA DIREITA É +
    // PRA ESQUERDA É -
    // PRA CIMA É +
    // PRA BAIXO É -

    if(snakeX != food.x || snakeY != food.y){
        snake.pop();
        // FUNÇÃO POP RETIRA O ÚLTIMO ELEMENTO DO ARRAY
    }else{
        food.x = Math.floor(Math.random() * 15 +1) * box;
        food.y = Math.floor(Math.random() * 15 +1) * box;
    }
    
    let newHead ={
        x: snakeX,
        y: snakeY
    }


    snake.unshift(newHead); 
    // UNSHIFT ACRESCENTAR UM QUADRADINHO A FRENTE
}

let jogo = setInterval(iniciarJogo, 100);
// INTERVALO DE 100 MILISSEGUNDOS PARA RECOMEÇAR 