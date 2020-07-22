class roof {
    constructor (x,y){
        this.body = Bodies.rectangle(x,y,250,25,{isStatic:true})
        this.width = 250;
        this.hieght = 25;
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        push ();
        rectMode(CENTER);
        fill ("grey");
        rect(pos.x,pos.y,this.width,this.hieght);
        pop ();
    }
}