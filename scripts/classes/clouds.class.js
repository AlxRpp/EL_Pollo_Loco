class Clouds extends MoveableObject {
    y = 20;
    height = 250;
    width = 500;

    constructor() {
        super().loadImage('./assets/images/5_background/layers/4_clouds/1.png')
        this.x = Math.random() * 200
        this.animate();
    }


    animate() {
        this.moveLeft();
    }
}