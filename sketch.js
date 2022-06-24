const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var bunny;
var minkV1;
var linguadegato;
var aculpaedobolsonaro;
var minkV2;
var laka;
var ovoazul;
var minkV3;
var budhadespertada;

function preload(){
  minkV2 = loadImage("Rabbit-01.png");
  laka = loadImage("fabrica.jpg");
  ovoazul = loadImage("Ovo.png");
}

function setup() 
{
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;
  bunny = new Bunny(200, 690, 600, 20);
  minkV1 = new Rope(8, {
  x:245,
  y:30
  });
  rectMode(CENTER);
  ellipseMode(RADIUS);
  imageMode(CENTER);
  textSize(50)
  linguadegato = Bodies.circle(300,300,15);
  Matter.Composite.add(minkV1.body, linguadegato);
  aculpaedobolsonaro= new Coelhopretoextremamentepreto(minkV1, linguadegato);
  minkV3 = createSprite(250, 650,100,100);
  minkV3.addImage (minkV2);
  minkV3.scale = 0.2;
  budhadespertada = createImg("cut_button.png");
  budhadespertada.position(220, 30);
  budhadespertada.size(50, 50);
  budhadespertada.mouseClicked(fenix);
}

function draw() 
{
  background(51);
  image(laka,width/2,height/2,500,700);
  Engine.update(engine);
  minkV1.showdaoliviarodrigo();
  bunny.eletric();
   image(ovoazul,linguadegato.position.x, linguadegato.position.y, 40,55);
  drawSprites();
}

function fenix(){
minkV1.aarteeumaexplosao();
aculpaedobolsonaro.budha();
aculpaedobolsonaro = null;
} 