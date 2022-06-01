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
push();
imageMode (CENTER);
image(this.firmaroubalanches,this.x,this.y,this.l,this.a);
pop();
image(this.basedaamizade,90,70,155,155);
noFill();
}
}