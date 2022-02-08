class Iron{
	constructor(x,y)
	{
		var options = {
			'density': 30,
			'friction': 5,
			'restitution': 1.2
		}
		this.x=x;
		this.y=y;
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display(){
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("gray");
		    rectMode(CENTER)
            rect(x, y, this.width, this.height);
			pop()
	}

}