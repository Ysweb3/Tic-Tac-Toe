
let defaultBoard = [['-','-','-'],
                    ['-','-','-'],
                    ['-','-','-']]

function CreateBoard(newGameBoard) {
    return [...newGameBoard];
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

function StartGame(){
    let win = false;
    let runGame = null;
    let playerTurn = 1;
    let arrayIndex1 = null;
    let arrayIndex2 = null;
    let GameBoard = CreateBoard(defaultBoard);
    InitializePlayers();
    let p1mark = player1.mark;
    let p2mark = player2.mark;
    console.log("Welcome")
    console.log(GameBoard);
    runGame = prompt("Please enter true to start the game.");
    while (runGame == "true" && win == false){
        console.log(GameBoard);
        
        if (playerTurn == 1){
            arrayIndex1 = prompt("Enter the first array index");
            arrayIndex2 = prompt("Enter the secound array index");
            GameBoard[arrayIndex1][arrayIndex2] = p1mark;
            playerTurn = 2;
        }
        else if (playerTurn ==2){
            arrayIndex1 = prompt("Enter the first array index");
            arrayIndex2 = prompt("Enter the secound array index");
            GameBoard[arrayIndex1][arrayIndex2] = p2mark;
            
            playerTurn = 1;
        }

        
    }

}

StartGame();
