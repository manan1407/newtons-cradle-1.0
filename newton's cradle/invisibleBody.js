class invisibleBody {
    constructor (x,y){
        this.body = Bodies.rectangle(x,y,20,25,{isStatic:true})
        this.width = 10;
        this.hieght = 10;
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        push ();
        rectMode(CENTER);
        fill ("blue");
        rect(pos.x,pos.y,this.width,this.hieght);
        pop ();
    }
}