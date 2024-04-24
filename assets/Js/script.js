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
function checkWinner(){
    //Check hàng ngang
    for(let row=0;row<3;row++){
        if(board[row][0]==board[row][1] && board[row][1]==board[row][2] && board[row][0]!=" "){
            for(let col=0;col<3;col++){
                let tile=document.getElementById(row.toString()+"-"+col.toString());
                tile.classList.add("winner");
            }
            gameOver=true;
            alert("Người chơi "+board[row][0]+" thắng");
            return
        }
    }
    //Check hàng dọc
    for(let col=0;col<3;col++){
        if(board[0][col]==board[1][col] && board[1][col]==board[2][col] && board[0][col]!=" "){
            for(let row=0;row<3;row++){
                let tile=document.getElementById(row.toString()+"-"+col.toString());
                tile.classList.add("winner");
            }
            gameOver=true;
            alert("Người chơi "+board[0][col]+" thắng");
            return
        }
    }
    //Check theo duong cheo ben trai
    if(board[0][0]==board[1][1] && board[1][1]==board[2][2] && board[0][0]!=" "){
        for(let i=0;i<3;i++){
            let tile=document.getElementById(i.toString()+"-"+i.toString());
            tile.classList.add("winner");
        }
        gameOver=true;
        alert("Người chơi "+board[0][0]+" thắng");
        return
    }
    //Check theo duong cheo ben phai
    if(board[0][2]==board[1][1] && board[1][1]==board[2][0] && board[0][2]!=" "){
        for(let i=0;i<3;i++){
            let tile=document.getElementById(i.toString()+"-"+(2-i).toString());
            tile.classList.add("winner");
        }
        gameOver=true;
        alert("Người chơi "+board[0][2]+" thắng");
        return
    }
    //Nếu không có người chơi nào thắng thì hiển thị thông báo hòa
    let isBoardFull = true;
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            if (board[row][col] === " ") {
                isBoardFull = false;
                break;
            }
        }
        if (!isBoardFull) {
            break;
        }
    }

    if (isBoardFull) {
        gameOver = true;
        alert("Hòa nhau");
    }
}
