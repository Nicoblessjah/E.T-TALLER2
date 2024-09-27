document.addEventListener('DOMContentLoaded', () => {
    class Character {
        constructor(name, health, damage, elementId, healthBarId, statusId) {
            this.name = name;
            this.health = health;
            this.maxhealth = health;
            this.damage = damage;
            this.elementId = elementId;
            this.healthBarId = healthBarId;
            this.statusId = statusId;
            this.position = { top: 0, left: 0 };
            this.velocity = { x: 0, y: 0 };
            this.gravity = 0.5;
            this.isJumping = false;
            this.jumpStrength = 10;
            this.centerCharacter();
            this.updatePosition();
            this.updateStatus();
        }

        centerCharacter() {
            const container = document.querySelector('#fight-section');
            const characterElement = document.getElementById(this.elementId);

            if (!characterElement) {
                console.error(`Element with id ${this.elementId} not found.`);
                return;
            }

            const containerRect = container.getBoundingClientRect();
            const characterRect = characterElement.getBoundingClientRect();
            const positionRatio = this.elementId === "hero" ? 0.2 : 0.8;
            this.position.top = containerRect.height - characterRect.height;
            this.position.left = containerRect.width * positionRatio - characterRect.width / 2;
        }

        isAlive() {
            return this.health > 0;
        }

        updateStatus() {
            const healthPercentage = (this.health / this.maxhealth) * 100;
            const healthBar = document.getElementById(this.healthBarId);
            const status = document.getElementById(this.statusId);

            healthBar.style.width = `${healthPercentage}%`;
            status.innerText = `${this.health}/${this.maxhealth}`;
        }

        attack(target) {
            if (this.isAlive() && target.isAlive()) {
                console.log(`${this.name} inflige ${this.damage} de daño a ${target.name}`);
                target.health -= this.damage;
                if (target.health < 0) target.health = 0;
                target.updateStatus();
            }
        }

        move(direction) {
            const step = 2.5;
            const container = document.querySelector('#fight-section');
            const containerRect = container.getBoundingClientRect();

            if (direction === "left" && this.position.left > 0) {
                this.position.left -= step;
            }
            if (direction === "right" && this.position.left < containerRect.width - step) {
                this.position.left += step;
            }

            this.updatePosition();
        }

        jump() {
            if (!this.isJumping) {
                this.velocity.y = -this.jumpStrength;
                this.isJumping = true;
            }
        }

        applyGravity() {
            const container = document.querySelector('#fight-section');
            const containerRect = container.getBoundingClientRect();
            const characterElement = document.getElementById(this.elementId);
            const characterRect = characterElement.getBoundingClientRect();

            this.velocity.y += this.gravity;
            this.position.top += this.velocity.y;

            if (this.position.top + characterRect.height >= containerRect.height) {
                this.position.top = containerRect.height - characterRect.height;
                this.isJumping = false;
                this.velocity.y = 0;
            }

            this.updatePosition();
        }

        updatePosition() {
            const element = document.getElementById(this.elementId);
            element.style.top = `${this.position.top}px`;
            element.style.left = `${this.position.left}px`;
        }
    }

    const characters = [
        new Character("Catarina", 1000, 20, "hero", "enemy-health", "enemy-status"),
        new Character("Artorias", 1000, 20, "enemy", "hero-health", "hero-status"),
    ];

    const keys = {};

    function checkCollision() {
        const [hero, enemy] = characters;
        const heroElement = document.getElementById(hero.elementId).getBoundingClientRect();
        const enemyElement = document.getElementById(enemy.elementId).getBoundingClientRect();

        return !(heroElement.right < enemyElement.left ||
            heroElement.left > enemyElement.right ||
            heroElement.bottom < enemyElement.top ||
            heroElement.top > enemyElement.bottom);
    }

    document.addEventListener("keydown", (event) => {
        keys[event.key] = true;
    });

    document.addEventListener("keyup", (event) => {
        keys[event.key] = false;
    });

    function update() {
        characters.forEach(character => {
            if (character.name === "Catarina") {
                if (keys["a"]) character.move("left");
                if (keys["d"]) character.move("right");
                if (keys["w"]) character.jump();
            } else if (character.name === "Artorias") {
                if (keys["ArrowLeft"]) character.move("left");
                if (keys["ArrowRight"]) character.move("right");
                if (keys["ArrowUp"]) character.jump();
            }

            character.applyGravity();
        });

        if (keys["Enter"] && checkCollision()) {
            characters[0].attack(characters[1]);
        }

        if (keys[" "] && checkCollision()) {
            characters[1].attack(characters[0]);
        }

        requestAnimationFrame(update);
    }

    document.getElementById('exit-button').addEventListener('click', () => {
        window.location.href = "./index.html";
    });

    document.getElementById('change-character-button').addEventListener('click', () => {
        window.location.href = "./select_character.html";
    });

    update();
});





