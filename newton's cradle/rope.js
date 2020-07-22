class rope {
    constructor (bodyA,bodyB){
        var options ={
            bodyA : bodyA,
            bodyB : bodyB,
            length : 10,
            stiffness : 0.2
     }
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }

    display() {
        var positionB  = this.chain.bodyB.position;
        var positionA  = this.chain.bodyA.position;
        push ();
        line (positionA.x,positionA.y,positionB.x,positionB.y);
        pop ();
    }
}