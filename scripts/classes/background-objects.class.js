class Background extends MoveableObject {
    width = 1024;
    height = 480
    
    constructor(path, x) {
        super().loadImage(path);
        this.y = 480 - this.height
        this.x = x
    }
}