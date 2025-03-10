class Bottle extends DrawableObject {
    width = 80;
    height = 80;
    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    };

    
    constructor(x, y) {
        super().loadImage('assets/images/6_salsa_bottle/1_salsa_bottle_on_ground.png');
        this.x = x;
        this.y = y;
        // this.animate();
    }


    animate() {
        setInterval(() => {
            this.playAnimation(this.images_Coins);
        }, 350);
    }
}