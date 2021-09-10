let img;
let cnv;
let posX, posY;
let c;

//para poder correrlo debes hacer primero un folder, y luego ahi le agregas la imagen

//pre cargo la imagen que quiero usar 
function preload()
{
  img= loadImage("assets/tumblr_ba9d6c277362f7e7db74b0f4c995530d_9e83b97b_400.jpg");
  
}
function setup() 
{
  cnv = createCanvas(img.width, img.height);
  // tamaño de la imagen
  print(img.width, img.height);
  // centro la imagen en el centro de la pagina
  let newCanvasX = (windowWidth - img.width)/2;
  let newCanvasY = (windowHeight - img.height)/2;
  cnv.position( newCanvasX , newCanvasY);
  // creo un for para saber donde estan los pixeles de la iamgen
  // con el ++ puedo jugar con al densidad de pixeles
  for (let gridX= 0 ; gridX<img.width ; gridX+=2)
    {
        for(let gridY= 0 ; gridY<img.height ; gridY+=2) 
            {
              /*img.get nos da acceso a la info de color de cada pixel de la imagen
              let c = img.get(col , row);
              stroke(color(c));
              strokeWeight(100);
              point (col , row);
              fill(color(c));
              rect(col, row, 5 ,3);*/
              
              // cada vez que use traslate uso push and pop
        
              let tileX =1 , tileY =1;
              
              posX= tileX * gridX;
              posY= tileY * gridY;
              
              // obtengo el color
              let c = img.get(gridX , gridY);
              push();
              translate(posX , posY);
              rotate(radians(random(360)));
              noFill();
              stroke(color(c));
              strokeWeight(random(5));
              point (posX , posY);
              strokeWeight(random(5));
              
              //curve(x1, y1, x2, y2, x3, y3, x4, y4)
              // los puntos mas importantes son X2,X3,Y2,Y3, el resto son puntos de control de la curva
              curve(posX, posY, sin(posX)*60, cos(posY) * sin(posX) * 40, 0, 0, cos(posY) * sin(posX) * 140, cos(posY) * sin(posX) * 50);
              pop();
            }
      curve(posX, posY, sin(posX)*60, cos(posY) * sin(posX) * random(40), random(10), random(10), cos(posY) * sin(posX) * random(140), cos(posY) * sin(posX) * random(50));
    }
}
function keyPressed()
{ 
  if (key === 's')
  {
    saveCanvas("portrait.jpg");
  }
}

