let board = [];

function play(clickedId) {
    let playerSpan = document.getElementById(`player`);
    let clickedElement = document.getElementById(clickedId);

    if (playerSpan.innerText === `X`) {
        playerSpan.innerText = `O`;
        clickedElement.innerText = `X`;
        board[clickedId] = `X`;
    } else {
        playerSpan.innerText = `X`;
        clickedElement.innerText = `O`;
        board[clickedId] = `O`;

    }
}

let topLeft = board[0];
let topCenter = board[1];
let topRight = board[2];
let middleLeft = board[3];
let middleCenter = board[4];
let middleRight = board[5];
let bottomLeft = board[6];
let bottomCenter = board[7];
let bottomRight = board[8];

if (topRight !== undefined && topRight === topCenter && topRight === topLeft) {
    alert(`${topRight} is the winner!`);
}

if (topRight !== undefined && topRight === middleRight && topRight === bottomRight) {
    alert(`${topRight} is the winner!`);
}

if (topRight !== undefined && topRight === middleCenter && topRight === bottomLeft) {
    alert(`${topRight} is the winner!`);
}

if (topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter) {
    alert(`${topCenter} is the winner!`);
}

if (topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight) {
    alert(`${topLeft} is the winner!`);
}

if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft) {
    alert(`${topLeft} is the winner!`);
}

if (middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight) {
    alert(`${middleLeft} is the winner!`);
}

if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight) {
    alert(`${bottomLeft} is the winner!`);
}



let boardFull = true;
for (let i=0; i<9; i++) {
    if (board[i] === undefined) {
        boardFull = false;
    } 
}

if (boardFull === true) {
    alert(`Cat's game! There is no winner!`);
}


