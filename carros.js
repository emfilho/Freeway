//Variaveis dos carros
let xCarros = [900, 900, 900, 900, 900, 900]; // Posição X de todos os carros
let yCarros = [321, 265, 210, 150, 96, 40];   // Posição Y de todos os carros
let comprimentoCarro = 60;                    // Comprimento geral dos carros
let alturaCarro = 35;                         // Altura geral dos carros
let velocidadeCarros = [4, 5.4, 4.5, 4.1, 5.7, 4.2];  //Velocidade dos carros

// Movimentar o Carro
function moverCarros(){ // Move o carro diminuindo a variavel X da velocidade
  for (let i = 0; i < imagemCarros.length; i++){
    xCarros[i] -= velocidadeCarros [i];
  }
}

// Mostrar Carro
function mostrarCarros(){ 
  for (let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}
// Faz o Loop dos Carros
function loopCarros(){ // Chama a função  passarTela 
  for (i = 0; i < imagemCarros.length; i++){
    if (passarTela(xCarros[i])){
      xCarros[i] = 900;
    }
  }
}
// Verifica se passou a tela
function passarTela(xCarro){return xCarro <  -30;} // Ao passar da posição X -30 retorna xCarro

