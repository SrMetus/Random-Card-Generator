window.addEventListener('load', function() {
    randomSuitCard();
    randomNumberCard();
});

function randomSuitCard() {
    let suit = ["♦", "♥", "♠", "♣"];
    let randomSuit 
    
    suit.forEach(item => {
        randomSuit = Math.floor(Math.random() * 4 + 1);
    });

    //console.log(`Numero: ${randomSuit} y Pinta: ${suit[randomSuit - 1]}`);
    let pintas = document.querySelectorAll("#mySuit");
    pintas.forEach((item, index) => {
        item.innerHTML = suit[randomSuit - 1];
        let color = document.querySelectorAll("#mySuit")[index];
        switch(randomSuit) {
            case 1:
                color.classList.remove("diamond", "heart", "spade", "club");
                color.classList.add("diamond");
                break;
            case 2:
                color.classList.remove("diamond", "heart", "spade", "club");
                color.classList.add("heart");
                break;
            case 3:
                color.classList.remove("diamond", "heart", "spade", "club");
                color.classList.add("spade");
                break;
            case 4:
                color.classList.remove("diamond", "heart", "spade", "club");
                color.classList.add("club");
                break;
        }
        console.log(color);
    });
}

window.addEventListener('click', function() {
    randomSuitCard();
    randomNumberCard();    
});

function randomNumberCard() {
    let card = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let randomCard

    card.forEach(item => {
        randomCard = Math.floor(Math.random() * 13);
    });

    //console.log(`Numero: ${randomCard + 1} Carta: ${card[randomCard]}`);
    let numberCard = document.querySelector("#myCard");
    numberCard.innerHTML = card[randomCard];
}
