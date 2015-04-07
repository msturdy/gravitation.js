

var Game = {

    ships: [],
    bullets: [],

    init: function(ctx) {
        this.ctx = ctx;
        console.log('Game started');

        this.ships.push(new Ship(this.ctx, {x: 50, y:150}));
        this.ships.push(new Ship(this.ctx, {x: 250, y:350}));
        this.ships.push(new Ship(this.ctx, {x: 450, y:400}));

        console.log('Ships added');
        
        console.log(this.ships);

        return this;
    },

    draw: function() {

        var game  = window.game,
            ships = game.ships,
            bullets = game.bullets;

        // clear canvas
        this.ctx.clearRect(0, 0, 750, 500);

        ships.forEach(function(ship) {
            ship.update();
        });

        bullets.forEach(function(bullet, i) {
            bullet.update();

            // delete bullets once gone off canvas
            if (bullet.x < 0 || bullet.y < 0 ||
                bullet.x > this.ctx.height ||
                bullet.y > this.ctx.width) {

                game.bullets.splice(i, 1);
            }
        });

        window.requestAnimationFrame(game.draw);

    }

};