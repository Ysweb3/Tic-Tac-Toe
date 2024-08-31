
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
    player1.mark = "X";
}

function StartGame(){
    let win = false;
    let GameBoard = CreateBoard(defaultBoard);
    InitializePlayers();
    console.log("Welcome")
    console.log(GameBoard);
    while (win == false) {
        win = true
        
    }

}

StartGame();
