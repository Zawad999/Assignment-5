/* **Donate Money ** */

const donationCards = document.querySelectorAll('.card')
for(let card of donationCards){
    card.addEventListener('click', function(event){
        if(event.target.classList.contains('donate-btn')){
            donateMoney(card);
        }
    })
}

