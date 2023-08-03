//Posição do ator
let xAtor = 400; //Posição X do Ator
let yAtor = 366; //Posição Y do Ator
let colisao = false; //Verificador de colisão -> collide2d
let pontos = 0; //Variavel inicial de pontos
let mortes = 0;

//Controle do Ator
function moverAtor(){
  if (keyIsDown(87)){yAtor -= 3;} //Move pra cima "W"
  if (keyIsDown(83)){yAtor += 3;} //Move pra baixo "S"
  if (keyIsDown(68)){xAtor += 3;} //Move pra direita "D"
  if (keyIsDown(65)){xAtor -= 3;} //Move pra esquerda "A"
}
//Mostra ator (imagem do ator, posição x e y do ator - altura e largura)
function mostrarAtor(){image (imagemAtor, xAtor, yAtor, 30, 30);}

//Verifica a Colisão 
function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++){ //length: pega o comprimento total de imagemCarros 
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if (colisao){               //Verificação de colisão com auxilio do collide2d
      retornaAtor();            //Se colisão "true", retorna ator na posição inicial
      mscColidiu.play();        //Toca o som da colisão
      if(pontosZerados()){
        mortes +=1;
      }
    }
  }
}

//Retorna o ator para a posição inicial
function retornaAtor(){xAtor = 400; yAtor = 366;}

//Marca os pontos
function incluirPontos(){
  fill(0,128,0);
  textAlign(CENTER);
  textSize(25);
  text(pontos, width / 5, 27);  //Largura dividido por 5
}

//Marcador de Mortes
function incluirPontosMorte(){
  fill(255,0,0);
  textAlign(CENTER);
  textSize(25);
  text(mortes, 700, 27);
}


//Marca o Ponto
function marcaPonto(){
  if(yAtor < 15){       // Quando o ator passar a posição y 15
    pontos += 1;        // Adiciona um ponto
    mscPontos.play();   // Toca o som do ponto
    retornaAtor();      // Retorna o ator na posição inicial
  }
}
//Não deixa sair fora da tela
function foraDaTela(){
  if (yAtor > 380){yAtor -= 3;} // Impede do ator descer mais que a posição Y 380
}

//Não deixa os pontos ficarem negativos
function pontosZerados(){return pontos > 0;} 