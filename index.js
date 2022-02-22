let count = 0;
let counter = document.getElementById('counter')
document.getElementById('increase').addEventListener('click',
function increase(){
    count +=1
    counter.textContent = count
}
)
document.getElementById('save').addEventListener('click',
function save(){
    let para = document.getElementById('entry')
    para.textContent += count + " - "
    count = 0;
    counter.textContent = '0'
}
)

// BlackJack

let firstCard = 10;
let secondCard = 11;
let sum = firstCard + secondCard
let blackjack  = false
let isAlive = true
let message = '';

if (sum <= 20){
    message = "Do you want a new card? 🙂"
}
else if(sum === 21){
    message = "Wohoo! You've got Blackjack! 😈"
    blackjack = true
}
else{
    message = "You're out of the game! 😨"
    isAlive = false
}

console.log(message)
