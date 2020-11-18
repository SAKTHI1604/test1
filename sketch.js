var fixedRect, movRect;

function setup() {
  createCanvas(800,400);
 fixedRect =  createSprite(400, 200, 50, 50);
 fixedRect.shapeColor="green";
 movRect = createSprite(400,200,80,30);
 movRect.shapeColor="green";
}

function draw() {
  console.log(movRect.x-fixedRect.x) ;
  background('black');
   
  movRect.x = World.mouseX;
  movRect.y = World.mouseY;
  if(movRect.x-fixedRect.x<fixedRect.width/2+movRect.width/2){
    movRect.shapeColor="red";
    fixedRect.shapeColor="blue";
  }
  else {
    movRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  drawSprites();
}