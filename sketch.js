const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, mesa;
var pacifico;
var player, revolucao;
var francesa,francesa1;

function preload() {
pacifico = loadImage("background.gif");
revolucao = loadImage("tower.png");
}

function setup() {
canvas = createCanvas(1200, 600);
engine = Engine.create();
world = engine.world;  
options={
isStatic:true
} 
mesa= Bodies.rectangle(0,height-1, width*2,1,options);
World.add(world,mesa);
player = Bodies.rectangle(160,350,160,310,options);
World.add(world,player);
francesa1 = 20;
francesa = new RevolucaoFrancesa(180,150,130,100,francesa1);
}

function draw() {
background(189);
image(pacifico, 0, 0, 1200, 600);
Engine.update(engine);
rect(mesa.position.x, mesa.position.y,width*2,1);
push();
imageMode(CENTER);
image(revolucao,player.position.x, player.position.y, 160, 310);
pop();
francesa.massacre();
}
