const app = document.querySelector('#app');
const cubes_amount = 252;
const colors = ['#BFD7ED', '#60A3D9', '#0074B7', '#003B73'];
const buttonStart = document.querySelector('#start');
const buttonEnd = document.querySelector('end');
const scoreTitle = document.querySelector('#score_title');
const score = document.querySelector('#score');
const screens = document.querySelectorAll('.screen');
const timeElement = document.querySelector('#time');
let timeLast = 0;

buttonStart.addEventListener('click', (e) => {
    e.preventDefault();
    screens[0].classList.add('up');
});

const startGame = (time) => {
    screens[0].classList.add('up');

    console.log(time);
    chooseTime();
    setTime(time);
    // check if app is empty
    if(app.children.length === 0){
    // draw board
    let board = document.createElement('div');
    board.classList.add('board');
    app.appendChild(board);
    for(let i = 0; i < cubes_amount; i++){
        drowCubes(board);    
    }
        setRandomColor(cube);
}
}

const chooseTime = () => {
    screens[1].classList.add('up');
}

const setRandomColor = (cube) => {
    const index = Math.floor(Math.random() * colors.length);
    console.log(colors[index]);
    cube.style.backgroundColor = colors[index];
    return colors[index];
}

const deleteBlock = () => {
    console.log(this)
}

// check if app is empty
if(app.children.length === 0){
    // draw board
    let board = document.createElement('div');
    board.classList.add('board');
    app.appendChild(board);
    for(let i = 0; i < cubes_amount; i++){
        drowCubes(board);    
    }
}

function drowCubes (board) {
    let cube = document.createElement('div');
    cube.classList.add('cube');
    setRandomColor(cube);
    board.appendChild(cube);
}


function decreeseTime () {
    let current = timeLast;
    if(current === 0){
        finishGame();
    }
    else{
        current = --timeLast;
        if(current < 10){
            current = `0${current}`;
        }
        setTime(current);
    }
}

function setTime(value) {
    timeElement.innerHTML = `${value} seconds`
}


