


let a = 10 - - 10;

console.warn(a);


let computerGuesses;
let userGuesses=[];
let userNumberUpdate=document.getElementById('userInput')

const init = () =>{
    computerGuesses = Math.floor(Math.random()*100);
    console.log(computerGuesses);
    // const gameArea=document.querySelector('.gameArea')
    // const guessAndStates=document.querySelector('.guessAndStates');
    // guessAndStates.classList.add('hidden');
    // gameArea.classList.add('hidden');
    
}

const StartGame=()=>{
    document.querySelector('.welcomeScreen').classList.add('hidden');
    document.querySelector('.guessAndStates').classList.remove('hidden');
}
// new Game button logic
const newGameStart=()=>{
    window.location.reload();
}

// Main logic of our game

const compareGuess=()=>{
    let userNumber=Number(document.getElementById("userInput").value);
    console.log(userNumber);
    userGuesses=[...userGuesses, userNumber]
    console.log(userGuesses);
    document.querySelector('.guesses').innerHTML=userGuesses;
    // Check the value or high;

    if (userNumber>computerGuesses){
        userNumberUpdate.value='';
        document.querySelector('.headingGuess').innerHTML="Your Guess Is High";
    }
    else if (userNumber===computerGuesses) {
        userNumberUpdate.value='';
        document.querySelector('.headingGuess').innerHTML="Correct Guess 🎉🥳";
        document.querySelector('.gameArea').classList.remove('hidden');
        userNumberUpdate.setAttribute('disabled',true);
    }
    else{
        userNumberUpdate.value='';
        document.querySelector('.headingGuess').innerHTML="Your Guess Is Low";
    }

    document.querySelector('.attempts').innerHTML=userGuesses.length;

    
}

const easyMode =()=>{
    const maxGuess=10;
    StartGame()
}
const hardMode =()=>{
    constmaxGuess=5;
    StartGame()
}




