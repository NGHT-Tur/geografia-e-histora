class Coelhopretoextremamentepreto{
constructor(a, b){
var mink = a.body.bodies.length -2;
this.preto = Constraint.create({
bodyA:a.body.bodies[mink],
pointA:{
x:0,
y:0
},
bodyB: b,
pointB:{
x:0,
y:0
},
length: -10,
stiffness: 0.01
});
World.add(engine.world, this.preto);
}
budha(){
World.remove(engine.world, this.preto);
}
}