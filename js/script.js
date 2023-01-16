let hasFlippedCard = false;
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

imagens.forEach((img, index) => {
    cardHTML += `
        <div class="card" data-test="card" data-index="${index}">
            <img src="img/back.png" class="costas" data-test="face-down-image">
            <img src="img/${img}" class="frente" data-test="face-up-image">
        </div>
    `
});

//contatena os cards no html e adiciona o evento "click" no html
deskCard.innerHTML = cardHTML + cardHTML;
const cards = document.querySelectorAll(".card");
cards.forEach(card => card.addEventListener('click', flipCard));


//adicionda e faz com que a carta flipe ao receber a classe 'selected'
function flipCard() {
    this.classList.toggle('selected');

    if(!hasFlippedCard){
        hasFlippedCard = true;
        firstCard = this;
    } else {
        hasFlippedCard = false;
        secondCard = this;  
        machCard();
    }
}

//retira o evento de virar o card e verifica se ao virar os cards são correspondentes.
function machCard() {
    if (firstCard.dataset.index === secondCard.dataset.index && firstCard !== secondCard){
        firstCard.removeEventListener('click' , flipCard);
        secondCard.removeEventListener('click' , flipCard);
       
        console.log("isMach");
    } else {
        setTimeout(() => {
            firstCard.classList.remove('selected');
            secondCard.classList.remove('selected');
        }, 1000)
    }
}

