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
            this.checkCollision();
            this.checkThrownObjects();
        }, 100)
    }


    checkCollision() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.statusbar.setPercentage(this.character.energy);
            }
        });


        this.level.coins.forEach((coin, index) => {
            if (this.character.isColliding(coin)) {
                this.amount += 10;
                this.level.coins.splice(index, 1)
                this.coinStatusbar.setPercentage(this.amount)
            }
        });

        this.level.bottles.forEach((bottle, index) => {
            if (this.character.isColliding(bottle)) {
                this.amount += 20;
                this.level.bottles.splice(index, 1)
                this.bottleStatusbar.setPercentage(this.amount);
                this.collectedBottles++;
                console.log(this.collectedBottles);
            }
        });


        this.level.throwableObjects.forEach((bottle) => {
            this.level.enemies.forEach((enemy, index) => {
                if (bottle.isColliding(enemy)) {
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
    }


    checkThrownObjects() {
        if (this.bottlesPickedUp()) {
            this.throwObjects();
        }
    }

    bottlesPickedUp() {
        return this.collectedBottles > 0
    }

    throwObjects() {
        if (this.keyboard.d) {
            let thrownBottle = new ThrowableObject(this.character.x + 40, this.character.y - 30);
            this.level.throwableObjects.push(thrownBottle);
            this.collectedBottles--;
            this.amount -= 20;
            this.bottleStatusbar.setPercentage(this.amount);
            if (this.collectedBottles < 0) {
                this.collectedBottles = 0;
            }
            console.log(this.collectedBottles);
        }
    }


}




