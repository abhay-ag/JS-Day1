let count = 0;
let counter = document.getElementById('counter')
document.getElementById('increase').addEventListener('click',
    function increase() {
        count += 1
        counter.textContent = count
    }
)
document.getElementById('save').addEventListener('click',
    function save() {
        let para = document.getElementById('entry')
        para.textContent += count + " - "
        count = 0;
        counter.textContent = '0'
    }
)

// BlackJack

let cards = []
let sum = 0
let blackjack = false
let isAlive = false
let message = '';
let messageEl = document.getElementById('message')
let sumEl = document.querySelector('#sum-el')
let cardsEl = document.querySelector("#cards-el")

let player = {
    name: "Abhay Aggarwal",
    chips: 145,
    sayHello: function(){
        console.log('Hello World')
    }
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
    let randCard = Math.floor(Math.random() * 13) + 1
    if(randCard === 1){
        randCard = 11
    }
    else if(randCard >10){
        randCard = 10
    }
    return randCard
}
function startGame(){
    isAlive = true
    blackjack = false
    let first = getRandomCard()
    let second  = getRandomCard()
    cards = [first, second]
    sum = first + second
    renderGame()
}

function renderGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    }
    else if (sum === 21) {
        message = "You've got Blackjack!"
        blackjack = true
    }
    else {
        message = "You're out of the game"
        isAlive = false
    }
    cardsEl.textContent ="Cards: "
    for(let i = 0; i <= cards.length -1; i++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent="Sum: "+sum
    messageEl.textContent = message;
}
function newCard(){
    if(isAlive && !blackjack){
        let card = getRandomCard()
        cards.push(card)
        sum += card

        renderGame()
    }
}