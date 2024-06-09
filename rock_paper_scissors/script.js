
let userScore =0;
let compScore =0; 

const sels = document.querySelectorAll('.sel');
const icons = document.querySelectorAll('.game');
const text = document.querySelector('.text');
const restart = document.querySelector('.restart');
const move = document.querySelector('#move');


const arr = ["Rock", "Paper", "Scissors"];
let UserWin;

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const genCompChoice = () => { 
    const randIdx = Math.floor(Math.random() * 3); 
    return arr[randIdx];
}

// const gameup = () => {
//     restart(); 
//     window.alert("Start game again!")
// }

const drawGame = () => {
    console.log("Game was Draw");
    text.innerText = "Game was draw! Play again.";
    text.style.backgroundColor = "beige";
}

const showWinner = (UserWin, userChoice, compChoice) => {
    
    if(UserWin){
        userScore++; 
        userScorepara.innerText = userScore;
        // console.log("You win!");
        text.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        text.style.backgroundColor = "green";
        
    } else {
        compScore++;
        compScorepara.innerText = compScore;
        //console.log("You lost!");
        text.innerText = `You Loose! ${compChoice} beats your ${userChoice}`;
        text.style.backgroundColor = "red";
    }
    console.log(userScore, compScore);
    gameOver();
    
};

const playGame = (userChoice) => {
        console.log("User choice = ", userChoice );

        //computer choice
        const compChoice = genCompChoice();
        console.log("Computer's choice = ", compChoice );

    //Draw case 
    if(userChoice === compChoice){
        drawGame();
    }
    else if(
        userChoice === arr[0] && compChoice === arr[1] || 
        userChoice === arr[1] && compChoice === arr[2] || 
        userChoice === arr[2] && compChoice === arr[0] )
      {
        UserWin = false;
        //console.log("Computer won");
        showWinner(UserWin, userChoice, compChoice);
      }
    else{
        UserWin = true;
        //console.log("You won");
        showWinner(UserWin, userChoice, compChoice);
    }
    move.innerText = `Computer's Choice: ${compChoice}`;
};

const gameOver = () => {
        
    if(userScore === 10){
        window.alert("YOU WON! Start game again.");
        userScore =0; 
        compScore =0;
    } else if (compScore === 10 ){
        window.alert("YOU LOST! Better luck next time!");
        userScore =0; 
        compScore =0;
    }
        userScorepara.innerText = userScore; 
        compScorepara.innerText = compScore;
//&& compScore < 10
}

sels.forEach((sel) => {
    //console.log(sel);
    sel.addEventListener("click", () => {
        const userChoice = sel.getAttribute("id")
        playGame(userChoice);
        // const compChoice = genCompChoice();
        // move.innerText = `Computer's Choice: ${compChoice}`;
    });
});

icons.forEach((game) => {
    //console.log(game);
    game.addEventListener("click", () => {
        const userChoice = game.getAttribute("id")
        playGame(userChoice);
        // const compChoice = genCompChoice();
        
    });
});

restart.addEventListener("click", () =>{
    userScore =0;
    compScore =0;
    userScorepara.innerText =userScore; 
    compScorepara.innerText =compScore; 

    //const compChoice = genCompChoice();
    move.innerText = `Computer's Choice: TO BE SELECTED`;
    text.innerText = "Play your Turn!"
    text.style.backgroundColor = "#BCAC50";
    move.innerText = "";
    console.log(userScore, compScore);
});

