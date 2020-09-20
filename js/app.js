new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        runningGame: false,
        turns: []
    },
    methods: {
        startGame: function() {
            this.runningGame = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },
        attack: function() {
            var max = 10;
            var min = 2;
            var damage = Math.max(Math.floor(Math.random() * max) + 1, min);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits Monster for ' + damage
            });

            if (this.monsterHealth <= 0) {
                alert('You won!');
                this.runningGame = false;
                return;
            }

            var max = 12;
            var min = 4;
            var damage = Math.max(Math.floor(Math.random() * max) + 1, min);
            this.playerHealth -= damage;
            this.turns.unshift({
                isPlayer: false,
                text: 'Monster hits player for ' + damage
            });

            if (this.playerHealth <= 0) {
                alert('You lost!');
                this.runningGame = false;
            }
        },
        special: function() {
            var max = 20;
            var min = 10;
            var damage = Math.max(Math.floor(Math.random() * max) + 1, min);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits Monster hard for ' + damage
            });

            if (this.monsterHealth <= 0) {
                alert('You won!');
                this.runningGame = false;
                return;
            }

            var max = 12;
            var min = 4;
            var damage = Math.max(Math.floor(Math.random() * max) + 1, min);
            this.playerHealth -= damage;

            if (this.playerHealth <= 0) {
                alert('You lost!');
                this.runningGame = false;
            }
        },
        heal: function() {
            var max = 10;
            var min = 2;
            var healing = Math.max(Math.floor(Math.random() * max) + 1, min);
            this.playerHealth += healing;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player heals up' 
            });

            if (this.playerHealth <= 100) {
                !this.turns.unshift();
            }

            if (this.playerHealth <= 90) {
                this.playerHealth +- healing;
            } else {
                this.playerHealth = 100;
            }
        },
        wuss: function() {
            this.runningGame = false;
        },
    }
});