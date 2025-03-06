class Clouds extends MoveableObject{
    y = 20;
    height = 250;
    width = 500;
   
    constructor(path){
        super().loadImage(path)
        this.x =  Math.random() * 200
        this.animate();
    }

    animate(){
        setInterval(()=>{
        this.moveLeft();

        }, 60)
    }
}