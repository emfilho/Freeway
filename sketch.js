function setup() {
  createCanvas(800, 400);       // Cria uma resolução 
  mscTrilha.loop();             // Cria um loop da musica
}

function draw() {
  background(imagemEstrada);
  mostrarAtor();                // Mostra o Ator
  mostrarCarros();              // Mostra os Carros
  moverCarros();                // Move os Carros
  moverAtor();                  // Controle de movimentação do ator "W/A/S/D"
  loopCarros();                 // Cria o loop dos carros
  verificaColisao();            // Verificação de colisão (collide2d)
  incluirPontos();              // Inclui Placar de Pontos
  incluirPontosMorte();         // Inclui Placar de Mortes
  marcaPonto();                 // Soma um ponto quando atravessa a rua
  foraDaTela();                 // Evita que o ator saia da tela 
}


