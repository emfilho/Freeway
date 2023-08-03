//Variaveis das Imagens
let imagemEstrada;
let imagemAtor;
let imagemCarro0;
let imagemCarro1;
let imagemCarro2;
let mscPontos;
let mscTrilha;
let mscColidiu;

//Carrega as imagens
function preload (){
  mscPontos = loadSound("Sons/pontos.wav");
  mscTrilha = loadSound("Sons/trilha.mp3");
  mscColidiu = loadSound("Sons/colidiu.mp3");
  imagemEstrada = loadImage ("Imagens/estrada.png");
  imagemAtor = loadImage ("Imagens/ator-1.png");
  imagemCarro0 = loadImage ("Imagens/carro-1.png");
  imagemCarro1 = loadImage ("Imagens/carro-2.png");
  imagemCarro2 = loadImage ("Imagens/carro-3.png");
  imagemCarros = [imagemCarro0, imagemCarro1, imagemCarro2, imagemCarro0, imagemCarro1, imagemCarro2]; 
}
