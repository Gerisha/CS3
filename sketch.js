var border1, border2, border3, border4;
var stage1, stage2, stage3, stage4, stage5, stage6;
var safehandle, safehandle1;
var mazepart1, mazepart2, mazepart3, mazepart4, mazepart5, mazepart6, mazepart7, mazepart8, mazepart9, mazepart10, mazepart11, mazepart12, mazepart13, mazepart14, mazepart15, mazepart16;
var silvercoin1, silvercoin2, silvercoin3;
var kid, handle, handle2, laser1, laser2, coin1;
var pin1, pin2, robot, wheel, treasure1, treasure2;
var shooter1, shooter, gameState;
var yourscore, lives;
var edges;

function setup() {

  k = loadAnimation('g.png', "g1.png", "g2.png", "g3.png")
  key = loadImage("key.png")
  silver = loadImage("silvercoin.png")
  gold = loadImage("goldcoin.png")
  whee = loadImage("wheel.png")
  robo = loadImage("robot.png")
  backg = loadImage("backg.png")
  
  obstacles = new Group()

  border1 = createSprite(1, 4, 800, 7);
  border1.shapeColor = "black";

  border2 = createSprite(1, 9, 15, 800);
  border2.shapeColor = "black";

  border3 = createSprite(399, 391, 15, 800);
  border3.shapeColor = "black";

  border4 = createSprite(1, 396, 800, 7);
  border4.shapeColor = "black";

  stage1 = createSprite(70, 276, 200, 7);
  stage1.shapeColor = "black";

  stage2 = createSprite(399, 276, 300, 7);
  stage2.shapeColor = "black";

  stage3 = createSprite(210, 283, 100, 7);
  stage3.shapeColor = "black";

  stage4 = createSprite(16, 132, 300, 7);
  stage4.shapeColor = "black";

  stage5 = createSprite(399, 132, 300, 7);
  stage5.shapeColor = "black";

  stage6 = createSprite(210, 140, 100, 10);
  stage6.shapeColor = "black";

  safehandle = createSprite(210, 269, 50, 7);
  safehandle.shapeColor = "black";

  safehandle1 = createSprite(210, 128, 50, 7);
  safehandle1.shapeColor = "black";

  mazepart1 = createSprite(46, 300, 7, 50);
  mazepart1.shapeColor = "red";

  mazepart2 = createSprite(104, 283, 110, 7);
  mazepart2.shapeColor = "red";

  mazepart3 = createSprite(160, 300, 7, 50);
  mazepart3.shapeColor = "red";

  mazepart4 = createSprite(106, 337, 50, 7);
  mazepart4.shapeColor = "red";

  mazepart5 = createSprite(101, 365, 7, 60);
  mazepart5.shapeColor = "red";

  mazepart6 = createSprite(150, 389, 100, 7);
  mazepart6.shapeColor = "red";

  mazepart7 = createSprite(203, 371, 7, 41);
  mazepart7.shapeColor = "red";

  mazepart8 = createSprite(52, 380, 100, 7);
  mazepart8.shapeColor = "red";

  mazepart9 = createSprite(198, 304, 72, 7);
  mazepart9.shapeColor = "red";

  mazepart10 = createSprite(230, 320, 7, 30);
  mazepart10.shapeColor = "red";

  mazepart11 = createSprite(260, 320, 7, 76);
  mazepart11.shapeColor = "red";

  mazepart12 = createSprite(249, 389, 50, 7);
  mazepart12.shapeColor = "red";

  mazepart13 = createSprite(294, 350, 7, 76);
  mazepart13.shapeColor = "red";

  mazepart14 = createSprite(330, 313, 65, 7);
  mazepart14.shapeColor = "red";

  mazepart15 = createSprite(361, 338, 7, 50);
  mazepart15.shapeColor = "red";

  mazepart16 = createSprite(313, 349, 30, 7);
  mazepart16.shapeColor = "red";

  kid = createSprite(17, 353);
  kid.addAnimation("kid", k);
  kid.scale = 0.2;


  handle = createSprite(318, 330);
  handle.addImage("alien", key);
  handle.scale = 0.15

  silvercoin1 = createSprite(102, 305);
  silvercoin1.addImage("silver", silver);
  silvercoin1.scale = 0.1

  silvercoin2 = createSprite(244, 368);
  silvercoin2.addImage("silver1", silver);
  silvercoin2.scale = 0.1

  silvercoin3 = createSprite(309, 373);
  silvercoin3.addImage("silver2", silver);
  silvercoin3.scale = 0.1

  laser1 = createSprite(68, 149, 80, 7);
  laser1.shapeColor = "green";

  laser2 = createSprite(333, 257, 80, 7);
  laser2.shapeColor = "green";

  coin1 = createSprite(209, 206);
  coin1.addImage("gold", gold);
  coin1.scale = 0.2

  handle2 = createSprite(350, 159);
  handle2.addImage("handle", key);
  handle2.scale = 0.2

  shooter1 = createSprite(10, 70, 30, 20);
  shooter1.shapeColor = "pink";

  shooter2 = createSprite(389, 48, 30, 20);
  shooter2.shapeColor = "pink";

  pin1 = createSprite(28, 69, 10, 7);
  pin1.shapeColor = "black";

  pin2 = createSprite(362, 48, 10, 7);
  pin2.shapeColor = 'black';

  robot = createSprite(155, 385);
  robot.addImage("robo", robo);
  robot.scale = 0.1

  wheel = createSprite(57, 18);
  wheel.addImage("wheeli", whee);
  wheel.scale = 0.2

  treasure1 = createSprite(185, 13);
  treasure1.addImage("key", key);
  treasure1.scale = 0.2

  gameState = "serve";

  yourscore = 0;
  lives = 3;
  edges = createEdgeSprites();
  obstacles.add(border1)
  obstacles.add(border2)
  obstacles.add(border3)
  obstacles.add(border4)
  obstacles.add(stage1)
  obstacles.add(stage2)
  obstacles.add(stage3)
  obstacles.add(stage4)
  obstacles.add(stage5)
  obstacles.add(mazepart1)
  obstacles.add(mazepart2)
  obstacles.add(mazepart3)
  obstacles.add(mazepart4)
  obstacles.add(mazepart5)
  obstacles.add(mazepart6)
  obstacles.add(mazepart7)
  obstacles.add(mazepart8)
  obstacles.add(mazepart9)
  obstacles.add(mazepart10)
  obstacles.add(mazepart11)
  obstacles.add(mazepart12)
  obstacles.add(mazepart13)
  obstacles.add(mazepart14)
  obstacles.add(mazepart15)
  obstacles.add(mazepart16)
  obstacles.add(silvercoin1)
  obstacles.add(silvercoin2)
  obstacles.add(silvercoin3)
  obstacles.add(kid)
  obstacles.add(handle)
  obstacles.add(handle2)
  obstacles.add(laser1)
  obstacles.add(laser2)
  obstacles.add(coin1)
  obstacles.add(pin1)
  obstacles.add(pin2)
  obstacles.add(robot)
  obstacles.add(treasure1)
  obstacles.add(wheel)
  
  




}
function preload(){
  you=loadImage("you.png")
}



