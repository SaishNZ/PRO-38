var bg;
var cycle1, cycle2;
var txt1, txt2, txt3, txt4;
var startB;
var gs = "start";

function  preload(){
   track = loadImage("images/track.jpg");
   cyclist_1 = loadAnimation("images/mainPlayer1.png", "images/mainPlayer2.png");
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  startB = createButton()
  startB.html("START");
  startB.position(window.innerWidth/2.1, window.innerHeight/2.3)
  startB.style("borderRadius", "80px")
  startB.style("width", "110px")
  startB.style("height", "80px")
  startB.style("backgroundColor", "gold")
  startB.style("color", "red")
  startB.style("fontSize", "20px")
  startB.mousePressed(change);
 
  cycle1 = createSprite(window.innerWidth/13, window.innerHeight/2.9, 25, 25);
  cycle1.addAnimation("cyclist1", cyclist_1); 
  cycle1.scale = 0.1;

  cycle2 = createSprite(window.innerWidth/13, window.innerHeight/1.55, 25, 25);
  cycle2.addAnimation("cyclist2", cyclist_1); 
  cycle2.scale = 0.1;
}

function draw() {
  background("silver"); 
  
  if(gs === "start") {
    cycle1.visible = false;
    cycle2.visible = false;

    txt1 = createElement("h1")
    txt1.html("Player V/S Computer- CYCLE RACING GAME")
    txt1.position(window.innerWidth/3, window.innerHeight/30)
    txt1.style("width", "530px")
    txt1.style("height", "30px")
    txt1.style("backgroundColor", "white")
    txt1.style("color", "purple")
    txt1.style("fontSize", "25px")

    txt2 = createElement("h1")
    txt2.html("Instructions :-")
    txt2.position(window.innerWidth/6.26, window.innerHeight/1.1)
    txt2.style("width", "160px")
    txt2.style("height", "30px")
    txt2.style("backgroundColor", "white")
    txt2.style("color", "red")
    txt2.style("fontSize", "25px")

    txt3 = createElement("h2")
    txt3.html("1) Press the 'RIGHT ARROW KEY' to move.")
    txt3.position(window.innerWidth/3.85, window.innerHeight/1.106)
    txt3.style("width", "500px")
    txt3.style("height", "30px")
    txt3.style("backgroundColor", "white")
    txt3.style("color", "teal")
    txt3.style("fontSize", "25px")

    txt4 = createElement("h2")
    txt4.html("2) Reach before the opponent to win the race.")
    txt4.position(window.innerWidth/1.75, window.innerHeight/1.106)
    txt4.style("width", "500px")
    txt4.style("height", "30px")
    txt4.style("backgroundColor", "white")
    txt4.style("color", "teal")
    txt4.style("fontSize", "25px")
  }

  if(gs === "play") {
    startB.hide();

    cycle1.visible = true;
    cycle2.visible = true;

    image(track, 0, 0, window.innerWidth*5, window.innerHeight)    
  }

  if(keyDown(RIGHT_ARROW)){
    cycle1.x = cycle1.x+10;
    camera.position.x = cycle1.position.x;
  }

  drawSprites();
}

function change() {
  gs = "play";
  cycle2.velocityX = cycle2.velocityX+9;
}