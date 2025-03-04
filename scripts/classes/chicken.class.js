class Chicken extends MoveableObject{

    constructor(){
        super().loadImage('assets/images/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.x = 200 + Math.random() * 500
        this.y = 305
        this.height = 100
        this.width = 80

    }
}