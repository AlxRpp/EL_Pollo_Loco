class World {

    ctx;
    canvas;
    character = new Character();
    keyboard;
    camera_x = 0;
    level = level1;
    statusbar = new Statusbar();
    coinStatusbar = new CoinStatusbar();
    bottleStatusbar = new BottleStatusbar();
    amount = 0;
    collectedBottles = 0;
    test = new MoveableObject()



    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard
        this.draw();
        this.setWorld();
        this.run();
    }

    setWorld() {
        this.character.world = this;
    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectToCanvas(this.level.backgrounds);
        this.addObjectToCanvas(this.level.clouds);

        this.ctx.translate(-this.camera_x, 0); // Camera Backwarts
        // Space for fixed Elements
        this.addItemToCanvas(this.statusbar);
        this.addItemToCanvas(this.coinStatusbar);
        this.addItemToCanvas(this.bottleStatusbar);
        this.ctx.translate(this.camera_x, 0); // Camera Forewarts

        this.addItemToCanvas(this.character);
        this.addObjectToCanvas(this.level.enemies);
        this.addObjectToCanvas(this.level.coins);
        this.addObjectToCanvas(this.level.bottles);
        this.addObjectToCanvas(this.level.throwableObjects);

        this.ctx.translate(-this.camera_x, 0);
        requestAnimationFrame(() => {
            this.draw();
        })
    }


    addObjectToCanvas(object) {
        object.forEach(movableObject => {
            this.addItemToCanvas(movableObject);
            movableObject.drawFrame(this.ctx)
        })
    }


    addItemToCanvas(movableOBJ) {
        if (movableOBJ.otherDirection) {
            movableOBJ.drawFrame(this.ctx)
            movableOBJ.mirroredImage(this.ctx);
        } else {
            movableOBJ.drawFrame(this.ctx)
            movableOBJ.draw(this.ctx)
        }
    }

    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrownObjects();
        }, 100)
    }


    checkCollisions() {
        this.charakterEnemyCollision();
        this.characterBottleCollision();
        this.characterCoinCollision();
    }


    charakterEnemyCollision() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.statusbar.setPercentage(this.character.energy);
            }
        });
    }

    characterCoinCollision() {
        this.level.coins.forEach((coin, index) => {
            if (this.character.isColliding(coin)) {
                this.amount += 10;
                this.level.coins.splice(index, 1)
                this.coinStatusbar.setPercentage(this.amount)
            }
        });
    }

    characterBottleCollision() {
        this.level.bottles.forEach((bottle, index) => {
            if (this.character.isColliding(bottle)) {
                this.amount += 20;
                this.level.bottles.splice(index, 1)
                this.bottleStatusbar.setPercentage(this.amount);
                this.collectedBottles++;
            }
        });
    }


    checkThrownObjects() {
        if (this.collectedBottles > 0) {
            this.throwObjects();
        }
    }

    throwObjects() {
        if (this.keyboard.d && this.character.otherDirection) {
            let thrownBottle = new ThrowableObject(this.character.x - 40, this.character.y - 30, true);
            this.throwBottle(thrownBottle);
            this.bottleEnemyCollision(thrownBottle);

        } else if (this.keyboard.d) {
            let thrownBottle = new ThrowableObject(this.character.x + 40, this.character.y - 30, false);
            this.throwBottle(thrownBottle);
            this.bottleEnemyCollision(thrownBottle);


        }
    }

    throwBottle(thrownBottle) {
        this.level.throwableObjects.push(thrownBottle);
        this.collectedBottles--;
        this.amount -= 20;
        this.bottleStatusbar.setPercentage(this.amount);
        if (this.collectedBottles < 0) {
            this.collectedBottles = 0;
        }
        this.splashBottle(thrownBottle);
    };


    bottleEnemyCollision(thrownBottle) {
        setInterval(() => {
            this.level.throwableObjects.forEach((bottle) => {
                this.level.enemies.forEach((enemy, index) => {
                    if (bottle.isColliding(enemy)) {
                        this.splashBottle(thrownBottle)
                        console.log("Bottle hit enemy", enemy);
                        enemy.stopAnimation();
                        enemy.loadImage(enemy.images_Dead);
                        this.test.enemyDead = true;
                        setTimeout(() => {
                            enemy.loadImage(enemy.images_Empty);
                            this.level.enemies.splice(index, 1)
                        }, 1000)
                    }
                })
            });
        }, 100)

    };

    splashBottle(bottle) {
        setInterval(() => {
            if (bottle.y > 350) {
                bottle.y = 400;
                bottle.playAnimation(bottle.images_BottleSplash);
                setTimeout(() => {
                    this.level.throwableObjects.splice(bottle, 1)

                }, 1000)
            }
        }, 100)

    };


}




