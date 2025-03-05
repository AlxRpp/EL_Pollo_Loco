class World {

    ctx;
    canvas;
    character = new Character();
    keyboard;
    camera_x = 0;
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken(),
    ];

    clouds = [
        new Clouds('./assets/images/5_background/layers/4_clouds/1.png'),
        // new Clouds('./assets/images/5_background/layers/4_clouds/2.png'),
    ];

    backgrounds = [
        new Background('./assets/images/5_background/layers/air.png', -719),
        new Background('./assets/images/5_background/layers/3_third_layer/2.png', -719),
        new Background('./assets/images/5_background/layers/2_second_layer/2.png', -719),
        new Background('./assets/images/5_background/layers/1_first_layer/2.png', -719),
        new Background('./assets/images/5_background/layers/air.png', 0),
        new Background('./assets/images/5_background/layers/3_third_layer/1.png', 0),
        new Background('./assets/images/5_background/layers/2_second_layer/1.png', 0),
        new Background('./assets/images/5_background/layers/1_first_layer/1.png', 0),
        new Background('./assets/images/5_background/layers/air.png', 719),
        new Background('./assets/images/5_background/layers/3_third_layer/2.png', 719),
        new Background('./assets/images/5_background/layers/2_second_layer/2.png', 719),
        new Background('./assets/images/5_background/layers/1_first_layer/2.png', 719),
        new Background('./assets/images/5_background/layers/air.png', 719 * 2),
        new Background('./assets/images/5_background/layers/3_third_layer/1.png', 719 * 2),
        new Background('./assets/images/5_background/layers/2_second_layer/1.png', 719 * 2),
        new Background('./assets/images/5_background/layers/1_first_layer/1.png', 719 * 2),
        new Background('./assets/images/5_background/layers/air.png', 719*3),
        new Background('./assets/images/5_background/layers/3_third_layer/2.png', 719*3),
        new Background('./assets/images/5_background/layers/2_second_layer/2.png', 719*3),
        new Background('./assets/images/5_background/layers/1_first_layer/2.png', 719*3),
    ];


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
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