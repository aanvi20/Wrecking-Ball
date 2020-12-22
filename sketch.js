const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground
// left Row 1
var block1, block2, block3, block4
// left Row 1
var block5, block6, block7, block8
// left Row 1
var block9, block10, block11, block12

var sling1
var bob1
var backgroundIMG

function preload(){
   backgroundIMG = loadImage("background.gif")
}

function setup(){
    var canvas = createCanvas(1500,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(1500, 790, 3000, 10)
    block1 = new Box(1000, 780, 40, 40)
    block2 = new Box(1000, 780, 40, 40)
    block3 = new Box(1000, 780, 40, 40)
    block4 = new Box(1000, 780, 40, 40)

    block5 = new Box(1040, 780, 40, 40)
    block6 = new Box(1040, 780, 40, 40)
    block7 = new Box(1040, 780, 40, 40)
    block8 = new Box(1040, 780, 40, 40)

    block9 = new Box(1080, 780, 40, 40)
    block10 = new Box(1080, 780, 40, 40)
    block11 = new Box(1080, 780, 40, 40)
    block12 = new Box(1080, 780, 40, 40)

    block13 = new Box(1120, 780, 40, 40)
    block14 = new Box(1120, 780, 40, 40)
    block15 = new Box(1120, 780, 40, 40)
    block16 = new Box(1120, 780, 40, 40)


    block17 = new Box(1160, 780, 40, 40)
    block18 = new Box(1160, 780, 40, 40)
    block19 = new Box(1160, 780, 40, 40)
    block20 = new Box(1160, 780, 40, 40)

    block21 = new Box(1210, 780, 40, 40)
    block22 = new Box(1210, 780, 40, 40)
    block23 = new Box(1210, 780, 40, 40)
    block24 = new Box(1210, 780, 40, 40)

    block25 = new Box(1000, 780, 40, 40)
    block26 = new Box(1000, 780, 40, 40)
    block27 = new Box(1000, 780, 40, 40)
    block28 = new Box(1000, 780, 40, 40)

    block29 = new Box(1040, 780, 40, 40)
    block30 = new Box(1040, 780, 40, 40)
    block31 = new Box(1040, 780, 40, 40)
    block32 = new Box(1040, 780, 40, 40)

    block33 = new Box(1080, 780, 40, 40)
    block34 = new Box(1080, 780, 40, 40)
    block35 = new Box(1080, 780, 40, 40)
    block36 = new Box(1080, 780, 40, 40)

    block37 = new Box(1120, 780, 40, 40)
    block38 = new Box(1120, 780, 40, 40)
    block39 = new Box(1120, 780, 40, 40)
    block40 = new Box(1120, 780, 40, 40)


    block41 = new Box(1160, 780, 40, 40)
    block42 = new Box(1160, 780, 40, 40)
    block43 = new Box(1160, 780, 40, 40)
    block44 = new Box(1160, 780, 40, 40)

    block45 = new Box(1210, 780, 40, 40)
    block46 = new Box(1210, 780, 40, 40)
    block47 = new Box(1210, 780, 40, 40)
    block48 = new Box(1210, 780, 40, 40)
  
    bob1 = new Bob(700, 300, 150)
    sling1 = new Sling(bob1.body,{x:700 , y:300})

    
}

function draw(){
    
    background(backgroundIMG);
    Engine.update(engine);
    ground.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
   
    block5.display();
    block6.display();
    block7.display();
    block8.display();

    block9.display();
    block10.display();
    block11.display();
    block12.display();

    
    block13.display();
    block14.display();
    block15.display();
    block16.display();

    
    block17.display();
    block18.display();
    block19.display();
    block20.display();

    
    block21.display();
    block22.display();
    block23.display();
    block24.display();

    block25.display();
    block26.display();
    block27.display();
    block28.display();
   
    block29.display();
    block30.display();
    block31.display();
    block32.display();

    block33.display();
    block34.display();
    block35.display();
    block36.display();

    
    block37.display();
    block38.display();
    block39.display();
    block40.display();

    
    block41.display();
    block42.display();
    block43.display();
    block44.display();

    
    block45.display();
    block46.display();
    block47.display();
    block48.display();
    

   sling1.display();
   bob1.display();
   
}

function mouseDragged(){
	Matter.Body.setPosition(bob1.body, {x: mouseX, y: mouseY})
  }
