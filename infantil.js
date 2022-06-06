class Infantil {
constructor (x,y){
this.cm = 30;
options={
isStatic:true
} 
this.relogiodeparede = Bodies.circle (x,y,this.cm,options);
World.add (world,this.relogiodeparede);
this.album = loadImage ("abandono.png");
}
brinquedo(){
var pos = this.relogiodeparede.position;
push();
imageMode(CENTER);
image(this.album,pos.x,pos.y,this.cm,this.cm);
pop();
}
}