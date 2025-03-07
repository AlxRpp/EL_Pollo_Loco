class Level {
    enemies;
    clouds;
    backgrounds;
    throwableObjects;
    level_end_x = 2250;

    constructor(enemies, clouds, throwableObjects, backgrounds){
       this.enemies = enemies;
       this.clouds = clouds;
       this.throwableObjects = throwableObjects;
       this.backgrounds = backgrounds;
    }
}