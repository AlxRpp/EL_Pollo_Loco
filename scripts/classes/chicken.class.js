class Chicken extends MoveableObject {
    y = 345
    height = 80
    width = 50
    images_walking = [
        'assets/images/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'assets/images/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'assets/images/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
    ];


    constructor() {
        super().loadImage('assets/images/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.x = 200 + Math.random() * 500;
        this.loadImages(this.images_walking);
        this.animate();
        this.speed = .15 + Math.random() * .75;
    }




    animate() {
        this.moveLeft();

        setInterval(() => {
            let i = this.currentImage % this.images_walking.length;
            let path = this.images_walking[i];
            this.img = this.imageChache[path];
            this.currentImage++;
        }, 70)
    }
}