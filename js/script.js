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
        <div class="card" onclick="flipCard(this)">
            <img src="img/back.png" class="frente">
            <img src="img/${img}" class="costas">
        </div>
    `
});

deskCard.innerHTML = cardHTML + cardHTML;

//adicionda e faz com que a carta flipe ao receber a classe 'selected'
function flipCard(card) {
    card.classList.toggle('selected');
}