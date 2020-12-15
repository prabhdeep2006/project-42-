


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  angleMode(DEGREES); 

}

function draw() {
  background(255,255,255);

  translate(200,200); 
  rotate(-90); 

  hr = hour(); 
  mn = minute();
  sc = second();  
    scAngle = map(sc,0,60,0,360);
    hrAngle = map(mn,0,60,0,360); 
    mnAngle = map(hr % 12,0,60,0,360); 
  push(); 
  rotate(scAngle);  
  stroke(255,0,0); 
  strokeWeight(7); 
  line(0,0,100,0); 
  pop(); 

  stroke(255,0,255); 
  point(0,0); 

  strokeWeight(10); 
  noFill(); 

  stroke(255,0,0); 
  arc(0,0,300,300,0,scAngle); 

  stroke(0,255,0); 
  arc(0,0,200,200,mnAngle); 

  stroke(0,0,255); 
  arc(0,0,100,100,0,hrAngle); 

  drawSprites();
}