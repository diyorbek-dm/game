let input = document.querySelector('input'),
    btn = document.querySelector('.btn'),
    timeOut = document.querySelector('.time'),
    box = document.querySelector('.game__box'),
    score = 0,
    time = 0,
    interval = 0;


btn.addEventListener('click', (e) => {
    e.preventDefault()
    if (input.value > 4) {
        time = input.value;
        input.value = '';
        clearInterval(interval)
        start();
        score = 0;
        let res = document.querySelector('.result');
        if (res) {
            res.style.display = 'none'
        }
    }
})



function start() {
    interval = setInterval(() => logic(), 1000);
    createBall()
    btn.style.visibility = 'hidden'
}

function logic() {
    if (time) {
        let currentTime = --time;
        currentTime = currentTime < 10 ? '0' + currentTime : currentTime;
        timeOut.innerHTML = `00:${currentTime}`
    } else {
        endGame()
        btn.style.visibility = 'visible'
    }
}

function endGame() {
    box.innerHTML = `<h2 class="result">Время окончено, вы набрали: ${score} очков</h2>`
}

function createBall() {
    let ball = document.createElement('div')
    let coor = box.getBoundingClientRect();

    // Random Random Width / Height
    let w = randWidth(20, 100)
    let h = randWidth(20, 100)

    let x = random(0, coor.width - w)
    let y = random(0, coor.height - h)

    ball.classList.add('ball')
    ball.style.width = w + 'px';
    ball.style.height = h + 'px';
    ball.style.position = 'absolute';
    ball.style.top = x + 'px';
    ball.style.left = y + 'px';
    ball.style.borderRadius = randWidth(20, 70) + '%';
    ball.style.background = randColor()

    box.append(ball)
}

// Randon Boll Width
function randWidth(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}


const colors = ['red', 'blue', 'black', 'gray', 'yellow', 'brown', 'pink', 'green', 'purple', 'white', 'orange']

// Random Boll Colors
function randColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

box.addEventListener('click', (e) => {
    if (e.target.classList.contains('ball')) {
        score++;
        e.target.remove()
        createBall();
    }
})


/* ДЗ 


При клике разный цвет шарика
При клике разный размер шарика
при клике разная форма шарика


*/