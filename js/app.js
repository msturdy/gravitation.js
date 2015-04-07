
var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d'),
    game = Game.init(ctx);

window.requestAnimationFrame(game.draw);
