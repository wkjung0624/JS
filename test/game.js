let player = {
    xpos: 10,
    ypos: 10,
    size: {
        width: 50,
        height: 50
    }
}

let keyStatus = {
    KeyA: false,
    KeyS: false,
    KeyD: false,
    KeyW: false
}

function draw() {
    var canvas = document.getElementById("canvas");
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");

        ctx.fillStyle = "rgb(220,0,0)";
        ctx.fillRect(player.xpos, player.ypos, player.width, player.width);

        ctx.fillStyle = "rgb(220,0,0)";
        ctx.fillRect(130, 130, 50, 50);

        ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
        ctx.fillRect(30, 30, 50, 50);
    }
}

var test;

function keyDownEvent(e) {

    keyStatus[e.code] = true;
    log.textContent += ` ${e.code}`;

    moveLeft();
}

function keyUpEvent(e) {
    keyStatus[e.code] = false;
    log.textContent += ` ${e.code}`;
}

function moving() {
    if (keyStatus["KeyA"]) {
        moveLeft();
    }
    if (keyStatus["KeyD"]) {
        moveRight();
    }
    if (keyStatus["KeyW"]) {
        moveTop();
    }
    if (keyStatus["KeyS"]) {
        moveBottom();
    }
}

function moveLeft() {
    player.xpos += 1;
    player.ypos += 1;
    draw();
}

function moveRight() {
    player.xpos += 1;
}

function moveTop() {

}

function moveBottom() {

}

document.addEventListener('keydown', keyDownEvent);
document.addEventListener('keyup', keyUpEvent);

setInterval(moveLeft, 2000);
setInterval(draw, 100);