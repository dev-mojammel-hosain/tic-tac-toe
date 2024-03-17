let boxes = document.querySelectorAll(".box");

let turn = "X";
let isGameOver = false;

boxes.forEach(e =>{
    e.innerHTML = ""
    e.addEventListener("click", ()=>{
        e.style.background = "#fff";
        e.style.color = "rgb(255 0 87)";
        if(turn=="O"){
            e.style.color = "rgb(0 54 241)";
        }
        if(!isGameOver && e.innerHTML === ""){
            e.innerHTML = turn;
            cheakWin();
            cheakDraw();
            changeTurn();
        }
    })
})

function changeTurn(){
    if(turn === "X"){
        turn = "O";
        document.querySelector(".bg").style.left = "85px";
        document.querySelector(".x").style.color = "#fff";
        document.querySelector(".y").style.color = "#000";
    }
    else{
        turn = "X";
        document.querySelector(".bg").style.left = "0";
        document.querySelector(".x").style.color = "#000";
        document.querySelector(".y").style.color = "#fff";
    }
}

function cheakWin(){
    let winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]
    for(let i = 0; i<winConditions.length; i++){
        let v0 = boxes[winConditions[i][0]].innerHTML;
        let v1 = boxes[winConditions[i][1]].innerHTML;
        let v2 = boxes[winConditions[i][2]].innerHTML;

        if(v0 != "" && v0 === v1 && v0 === v2){
            isGameOver = true;
            document.querySelector("#results").innerHTML = turn + " win";
            document.querySelector("#play-again").style.display = "inline"

            for(j = 0; j<3; j++){
                boxes[winConditions[i][j]].style.background = "linear-gradient(148deg, #00ffea, #ff0098, #FDA000)"
                boxes[winConditions[i][j]].style.color = "#fff"
                boxes[winConditions[i][j]].style.boxShadow = "0px 0px 80px 0px #0000004d"
                document.querySelector(".body-bg").style.borderRadius = "0%"
                document.querySelector(".body-bg").style.height = "100%"
                document.querySelector(".body-bg").style.width = "100%"

            }
        }
    }
}

function cheakDraw(){
    if(!isGameOver){
        let isDraw = true;
        boxes.forEach(e =>{
            if(e.innerHTML === "") isDraw = false;
        })

        if(isDraw){
            isGameOver = true;
            document.querySelector("#results").innerHTML = "Draw";
            document.querySelector("#play-again").style.display = "inline"
        }
    }
}

document.querySelector("#play-again").addEventListener("click", ()=>{
    isGameOver = false;
    turn = "X";
    document.querySelector(".bg").style.left = "0";
    document.querySelector("#results").innerHTML = "";
    document.querySelector("#play-again").style.display = "none";
    document.querySelector(".x").style.color = "#000";
    document.querySelector(".y").style.color = "#fff";
    document.querySelector(".body-bg").style.borderRadius = "100%"
    document.querySelector(".body-bg").style.height = "0%"
    document.querySelector(".body-bg").style.width = "0%"

    boxes.forEach(e =>{
        e.innerHTML = "";
        e.style.removeProperty("background");
        e.style.removeProperty("box-shadow");
        e.style.color = "#fff"
    })
})