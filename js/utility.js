// Donate Money Function
function donateMoney(card){
    const inputField = card.querySelector('input');
    const donateAmount = parseFloat(inputField.value);
    const availableBalance = parseFloat(document.getElementById('available-balance').innerText);

    if(isNaN(donateAmount)||donateAmount<0){
        alert("Invalid Number");
        return;
    }
    if(donateAmount>availableBalance){
        alert("insufficient Balance");
        return ;
    }
    const previousDonationElement = card.querySelector('.donated');
    const previousDonationNumber = parseFloat(previousDonationElement.innerText);
    const totalDonation = (donateAmount+previousDonationNumber).toFixed(2);
    previousDonationElement.innerText = totalDonation;
    inputField.value = "";
    const newBalance = (availableBalance-donateAmount).toFixed(2);
    document.getElementById('available-balance').innerText = newBalance;
    
    // add to history
    const donatedFor = card.querySelector('.donated-for').innerText;
    let history = document.getElementById('history-page');
    let div = document.createElement('div');
    div.classList.add('p-8', 'space-y-4', 'border-2', 'rounded-2xl', 'border-gray-200');
    div.innerHTML = `
        <h3 class="font-bold text-xl">${donateAmount} Taka is Donated for ${donatedFor}</h3>
        <p class="font-light text-base text-color-txt-secondary">Date : ${new Date()}</p>
    `
    history.appendChild(div);
    return;
}



/* Toggling donation and history pages */
function togglePage(target){
    const donationPage  = document.getElementById('donation-page');
    const historyPage  = document.getElementById('history-page');

    donationPage.classList.add('hidden');
    historyPage.classList.add('hidden');

    if(target.id == 'btn-donation'){
        donationPage.classList.remove('hidden');
    }
    if(target.id == 'btn-history'){
        historyPage.classList.remove('hidden');
    }
}

// swap action button styles
function swapBtnStyle(){
    const donationButton  = document.getElementById('btn-donation');
    const historyButton  = document.getElementById('btn-history');
    
    let temp = donationButton.className;
    donationButton.className = historyButton.className;
    historyButton.className = temp;
}

