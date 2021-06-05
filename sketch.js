const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine,world;
var back;
function preload(){
  backImg = loadImage("ground.png");
  boyImg = loadImage("1.png");
  treeImg = loadImage("tree.png");
  backgroundImg = loadImage("back.png");
}
function setup() {
  createCanvas(windowWidth,windowHeight);

  engine = Engine.create();
  world = engine.world;
  
  gr = new Ground(width/2,height,width,30);

	mango1=new mango(1100,150,30);
  mango2=new mango(1170,180,30);
	mango3=new mango(1010,190,30);
	mango4=new mango(1000,120,30);
	mango5=new mango(1100,120,30);

  st = new Stone(width/4,height/2,30,30);
  launcher = new Through(st.body,{x:width/4+10,y:height-200})

  Engine.run(engine);
}

function draw() {
  background(backgroundImg);
  Engine.update(engine);

  
  image(backImg,0,height/2+161,2000,210);
  image(boyImg,width/4,height/2+100,150,270);

  imageMode(CENTER);
  image(treeImg,width-500,height/2+50,700,650);

  gr.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  st.display();
  launcher.display();
  detectollision(st,mango1);
  detectollision(st,mango2);
  detectollision(st,mango3);
  detectollision(st,mango4);
  detectollision(st,mango5);
}

function mouseDragged()
{
	Matter.Body.setPosition(st.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launcher.fly();
    
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(st.body, {x:235, y:420}) 
	  launcher.attach(st.body);
	}
  }

  function detectollision(ston,mang){
  mangoBodyPosition=mang.body.position
  stoneBodyPosition=ston.body.position

  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  if (distance<=mang.r+ston.r)
 {
   Matter.Body.setStatic(mang.body , false);
 } 
}