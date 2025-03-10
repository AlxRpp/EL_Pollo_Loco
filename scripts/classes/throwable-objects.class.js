class ThrowableObject extends MoveableObject {

    images_bottleThrow = [
        'assets/images/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'assets/images/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'assets/images/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'assets/images/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
    ];
    
    constructor(x, y) {
        super().loadImage('assets/images/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png');
        this.loadImages(this.images_bottleThrow);
        this.x = x;
        this.y = y;
        this.height = 80;
        this.width = 60;
        this.throw(100, 150)
    }


    throw() {
        this.speedY = 30;
        this.applyGravitation();
        setInterval(() => {
            this.x += 10;
        }, 25);
    }
}
