class MoveableObject {
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
    energy = 100;
    lastHit = 0;

    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    };

    hit(){
        this.energy -= 5; 
        if (this.energy < 0) {
            this.energy = 0
        } else{
            this.lastHit = new Date().getTime();
        }
    }

    isDead(){
        return this.energy == 0;
    }

    isHurt(){
        let timePassed = new Date() - this.lastHit; // difference in Milliseconds
        timePassed = timePassed / 1000 // difference in seconds
        return timePassed < .4;

    }

    applyGravity() {
        setInterval(() => {
            if (this.isaboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration
            }
        }, 1000 / 25)
    }

    isaboveGround() {
        return this.y < 170;
    }

    loadImage(path) {
        this.img = new Image();
        this.img.src = path
    }

    loadImages(arr) {
        arr.forEach(path => {
            let img = new Image();
            img.src = path
            this.imageChache[path] = img
        });
    }

    moveRight() {
        this.x += this.speed;
    }

    moveLeft() {
        this.x -= this.speed;
    }

    jump() {
        this.speedY = 22;
    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageChache[path];
        this.currentImage++;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken) {
            ctx.beginPath();
            ctx.lineWidth = '1.5';
            ctx.strokeStyle = 'red';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

    mirroredImage(ctx) {
        ctx.save();
        ctx.translate(this.x + this.width, this.y);
        ctx.scale(-1, 1);
        ctx.drawImage(this.img, 0, 0, this.width, this.height);
        ctx.restore();
    }

    isColliding(mo) {
                return this.x + this.width - this.offset.right > mo.x + mo.offset.left&&
                this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
                this.x + this.offset.left < mo.x + mo.width -mo.offset.right &&
                this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom;
            }



        // return this.x + this.width > mo.x &&
        //         this.y + this.height > mo.y &&
        //         this.x < mo.x &&
        //         this.y < mo.y + mo.height
        //     }

        //     return  (this.x + this.width) >= obj.x && this.x <= (obj.x + obj.width) && 
        //     (this.y + this.offsetY + this.height) >= obj.y &&
        //     (this.y + this.offsetY) <= (obj.y + obj.height) 
        // };


    }