var personagem, imgPersona, imgPersona1
var inimigo, imgInimigo

function preload() {
    imgPersona = loadAnimation("trex2.png", "trex3.png")
    imgPersona1 = loadAnimation("trex1.png")
    imgInimigo = loadImage("obstacle1.png")
}
function setup() {
    createCanvas(1000, 600)
    caixa = new Caixa(250, 200, 20, 20)
    bloco = new Bloco(200, 350, 20, 20)
    bloco.depth = bloco.depth
    bloco.depth += 1
    personagem = createSprite(200, 310)
    personagem.addAnimation("parado", imgPersona1)
    personagem.scale = 0.2
    personagem.velocityY += 0.5
}
function draw() {
    background("grey")
    drawSprites()
    caixa.display()
    personagem.y = 100
    bloco.display()
    //drawSprites()
}