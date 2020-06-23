let imagemCenario;
let imagemPersonagem;
let cenario;
let somDoJogo;
let somDaFloresta;
let somDePassos;
let personagem;

function preload (){
  imagemCenario = loadImage ('imagens/cenario/background_edit.png');
  imagemPersonagem = loadImage ('imagens/personagem/knight_run.png');
  somDoJogo = loadSound ('sons/trilha_mozi_jogo.mp3');
  somDaFloresta = loadSound ('sons/floresta.mp3');
  somDePassos = loadSound ('sons/footstep.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 2,9);
  personagem = new Personagem(imagemPersonagem);
  frameRate (13);
  somDoJogo.loop();
  somDaFloresta.loop();
  somDePassos.loop();
  somDoJogo.setVolume(0.6);
  somDaFloresta.setVolume(0.3);
  somDePassos.setVolume(0.08);
  
  
}

function draw() {
  cenario.exibe();
  cenario.move();
  personagem.exibe();
}









