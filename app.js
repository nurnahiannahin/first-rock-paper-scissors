let userScore = 0;

let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user_score");
const compScorePara = document.querySelector("#comp_score");

const genComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
};

const drawGame = () => {
    msg.innerText = "Game was Draw. Play Again.";
    msg.style.backgroundcolor = "yellow";
};

const showWinner = (userWin, userChoice, computerChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundcolor = "green";
    } else {
        computerScore++;
        compScorePara.innerText = computerScore;
        msg.innerText = `You Lose.${computerChoice} beats Your ${userChoice}`;
        msg.style.backgroundcolor = "red";
    }
};

const playGame = (userChoice) => {
    console.log("User Choice is = ", userChoice);
    // Computer choice
    const computerChoice = genComputerChoice();
    console.log("Computer Choice = ", computerChoice);

    if(userChoice === computerChoice) {
        //Game Draw
        drawGame();
    } else {
        let userWin = true;

        if(userChoice === "rock") {
            // scissors, paper
            userWin = computerChoice === "scissors" ? true : false;
        } else if (userChoice = "paper") {
            // comp = rock, scissors
            userWin = computerChoice === "rock" ? true : false;
        } else {
            // comp = rock, paper
            userWin = computerChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, computerChoice);
    }

};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});