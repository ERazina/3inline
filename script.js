const app = document.querySelector('#app');

// check if app is empty
if(app.children.length === 0){
    // draw поле
    let board = document.createElement('div');
    board.classList.add('board');
    app.appendChild(board);
    drowCubes(board);
}

function drowCubes (board) {
    let cube = document.createElement('div');
    cube.classList.add('cube');
    cube.classList.add('red');
    board.appendChild(cube);
}