class MoveableObject{
    img;
    x = 120;
    y = 250;
    width = 50;
    height = 150;
    speed = .15;
    currentImage = 0;
    imageChache = {};

    loadImage(path){
        this.img = new Image();
        this.img.src = path
    }

    loadImages(arr){
        arr.forEach(path => {
            let img = new Image();
            img.src = path
            this.imageChache[path] = img
        });
    }

    moveRight(){
        console.log("moving Right");
    }

    moveLeft(){
        setInterval(() => {
            this.x -= this.speed 
         }, 1000 / 60);
    }
}