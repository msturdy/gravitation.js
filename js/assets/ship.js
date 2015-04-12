

function Ship(start_coords, ctx) {
    
    this.x = start_coords.x;
    this.y = start_coords.y;

    this.speed = 0;
    this.acceleration = 0.1;
    this.top_speed = 20;
    this.braking = 0.8;

    this.dirn = 0;

    this.draw = function() {

        // the nose of the ship
        var x1 = this.x + 15 * Math.cos(this.dirn),
            y1 = this.y + 15 * Math.sin(this.dirn),
            // back right
            x2 = this.x + 8 * Math.cos(this.dirn + Math.PI*(9/16)),
            y2 = this.y + 8 * Math.sin(this.dirn + Math.PI*(9/16)),
            // back left 
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

        var new_x = this.x + Math.cos(this.dirn) * this.speed,
            new_y = this.y + Math.sin(this.dirn) * this.speed;

        // 15 pixels from the edges
        if (new_x > 15 && new_x < ctx.canvas.width -15) {
            this.x = new_x;
        }
        // 15 pixels from the edges
        if (new_y > 15 && new_y < ctx.canvas.height - 15) {
            this.y = new_y;
        }
    };

    // fire bullets from the ship
    this.fire = function() {
        var fire_coords = {x: this.x, y: this.y};
        game.bullets.push(new Bullet(fire_coords, this.dirn));
    };

    this.accelerate = function() {
        if (this.speed <= this.top_speed) {
            this.speed = this.speed + this.acceleration;
        }
    };

    this.brake = function() {

        if (this.speed > 0) {
            this.speed = this.speed - this.braking;
            if (this.speed < 0) {
                this.speed = 0;
            }
        }
    };

    this.update = function() {
        this.move();
        this.draw();

        document.getElementById('ship-speed').innerHTML = this.speed;
        document.getElementById('ship-x').innerHTML = Math.floor(this.x);
        document.getElementById('ship-y').innerHTML = Math.floor(this.y);
    };
}