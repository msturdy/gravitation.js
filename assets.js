

function Ship(ctx, start_coords) {
    
    this.x = start_coords.x;
    this.y = start_coords.y;

    this.speed = 1;

    this.direction = 0;

    this.randomDirection = function() {
        return Math.random() * (2*Math.PI) + 2*Math.PI;
    };

    this.draw = function() {

        var x = this.x,
            y = this.y;

        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + 5, y + 15);
        ctx.lineTo(x - 5, y + 15);
        ctx.fill();
    };

    this.move = function() {
        this.x = this.x + Math.cos(this.direction) * this.speed;
        this.y = this.y + Math.sin(this.direction) * this.speed;

        if (Math.random() > 0.9) {
            this.direction = this.randomDirection();
        }
    };

    this.update = function() {
        this.move();
        this.draw();
    };

};
