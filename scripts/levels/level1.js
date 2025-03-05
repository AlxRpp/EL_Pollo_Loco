const level1 = new Level(
    [
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Endboss()
    ],
    [
        new Clouds('./assets/images/background/4_clouds/1.png'),
    ],
    [
        new Background('./assets/images/background/Sky.png', -1024 * 2),
        new Background('./assets/images/background/Background.png',-1024 * 2),
        new Background('./assets/images/background/Foreground.png',-1024 * 2),
        new Background('./assets/images/background/Ground.png',-1024 * 2),
        new Background('./assets/images/background/Sky.png', -1024),
        new Background('./assets/images/background/Background.png',-1024),
        new Background('./assets/images/background/Foreground.png',-1024),
        new Background('./assets/images/background/Ground.png',-1024),
        new Background('./assets/images/background/Sky.png', 0),
        new Background('./assets/images/background/Background.png',0),
        new Background('./assets/images/background/Foreground.png',0),
        new Background('./assets/images/background/Ground.png',0),
        new Background('./assets/images/background/Sky.png', 1024),
        new Background('./assets/images/background/Background.png',1024),
        new Background('./assets/images/background/Foreground.png',1024),
        new Background('./assets/images/background/Ground.png',1024),
        new Background('./assets/images/background/Sky.png', 1024 * 2),
        new Background('./assets/images/background/Background.png',1024 * 2),
        new Background('./assets/images/background/Foreground.png',1024 * 2),
        new Background('./assets/images/background/Ground.png',1024 * 2),
        new Background('./assets/images/background/Sky.png', 1024 * 3),
        new Background('./assets/images/background/Background.png',1024 * 3),
        new Background('./assets/images/background/Foreground.png',1024 * 3),
        new Background('./assets/images/background/Ground.png',1024 * 3),
    ]
);