var canvas = new fabric.Canvas('myCanvas');
block_image_width = 30;
block_image_height = 30;
player_x = 10;
player_y = 10;
player_object = "";
function playerupdate(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object = Img ;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    });
}
function newimage(getImage){
    fabric.Image.fromURL(getImage , function(Img){
        block_object = Img ;
        block_object.scaleToWidth(block_image_width);
        block_object.scaleToHeight(block_image_height);
        block_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_object);
    });
}

window.addEventListener("keydown", my_keydown)

function my_keydown(e){
    keypressed = e.keyCode;
    console.log(keypressed);
    if(e.shiftKey == true && keypressed == "80"){
        console.log("SHIFT and P are pressed together");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }

    if(e.shiftKey == true && keypressed == "77"){
        console.log("SHIFT and M are pressed together");
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }

    if(keypressed == "38"){
        console.log("up key is pressed");
        up();
    }
    if(keypressed == "37"){
        console.log("left key is pressed");
        left();
    }
    if(keypressed == "39"){
        console.log("right key is pressed");
        right();
    }

    if(keypressed == "40"){
        console.log("down key is pressed");
        down();
    }

    if(keypressed == "67"){
        console.log("c");
        newimage("cloud.jpg");
    }

    if(keypressed == "68"){
        console.log("d");
        newimage("dark_green.png");
    }

    if(keypressed == "71"){
        console.log("g");
        newimage("ground.png");
    }

    if(keypressed == "76"){
        console.log("l");
        newimage("light_green.png");
    }
    if(keypressed == "82"){
        console.log("r");
        newimage("roof.jpg");
    }
    if(keypressed == "84"){
        console.log("t");
        newimage("trunk.jpg");
    }
    if(keypressed == "85"){
        console.log("u");
        newimage("unique.png");
    }

    if(keypressed == "87"){
        console.log("w");
        newimage("wall.jpg");
    }

    if(keypressed == "89"){
        console.log("y");
        newimage("yellow-wall.png");
    }
}

function up(){
    if(player_y > 0){
        player_y = player_y - block_image_height;
        console.log("block image height=" + block_image_height)
        console.log("When Up arrow keys is pressed, X = " + player_x + " Y = " + player_y);
        canvas.remove(player_object);
        playerupdate();
    }
}

function down(){
    if(player_y < 450){
        player_y = player_y + block_image_height;
        console.log("block image height=" + block_image_height)
        console.log("When Down arrow keys is pressed, X = " + player_x + " Y = " + player_y);
        canvas.remove(player_object);
        playerupdate();
    }
}

function left(){
    if(player_x >= 0){
        player_x = player_x - block_image_width;
        console.log("block image width =" + block_image_width)
        console.log("When Left arrow keys is pressed, X = " + player_x + " Y = " + player_y);
        canvas.remove(player_object);
        playerupdate();
    }
}

function right(){
    if(player_x <= 850){
        player_x = player_x + block_image_width;
        console.log("block image width =" + block_image_width)
        console.log("When Left arrow keys is pressed, X = " + player_x + " Y = " + player_y);
        canvas.remove(player_object);
        playerupdate();
    }
}