class Chicken extends MoveableObject {
    y = 360;
    height = 120;
    width = 120;
    images_Walking = [
        'assets/images/enemys/Human/Run/0_Warrior_Run_000.png',
        'assets/images/enemys/Human/Run/0_Warrior_Run_001.png',
        'assets/images/enemys/Human/Run/0_Warrior_Run_002.png',
        'assets/images/enemys/Human/Run/0_Warrior_Run_003.png',
        'assets/images/enemys/Human/Run/0_Warrior_Run_004.png',
        'assets/images/enemys/Human/Run/0_Warrior_Run_005.png',
        'assets/images/enemys/Human/Run/0_Warrior_Run_006.png',
        'assets/images/enemys/Human/Run/0_Warrior_Run_007.png',
        'assets/images/enemys/Human/Run/0_Warrior_Run_008.png',
        'assets/images/enemys/Human/Run/0_Warrior_Run_009.png',
        'assets/images/enemys/Human/Run/0_Warrior_Run_010.png',
        'assets/images/enemys/Human/Run/0_Warrior_Run_011.png',
        'assets/images/enemys/Human/Run/0_Warrior_Run_012.png',
        'assets/images/enemys/Human/Run/0_Warrior_Run_013.png',
        'assets/images/enemys/Human/Run/0_Warrior_Run_014.png',
    ];



    constructor() {
        super().loadImage('assets/images/enemys/Human/Run/0_Warrior_Run_000.png');
        this.x = 200 + Math.random() * 500,
        this.loadImages(this.images_Walking);
        this.speed = .15 + Math.random() * .8,
        this.animate();
    }


    animate() {
        this.moveLeft();
        setInterval(() => {
            let i = this.currentImage % this.images_Walking.length;
            let path = this.images_Walking[i];
            this.img = this.imageChache[path]
            this.currentImage++
        }, 30);
    }
}