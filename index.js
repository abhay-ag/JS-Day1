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
if (sum <= 20){
    console.log("Do you want to draw a new Card")
}
else if(sum === 21){
    console.log("Woohoo! You've got a blackjack")
    blackjack = true
}
else{
    console.log("You're out of the Game!")
    isAlive = false
}
