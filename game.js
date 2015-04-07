

var Game = {

    ships: [],

    init: function(ctx) {
        this.ctx = ctx;
        console.log('Game started');

        this.ships.push(new Ship(this.ctx, {x: 50, y:150}));
        this.ships.push(new Ship(this.ctx, {x: 250, y:350}));

        console.log('Ships added');
        
        console.log(this.ships);

        return this;
    },

    draw: function() {

        var game  = window.game,
            ships = game.ships;

        // clear canvas
        this.ctx.clearRect(0, 0, 750, 500);

        ships.forEach(function(ship) {
            ship.update();  
        });

        window.requestAnimationFrame(game.draw);

    }

};