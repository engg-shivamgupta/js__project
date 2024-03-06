let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");
const genCompChoice =()=>{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3); 
    //math.random generate random numbers between 0 and 1 decimal numbers 
    //for indexing the array we mltiplied it by 3 to came in range from 0 to 2 and we
    //only integer so we used math.floor for only int.
    return options[randIdx];
};

const drawGame =()=>{
   console.log("Game was Draw");
    msg.innerText = "game was draw!!! // play againn.."; 
    msg.style.backgroundColor = "blue";
};
const showWinner =(userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        userscorepara.innerText = userScore;
        console.log("you win!!!");
        msg.innerText = `You win!! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        console.log("you lose"); 
         compScore++;
        compscorepara.innerText = compScore;
         msg.innerText = `You lose!! Your ${compChoice} beats ${userChoice}`;;  
         msg.style.backgroundColor = "red";
    }
};
const playGame = (userChoice)=>{
console.log("user choice=",userChoice);
//generate computer choice
const compChoice = genCompChoice();
console.log("comp choice=",compChoice);
if(userChoice===compChoice){
    //game draw
    drawGame();
}
else  {
    let userWin = true;
    if(userChoice==="rock"){
        userWin = compChoice==="paper"?false:true;
    }else if(userChoice==="paper"){
    userWin = compChoice==="scissors"?false:true;
    }else{
    userWin = compChoice==="rock"?false:true;
   }
   showWinner(userWin,userChoice,compChoice);
}
};
 

choices.forEach((choice) =>{
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});