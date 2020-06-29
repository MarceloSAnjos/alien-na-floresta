function preload() {
  imagemCenarioCeuForest = loadImage('imagens/cenario/ceu_forest.png');
  imagemCenarioCopaArvoresForest = loadImage('imagens/cenario/copa_arvores_forest.png');
  imagemCenarioGramaForest = loadImage('imagens/cenario/grama_forest.png');
  imagemCenarioLuzDoSolForest = loadImage('imagens/cenario/luz_do_sol_forest.png');
  imagemCenarioSolForest = loadImage('imagens/cenario/sol_forest.png');
  imagemCenarioSubGramaForest = loadImage('imagens/cenario/sub_grama_forest.png');
  imagemCenarioTroncosForest = loadImage('imagens/cenario/troncos_forest.png');
  imagemCenarioTroncosLongeForest = loadImage('imagens/cenario/troncos_longe_forest.png');
  imagemCenarioTroncosMuitoLonge = loadImage('imagens/cenario/troncos_muito_longe.png');
  imagemCenarioTroncosNevoaForest = loadImage('imagens/cenario/troncos_nevoa_forest.png');
  imagemCenarioTroncosSolForest = loadImage('imagens/cenario/troncos_sol_forest.png');

  imagemCoracao = loadImage('imagens/assets/heart.png');
  imagemTelaInicial = loadImage('imagens/assets/telaInicial_forest.png');

  somDoJogo = loadSound('sons/trilha_jogo.mp3');
  somDoPulo = loadSound('sons/somPulo.mp3');

  fita = loadJSON('fita/fita.json');

  fonteTelaInicial = loadFont('imagens/assets/BLADRMF_.TTF');

  imagemPersonagem = loadImage('imagens/personagem/finn_run.png');
  imagemPersonagem_hurt = loadImage('imagens/personagem/finn_hurt.png');

  imagemInimigoChefao = loadImage('imagens/inimigos/walk.png');
  imagemInimigoLaser = loadImage('imagens/inimigos/laser.png');
  imagemInimigoCatioro = loadImage('imagens/inimigos/catioro.png');
}