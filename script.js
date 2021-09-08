//Advance to next round functionality
const nextRoundButton = document.getElementById('next-round-button');
const displayRoundNumber = document.getElementById('round-number');

let currentRoundNumber = displayRoundNumber.innerText;

const increaseRoundNumber = currentRoundNumber => Number(currentRoundNumber)+1;

nextRoundButton.addEventListener('click', ()=>{
    currentRoundNumber = increaseRoundNumber(currentRoundNumber);
    displayRoundNumber.innerText = currentRoundNumber;
    document.getElementById('submit-results').disabled=false;
    displayComputerChoice.innerText = '?';

})


//Generate Computer Choice Randomly
const generateComputerChoice =()=>{
    index = Math.floor(Math.random()*3);
    const choices = ['rock', 'paper', 'scissors'];
    return choices[index];
}
const submitButton = document.getElementById('submit-results');
const displayComputerChoice = document.getElementById('show-computer-choice');

let computerChoice, userChoice, winner;

const declareWinner = (computerInput, userInput)=>{
    userInput=userInput.toLowerCase();
    computerInput=computerInput.toLowerCase();
    if(userInput===computerInput)
        return "It's a Tie!";
    else if(userInput==='rock' && computerInput==='scissors')
        return 'User';
    else if(userInput==='paper' && computerInput==='rock')
        return 'User';
    else if(userInput==='scissors' && computerInput==='paper')
        return 'User';
    else return 'Computer';
}


submitButton.addEventListener('click', ()=>{
    
    computerChoice = generateComputerChoice();
    displayComputerChoice.innerText = computerChoice;

    if(document.getElementById('rock').checked===true ){
        userChoice = 'rock';
    }else if(document.getElementById('paper').checked === true){
        userChoice = 'paper';
    }else userChoice = 'scissors';

    winner = declareWinner(computerChoice, userChoice);

    alert(`Computer: ${computerChoice} | User: ${userChoice} | Winner: ${winner}`);

    document.getElementById('submit-results').disabled=true;

    if(winner==='User'){
        document.getElementById('user-score').innerText = Number(document.getElementById('user-score').innerText)+1;
    }else if(winner==='Computer'){
        document.getElementById('computer-score').innerText = Number(document.getElementById('computer-score').innerText)+1;
    }


})


// //Get user Input
// const submitUserChoice = document.getElementById('submit-user-choice');
// submitUserChoice.addEventListener('click', ()=>{
    

//     alert(`User Choice selected : ${userChoice}`);
// })



