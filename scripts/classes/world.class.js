class World {

    ctx;
    canvas;
    character = new Character();
    statusbar = new Statusbar();
    keyboard;
    camera_x = 0;
    level = level1;



    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }

    setWorld() {
        this.character.world = this;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectToCanvas(this.level.backgrounds);
        this.addObjectToCanvas(this.level.clouds);

        this.ctx.translate(-this.camera_x, 0); // Camera Backwarts
        // Space for fixed Elements
        this.addItemToCanvas(this.statusbar)
        this.ctx.translate(this.camera_x, 0); // Camera Forewarts

        this.addItemToCanvas(this.character);
        this.addObjectToCanvas(this.level.enemies);
        this.addObjectToCanvas(this.level.throwableObjects);

        this.ctx.translate(-this.camera_x, 0);
        requestAnimationFrame(() => {
            this.draw();
        })
    }

    addObjectToCanvas(object) {
        object.forEach(movableObject => {
            this.addItemToCanvas(movableObject)
        })
    }

    addItemToCanvas(movableOBJ) {
        if (movableOBJ.otherDirection) {
            movableOBJ.drawFrame(this.ctx);
            movableOBJ.mirroredImage(this.ctx);
        } else {
            movableOBJ.drawFrame(this.ctx);
            movableOBJ.draw(this.ctx);
        }
    }

    run() {
        setInterval(() => {
            this.checkCollision();
            this.checkThrowObjects();
        }, 100)
    }

    checkCollision() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.statusbar.setPercentage(this.character.energy);
            }
        });
    }

    checkThrowObjects (){
        if (this.keyboard.d ) {
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100)
            this.level.throwableObjects.push(bottle);
        }
    }

}