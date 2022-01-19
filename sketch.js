const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, backgroundImg;

var canvas, angle, tower, ground, cannon,boat;
var score = 0;
var balls = []
let boats = []

var arr1 = [256,2688]
var arr2 = [[32,45], [45,46],[688,4555]]
console.log(arr1)
console.log(arr2)
console.log(arr2[2][1])


function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
}

function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  var options = {
    isStatic: true
    
  }
  angleMode(DEGREES)
  angle = 15

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, options);
  World.add(world, ground);

  tower = Bodies.rectangle(160, 350, 160, 310, options);
  World.add(world, tower);

  cannon = new Cannon(180, 110, 130, 100, angle);
  //cannonBall = new CannonBall(cannon.x,cannon.y)

  


}

function draw() {

  image(backgroundImg, 0, 0, width, height);

  Engine.update(engine);
  rect(ground.position.x, ground.position.y, width * 2, 1);
  push();
  imageMode(CENTER);
  image(towerImage,tower.position.x, tower.position.y, 160, 310);
  pop();

  cannon.display();
  //cannonBall.show()

  showBoats()


 

  for(let i = 0;i<balls.length;i++){
    showCannonBalls(balls[i])

  }
  
}
//keyboard trigger
function keyReleased(){

  if(keyCode===DOWN_ARROW){
      
    balls[balls.length-1].shoot()
  }
}

function keyPressed(){

  if(keyCode===DOWN_ARROW){
      var cannonball = new CannonBall(cannon.x,cannon.y)
      balls.push(cannonball)
      
  }
}

function showCannonBalls(ball){
  if(ball){
    ball.show()
  }
  
}

function showBoats(){
if(boats.length>0){
  if(boats[boats.length-1].body.position.x < width-300){
    let positions = [-40,-60,-70,-20]
    let position = random(positions)
    boat = new Boat(width,height-100,170,170,position)
    boats.push(boat)
  }  
  for(let i = 0; i<boats.length; i++){
    Matter.Body.setVelocity(boat.body,{x:-0.9,y:0})
    boats[i].show()
    
}

}else{
  boat = new Boat(width-10,height-60,170,170,-80)
  boats.push(boat)


}

}