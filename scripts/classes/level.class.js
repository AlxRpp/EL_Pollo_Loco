class Level {
    enemies;
    clouds;
    backgrounds;
    throwableObjects;
    coins;
    bottles;
    level_end_x = 3100;

    constructor(enemies, clouds, coins, bottles, throwableObjects, backgrounds){
        this.enemies = enemies;
        this.clouds = clouds;
        this.throwableObjects = throwableObjects;
        this.backgrounds = backgrounds;
        this.coins = coins;
        this.bottles = bottles
    }
}