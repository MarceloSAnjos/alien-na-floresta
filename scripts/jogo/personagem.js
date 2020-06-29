let alturaPersonagem = 170;

class Personagem extends Animacao {
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidade, delay) {
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidade, delay)

    this.variacaoY = variacaoY;
    this.xInicial = x;
    this.yInicial = height - this.altura - this.variacaoY;
    this.y = this.yInicial;
    this.velocidadeDoPulo = 0;
    this.gravidade = 6;
    this.alturaDoPulo = -50;
    this.pulos = 0;
    this.invencivel = false;
    this.fadiga = 0.1;
  }

  pula() {
    if (this.pulos < 2) {
      this.velocidadeDoPulo = this.alturaDoPulo;
      this.pulos++;
    }
  }

  corre() {
    this.x = this.x + 50;

  }

  aplicaFadiga() {
    if (this.pulos == 0) {
      this.fadiga = this.fadiga + 0.2;

      this.x = this.x - parseInt(this.fadiga);
      if (this.x < this.xInicial) {
        this.x = this.xInicial;
      }
      if (this.fadiga > 16) {
        this.fadiga = 0;
      }
    }

  }

  aplicaGravidade() {
    this.y = this.y + this.velocidadeDoPulo;
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade

    if (this.y > this.yInicial) {
      this.y = this.yInicial;
      this.pulos = 0;
    }
  }

  tornarInvencivel() {
    this.invencivel = true;
    setTimeout(() => {
      this.invencivel = false;
    }, 1000);

  }

  estaColidindo(inimigo) {
    const precisao = .7;

    if (this.invencivel) {
      return false;
    };

    const colisao = collideRectRect(
      this.x,
      this.y,
      this.largura * precisao,
      this.altura * precisao,
      inimigo.x,
      inimigo.y,
      inimigo.largura,
      inimigo.altura,
    );

    return colisao;
  }
}
