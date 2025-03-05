class Endboss extends MoveableObject {
    y = 50;
    height = 400;
    width = 250;


    images_walking = [
        'assets/images/4_enemie_boss_chicken/2_alert/G5.png',
        'assets/images/4_enemie_boss_chicken/2_alert/G6.png',
        'assets/images/4_enemie_boss_chicken/2_alert/G7.png',
        'assets/images/4_enemie_boss_chicken/2_alert/G8.png',
        'assets/images/4_enemie_boss_chicken/2_alert/G9.png',
        'assets/images/4_enemie_boss_chicken/2_alert/G10.png',
        'assets/images/4_enemie_boss_chicken/2_alert/G11.png',
        'assets/images/4_enemie_boss_chicken/2_alert/G12.png',
    ];

    constructor(){
        super().loadImage(this.images_walking[0]);
        this.loadImages(this.images_walking);
        this.x = 2500;
        this.animate()
    }




animate() {
    setInterval(() => {
        this.playAnimation(this.images_walking)
    }, 200)
}
}