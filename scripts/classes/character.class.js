class Character extends MoveableObject {


    constructor(){
        super().loadImage('./assets/images/charakter/run/green__0012_run_1.png')
        this.height = 125
        this.width = 62.5
        this.y = 330
    }

    jump(){
        console.log("Character is Jumping");
        
    }
}