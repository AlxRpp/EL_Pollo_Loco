class Background extends MoveableObject {
    width = 720;
    x = 0;
    height = 480
    
    constructor(path) {
        super().loadImage(path);
        this.y = 480 - this.height
    }
}