const card = document.querySelectorAll("card");
let firstCard, secondCard;

//renderização dos cards no jogo. Criando arrays com as imagens.
const deskCard = document.querySelector("#desk");
const imagens = [
    'parrot1.gif',
    'parrot2.gif',
    'parrot3.gif',
    'parrot4.gif',
    'parrot5.gif',
    'parrot6.gif',
    'parrot7.gif'
];

let cardHTML = '';

imagens.forEach(img => {
    cardHTML += `
        <div class="card" onclick="flipCard(this)" data-test="card">
            <img src="img/back.png" class="costas" data-test="face-down-image">
            <img src="img/${img}" class="frente" data-test="face-up-image">
        </div>
    `
});

deskCard.innerHTML = cardHTML + cardHTML;

//adicionda e faz com que a carta flipe ao receber a classe 'selected'
function flipCard(card) {
    card.classList.toggle('selected');
    card.classList.add('selected');

    if(!firstCard){
        firstCard = card;

        return false;
    }

    secondCard = card;
}