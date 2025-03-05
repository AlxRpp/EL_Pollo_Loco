class Character extends MoveableObject {
    height = 125
    width = 62.5
    y = 330
    images_Walking = [
        './assets/images/charakter/run/green__0012_run_1.png',
        './assets/images/charakter/run/green__0013_run_2.png',
        './assets/images/charakter/run/green__0014_run_3.png',
        './assets/images/charakter/run/green__0015_run_4.png',
        './assets/images/charakter/run/green__0016_run_5.png',
        './assets/images/charakter/run/green__0017_run_6.png',
    ];

    world;
    constructor() {
        super().loadImage('./assets/images/charakter/run/green__0012_run_1.png')
        this.loadImages(this.images_Walking);
        this.animate();
    }

    animate() {
        setInterval(() => {
            if (this.world.keyboard.right) {
                let i = this.currentImage % this.images_Walking.length;
                let path = this.images_Walking[i];
                this.img = this.imageChache[path]
                this.currentImage++
            }

        }, 100);
    }

    jump() {
        console.log("Character is Jumping");

    }
}