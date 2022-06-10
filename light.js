class Light {
    constructor(x, y, l, a, p){
        this.lworld = Bodies.rectangle(x,y,l,a);
        this.l = l;
        this.a = a;
        this.p = p;
        this.buda = loadImage("boat.png");
        World.add(world,this.lworld);
    }

    bomb(){
        var pos = this.lworld.position;
        var angle = this.lworld.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.buda, 0, this.p, this.l, this.a);
        pop();
    }
}