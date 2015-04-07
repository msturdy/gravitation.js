
function Bullet(coords, direction ) {

    this.x = coords.x;
    this.y = coords.y;

    this.speed = 25;

    this.direction = direction;

    this.draw = function() {
        ctx.fillRect( this.x, this.y, 5, 5 );
    };

    this.move = function() {
        this.x = this.x + Math.cos(this.direction) * this.speed;
        this.y = this.y + Math.sin(this.direction) * this.speed;
    };

    this.update = function() {
        this.move();
        this.draw();
    };

}