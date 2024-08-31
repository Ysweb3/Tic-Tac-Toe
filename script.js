function createBoard() {
    let defaultBoard = [['-','-','-'],
                        ['-','-','-'],
                        ['-','-','-']]
    const getBoard = () => defaultBoard;
  
    return { getBoard };
  }
  

const CreatePlayer = function(name,score,mark) {
    this.name = name,
    this.score = score;
    this.mark = mark;
}

const player1 = new CreatePlayer;
const player2 = new CreatePlayer;
const newGameBoard = createBoard();

function CreateGame(){

}

console.log(newGameBoard.getBoard())