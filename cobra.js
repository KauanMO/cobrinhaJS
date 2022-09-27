var bloco = 25;
var linhas = 20;
var colunas = 20;

var jogo;
var context;

var cobraX = bloco * 5;
var cobraY = bloco * 5;
var corpoCobra = [];
var velocidadeX = 0;
var velocidadeY = 0;

var comidaX;
var comidaY;

var gameOver = false;

window.onload = function() {
    jogo = document.getElementById("jogo");
    jogo.height = linhas * bloco;
    jogo.width = colunas * bloco;
    context = jogo.getContext("2d");

    comida();
    document.addEventListener("keyup", direcao);

    setInterval(update, 1000/10); 
}

function update() {
    if (gameOver) {
        return;
    }

    context.fillStyle="black";
    context.fillRect(0, 0, jogo.width, jogo.height);

    context.fillStyle="red";
    context.fillRect(comidaX, comidaY, bloco, bloco);

    if (cobraX == comidaX && cobraY == comidaY) {
        corpoCobra.push([comidaX, comidaY]);
        comida();
    }

    for (let i = corpoCobra.length-1; i > 0; i--) {
        corpoCobra[i] = corpoCobra[i-1];
    }

    if (corpoCobra.length) {
        corpoCobra[0] = [cobraX, cobraY];
    }

    context.fillStyle="lime";
    cobraX += velocidadeX * bloco;
    cobraY += velocidadeY * bloco;
    context.fillRect(cobraX, cobraY, bloco, bloco);

    for (let i = 0; i < corpoCobra.length; i++) {
        context.fillRect(corpoCobra[i][0], corpoCobra[i][1], bloco, bloco);
    }

    if (cobraX < 0 || cobraX > colunas * bloco || cobraY < 0 || cobraY > linhas * bloco) {
        gameOver = true;
        alert(document.cookie="Você morreu. Evite encostar nas bordas! (Atualize para jogar novamente)");
    }

    for (let i = 0; i < corpoCobra.length; i++) {
        if (cobraX == corpoCobra[i][0] && cobraY == corpoCobra[i][1]) {
            gameOver = true;
            alert(document.cookie="Você morreu. Evite encostar em seu corpo! (Atualize para jogar novamente)");
        }
    }
}

function comida() {
    comidaX = Math.floor(Math.random() * colunas) * bloco;
    comidaY = Math.floor(Math.random() * linhas) * bloco;
}

function direcao(e) {
    if (e.code == "ArrowUp" && velocidadeY != 1) {
        velocidadeX = 0;
        velocidadeY = -1;
    }
    else if (e.code == "ArrowDown" && velocidadeY != -1) {
        velocidadeX = 0;
        velocidadeY = 1;
    }
    else if (e.code == "ArrowLeft" && velocidadeX != 1) {
        velocidadeX = -1;
        velocidadeY = 0;
    }
    else if (e.code == "ArrowRight" && velocidadeX != -1) {
        velocidadeX = 1;
        velocidadeY = 0;
    }
}