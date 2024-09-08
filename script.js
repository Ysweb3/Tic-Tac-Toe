const boardInput = document.getElementsByClassName("board-button");
const gameboard = document.getElementById("game-board");
const p1ScoreDIsplay = document.getElementById("p1-score");
const p2ScoreDIsplay = document.getElementById("p2-score");
const replayBtn = document.getElementById("replay-button");
const resetBtn = document.getElementById("reset-button");

function DisplayBoard(board){
    let n = 0;
        for(let j = 0;j <= 2;j++){
            for(let k = 0;k <=2; k++){
                n++;
                // console.log(n)
                // console.log("J " +j+" "+"K " + k);
                const elementId = "board-"+n;
                const boardElement = document.getElementById(elementId);
                boardElement.textContent = board[j][k];
            }
        }
    }



let defaultBoard = [['','',''],
                    ['','',''],
                    ['','','']]

function CreateBoard(newGameBoard) {
    return [...newGameBoard];
}
function WinningCombos(array){
    console.log(" "+array[0][0]+" "+array[0][1]+" "+array[0][2],'\n',
                    array[1][0]+" "+array[1][1]+" "+array[1][2],'\n',
                    array[2][0]+" "+array[2][1]+" "+array[2][2],'\n',
    )
    //Horizontal winning combos
    if((array[0][0] == "X" && array[0][1] == "X" && array[0][2] == "X") || (array[0][0] == "O" && array[0][1] == "O" && array[0][2] == "O")){
        return true;
    }
    else if((array[1][0] == "X" && array[1][1] == "X" && array[1][2] == "X") || (array[1][0] == "O" && array[1][1] == "O" && array[1][2] == "O")){
        return true;
    }
    else if((array[2][0] == "X" && array[2][1] == "X" && array[2][2] == "X") || (array[2][0] == "O" && array[2][1] == "O" && array[2][2] == "O")){
        return true;
    }
    //vertical winning combos
    else if((array[0][0] == "X" && array[1][0] == "X" && array[2][0] == "X") || (array[0][0] == "O" && array[1][0] == "O" && array[2][0] == "O")){
        return true;
    }
    else if((array[0][1] == "X" && array[1][1] == "X" && array[2][1] == "X") || (array[0][1] == "O" && array[1][1] == "O" && array[2][1] == "O")){
        return true;
    }
    else if((array[0][2] == "X" && array[1][2] == "X" && array[2][2] == "X") || (array[0][2] == "O" && array[1][2] == "O" && array[2][2] == "O")){
        return true;
    }
    //Diagonal winning combos
    else if((array[0][0] == "X" && array[1][1] == "X" && array[2][2] == "X") || (array[0][0] == "O" && array[1][1] == "O" && array[2][2] == "O") ){
        return true;
    }
    else if((array[0][2] == "X" && array[1][1] == "X" && array[2][0] == "X") || (array[0][2] == "O" && array[1][1] == "O" && array[2][0] == "O")){
        return true;
    }
}
function returnArrayIndexOfElement(elementId){
    console.log(elementId);
    switch (elementId) {
        case "board-1":
            arrayIndex1 = 0;arrayIndex2 = 0;
            break;
        case "board-2":
            arrayIndex1 = 0;arrayIndex2 = 1;
            break;
        case "board-3":
            arrayIndex1 = 0;arrayIndex2 = 2;
            break;
        case "board-4":
            arrayIndex1 = 1;arrayIndex2 = 0;
            break;    
        case "board-5":
            arrayIndex1 = 1;arrayIndex2 = 1;
            break;
        case "board-6":
            arrayIndex1 = 1;arrayIndex2 = 2;
            break;
        case "board-7":
            arrayIndex1 = 2;arrayIndex2 = 0;
            break;
        case "board-8":
            arrayIndex1 = 2;arrayIndex2 = 1;
            break;
        case "board-9":
            arrayIndex1 = 2;arrayIndex2 = 2;
            break;
        default:
            break;
    }
}
const CreatePlayer = function(name,score,mark) {
    this.name = name,
    this.score = score;
    this.mark = mark;
}
const player1 = new CreatePlayer;
const player2 = new CreatePlayer;

function InitializePlayers(){
    player1.name = "Player 1";//take names from user 
    player1.score = 0;
    player1.mark = "O";
    
    player2.name = "Player 2"
    player2.score = 0;
    player2.mark = "X";
}
let playerTurn = 1;
let win = false;
let gameOver = false;
let count = 0;
let indexFilled = false
let GameBoard = CreateBoard(defaultBoard);
InitializePlayers();
let p1mark = player1.mark;
let p2mark = player2.mark;
let p1score = player1.score;
let p2score = player2.score;
function GameLogic(e){
    if (playerTurn == 1 && count <9 && win != true){
        //O turn
        returnArrayIndexOfElement(e.target.id);
        if (GameBoard[arrayIndex1][arrayIndex2] == "X" || GameBoard[arrayIndex1][arrayIndex2] == "O"){
            indexFilled = true;
        }
        else{
            e.target.textContent = p1mark;
            // console.log("index1 "+arrayIndex1+" index2 "+arrayIndex2)
            GameBoard[arrayIndex1][arrayIndex2] = p1mark;
            playerTurn = 2;
            indexFilled = false
        }
    }
    else if (playerTurn == 2 && count <9 && win != true){
        //X turn
        returnArrayIndexOfElement(e.target.id);
        if (GameBoard[arrayIndex1][arrayIndex2] == "X" || GameBoard[arrayIndex1][arrayIndex2] == "O"){
            indexFilled = true;
        }
        else{
            e.target.textContent = p2mark;
            // console.log("index1 "+arrayIndex1+" index2 "+arrayIndex2)
            GameBoard[arrayIndex1][arrayIndex2] = p2mark;
            playerTurn = 1;
            indexFilled = false
        }
    }
    if (indexFilled == false && count <9){
        win = WinningCombos(GameBoard);
        // console.log(win)
        count++;
        // console.log("DAWD"+count);
    }

if (win == true) {
    if (playerTurn == 2 && gameOver == false){
        console.log("O WINS!!!");
        p1score++;
        gameOver = true;
        p1ScoreDIsplay.textContent = p1score;
    }
    else if (playerTurn == 1 && gameOver == false) {
        console.log("X WINS!!");
        p2score++;
        gameOver = true;
        p2ScoreDIsplay.textContent = p2score;
    }
}
else if (count == 9 && win != true){
    console.log("TIE!");
}};

function ReplayGame(){
    defaultBoard = [['','',''],
                    ['','',''],
                    ['','','']]
    playerTurn = 1;
    win = false;
    gameOver = false;
    count = 0;
    indexFilled = false
    GameBoard = CreateBoard(defaultBoard);
    console.log(defaultBoard)
    DisplayBoard(defaultBoard);

}
function ResetGame(){
    ReplayGame()
    p1score = player1.score;
    p2score = player2.score;
    p1ScoreDIsplay.textContent = p1score;
    p2ScoreDIsplay.textContent = p2score;
}

resetBtn.addEventListener("click",ResetGame, false);

replayBtn.addEventListener("click",ReplayGame, false);

gameboard.addEventListener("click",GameLogic, false);

DisplayBoard(defaultBoard);