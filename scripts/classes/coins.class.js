class Coins extends MoveableObject {
    x = 250;
    width = 150;
    height = 150;
    images_Coins = [
        'assets/images/8_coin/coin_1.png',
        'assets/images/8_coin/coin_2.png',
    ];

    imageChache = {};


    constructor() {
        
        super().loadImage('assets/images/8_coin/coin_1.png');
        this.loadImages(this.images_Coins);
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.images_Coins);
        }, 350);
    }
}