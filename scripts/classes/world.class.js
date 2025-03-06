class World {

    ctx;
    canvas;
    character = new Character();
    keyboard;
    camera_x = 0;
    level = level1;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard
        this.draw();
        this.setWorld();
    }

    setWorld() {
        this.character.world = this;
    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectToCanvas(this.level.backgrounds);
        this.addItemToCanvas(this.character)
        this.addObjectToCanvas(this.level.enemies);
        this.addObjectToCanvas(this.level.clouds);
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
            movableOBJ.drawFrame(this.ctx)
            movableOBJ.mirroredImage(this.ctx);
        } else {
            movableOBJ.drawFrame(this.ctx)
            movableOBJ.draw(this.ctx)
        }
    }

}