

var Game = {

    ships: [],
    bullets: [],
    events: [],

    init: function(ctx) {
        this.ctx = ctx;
        console.log('Game started');

        // set up event handlers for keyboard input
        Input.setup();

        // randomly located ship
        this.ships.push( new Ship({
            x: Math.floor(Math.random()*(ctx.canvas.width -50 - 50) + 50), 
            y: Math.floor(Math.random()*(ctx.canvas.height -50 - 50) + 50)
        }, this.ctx) );

        // this.ships.push( new Ship({x: 50, y:150}, this.ctx) );
        // this.ships.push( new Ship({x: 250, y:350}, this.ctx) );
        // this.ships.push( new Ship({x: 450, y:400}, this.ctx) );
        // this.ships.push( new Ship({x: 150, y:30}, this.ctx) );
        // this.ships.push( new Ship({x: 500, y:450}, this.ctx) );

        console.log('Ships added');
        console.log(this.ships);

        return this;
    },

    update: function() {

        var game    = window.game;

        Input.handle();

        // clear canvas
        this.ctx.clearRect(0, 0, 750, 500);

        game.ships.forEach(function(ship) {
            ship.update();
        });

        game.bullets.forEach(function(bullet, i) {
            bullet.update();

            // delete bullets once gone off canvas
            if (bullet.x < 0 || bullet.y < 0 ||
                bullet.x > this.ctx.height ||
                bullet.y > this.ctx.width) {

                game.bullets.splice(i, 1);
            }
        });

        window.requestAnimationFrame(game.update);

    }

};