class Coins extends MoveableObject {
    width = 50;
    height = 50;
    images_Coins = [
        'assets/images/8_coin/coin_1.png',
        'assets/images/8_coin/coin_2.png',
    ];

    
    constructor(x, y) {
        super().loadImage('assets/images/8_coin/coin_1.png');
        this.loadImages(this.images_Coins);
        this.x = x;
        this.y = y;
        this.animate();
    }


    animate() {
        setInterval(() => {
            this.playAnimation(this.images_Coins);
        }, 350);
    }
}