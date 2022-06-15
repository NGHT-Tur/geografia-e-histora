class Light {
    constructor(x, y, l, a, p, anim){
        this.lworld = Bodies.rectangle(x,y,l,a);
        this.l = l;
        this.a = a;
        this.p = p;
        this.buda = loadImage("boat.png");
        this.animation = anim;
        this.v = 0.05;
        this.titanic = false
        World.add(world,this.lworld);
    }
    animar(){
        this.v += 0.05;
    }
    bomb(){
        var pos = this.lworld.position;
        var angle = this.lworld.angle;
        var index = floor(this.v % this.animation.length);

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.animation[index], 0, this.p, this.l, this.a);
        pop();
    }
    spike(index){
        this.animation = tubaraofantasma;
        this.v = 0.05;
        this.l = 300;
        this.a = 300;
        this.titanic = true;
        setTimeout(()=>{
        Matter.World.remove(world,revolucionarios[index].lworld);
        delete revolucionarios[index]
        },2000);
    }
}