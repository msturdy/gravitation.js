
function Bullet(coords, direction ) {

    this.x = coords.x;
    this.y = coords.y;

    this.speed = 25;

    this.dirn = direction;

    this.draw = function() {
        ctx.fillRect( this.x, this.y, 5, 5 );
    };

    this.move = function() {
        this.x = this.x + Math.cos( this.dirn ) * this.speed;
        this.y = this.y + Math.sin( this.dirn ) * this.speed;
    };

    this.update = function() {
        this.move();
        this.draw();
    };

}