
let yourPoints = 0;
let computerPoints = 0;
const h1locate = document.querySelector('h1');

function randomChoose() {
    let randomNumber = Math.floor(Math.random() * 3);
    let chooseArray = ["ROCK", "PAPER", "SCISSOR"];
  
    return chooseArray[randomNumber];
}

function handleChoice(yourChoice) {
    const locationYouChoosed = document.querySelector(".youc");
    const locationComputerChoosed = document.querySelector(".computerc");


    
    var computerChoice = randomChoose();
    if (yourChoice == computerChoice) {
        h1locate.style.color = 'black';
        h1locate.innerHTML = 'DRAW';

     
    } else {
        if ((yourChoice === 'ROCK' && computerChoice === 'SCISSOR') ||
            (yourChoice === 'PAPER' && computerChoice === 'ROCK') ||
            (yourChoice === 'SCISSOR' && computerChoice === 'PAPER')) {
            h1locate.style.color = 'blue';
            h1locate.innerHTML = 'YOU WON';
            document.querySelector('#yp').innerHTML = 'Wins: ' + ++yourPoints;

        } else {
            h1locate.style.color = 'red';
            h1locate.innerHTML = 'YOU LOST';
            document.querySelector('#cp').innerHTML = 'Losses: ' + ++computerPoints;

        }
    }
   
    locationYouChoosed.innerHTML = 'Your Choice: ' + yourChoice;
    locationComputerChoosed.innerHTML = "Computer's Choice: " + computerChoice;

  

}

function resetGame() {
    yourPoints = 0;
    computerPoints = 0;
    document.querySelector('#yp').innerHTML = 'Wins: ' + yourPoints;
    document.querySelector('#cp').innerHTML = 'Losses: ' + computerPoints;
    h1locate.innerHTML = 'Rock paper scissor';
    h1locate.style.color = 'black';
    document.querySelector('span').style.color = 'red';
  
}