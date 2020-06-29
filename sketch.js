function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40);
  // somDoJogo.loop();

  jogo = new Jogo();
  telaInicial = new TelaInicial();
  botaoGerenciador = new BotaoGerenciador(
    'Começar a jornada',
    width / 2,
    height / 2,
    'jogo');

  jogo.setup();
  cenas = {
    jogo,
    telaInicial
  };

}

function keyPressed() {
  jogo.keyPressed(key);
}

function touchStarted() {
  jogo.touchStarted();
}


function draw() {
  cenas[cenaAtual].draw();
}
