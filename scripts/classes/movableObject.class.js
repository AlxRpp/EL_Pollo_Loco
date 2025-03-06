class MoveableObject{
    img;
    x = 120;
    y = 250;
    width = 50;
    height = 150;
    speed = .15;
    currentImage = 0;
    imageChache = {};
    otherDirection = false;
    speedY = 0; 
    acceleration = 2.5;

    applyGravitation(){
        setInterval(()=>{
            if (this.isAboveGround()) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            } else {
                
            }
        }, 1000 / 25)
    }

    isAboveGround(){
        return this.y < 330;
    }


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

    playAnimation(images){
        let i = this.currentImage % this.images_Walking.length;
        let path = images[i];
        this.img = this.imageChache[path]
        this.currentImage++
    }
}