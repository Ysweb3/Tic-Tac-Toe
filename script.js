
let defaultBoard = [['-','-','-'],
                    ['-','-','-'],
                    ['-','-','-']]

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
function GameLogic(win,runGame,playerTurn,GameBoard,p1mark,p2mark){
    let arrayIndex1 = null;
    let arrayIndex2 = null;
    console.log("Welcome")
    console.log(GameBoard);
    runGame = prompt("Please enter true to start the game.");
    while (runGame == "true" && win != true){

        if (playerTurn == 1){
            arrayIndex1 = prompt("Enter the first array index");
            arrayIndex2 = prompt("Enter the secound array index");
            GameBoard[arrayIndex1][arrayIndex2] = p1mark;

            playerTurn = 2;
        }
        else if (playerTurn == 2){
            arrayIndex1 = prompt("Enter the first array index");
            arrayIndex2 = prompt("Enter the secound array index");
            GameBoard[arrayIndex1][arrayIndex2] = p2mark;
            
            playerTurn = 1;
        }
        win = WinningCombos(GameBoard);
        
    }
    if (playerTurn != 1){
        console.log("O WINS!!!")
    }
    else {
        console.log("X WINS!!")
    }
}

function StartGame(){
    let win = false;
    let runGame = null;
    let playerTurn = 1;
    let GameBoard = CreateBoard(defaultBoard);
    InitializePlayers();
    let p1mark = player1.mark;
    let p2mark = player2.mark;
    console.log(GameBoard);
    GameLogic(win,runGame,playerTurn,GameBoard,p1mark,p2mark);
    
}

StartGame();
