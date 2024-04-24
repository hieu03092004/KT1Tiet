var board;
var playerO="O";
var playerX="X";
var currentPlayer=playerO;
var gameOver=false;

window.onload=function(){
    startGame();
}
function startGame() {
    board = [
                [' ', ' ', ' '],
                [' ', ' ', ' '],
                [' ', ' ', ' ']
            ]

    for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            if (r == 0 || r == 1) {
                tile.classList.add("horizontal-line");
            }
            if (c == 0 || c == 1) {
                tile.classList.add("vertical-line");
            }
            tile.addEventListener("click", setTile)

            
                
            document.getElementById("board").appendChild(tile);

        }
    }
}
function setTile(){
    if(gameOver){
        alert("Game Over");
        return;
    }
    let coords=this.id.split("-");
    let row=parseInt(coords[0]);
    let col=parseInt(coords[1]);
    if(board[row][col]!=" "){
        //Kiem tra de tranh viec click vao o da co gia tri
        alert("Di chuyển không hợp lệ");
        return;
    }
    board[row][col]=currentPlayer;
    this.innerText=currentPlayer;
    if(currentPlayer==playerO)
        currentPlayer=playerX;
    else
        currentPlayer=playerO;
    checkWinner();
}
