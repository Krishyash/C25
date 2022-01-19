class Boat{

    constructor(x,y,w,h,boatPosition){

        let options = {
            restitution: 0.8,
            friction: 1,
            density:1,
        }
        this.body = Bodies.rectangle(x,y,w,h,options)
        this.w = w
        this.h = h
        this.boatPosition = boatPosition
        this.image = loadImage("./assets/boat.png")
        World.add(world,this.body)

    }

    show(){

        let pos = this.body.position

        push()
        translate(pos.x,pos.y)
        rotate(this.angle)
        imageMode(CENTER)
        image(this.image,0,this.boatPosition,this.w,this.h)

        pop()


    }

}