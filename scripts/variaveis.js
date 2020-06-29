let imagemCenario;
let imagemPersonagem;
let imagemPersonagem_hurt;
let imagemInimigoChefao;
let imagemGameOver;
let imagemCoracao;
let imagemTelaInicial;

let fonteTelaInicial;
let somDoJogo;
let somDoPulo;

let fita;
let cenas;
let cenario;
let pontuacao;
let jogo;
let vida;

let telaInicial;
let cenaAtual = 'telaInicial';

let botaoGerenciador;

let personagem;
let personagem_hurt;
let inimigo;
let inimigoChefao;
let inimigoCatioro;
let imagemInimigoLaser;

const matrizInimigoChefao = [
  [0, 0],
  [212, 0],
  [424, 0],
  [636, 0],
  [848, 0],
  [0, 189],
  [212, 189],
  [424, 189],
  [636, 189],
  [848, 189],
  [0, 378],
  [212, 378],
  [424, 378],
  [636, 378],
  [848, 378],
  [0, 567],
  [212, 567],
  [424, 567],
  [636, 567],
]

const matrizInimigoCatioro = [
  [0, 0],
  [67, 0],
  [134, 0],
  [201, 0],
  [268, 0],
  [335, 0]
];

const matrizInimigoLaser = [
  [0, 0],
  [100, 0],
  [200, 0],
  [300, 0],
  [400, 0],
  [500, 0]
];

const matrizPersonagem = [
  [0, 0],
  [32, 0],
  [64, 0],
  [96, 0],
  [128, 0],
  [160, 0],
  [192, 0],
  [224, 0],
];

const matrizPersonagem_hurt = [
  [0, 0],
  [32, 0],
  [64, 0],
];

const inimigos = [];

const layersBackground = [];