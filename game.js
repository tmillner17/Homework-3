let snakes = [
    'boa',
    'python',
    'colubrid',
    'anaconda',
    'venomous'
]
let currentWord = ''
let wins = 0
let guessesRemaining = 7
let lettersGuessed = []
let randomWord = ''

    // word funtion
function initGame(){
    getRandomWord()
    updateDom()
    setEventListener()
}
initGame()
function getRandomWord() {
        const randNum = Math.floor(Math.random() * ((snakes.length - 1) - 0 + 1)) + 0
         randomWord = snakes[randNum] 
        console.log('ran getRandomword')
        //return randomWord
}
function setEventListener(){
    document.onkeyup = function(e){
        lettersGuessed.push(e.key)
        wordHasBeenGuessed()
        if(wordHasBeenGuessed()){
            alert("You've Won!!!")
            resetGame()
        }
        shouldGuessesGoDown(e.key)
        console.log(randomWord, lettersGuessed, guessesRemaining)
        console.log('ran setEventListener')
        updateDom()
        checkIfUserLost()
    }
}
function wordHasBeenGuessed(){
    console.log('ranwordhasbeenguess')
    for(let i=0; i<randomWord.length; i++){
        if(lettersGuessed.includes(randomWord[i])){
            
        }else{
            return false
        }
    }
    return true
}
function shouldGuessesGoDown(){ console.log('shouldGuessesGoDown')
    if(!randomWord.includes(lettersGuessed)){
        guessesRemaining--
    }
}
function updateDom(){ console.log('updateDOM')
    document.getElementById("guesses-remaining").textContent = guessesRemaining
    document.getElementById('letters-guessed').textContent = lettersGuessed
    showLettersorDashes()
}
function showLettersorDashes(){
    let displayWord =''
    for(let i=0; i<randomWord.length; i++){
        if(lettersGuessed.includes(randomWord[i])){
            displayWord = displayWord + randomWord[i]
        }else{
            displayWord = displayWord + '_'+ ' '
        }
    }
    console.log(displayWord)
    document.getElementById('word').textContent = displayWord
}
function checkIfUserLost(){
    if(guessesRemaining<= 0){
        alert('You Lost!')
        resetGame()
    }
}
function resetGame(){
    guessesRemaining = 7
    getRandomWord()
    lettersGuessed = []
    updateDom()
}
document.getElementById("button").onclick = resetGame

// show on document funtions
//document.getElementById('word').innerHTML = getRandomWord()
// log funtions
// console.log(getRandomWord())
// console.log('snakes;', snakes)
// console.log(addEventListener)
// console.log(shouldGuessesGoDown)
// console.log(wordHasBeenGuessed)
// console.log(setEventListener)
// console.log(showLettersorDashes)

// key press functions