function draw() {
  background("lightgreen");

  if (keyDown("up")) {
    kid.y = kid.y - 3;
  }

  if (keyDown("down")) {
    kid.y = kid.y + 1;

  }

  if (keyDown("left")) {
    kid.x = kid.x - 3;


  }

  if (keyDown("right")) {
    kid.x = kid.x + 3;

  }


  kid.bounceOff(edges);
  kid.bounceOff(border1);
  kid.bounceOff(border2);
  kid.bounceOff(border3);
  kid.bounceOff(border4);
  kid.bounceOff(mazepart1);
  kid.bounceOff(mazepart2);
  kid.bounceOff(mazepart3);
  kid.bounceOff(mazepart4);
  kid.bounceOff(mazepart5);
  kid.bounceOff(mazepart6);
  kid.bounceOff(mazepart7);
  kid.bounceOff(mazepart8);
  kid.bounceOff(mazepart9);
  kid.bounceOff(mazepart10);
  kid.bounceOff(mazepart11);
  kid.bounceOff(mazepart12);
  kid.bounceOff(mazepart13);
  kid.bounceOff(mazepart14);
  kid.bounceOff(mazepart15);
  kid.bounceOff(mazepart16);
  kid.bounceOff(stage1);
  kid.bounceOff(stage2);
  kid.bounceOff(stage3);
  kid.bounceOff(stage4);
  kid.bounceOff(stage5);
  kid.bounceOff(stage6);
  kid.bounceOff(safehandle);
  kid.bounceOff(safehandle1);
  pin1.bounceOff(border1);
  pin1.bounceOff(border2);
  pin1.bounceOff(border3);
  pin1.bounceOff(border4);
  pin2.bounceOff(border1);
  pin2.bounceOff(border2);
  pin2.bounceOff(border3);
  pin2.bounceOff(border4);
  pin1.bounceOff(shooter1);
  pin2.bounceOff(shooter2);
  laser1.bounceOff(stage1);
  laser1.bounceOff(stage2);
  laser1.bounceOff(stage3);
  laser1.bounceOff(stage4);
  laser1.bounceOff(stage5);
  laser1.bounceOff(stage6);
  laser2.bounceOff(stage1);
  laser2.bounceOff(stage2);
  laser2.bounceOff(stage3);
  laser2.bounceOff(stage4);
  laser2.bounceOff(stage5);
  laser2.bounceOff(stage6);
  laser1.bounceOff(border1);
  laser1.bounceOff(border2);
  laser1.bounceOff(border3);
  laser1.bounceOff(border4);
  laser1.bounceOff(safehandle1);
  laser2.bounceOff(border1);
  laser2.bounceOff(border2);
  laser2.bounceOff(border3);
  laser2.bounceOff(border4);
  laser2.bounceOff(safehandle1);
  laser1.bounceOff(safehandle);
  laser2.bounceOff(safehandle);
  laser1.bounceOff(mazepart1);
  laser1.bounceOff(mazepart2);
  laser1.bounceOff(mazepart3);
  laser1.bounceOff(mazepart4);
  laser1.bounceOff(mazepart5);
  laser1.bounceOff(mazepart6);
  laser1.bounceOff(mazepart7);
  laser1.bounceOff(mazepart8);
  laser1.bounceOff(mazepart9);
  laser1.bounceOff(mazepart10);
  laser1.bounceOff(mazepart11);
  laser1.bounceOff(mazepart12);
  laser1.bounceOff(mazepart13);
  laser1.bounceOff(mazepart14);
  laser1.bounceOff(mazepart15);
  laser1.bounceOff(mazepart16);
  laser2.bounceOff(mazepart1);
  laser2.bounceOff(mazepart2);
  laser2.bounceOff(mazepart3);
  laser2.bounceOff(mazepart4);
  laser2.bounceOff(mazepart5);
  laser2.bounceOff(mazepart6);
  laser2.bounceOff(mazepart7);
  laser2.bounceOff(mazepart8);
  laser2.bounceOff(mazepart9);
  laser2.bounceOff(mazepart10);
  laser2.bounceOff(mazepart11);
  laser2.bounceOff(mazepart12);
  laser2.bounceOff(mazepart13);
  laser2.bounceOff(mazepart14);
  laser2.bounceOff(mazepart15);
  laser2.bounceOff(mazepart16);
  robot.bounceOff(mazepart1);
  robot.bounceOff(mazepart2);
  robot.bounceOff(mazepart3);
  robot.bounceOff(mazepart4);
  robot.bounceOff(mazepart5);
  robot.bounceOff(mazepart6);
  robot.bounceOff(mazepart7);
  robot.bounceOff(mazepart8);
  robot.bounceOff(mazepart9);
  robot.bounceOff(mazepart10);
  robot.bounceOff(mazepart11);
  robot.bounceOff(mazepart12);
  robot.bounceOff(mazepart13);
  robot.bounceOff(mazepart14);
  robot.bounceOff(mazepart15);
  robot.bounceOff(mazepart16);
  robot.bounceOff(border1);
  robot.bounceOff(border2);
  robot.bounceOff(border3);
  robot.bounceOff(border4);
  robot.bounceOff(stage1);
  robot.bounceOff(stage2);
  robot.bounceOff(stage3);
  robot.bounceOff(stage4);
  robot.bounceOff(stage5);
  robot.bounceOff(stage6);
  wheel.bounceOff(border1);
  wheel.bounceOff(border2);
  wheel.bounceOff(border3);
  wheel.bounceOff(border4);



  stroke(0);
  fill("yellow");
  textSize(15);
  text("KEY", 308, 304);

  stroke(0);
  fill("yellow");
  textSize(15);
  text("DOOR", 190, 256);

  stroke(0);
  fill("yellow");
  textSize(15);
  text("KEY", 360, 173);

  stroke(0);
  fill("yellow");
  textSize(15);
  text("DOOR", 190, 104);





  fill("yellow");
  textSize(20);
  text(yourscore, 16, 25);
  fill("yellow");
  textSize(20);
  text(lives, 364, 22);
  fill("yellow");
  textSize(20);
  text("LIVES = ", 284, 22);



  if (keyDown("right") && gameState === "serve") {
    fill("yellow");
    textSize(20);
    pin1.velocityX = 2;
    pin2.velocityX = -2;
    laser1.velocityX = 4;
    laser1.velocityY = 4;
    laser2.velocityX = -1;
    laser2.velocityY = -2;
     
    wheel.velocityX = 3;

     gameState = "play";
  }

  
  if (kid.isTouching(robot)) {
    lives = lives - 1;
    kid.x = 17;
    kid.y = 353;
  }

  if (kid.isTouching(laser1)) {
    lives = lives - 1;
    kid.x = 17;
    kid.y = 353;


  }

  if (kid.isTouching(laser2)) {
    lives = lives - 1;
    kid.x = 17;
    kid.y = 353;

  }

  if (kid.isTouching(pin1)) {
    lives = lives - 1;
    kid.x = 17;
    kid.y = 353;

  }

  if (kid.isTouching(pin2)) {
    lives = lives - 1;
    kid.x = 17;
    kid.y = 353;

  }

  if (kid.isTouching(wheel)) {
    lives = lives - 1;
    kid.x = 204;
    kid.y = 277;
  }






  if (lives === 0) {
    gameState = "over";
    fill("yellow");
    textSize(20);
    text("GAME OVER !!!", 160, 174);
    text("PRESS 'R' TO RESTART", 200, 240);
    kid.x = 9;
    kid.y = 362;
    laser1.velocityX = 0;
    laser1.velocityY = 0;
    laser2.velocityX = 0;
    laser2.velocityY = 0;
    pin1.velocityX = 0;
    pin2.velocityX = 0;
    robot.velocityX = 0;
    robot.velocityY = 0;
    robot.x = 153;
    robot.y = 385;
    wheel.velocityX = 0;
    wheel.x = 57;
    wheel.y = 18;
    yourscore = 0;
    pin1.x = 28;
    pin1.y = 69;
    pin2.x = 362;
    pin2.y = 48;
    laser1.x = 68;
    laser1.y = 149;
    laser2.x = 333;
    laser2.y = 257;
  }

  if (kid.collide(treasure1)||kid.x===186||kid.x===190||kid.x===195 ) {
    console.log(" mastermind");
    
    
    // fill("red");
    // textSize(20);
    // text("YOU MASTERMIND WON", 68, 69);
end()
next()
    // kid.x = 185;
    // kid.y = 28;
    pin1.velocityX = 0;
    pin2.velocityY = 0;
    wheel.velocityX = 0;
    laser1.velocityX = 0;
    laser1.velocityY = 0;
    laser2.velocityX = 0;
    laser2.velocityY = 0;
    robot.velocityX = 0;
    robot.velocityY = 0;
    yourscore = 0;
  }
treasure1.debug=false;
treasure1.setCollider("rectangle", 0, 0, 60, 60);

function next(){
  NEXT=createButton("next")

  NEXT.position(200,10)
  NEXT.mousePressed(() => {
    window.open("https://gerisha.github.io/win/", '_top')
  })
}
function end(){
  fill("red");
  stroke(5)
    textSize(20);
    text("YOU MASTERMIND WON", 100, 200);
    console.log("end")

}




  if (keyDown("R") && gameState === "over") {
    gameState = "serve";
    kid.velocityX = 0;
    kid.velocityY = 0;
    lives = 3;
    silvercoin1.x = 102;
    silvercoin1.y = 305;
    silvercoin2.x = 244;
    silvercoin2.y = 368;
    silvercoin3.x = 309;
    silvercoin3.y = 373;
    handle.x = 318;
    handle.y = 330;
    stage3.x = 210;
    stage3.y = 283;
    stage6.x = 210;
    stage6.y = 140;
    coin1.x = 209;
    coin1.y = 206;
    handle2.x = 377;
    handle2.y = 149;
  }

  if (kid.isTouching(silvercoin1)) {
    silvercoin1.x = -50;
    silvercoin1.y = -50;
    yourscore = yourscore + 25;
  }

  if (kid.isTouching(silvercoin2)) {
    silvercoin2.x = -50;
    silvercoin2.y = -50;
    yourscore = yourscore + 10;

  }

  if (kid.isTouching(silvercoin3)) {
    silvercoin3.x = -50;
    silvercoin3.y = -50;
    yourscore = yourscore + 50;
  }

  if (kid.isTouching(safehandle1)) {
    stage3.x = 210;
    stage3.y = 283;
    kid.x = 13;
    kid.y = 196;
    laser1.velocityX = 3;
    laser1.velocityY = 4;
    laser2.velocityY = -3;
    laser2.velocityY = 4;
  }

  if (kid.isTouching(handle)) {
    handle.x = -50;
    stage3.x = -50;
  }

  if (kid.isTouching(coin1)) {
    yourscore = yourscore + 50;
    coin1.x = -50;
    coin1.y = -50;
  }

  if (kid.isTouching(handle2)) {
    stage6.x = -50;
    stage6.y = -50;
    handle2.x = -50;
    handle2.y = -50;
  }

  drawSprites();
}
