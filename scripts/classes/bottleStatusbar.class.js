class BottleStatusbar extends DrawableObject {
    images = [
        'assets/images/7_statusbars/1_statusbar/3_statusbar_bottle/green/0.png',
        'assets/images/7_statusbars/1_statusbar/3_statusbar_bottle/green/20.png',
        'assets/images/7_statusbars/1_statusbar/3_statusbar_bottle/green/40.png',
        'assets/images/7_statusbars/1_statusbar/3_statusbar_bottle/green/60.png',
        'assets/images/7_statusbars/1_statusbar/3_statusbar_bottle/green/80.png',
        'assets/images/7_statusbars/1_statusbar/3_statusbar_bottle/green/100.png',
    ];
    
    percentage = 100;


    constructor() {
        super();
        this.loadImages(this.images);
        this.setPercentage(0);
        this.x = 2;
        this.y = 90;
        this.width = 200;
        this.height = 60;
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.images[this.resolveImageIndex(percentage)];
        this.img = this.imageChache[path];
    }

    resolveImageIndex(percentage){
        if (percentage >= 100) {
            return 5
        } else if (percentage >= 80) {
            return 4
        }  else if (percentage >= 60) {
            return 3
        } else if (percentage >= 40) {
            return 2
        } else if (percentage >= 20) {
            return 1
        } else {
            return 0
        }
    }
};
