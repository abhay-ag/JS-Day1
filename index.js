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

let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let blackjack = false
let isAlive = true
let message = '';
let messageEl = document.getElementById('message')
let sumEl = document.querySelector('#sum-el')
let cardsEl = document.querySelector("#cards-el")

function getRandomCard(){
    return 5
}

function startGame(){
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
    let card = getRandomCard()
    cards.push(card)
    sum += card

    renderGame()
}