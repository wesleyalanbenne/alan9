let palavra;//comprimento da letra

function setup() {//configuraçao 
  createCanvas(400, 400);//tamanho da tela
  
  
  let palavras = ["Caminhante", "Caminho", "Caminha"];//palavras que aparecem
  
  palavra = random(palavras);//palavra aleatoria
}

function inicializaCores() {// funçao que inicializa as cores 
  
  background("blue");//cor de fundo 
  fill("black");// cor da letra
  textSize(64);//tamanho da letra
  textAlign(CENTER, CENTER);// localizaçao da letra 
}

function draw() {//desenhar
  
  inicializaCores();//da play nas cores

  let maximo = width;//tamanho maximo da palavra 
  let minimo = 0;//tamanho minimo da letra
  // mouseX, 0, width ==> 0, palavra.length
  
  let quantidade = map(mouseX, 0, width, 1, palavra.length);//deixe quantidade
  //console.log(quantidade);
  let parcial = palavra.substring(0, quantidade);//deixar parcial
  text(parcial, 200, 200);//deixar o texto parcial
  
}
