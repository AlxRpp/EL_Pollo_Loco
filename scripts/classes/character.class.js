class Character extends MoveableObject {


    constructor(){
        super().loadImage('./assets/images/2_character_pepe/2_walk/W-21.png')
        this.height = 250
        this.width = 120
        this.y = 180
    }

    jump(){
        console.log("Character is Jumping");
        
    }
}