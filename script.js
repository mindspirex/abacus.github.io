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
    ctx.fillStyle = 'rgb(0,' + x/(canvas.width/255) + ',' + y/(canvas.height/255) + ')';
    ctx.beginPath();
    ctx.arc(x, y, 50, 0, 2*Math.PI);
    ctx.fill();
    //ctx.stroke();
}

const ball = {
    x: undefined,
    y: undefined,
    vx: undefined,
    vy: undefined,
}

let speed = 0.1;

function findLocation() {
    ball.x = ball.x + ball.vx*speed;
    ball.y = ball.y + ball.vy*speed;
    if(ball.x > canvas.width-50 || ball.x < 50) {
        ball.vx = -ball.vx;
    }
    if(ball.y > canvas.height-50 || ball.y < 50) {
        ball.vy = -ball.vy;
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    findLocation();
    drawCircle(ball.x, ball.y);
    requestAnimationFrame(animate);
}

let count = 0;
window.addEventListener('click', function(event){
    if(count==0) {
        ball.x = event.x;
        ball.y = event.y;
        ball.vx = 50;
        ball.vy = 60;
        count = count + 1;
        animate();
    }
    document.body.style.backgroundColor = 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')';
})