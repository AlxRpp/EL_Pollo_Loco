class Level {
    enemies;
    clouds;
    backgrounds;
    throwableObjects;
    coins;
    level_end_x = 3100;

    constructor(enemies, clouds, coins, throwableObjects, backgrounds){
        this.enemies = enemies;
        this.clouds = clouds;
        this.throwableObjects = throwableObjects;
        this.backgrounds = backgrounds;
        this.coins = coins;
    }
}