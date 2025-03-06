class Character extends MoveableObject {
    height = 250;
    width = 120;
    y = 180;
    speed = 10;
    world;

    offset = {
        top: 120,
        left: 40,
        right: 30,
        bottom: 30
    };


    images_walking = [
        './assets/images/2_character_pepe/2_walk/W-21.png',
        './assets/images/2_character_pepe/2_walk/W-22.png',
        './assets/images/2_character_pepe/2_walk/W-23.png',
        './assets/images/2_character_pepe/2_walk/W-24.png',
        './assets/images/2_character_pepe/2_walk/W-25.png',
        './assets/images/2_character_pepe/2_walk/W-26.png',
    ];

    images_jumping = [
        'assets/images/2_character_pepe/3_jump/J-31.png',
        'assets/images/2_character_pepe/3_jump/J-32.png',
        'assets/images/2_character_pepe/3_jump/J-33.png',
        'assets/images/2_character_pepe/3_jump/J-34.png',
        'assets/images/2_character_pepe/3_jump/J-35.png',
        'assets/images/2_character_pepe/3_jump/J-36.png',
        'assets/images/2_character_pepe/3_jump/J-37.png',
        'assets/images/2_character_pepe/3_jump/J-38.png',
        'assets/images/2_character_pepe/3_jump/J-39.png',
    ];

    images_dead = [
        'assets/images/2_character_pepe/5_dead/D-51.png',
        'assets/images/2_character_pepe/5_dead/D-52.png',
        'assets/images/2_character_pepe/5_dead/D-53.png',
        'assets/images/2_character_pepe/5_dead/D-54.png',
        'assets/images/2_character_pepe/5_dead/D-55.png',
        'assets/images/2_character_pepe/5_dead/D-56.png',
        'assets/images/2_character_pepe/5_dead/D-57.png',
    ];
    images_hurt = [
        'assets/images/2_character_pepe/4_hurt/H-41.png',
        'assets/images/2_character_pepe/4_hurt/H-42.png',
        'assets/images/2_character_pepe/4_hurt/H-43.png',

    ];


    constructor() {
        super().loadImage('./assets/images/2_character_pepe/2_walk/W-21.png')
        this.loadImages(this.images_walking);
        this.loadImages(this.images_jumping);
        this.loadImages(this.images_dead);
        this.loadImages(this.images_hurt);
        this.applyGravity();
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
                this.moveLeft();
            }
            if (this.world.keyboard.space && !this.isaboveGround()) {
                this.jump();
            }
            this.world.camera_x = -this.x + 100;
        }, 1000 / 60)

        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.images_dead);
            } else if (this.isHurt()) {
                this.playAnimation(this.images_hurt);
            } else if (this.isaboveGround()) {
                this.playAnimation(this.images_jumping);
            } else if (this.world.keyboard.right || this.world.keyboard.left) {
                this.playAnimation(this.images_walking);
            }
        }, 70)
    }


}