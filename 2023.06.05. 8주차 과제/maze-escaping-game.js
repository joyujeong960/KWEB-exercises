const MAX_ROW = 7;
const MAX_COL = 8;

let currentPos = {row: 5, col: 0};

const getElementByPosition = (pos) => {
    let cells = document.getElementsByClassName('cells')[pos.row];
    let cell = cells.getElementsByClassName('cell')[pos.col];
    return cell;
};

const getNewPositionByKey = (key) => {
    let tempPos = [];
    tempPos['row'] = currentPos.row;
    tempPos['col'] = currentPos.col;
    switch (key) {
        case 'ArrowUp': 
            tempPos['row']--; break;
        case 'ArrowLeft': 
            tempPos['col']--; break;
        case 'ArrowDown': 
            tempPos['row']++; break;
        case 'ArrowRight': 
            tempPos['col']++; break;
    }
    console.log(currentPos);
    return tempPos;
}

const isPositionInRange = (pos) => {
    if (pos.row < 0 || pos.row >= MAX_ROW){
        return false;
    }
    if (pos.col < 0 || pos.col >= MAX_COL){
        return false;
    }
    return true;
}

const isPositionNotWall = (pos) => {
    let tempCell = getElementByPosition(pos);
    if (tempCell.classList.contains('wall')){
        return false;
    }
    return true;
}

document.addEventListener('keyup', e => {
    let tempPos = getNewPositionByKey(e.code);
    if (isPositionInRange(tempPos) && isPositionNotWall(tempPos)){
        getElementByPosition(currentPos).classList.remove('current');
        getElementByPosition(tempPos).classList.add('current');
        currentPos = tempPos;
    }
    if (getElementByPosition(currentPos).classList.contains('target')){
        alert("You Escaped!");
    }
})