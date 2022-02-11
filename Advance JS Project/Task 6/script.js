// Initialise the Queen Position
class QueenAttack{
    constructor(row,col,oppRowQ, oppColQ){
        this.row = row;
        this.col = col;
        this.oppRowQ = oppRowQ;
        this.oppColQ = oppColQ;
    }
}


// Check if Queen Can Attack
function canAttack(queenPos){
    if (queenPos.row == queenPos.oppRowQ){
        return true;
    }
    else if (queenPos.col == queenPos.oppColQ){
        return true;
    }else if (Math.abs(queenPos.row - queenPos.oppRowQ) == Math.abs(queenPos.col - queenPos.oppColQ)){
        return true;
    }
    else {
        return false;
    }
    
}

// Get Element From HTML
let submit = document.getElementById("submit");
let form = document.getElementById("form");
let result = document.getElementById("result");

submit.onclick = function(event){
    // On Clicking Submit get the value
    let row =document.getElementById("row-queen").value;
    let col =document.getElementById("col-queen").value;
    let oppRowQ =document.getElementById("opp-row-queen").value;
    let oppColQ =document.getElementById("opp-col-queen").value;

    // Call class to generate the position
    let queenPosition = new QueenAttack(row,col,oppRowQ, oppColQ);
    
    // Display if the Queen can attack
    if(canAttack(queenPosition)){
        result.innerHTML = "Queen Can Attack Each Other";
    }else{
        result.innerHTML = "Queen Can <b>Not</b> Attack Each Other";
    }

    event.preventDefault();
    form.reset();
}