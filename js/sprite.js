window.onload = function () {
    const player1Character = localStorage.getItem('player1Character');
    const player2Character = localStorage.getItem('player2Character');

    const spriteSheetHero = new Image();
    spriteSheetHero.src = `./assets/${player1Character}/${player1Character}.png`;
    //revisar en GithubPages
    const spriteSheetEnemy = new Image();
    spriteSheetEnemy.src = `./assets/${player2Character}/${player2Character}.png`;

    let frameWidth = 25;
    let frameHeight = 40;

    // Héroe
    let currentHeroFrame = 0;
    let totalHeroFrames = 2;
    let isHeroMoving = false;

    // Enemigo
    let currentEnemyFrame = 0;
    let totalEnemyFrames = 2;
    let isEnemyMoving = false;
    //canvas
    function drawSprite(context, spriteSheet, frameX, frameY, canvasX, canvasY) {
        context.clearRect(canvasX, canvasY, frameWidth, frameHeight);
        context.drawImage(
            spriteSheet,
            frameX * frameWidth, frameY * frameHeight,
            frameWidth, frameHeight,
            canvasX, canvasY,
            frameWidth, frameHeight
        );
    }

    //héroe
    function animateHero() {
        const heroCanvas = document.getElementById('hero-canvas');
        const heroContext = heroCanvas.getContext('2d');

        if (isHeroMoving) {
            currentHeroFrame = (currentHeroFrame + 1) % totalHeroFrames;
        }

        drawSprite(heroContext, spriteSheetHero, currentHeroFrame, 0, 0, 0);
    }

    //enemigo
    function animateEnemy() {
        const enemyCanvas = document.getElementById('enemy-canvas');
        const enemyContext = enemyCanvas.getContext('2d');

        if (isEnemyMoving) {
            currentEnemyFrame = (currentEnemyFrame + 1) % totalEnemyFrames;
        }

        drawSprite(enemyContext, spriteSheetEnemy, currentEnemyFrame, 0, 0, 0);
    }

    setInterval(() => {
        animateHero();
        animateEnemy();
    }, 200);

    window.addEventListener('keydown', (event) => {
        //héroe
        switch (event.key) {
            case 'a':
                isHeroMoving = true;
                currentHeroFrame = 1;
                break;
            case 'd':
                isHeroMoving = true;
                currentHeroFrame = 0;
                break;
            case 'w':
                isHeroMoving = true;
                currentHeroFrame = 2;
                break;
            case 's':
                isHeroMoving = true;
                currentHeroFrame = 4;
                break;
            case ' ':
                isHeroMoving = true;
                currentHeroFrame = 10;
                break;
        }

        // enemigo
        switch (event.key) {
            case 'ArrowLeft':
                isEnemyMoving = true;
                currentEnemyFrame = 1;
                break;
            case 'ArrowRight':
                isEnemyMoving = true;
                currentEnemyFrame = 2;
                break;
            case 'ArrowUp':
                isEnemyMoving = true;
                currentEnemyFrame = 3;
                break;
            case 'ArrowDown':
                isEnemyMoving = true;
                currentEnemyFrame = 4;
                break;
            case 'Enter':
                isEnemyMoving = true;
                currentEnemyFram = 5;
                break;
        }
    });

    window.addEventListener('keyup', (event) => {
        //héroe
        if (['a', 'd', 'w', 's', ' '].includes(event.key)) {
            isHeroMoving = false;
            currentHeroFrame = 0;
        }

        // enemigo
        if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Enter'].includes(event.key)) {
            isEnemyMoving = false;
            currentEnemyFrame = 0;
        }
    });
};
