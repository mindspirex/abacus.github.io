const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})

function drawCircle(x, y) {
    ctx.strokeStyle = 'yellow';
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(x, y, 50, 0, 2*Math.PI);
    ctx.fill();
    ctx.stroke();
}

const ball = {
    x: 100,
    y: 100,
    vx: 50,
    vy: 60,
}

let fps = 10;

for (let i = 0; i < fps; i++) { 
    function findLocation() {
        ball.x = ball.x + ball.vx/fps;
        ball.y = ball.y + ball.vy/fps;
        if(ball.x > canvas.width-50 || ball.x < 50) {
            ball.vx = -ball.vx;
        }
        if(ball.y > canvas.height-50 || ball.y < 50) {
            ball.vy = -ball.vy;
        }
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    findLocation();
    drawCircle(ball.x, ball.y);
    requestAnimationFrame(animate);
}
animate();