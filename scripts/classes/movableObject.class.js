class MoveableObject{
    img;
    x = 120;
    y = 250;
    width = 50;
    height = 150;
    speed = .15;

    loadImage(path){
        this.img = new Image();
        this.img.src = path
    }

    moveRight(){
        console.log("moving Right");
    }

    moveLeft(){
        console.log("moving Left");
    }
}