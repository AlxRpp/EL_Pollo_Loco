class Chicken extends MoveableObject{

    constructor(){
        super().loadImage('assets/images/enemys/Human/Run/0_Warrior_Run_000.png');
        this.x = 200 + Math.random() * 500
        this.y = 360
        this.height = 120
        this.width = 120

    }
}