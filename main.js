canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

rover_w = 100;
rover_h = 90;

rover_x = 10;
rover_y = 10;

b_image ="mars.jpg";
r_image ="rover.png";

function add(){

    b_imgTag = new Image();
    b_imgTag.onload = uploadBackground;
    b_imgTag.src = b_image;

    r_imgTag = new Image();
    r_imgTag.onload = uploadRover;
    r_imgTag.src = r_image;
    console.log("add");

}
function uploadBackground(){

    console.log("uploadBackground");
    ctx.drawImage(b_imgTag,0,0,canvas.width,canvas.height);

}
function uploadRover(){

    console.log("uploadRover");
    ctx.drawImage(r_imgTag,rover_x,rover_y,rover_w,rover_h);

}

window.addEventListener("keydown", myKeydown);

function myKeydown(e){

    keyPressed = e.keyCode;
    console.log(keyPressed);


    if (keyPressed == '38'){
        up();
    }

    if (keyPressed == '40'){
        down();
    }

    if (keyPressed == '37'){
        left();
    }

    if (keyPressed == '39'){
        right();
    }


}

function up(){
    console.log("UP");
    if(rover_y >= 0){
        rover_y = rover_y - 10;
        uploadBackground();
        uploadRover();
    }
}
function down(){
    console.log("DOWN");
    if(rover_y <= 500){
        rover_y = rover_y + 10;
        uploadBackground();
        uploadRover();
    }
}
function left(){
    console.log("LEFT");
    if(rover_x >= 0){
        rover_x = rover_x - 10;
        uploadBackground();
        uploadRover();
    }
}
function right(){
    console.log("RIGHT");
    if(rover_x <= 700){
        rover_x = rover_x + 10;
        uploadBackground();
        uploadRover();
    }
}