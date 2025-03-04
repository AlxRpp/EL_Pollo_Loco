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
        new Clouds('./assets/images/5_background/layers/4_clouds/1.png'),
        new Clouds('./assets/images/5_background/layers/4_clouds/2.png'),

    ];

    backgrounds = [
        new Background('./assets/images/5_background/layers/air.png'),
        new Background('./assets/images/5_background/layers/3_third_layer/1.png'),
        new Background('./assets/images/5_background/layers/2_second_layer/1.png'),
        new Background('./assets/images/5_background/layers/1_first_layer/1.png'),

    ];



    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();

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