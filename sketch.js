var garden, gardenImg;
var cat, cat_run;
var mouse, mouse_running;

function preload() {
    //load the images here

    gardenImg = loadImage("garden.png");
    mouseImg = loadAnimation("mouse1.png");
    mouseImage4 = loadAnimation("mouse2.png");
    mouse_run = loadAnimation("mouse3.png", "mouse4.png");
    catImg1 = loadAnimation("cat1.png");
    catImg4 = loadAnimation("cat2.png");
    cat_running = loadAnimation("cat3.png", "cat4.png");

}

function setup(){
    createCanvas(680,400);
    
    garden = createSprite(340, 200);
    garden.addImage("gardenImg", gardenImg);
    garden.scale = 0.7;

    cat = createSprite(500, 340, 20, 100);
    cat.addAnimation("catImg1", catImg1);
    cat.scale = 0.1;

    mouse = createSprite(200, 340, 10, 40);
    mouse.addAnimation("mouseImg", mouseImg);
    mouse.scale = 0.1;

}

function draw() {

    console.log(cat.x - mouse.x);

    background(rgb(30, 100, 220));

if (cat.x - mouse.x < cat.width / 2 - mouse.width / 2) {
    cat.velocityX = 0;
    cat.addAnimation("catImg4", catImg4);
    cat.changeAnimation("catImg4");
    cat.x = 300;

    mouse.addAnimation("mouseImage4", mouseImage4);
    mouse.changeAnimation("mouseImage4");
    mouse.bounce(mouse);
    }

    drawSprites();
}

function keyPressed() {
    
    if (keyCode === LEFT_ARROW) {

        cat.velocityX = -5;
        cat.addAnimation("cat_running", cat_running);
        cat.changeAnimation("cat_running");

        mouse.addAnimation("mouse_run", mouse_run);
        mouse.changeAnimation("mouse_run");
    }
    
}