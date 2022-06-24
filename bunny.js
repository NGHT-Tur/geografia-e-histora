class Bunny {
    constructor(posX, posY, lar, alt){
        var coelho = {
            isStatic: true
        };
        this.corpo = Bodies.rectangle(posX, posY, lar, alt, coelho);
        this.lar = lar;
        this.alt = alt;
        World.add(world, this.corpo);
    }

    eletric(){
        var pos = this.corpo.position;

        push();
        rectMode(CENTER);
        noStroke();
        fill("chocolate");
        rect(pos.x, pos.y, this.lar, this.alt);
        pop();
    }
}