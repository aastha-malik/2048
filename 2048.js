var score = document.getElementById("score");
var cell =  document.getElementsByClassName("cell");

//initialising game function
function initGame() {
    choseCell();
    choseCell();
    design();
};
window.onload = initGame;
// function for "choosing CELL" and inserting 2 or 4 in it
function choseCell() {
    var key = Math.floor(Math.random() * 16);
    if (cell[key].innerHTML == "") {
        cell[key].innerHTML = Math.random() < 0.8 ? 2: 4;
        console.log("working");
    }
    else{
        choseCell();
    }
    design();
}

// chosing whether the button pressed is up/down/left/right which one?
function checkKey(e){
    var x = e.keyCode;

    if (x == 38 || x == 87) { 
        //up
        moveUp();
        choseCell();
        design();
    }
    if (x == 40 || x == 83) {
        //down
        moveDown();
        choseCell();
        design();
    }
    if (x == 37 || x == 65) {
        //left
        moveLeft();
        choseCell();
        design();
    }
    if (x == 39 || x == 68) {
        //right
        moveRight();
        choseCell();
        design();
    }
    console.log("iam")

}




//design like backgroung-color for "2", "4", etc
function design() {
    for (let i = 0; i < cell.length; i++){
        if (cell[i].innerHTML == ""){

            cell[i].style.color = "white";
            cell[i].style.backgroundColor = "white";

        }
        if (cell[i].innerHTML == "2"){

            cell[i].style.color = "white";
            cell[i].style.backgroundColor = "#eee4da";

        }
        if (cell[i].innerHTML == "4"){

            cell[i].style.color = "white";
            cell[i].style.backgroundColor = "#ede0c8";

        }
        if (cell[i].innerHTML == "8"){

            cell[i].style.color = "white";
            cell[i].style.backgroundColor = "#f2b179";
            
        }
        if (cell[i].innerHTML == "16"){
            cell[i].style.color = "white";
            cell[i].style.backgroundColor = "#f59563"
        }
        if (cell[i].innerHTML == "32"){
            cell[i].style.color = "white";
            cell[i].style.backgroundColor = "#f67c5f"
        }
        if (cell[i].innerHTML == "64"){
            cell[i].style.color = "white";
            cell[i].style.backgroundColor = "#f65e3b"
        }
        if (cell[i].innerHTML == "128"){

            cell[i].style.color = "white";
            cell[i].style.backgroundColor = "#edcf72"

        }
        if (cell[i].innerHTML == "256"){

            cell[i].style.color = "white";
            cell[i].style.backgroundColor = "#edcc61";

        }
        if (cell[i].innerHTML == "512"){
            cell[i].style.color = "white";
            cell[i].style.backgroundColor = "#edc850"
        }
        if (cell[i].innerHTML == "1024"){
            cell[i].style.color = "white";
            cell[i].style.backgroundColor = "#edc53f"
        }
        if (cell[i].innerHTML == "2048"){
            cell[i].style.color = "white";
            cell[i].style.backgroundColor = "#edc22e"
        }
    }

}

var board = [[0,1,2,3], [4,5,6,7], [8,9,10,11], [12,13,14,15]];
// i -> row
//j -> column

//moveUP function 
function moveUp() {
    for (var j = 0; j < 4; j ++){
        for (var i = 1; i < 4; i++){
            var row  = i;
            while (row > 0){
                if (cell[board[row - 1][j]].innerHTML == "") {
                    cell[board[row - 1][j]].innerHTML = cell[board[row][j]].innerHTML;
                    cell[board[row][j]].innerHTML = "";
                    row--;
                } else if (cell[board[row - 1][j]].innerHTML == cell[board[row][j]].innerHTML) {
                    cell[board[row - 1][j]].innerHTML = parseInt(cell[board[row - 1][j]].innerHTML)* 2;
                    cell[board[row][j]].innerHTML = "";
                    break;
                } else {
                    break;
                }
            };
        };
    };
};

//moveDOWN function 
function moveDown() {
    for (var j = 0; j < 4; j ++){
        for (var i = 2; i >= 0; i--){
            var row  = i;
            while (row < 3){
                if (cell[board[row + 1][j]].innerHTML == "") {
                    cell[board[row + 1][j]].innerHTML = cell[board[row][j]].innerHTML;
                    cell[board[row][j]].innerHTML = "";
                    row++;
                } else if (cell[board[row + 1][j]].innerHTML == cell[board[row][j]].innerHTML) {
                    cell[board[row + 1][j]].innerHTML = parseInt(cell[board[row + 1][j]].innerHTML)*2;
                    cell[board[row][j]].innerHTML = "";
                    break;
                } else {
                    break;
                }
            };
        };
    };
};

//moveLEFT function 
function moveLeft() {
    for (var i = 0; i < 4; i++){
        for (var j = 1; j < 4; j ++){
            var col = j;
            while (col > 0) {
                if (cell[board[i][col-1]].innerHTML == "") {
                    cell[board[i][col-1]].innerHTML = cell[board[i][col]].innerHTML;
                    cell[board[i][col]].innerHTML = "";
                    col--;
                } else if (cell[board[i][col - 1]].innerHTML == cell[board[i][col]].innerHTML) {
                    cell[board[i][col - 1]].innerHTML = parseInt(cell[board[i][col - 1]].innerHTML)*2;
                    cell[board[i][col]].innerHTML = "";
                    break;
                } else {
                    break;
                }
            };
        };
    };
};

//moveRIGHT function 
function moveRight() {
    for (var i = 0; i < 4; i++){
        for (var j = 2; j >= 0; j--){
            var col = j;
            while (col < 3) {
                if (cell[board[i][col + 1]].innerHTML == "") {
                    cell[board[i][col + 1]].innerHTML = cell[board[i][col]].innerHTML;
                    cell[board[i][col]].innerHTML = "";
                    col++
                } else if (cell[board[i][col + 1]].innerHTML == cell[board[i][col]].innerHTML) {
                    cell[board[i][col + 1]].innerHTML = parseInt(cell[board[i][col + 1]].innerHTML)* 2;
                    cell[board[i][col]].innerHTML = "";
                    break;
                } else {
                    break;
                }
            };
        };
    };
};

document.addEventListener("keydown", checkKey);
