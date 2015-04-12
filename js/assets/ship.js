

function Ship(start_coords, ctx) {
    
    this.x = start_coords.x;
    this.y = start_coords.y;

    this.speed = 1;

    this.dirn = 0;

    this.randomDirection = function() {
        return Math.random() * (2 * Math.PI);
    };

    this.draw = function() {

        var x1 = this.x + 15 * Math.cos(this.dirn),
            y1 = this.y + 15 * Math.sin(this.dirn),

            x2 = this.x + 8 * Math.cos(this.dirn + Math.PI*(9/16)),
            y2 = this.y + 8 * Math.sin(this.dirn + Math.PI*(9/16)),

            x3 = this.x + 8 * Math.cos(this.dirn - Math.PI*(9/16)),
            y3 = this.y + 8 * Math.sin(this.dirn - Math.PI*(9/16));


        ctx.beginPath();
        
        ctx.moveTo( x1, y1 );
        ctx.lineTo( x2, y2 );
        ctx.lineTo( x3, y3 );
        ctx.lineTo( x1, y1 );

        ctx.stroke();
        // ctx.fill();
    };

    this.move = function() {
        this.x = this.x + Math.cos(this.dirn) * this.speed;
        this.y = this.y + Math.sin(this.dirn) * this.speed;

        // wiggle if out of bounds
        if (this.x < 0 || this.y < 0 || 
            this.x > ctx.height || 
            this.y > ctx.width ||
            Math.random() > 0.99) {
            this.dirn = this.randomDirection();
        }
    };

    // fire bullets from the ship
    this.fire = function() {
        var fire_coords = {x: this.x, y: this.y};
        game.bullets.push(new Bullet(fire_coords, this.dirn));
    };


    this.update = function() {
        this.move();
        this.draw();

        if (Math.random() > 0.99) {
            this.fire();
        }
    };
}