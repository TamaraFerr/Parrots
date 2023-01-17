let hasFlippedCard = false;
let trancaCard = false;
let firstCard, secondCard;
let contador = 0 

let qtdDeCartas = recebeQtdCartas(true);
const qtdDePares = qtdDeCartas/2;


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
imagens.splice(qtdDePares);
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
    if (trancaCard) return; 
    contador += 1;
    this.classList.toggle('selected');
    if(!hasFlippedCard){
        hasFlippedCard = true;
        firstCard = this;

        return;
    } 

    hasFlippedCard = false;
    secondCard = this;  
    matchCard();    
}

//retira o evento de virar o card e verifica se ao virar os cards são correspondentes.
function matchCard() {
    let isMatch = firstCard.dataset.index === secondCard.dataset.index && firstCard !== secondCard;
    isMatch ? desabilitaCard() : desviraCard();
    setTimeout(finalizaJogo, 1000);
}

//funcção para desabiçitar as cartas que sejam iguais
function desabilitaCard() {
    firstCard.removeEventListener('click' , flipCard);
    secondCard.removeEventListener('click' , flipCard);
}

//função para desvirar as cartas que sejam diferentes
function desviraCard() {
    trancaCard = true;

    setTimeout(() => {
        firstCard.classList.remove('selected');
        secondCard.classList.remove('selected');
        trancaCard = false;
    }, 1000)
}

//embaralha os cards aleatóriamente a cada reset que dá no game
(function embaralhaCard() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() -0.5);
        card.style.order = randomPos;
    });
})();

function finalizaJogo() {
    if(cards.length === document.querySelectorAll('.card.selected').length) {
        fimDeJogo = alert(`Você ganhou em ${contador} jogadas!`);
    }
}

function recebeQtdCartas(primeiraVez) {
    let promptMensagem = primeiraVez ? "Bem-vindo(a)! Digite um número par entre 4 e 14 para a quantidade de cartas!" : "Número inválido! Coloque um número par ente 4 e 14.";
    let input = prompt(promptMensagem);
    if(input%2 === 0 && input >= 4 && input <= 14) {
        return input;
    } 
    return recebeQtdCartas(false);
}