class Endboss extends MoveableObject {
    y = 55;
    height = 420;
    width = 250;
    images_Walking = [
        'assets/images/4_enemie_boss_chicken/2_alert/G5.png',
        'assets/images/4_enemie_boss_chicken/2_alert/G6.png',
        'assets/images/4_enemie_boss_chicken/2_alert/G7.png',
        'assets/images/4_enemie_boss_chicken/2_alert/G8.png',
        'assets/images/4_enemie_boss_chicken/2_alert/G9.png',
        'assets/images/4_enemie_boss_chicken/2_alert/G10.png',
        'assets/images/4_enemie_boss_chicken/2_alert/G11.png',
        'assets/images/4_enemie_boss_chicken/2_alert/G12.png',

       
    ];

    constructor() {
        super().loadImage(this.images_Walking[0]);
        this.loadImages(this.images_Walking);
        this.x = 3600
        this.animate()

    }
    animate() {
        setInterval(() => {
            this.playAnimation(this.images_Walking)
        }, 150);
    }

}
