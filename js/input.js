
var Input = {

    setup: function() {

        document.addEventListener('keydown', function(event) {
            // left
            if (event.keyCode == 37) {
                game.events.push('left');
            }
            // right
            else if (event.keyCode == 39) {
                game.events.push('right');
            }
            // up
            else if (event.keyCode == 38) {
                game.events.push('thrust');
            }
            // down
            else if (event.keyCode == 40) {
                game.events.push('brake');
            }

            // space
            else if (event.keyCode == 32) {
                game.events.push('space');
            }

            // q
            else if (event.keyCode == 81) {
                game.events.push('stop');
            }

            else {
                console.log('button pressed: ' + event.keyCode);
            }

        });
    },

    handle: function() {

        var events = [];

        if (game.events.length > 0) {
            for (var i = 0; i < game.events.length; i++) {
                events.push(game.events.pop(i));
            }
        }

        events.forEach(function(e){

            var ship = game.ships[0];

            if (e === 'space') {
                ship.fire();
            }
            else if (e === 'left') {
                ship.dirn = ship.dirn - 0.25;
            }
            else if (e === 'right') {
                ship.dirn = ship.dirn + 0.25;
            }
            else if (e === 'thrust') {
                ship.accelerate();
            }
            else if (e === 'brake') {
                ship.brake();
            }
            else if (e === 'stop') {
                ship.speed = 0;
            }
        });
    }
};