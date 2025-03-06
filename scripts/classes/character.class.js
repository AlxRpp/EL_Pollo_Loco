class Character extends MoveableObject {
    height = 250;
    width = 120;
    y = 180;
    speed = 10;
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
    ]

    world;

    constructor() {
        super().loadImage('./assets/images/2_character_pepe/2_walk/W-21.png')
        this.loadImages(this.images_walking);
        this.loadImages(this.images_jumping);
        this.applyGravity();
        this.animate();
    }

    animate() {
        setInterval(() => {
            if (this.world.keyboard.right && this.x < this.world.level.level_end_x) {
                this.x += this.speed;
                this.otherDirection = false;
            }
            if (this.world.keyboard.left && this.x > -500) {
                this.x -= this.speed;
                this.otherDirection = true;
            } 
            if (this.world.keyboard.space && !this.isaboveGround() ) {
                this.speedY = 22;
            }
            this.world.camera_x = -this.x + 100;
        }, 1000 / 60)

        setInterval(() => {
            if (this.isaboveGround()) {
                this.playAnimation(this.images_jumping);
            } else {
                if (this.world.keyboard.right || this.world.keyboard.left) {
                    this.playAnimation(this.images_walking);
                }
            }
        }, 70)
    }


    jump() {
        console.log("Character is Jumping");
    }
}