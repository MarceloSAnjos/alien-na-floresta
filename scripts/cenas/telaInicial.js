class TelaInicial {
  constructor() {
  }
  draw() {
    this._imagemDeFundo();
    this._texto();
    this._botao();
  }

  _imagemDeFundo() {
    image(imagemTelaInicial, 0, 0, width, height);
  }

  _texto() {
    textFont(fonteTelaInicial);
    textAlign(CENTER);
    fill('#ff0084');
    if (this.device()) {
      textSize(90);
      text('Alien', width / 2, height / 3);
      textSize(35);
      text('na Floresta', width / 2, height / 2);
    } else {
      textSize(150);
      text('Alien', width / 2, height / 3);
      textSize(90);
      text('na Floresta', width / 2, height / 5 * 3);
    }
  }

  _botao() {
    botaoGerenciador.y = height / 7 * 5;
    botaoGerenciador.draw();
  }

  device() {
    if (width < 480 || height < 680) {
      return true;
    } else {
      return false;
    }
  }
}