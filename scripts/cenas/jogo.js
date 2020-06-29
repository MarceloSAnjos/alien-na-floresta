class Jogo {
  constructor() {
    this.indice = 0;
    this.mapa = fita.mapa;

    this.ajustaAvatar = 1;

    if (this.device()) {
      this.ajustaAvatar = 0.5;
    }
  }

  setup() {

    let { vidaTotal, vidaInicial } = fita.configuracoes;

    const cenarioCeuForest = new Cenario(imagemCenarioCeuForest, 3)
    const cenarioTroncosMuitoLonge = new Cenario(imagemCenarioTroncosLongeForest, 1)
    const cenarioGramaForest = new Cenario(imagemCenarioGramaForest, 3)
    const cenarioSubGramaForest = new Cenario(imagemCenarioSubGramaForest, 3)
    const cenarioTroncosForest = new Cenario(imagemCenarioTroncosForest, 3)
    const cenarioTroncosLongeForest = new Cenario(imagemCenarioTroncosLongeForest, 3)
    const cenarioTroncosNevoaForest = new Cenario(imagemCenarioTroncosNevoaForest, 3)
    const cenarioTroncosSolForest = new Cenario(imagemCenarioTroncosSolForest, 2)
    const cenarioCopaArvoresForest = new Cenario(imagemCenarioCopaArvoresForest, 3)
    const cenarioLuzDoSolForest = new Cenario(imagemCenarioLuzDoSolForest, 2)
    const cenarioSolForest = new Cenario(imagemCenarioSolForest, 3)

    layersBackground.push(
      cenarioCeuForest,
      cenarioTroncosNevoaForest,
      cenarioTroncosMuitoLonge,
      cenarioTroncosLongeForest,
      cenarioCopaArvoresForest,
      cenarioTroncosSolForest,
      cenarioLuzDoSolForest,
      cenarioSolForest,
      cenarioTroncosForest,
      cenarioGramaForest,
      cenarioSubGramaForest
    );

    pontuacao = new Pontuacao();
    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 20 * this.ajustaAvatar, 20, 128 * this.ajustaAvatar, 128 * this.ajustaAvatar, 32, 32, 20, 20);
    personagem_hurt = new Personagem(matrizPersonagem_hurt, imagemPersonagem_hurt, 20 * this.ajustaAvatar, 20, 120 * this.ajustaAvatar, 120 * this.ajustaAvatar, 32, 32, 20, 20);

    vida = new Vida(vidaTotal, vidaInicial);

    const inimigoChefao = new Inimigo(matrizInimigoChefao, imagemInimigoChefao, width * 2, 0, 300 * this.ajustaAvatar, 262 * this.ajustaAvatar, 212, 189, 20);
    const inimigoCatioro = new Inimigo(matrizInimigoCatioro, imagemInimigoCatioro, width * 2, 30, 196 * this.ajustaAvatar, 128 * this.ajustaAvatar, 64, 32, 20);
    const inimigoLaser = new Inimigo(matrizInimigoLaser, imagemInimigoLaser, width * 2, 100, 100 * this.ajustaAvatar, 36 * this.ajustaAvatar, 100, 36, 20);

    inimigos.push(inimigoChefao, inimigoCatioro, inimigoLaser);

    frameRate(16);
    somDoJogo.loop();
  }

  keyPressed() {
    if (key === 'ArrowUp') {
      personagem.pula();
      somDoPulo.play();
    }

    if (key === 'ArrowRight') {
      personagem.corre();
    }

    if (key === 'Enter') {
      if (vida.vidas === 0) {
        window.location.reload();
      }
    }
  }

  touchStarted() {

    if (vida.vidas === 0) {
      window.location.reload();
    }

    if (pontuacao.pontos >= 1) {
      personagem.pula();
    }

  }

  draw() {
    layersBackground.forEach(layer => {
      layer.exibe();
      layer.move();
    })

    vida.draw();
    pontuacao.exibe();
    pontuacao.adicionarPonto();
    personagem.exibe();

    if (personagem.invensivel == false) {
      personagem.exibe();
    } else if (personagem.invencivel == true) {
      personagem_hurt.tornarInvencivel();
      if ((personagem_hurt.invencivel == true)) {
        personagem_hurt.x = personagem.x;
        personagem_hurt.y = personagem.y;
        personagem_hurt.exibe();
      }
    }

    personagem.aplicaGravidade();
    personagem.aplicaFadiga();

    const linhaAtual = this.mapa[this.indice];
    const inimigo = inimigos[linhaAtual.inimigo];
    const inimigoVisivel = inimigo.x < - inimigo.largura;

    inimigo.velocidade = linhaAtual.velocidade;

    inimigo.exibe();
    inimigo.move();

    if (inimigoVisivel) {
      this.indice++;
      inimigo.aparece();

      if (this.indice > inimigos.length - 1) {
        this.indice = 0;
      }
    }

    if (personagem.estaColidindo(inimigo)) {

      vida.perdeVida();

      if (vida.vidas === 0) {

        // image(imagemGameOver, width / 2 - 200, height / 3);
        noLoop();
        this._texto();

      }
      personagem.tornarInvencivel();

    }
  }

  _texto() {
    textFont(fonteTelaInicial);
    textAlign(CENTER);


    if (this.device()) {
      textSize(40);
      text('Game over', width / 2, height / 3);
      textSize(15);
      text('Toque na tela para continuar ', width / 2, height / 4 * 2);
    } else {
      textSize(150);
      text('Game over', width / 2, height / 3);
      textSize(40);
      text('Pressione enter para continuar ', width / 2, height / 4 * 2);
    }
  };

  device() {
    if (width < 480 || height < 680) {
      return true;
    } else {
      return false;
    }
  }

}
