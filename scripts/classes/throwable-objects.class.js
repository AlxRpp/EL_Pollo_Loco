class ThrowableObject extends MoveableObject {
    runLeft;

    images_bottleThrow = [
        'assets/images/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'assets/images/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'assets/images/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'assets/images/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
    ];
    images_BottleSplash =[
        'assets/images/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        'assets/images/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        'assets/images/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        'assets/images/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        'assets/images/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        'assets/images/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png',
    ];

    constructor(x, y, runOtherDirection) {
        super().loadImage('assets/images/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png');
        this.loadImages(this.images_bottleThrow);
        this.loadImages(this.images_BottleSplash);
        this.x = x;
        this.y = y;
        this.height = 80;
        this.width = 60;
        this.runLeft = runOtherDirection;
        this.throw()
        this.throwLeft
    }


    throw() {
        if (this.runLeft) {
            this.throwLeft();
        } else {
            this.throwRight();
        }
    }



    throwLeft() {
        this.speedY = 30;
        this.applyGravitation();
        setInterval(() => {
            this.playAnimation(this.images_bottleThrow)
            this.x -= 10;
        }, 45);
    }

    throwRight(){
        this.speedY = 30;
        this.applyGravitation();
        setInterval(() => {
            this.playAnimation(this.images_bottleThrow)
            this.x += 10;
        }, 45);
    }


}