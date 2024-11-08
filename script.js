const boardInput = document.getElementsByClassName("board-button");
const gameboard = document.getElementById("game-board");
const p1ScoreDIsplay = document.getElementById("p1-score");
const p2ScoreDIsplay = document.getElementById("p2-score");
const replayBtn = document.getElementById("replay-button");
const resetBtn = document.getElementById("reset-button");
const winOverlayLine = document.getElementById("win-overlay-line");
const turnDisplay = document.getElementById("turn-display");

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
        winOverlayLine.classList.remove("hidden");
        winOverlayLine.style.rotate = "180deg";
        winOverlayLine.style.bottom = "510px";
        return true;
    }
    else if((array[1][0] == "X" && array[1][1] == "X" && array[1][2] == "X") || (array[1][0] == "O" && array[1][1] == "O" && array[1][2] == "O")){
        winOverlayLine.classList.remove("hidden");
        winOverlayLine.style.rotate = "180deg";
        winOverlayLine.style.bottom = "355px";
        return true;
    }
    else if((array[2][0] == "X" && array[2][1] == "X" && array[2][2] == "X") || (array[2][0] == "O" && array[2][1] == "O" && array[2][2] == "O")){
        winOverlayLine.classList.remove("hidden");
        winOverlayLine.style.rotate = "180deg";
        winOverlayLine.style.bottom = "200px";
        return true;
    }
    //vertical winning combos
    else if((array[0][0] == "X" && array[1][0] == "X" && array[2][0] == "X") || (array[0][0] == "O" && array[1][0] == "O" && array[2][0] == "O")){
        winOverlayLine.classList.remove("hidden");
        winOverlayLine.style.rotate = "90deg";
        winOverlayLine.style.bottom = "355px";
        winOverlayLine.style.left = "-155px";
        return true;
    }
    else if((array[0][1] == "X" && array[1][1] == "X" && array[2][1] == "X") || (array[0][1] == "O" && array[1][1] == "O" && array[2][1] == "O")){
        winOverlayLine.classList.remove("hidden");
        winOverlayLine.style.rotate = "90deg";
        winOverlayLine.style.bottom = "355px";
        return true;
    }
    else if((array[0][2] == "X" && array[1][2] == "X" && array[2][2] == "X") || (array[0][2] == "O" && array[1][2] == "O" && array[2][2] == "O")){
        winOverlayLine.classList.remove("hidden");
        winOverlayLine.style.rotate = "90deg";
        winOverlayLine.style.bottom = "355px";
        winOverlayLine.style.left = "155px";
        return true;
    }
    //Diagonal winning combos
    else if((array[0][0] == "X" && array[1][1] == "X" && array[2][2] == "X") || (array[0][0] == "O" && array[1][1] == "O" && array[2][2] == "O") ){
        winOverlayLine.classList.remove("hidden");
        winOverlayLine.style.rotate = "45deg";
        winOverlayLine.style.bottom = "355px";
        return true;
    }
    else if((array[0][2] == "X" && array[1][1] == "X" && array[2][0] == "X") || (array[0][2] == "O" && array[1][1] == "O" && array[2][0] == "O")){
        winOverlayLine.classList.remove("hidden");
        winOverlayLine.style.rotate = "-45deg";
        winOverlayLine.style.bottom = "355px"
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
    player1.name = "Player 1"; 
    player1.score = 0;
    player1.mark = "O";
    
    player2.name = "Player 2"
    player2.score = 0;
    player2.mark = "X";
}
let playerTurn = RandomTurn();
let win = false;
let gameOver = false;
let count = 0;
let indexFilled = false;
let winCombo = 0;
let GameBoard = CreateBoard(defaultBoard);
InitializePlayers();
let p1mark = player1.mark;
let p2mark = player2.mark;
let p1score = player1.score;
let p2score = player2.score;
turnDisplay.textContent = PlayersTurnForRandomTurns();

function GameLogic(e){
    if (playerTurn == 1 && count <9 && win != true){
        //O turn
        
        returnArrayIndexOfElement(e.target.id);
        if (GameBoard[arrayIndex1][arrayIndex2] == "X" || GameBoard[arrayIndex1][arrayIndex2] == "O"){
            indexFilled = true;//Do nothing
        }
        else{
            e.target.textContent = p1mark;
            GameBoard[arrayIndex1][arrayIndex2] = p1mark;
            turnDisplay.textContent = "X's turn";
            playerTurn = 2;//Change player turn
            indexFilled = false
        }
    }
    else if (playerTurn == 2 && count <9 && win != true){
         //X turn
        returnArrayIndexOfElement(e.target.id);
        if (GameBoard[arrayIndex1][arrayIndex2] == "X" || GameBoard[arrayIndex1][arrayIndex2] == "O"){
            indexFilled = true;//Do nothing
        }
        else{
            e.target.textContent = p2mark;
            GameBoard[arrayIndex1][arrayIndex2] = p2mark;
            turnDisplay.textContent = "O's turn";
            playerTurn = 1;//Change player turn
            indexFilled = false
        }
    }
    if (indexFilled == false && count <9){
        win = WinningCombos(GameBoard);
        count++;
        console.log(winCombo)
    }

if (win == true) {
    if (playerTurn == 2 && gameOver == false){
        console.log("O WINS!!!");
        turnDisplay.textContent = "O WINS";
        p1score++;
        gameOver = true;
        p1ScoreDIsplay.textContent = p1score;
    }
    else if (playerTurn == 1 && gameOver == false) {
        console.log("X WINS!!");
        turnDisplay.textContent = "X WINS";
        p2score++;
        gameOver = true;
        p2ScoreDIsplay.textContent = p2score;
    }
}
else if (count == 9 && win != true){
    console.log("TIE!");
    turnDisplay.textContent = "TIE";
}};

function ReplayGame(){
    defaultBoard = [['','',''],
                    ['','',''],
                    ['','','']]
    playerTurn = RandomTurn();
    win = false;
    gameOver = false;
    count = 0;
    indexFilled = false
    GameBoard = CreateBoard(defaultBoard);
    console.log(defaultBoard)
    DisplayBoard(defaultBoard);
    turnDisplay.textContent = PlayersTurnForRandomTurns();
    winOverlayLine.classList.add("hidden");
    winOverlayLine.style.bottom = "0px";
    winOverlayLine.style.right = "0px";
    winOverlayLine.style.left = "0px";
}
function ResetGame(){
    ReplayGame()
    p1score = player1.score;
    p2score = player2.score;
    p1ScoreDIsplay.textContent = p1score;
    p2ScoreDIsplay.textContent = p2score;
}
function RandomTurn(){
    return Math.round(Math.random() * (2-1)+1);
}
function PlayersTurnForRandomTurns(){
    if (playerTurn === 1){
        return "O's turn"
    }
    else {
        return "X's turn"
    }
}
resetBtn.addEventListener("click",ResetGame, false);

replayBtn.addEventListener("click",ReplayGame, false);

gameboard.addEventListener("click",GameLogic, false);

DisplayBoard(defaultBoard);