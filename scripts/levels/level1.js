const level1 = new Level(
    [
        // new Chicken(),
        // new Chicken(),
        // new Chicken(),
        // new Chicken(),
        // new Chicken(),
        new Chicken(),
        new Endboss()
    ],
    [
        new Clouds('./assets/images/background/4_clouds/1.png'),
    ],
    [
        // new Coins(450, 350),
        // new Coins(450, 200),
        // new Coins(550, 150),
        // new Coins(650, 200),
        // new Coins(650, 250),
        // new Coins(1450, 250),
        // new Coins(1500, 200),
        // new Coins(1550, 150),
        // new Coins(1600, 200),
        // new Coins(1650, 250),
    ],
    [
        new Bottle(300, 400),
        new Bottle(500, 400),
        new Bottle(700, 400),
        new Bottle(900, 400),
        new Bottle(1100, 400),

    ],
    [
        // ThrowableObjects
    ],
    [
        new Background('./assets/images/background/Sky.png', -1024 * 2),
        new Background('./assets/images/background/Background.png', -1024 * 2),
        new Background('./assets/images/background/Foreground.png', -1024 * 2),
        new Background('./assets/images/background/Ground.png', -1024 * 2),
        new Background('./assets/images/background/Sky.png', -1024),
        new Background('./assets/images/background/Background.png', -1024),
        new Background('./assets/images/background/Foreground.png', -1024),
        new Background('./assets/images/background/Ground.png', -1024),
        new Background('./assets/images/background/Sky.png', 0),
        new Background('./assets/images/background/Background.png', 0),
        new Background('./assets/images/background/Foreground.png', 0),
        new Background('./assets/images/background/Ground.png', 0),
        new Background('./assets/images/background/Sky.png', 1024),
        new Background('./assets/images/background/Background.png', 1024),
        new Background('./assets/images/background/Foreground.png', 1024),
        new Background('./assets/images/background/Ground.png', 1024),
        new Background('./assets/images/background/Sky.png', 1024 * 2),
        new Background('./assets/images/background/Background.png', 1024 * 2),
        new Background('./assets/images/background/Foreground.png', 1024 * 2),
        new Background('./assets/images/background/Ground.png', 1024 * 2),
        new Background('./assets/images/background/Sky.png', 1024 * 3),
        new Background('./assets/images/background/Background.png', 1024 * 3),
        new Background('./assets/images/background/Foreground.png', 1024 * 3),
        new Background('./assets/images/background/Ground.png', 1024 * 3),
    ]
);