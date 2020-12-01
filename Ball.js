class Ball{
    constructor(x, y, diameter){
        var ball_options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.diameter = diameter;
        this.body = Bodies.circle(x, y, diameter, ball_options);
        World.add(world,this.body);

    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        ellipseMode(RADIUS);
        noStroke();
        fill("aqua");
        ellipse(0, 0,  this.diameter, this.diameter);
        pop();

    }
}
