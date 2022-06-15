class Infantil {
constructor (x,y){
this.cm = 30;
options={
isStatic:true
} 
this.relogiodeparede = Bodies.circle (x,y,this.cm,options);
World.add (world,this.relogiodeparede);
this.album = loadImage ("abandono.png");
this.ddtank = []
this.v = 0.05;
this.animation = [this.album];
this.carromaiscongeladodomundo = false;
}
brinquedo(){
var pos = this.relogiodeparede.position;
var angle = this.relogiodeparede.angle;
var index = floor(this.v % this.animation.length);

push();
translate(pos.x, pos.y);
rotate(angle);
imageMode(CENTER);
image(this.animation[index],0,0,this.cm,this.cm);
pop();
if(this.relogiodeparede.velocity.x > 0 && pos.x > 10 && ! this.carromaiscongeladodomundo){
var position = [pos.x, pos.y];
this.ddtank.push(position);
}
for(var i = 0; i < this.ddtank.length; i++){
image(this.album, this.ddtank[i][0], this.ddtank[i][1], 5,5);
}
}
animar(){
    this.v += 0.05;
}
arminhadeagua(){
var newAn = francesa.an - 28;
newAn *= (3.14/180);
var velocidade = p5.Vector.fromAngle(newAn);
velocidade.mult(0.5);
Matter.Body.setStatic(this.relogiodeparede, false);
Matter.Body.setVelocity(this.relogiodeparede, {x:velocidade.x*(180/3.14), y:velocidade.y*(180/3.14)});
}
spike(index){
    Matter.Body.setVelocity(this.relogiodeparede, {x:0, y:0});
    this.carromaiscongeladodomundo = true;
    this.animation = CSGO;
    this.v = 0.05;
    this.cm = 150;  
    setTimeout(()=>{
    Matter.World.remove(world,this.relogiodeparede);
    delete cheirodesangue[index]
    },1000);
}
}