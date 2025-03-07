class DrawableObjects {
    img;
    x = 120;
    y = 250;
    width = 50;
    height = 150;
    currentImage = 0;
    imageChache = {};

    loadImage(path) {
        this.img = new Image();
        this.img.src = path
    }

    loadImages(arr) {
        arr.forEach(path => {
            let img = new Image();
            img.src = path
            this.imageChache[path] = img
        });
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

}

