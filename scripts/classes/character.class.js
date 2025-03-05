class Character extends MoveableObject {
    height = 250
    width = 120
    y = 180
    currentImage = 0;
    images_walking = [
        './assets/images/2_character_pepe/2_walk/W-21.png',
        './assets/images/2_character_pepe/2_walk/W-22.png',
        './assets/images/2_character_pepe/2_walk/W-23.png',
        './assets/images/2_character_pepe/2_walk/W-24.png',
        './assets/images/2_character_pepe/2_walk/W-25.png',
        './assets/images/2_character_pepe/2_walk/W-26.png',
    ];

    constructor(){
        super().loadImage('./assets/images/2_character_pepe/2_walk/W-21.png')
        this.loadImages(this.images_walking)
        this.animate()
    }

    animate(){
        setInterval(()=>{
            let i = this.currentImage % this.images_walking.length;
            let path = this.images_walking[i];
            this.img = this.imageChache[path];
            this.currentImage++;
        }, 70)
    }

    jump(){
        console.log("Character is Jumping");    
    }
}