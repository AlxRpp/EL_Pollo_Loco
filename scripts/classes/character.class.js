class Character extends MoveableObject {
    height = 125;
    width = 62.5;
    y = 330;
    speed = 10;
    world;


    offset = {
        top: 120,
        left: 40,
        right: 30,
        bottom: 30
    };
    images_Walking = [
        './assets/images/charakter/run/green__0012_run_1.png',
        './assets/images/charakter/run/green__0013_run_2.png',
        './assets/images/charakter/run/green__0014_run_3.png',
        './assets/images/charakter/run/green__0015_run_4.png',
        './assets/images/charakter/run/green__0016_run_5.png',
        './assets/images/charakter/run/green__0017_run_6.png',
    ];
    images_jumping = [
        'assets/images/charakter/jump/green__0027_jump_1.png',
        'assets/images/charakter/jump/green__0028_jump_2.png',
        'assets/images/charakter/jump/green__0029_jump_3.png',
        'assets/images/charakter/jump/green__0030_jump_4.png',
        'assets/images/charakter/jump/green__0027_jump_1.png',
        'assets/images/charakter/jump/green__0028_jump_2.png',
        'assets/images/charakter/jump/green__0029_jump_3.png',
        'assets/images/charakter/jump/green__0030_jump_4.png',
    ];





    constructor() {
        super().loadImage('./assets/images/charakter/run/green__0012_run_1.png')
        this.loadImages(this.images_Walking);
        this.loadImages(this.images_jumping);
        this.applyGravitation();
        this.animate();
    }






    animate() {
        setInterval(() => {
            if (this.world.keyboard.right && this.x < this.world.level.level_end_x) {
                this.otherDirection = false;
                this.moveRight();
            }
            if (this.world.keyboard.left && this.x > -500) {
                this.otherDirection = true;
                this.moveLeft()
            }
            if (this.world.keyboard.space && !this.isAboveGround()) {
                this.jump()
            }
            this.world.camera_x = -this.x + 75;
        }, 1000 / 60)

        setInterval(() => {
            if (this.isAboveGround()) {
                this.playAnimation(this.images_jumping);
            } else {
                if (this.world.keyboard.right || this.world.keyboard.left) {
                    this.playAnimation(this.images_Walking);
                }
            }
        }, 100);
    }



}