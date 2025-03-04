class Character extends MoveableObject {


    constructor(){
        super().loadImage('./assets/images/charakter/run/green__0012_run_1.png')
        this.height = 150
        this.width = 75
        this.y = 305
    }

    jump(){
        console.log("Character is Jumping");
        
    }
}