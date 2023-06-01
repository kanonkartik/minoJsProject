const computerMoveDisplay= document.getElementById('coumpter-move')
const myMoveDisplay = document.getElementById('my-moves')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let myChoice
let computerMove
possibleChoices.forEach(possibleChoices=>possibleChoices.addEventListener('click',(e)=>{
   myChoice=e.target.id
   myMoveDisplay.innerHTML=myChoice 
   generateCoumpterChoice()
   getResult()
}))
 
function generateCoumpterChoice(){
    const randomNumber=Math.floor(Math.random()* 3) +1
     
    if (randomNumber===1){
computerMove='stone '
    }
    if (randomNumber===2){
        computerMove='paper'
            }
            if (randomNumber===3){
                computerMove='seassor'
                    }
computerMoveDisplay.innerHTML=computerMove
}
function getResult(){
    let result;
    if(computerMove===computerMove){
        result="It's a draw."
    }
    if (computerMove==="stone"&& myChoice=="paper"){
        result="You lose."
    }
    if (computerMove==="stone"&& 
    myChoice==="scissor"){
        result="You win!"
    }
    if (computerMove==="paper"&& 
    myChoice==="scissor"){
        result="You lose!"
    }
    if (computerMove==="paper"&& myChoice==="stone"){
        result="You win!"
    }
    if (computerMove==="scissor"&& 
    myChoice==="stone"){
        result="You lose!"
    }
    if (computerMove==="scissor"&& myChoice==="paper"){
        result="You win!"
    }
    resultDisplay.innerHTML=result
}