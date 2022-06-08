class RevolucaoFrancesa {
constructor(x, y, l, a, an){
this.x = x;        
this.y = y;
this.l = l;
this.a = a;
this.an = an;
this.basedaamizade=loadImage("cannonBase.png");
this.firmaroubalanches=loadImage("cannon.png");
}
massacre(){
if(keyIsDown(RIGHT_ARROW) && this.an < 70){
this.an +=1;
}
if(keyIsDown(LEFT_ARROW) && this.an > -30){
this.an -=1;
}
push();
translate(this.x, this.y);
rotate(this.an);
imageMode (CENTER);
image(this.firmaroubalanches,0,0,this.l,this.a);
pop();
image(this.basedaamizade,90,70,155,155);
noFill();
}
}