class World {

    ctx;
    canvas;
    character = new Character();
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken(),
    ];

    clouds = [
        new Clouds('./assets/images/background/4_clouds/1.png'),

    ];

    backgrounds = [
        new Background('./assets/images/background/Sky.png'),
        new Background('./assets/images/background/Background.png'),
        new Background('./assets/images/background/Foreground.png'),
        new Background('./assets/images/background/Ground.png'),

    ];

    keyboard;

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

        this.addObjectToCanvas(this.backgrounds);

        this.addItemToCanvas(this.character)
        this.addObjectToCanvas(this.enemies);
        this.addObjectToCanvas(this.clouds);



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
        this.ctx.drawImage(movableOBJ.img, movableOBJ.x, movableOBJ.y, movableOBJ.width, movableOBJ.height);

    }

}