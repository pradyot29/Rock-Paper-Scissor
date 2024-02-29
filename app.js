let userScore = 0 ;
let compScore = 0 ;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#comp-score");


const showWinner = (userWin, userChoice , computerChoice) => {

if(userWin){
userScore++ ;
userScorePara.innerText= userScore;
console.log("You Win!");
msg.innerText = `You Win! Your ${userChoice} beats ${computerChoice}` ;
msg.style.backgroundColor = "green";
}
else{
console.log("You Lose!");
compScore++ ;
computerScorePara.innerText = compScore;
msg.innerText = `You Lose! ${computerChoice} beats your ${userChoice} `;
msg.style.backgroundColor = "red";
}

}

const drawGame = () => {
console.log("Game was draw");
msg.innerText = "Game was draw" ;
msg.style.backgroundColor = "orange";

}
const genComputerChoice = () => {
const options = ["rock", "paper" , "scissor"];
const randomIdx = Math.floor( Math.random()*3);
return options[randomIdx];
};


const playGame = (userChoice) => {
console.log("user choice = " , userChoice);
const computerChoice = genComputerChoice();
console.log("computer choice= " , computerChoice);

if(userChoice===computerChoice){
//draw 
drawGame();
}

else{
let userWin = true;
if(userChoice === "rock")
{
userWin=computerChoice==="paper" ? false : true ;
}
else if(userChoice === "paper")
{
userWin=computerChoice==="scissor" ? false : true ;
}
else if(userChoice === "scissor")
{
userWin=computerChoice==="rock" ? false : true ;
}
showWinner(userWin, userChoice, computerChoice);
}
};

choices.forEach((choice) => {
const userChoice= choice.getAttribute("id")
  choice.addEventListener("click" , ()=>{
  console.log("choice was clicked" , userChoice);
  playGame(userChoice);
  });
});