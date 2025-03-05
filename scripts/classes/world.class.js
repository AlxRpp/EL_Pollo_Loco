class World {

    ctx;
    canvas;
    character = new Character();
    keyboard;
    camera_x = 0;
    enemies = level1.enemies;
    clouds = level1.clouds;
    backgrounds = level1.backgrounds;


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
        this.addObjectToCanvas(this.backgrounds);
        this.addItemToCanvas(this.character)
        this.addObjectToCanvas(this.enemies);
        this.addObjectToCanvas(this.clouds);
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
            this.ctx.save();
            this.ctx.translate(movableOBJ.x + movableOBJ.width, movableOBJ.y);
            this.ctx.scale(-1, 1);
            this.ctx.drawImage(movableOBJ.img, 0, 0, movableOBJ.width, movableOBJ.height);
            this.ctx.restore();
        } else {
            this.ctx.drawImage(movableOBJ.img, movableOBJ.x, movableOBJ.y, movableOBJ.width, movableOBJ.height);
        }
    }

}