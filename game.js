let snakes = [
    'boa' , 
    'python' ,
    'colubrid' ,
    'anaconda' ,
    'venomous'
]

let guessedLetters = []

function getRandomWord(){
    const randNum = Math.floor(Math.random() * ((snakes.length -1) - 0 + 1)) + 0
    const randomWord = snakes[randNum]
    return randomWord
}


document.getElementById('word').innerHTML = getRandomWord()

console.log(getRandomWord())
console.log('snakes;', snakes)



