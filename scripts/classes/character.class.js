class Character extends MoveableObject {
    height = 125;
    width = 62.5;
    y = 330;
    speed = 10;
    world;
    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
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
    ];
    images_dead = [
        'assets/images/charakter/dead/green__0022_dead_1.png',
        'assets/images/charakter/dead/green__0023_dead_2.png',
        'assets/images/charakter/dead/green__0024_dead_3.png',
        'assets/images/charakter/dead/green__0025_dead_4.png',
        'assets/images/charakter/dead/green__0026_dead_5.png',
    ];
    images_hurt = [
        'assets/images/charakter/hurt/green__0018_hurt_1.png',
        'assets/images/charakter/hurt/green__0019_hurt_2.png',
        'assets/images/charakter/hurt/green__0020_hurt_3.png',
        'assets/images/charakter/hurt/green__0021_hurt_4.png',
    ];
    images_idle = [
        'assets/images/charakter/idle/green__0000_idle_1.png',
        'assets/images/charakter/idle/green__0001_idle_2.png',
        'assets/images/charakter/idle/green__0002_idle_3.png',

    ];




    constructor() {
        super().loadImage('./assets/images/charakter/run/green__0012_run_1.png')
        this.loadImages(this.images_Walking);
        this.loadImages(this.images_jumping);
        this.loadImages(this.images_dead);
        this.loadImages(this.images_hurt);
        this.loadImages(this.images_idle);
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
            if (this.isDead()) {
                this.playAnimation(this.images_dead);
            } else if (this.isHurt()) {
                this.playAnimation(this.images_hurt);
            } else if (this.isAboveGround()) {
                this.playAnimation(this.images_jumping);
            } else if (this.world.keyboard.right || this.world.keyboard.left) {
                this.playAnimation(this.images_Walking);
            } else {
               
            }
        }, 100);

        // setTimeout(()=>{
        //     setInterval(()=>{
        //     this.playAnimation(this.images_idle);

        //     }, 150)
        // }, 1500)
    }



}