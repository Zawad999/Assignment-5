// Donate Money Function
function donateMoney(card){
    const inputField = card.querySelector('input');
    const donateAmount = parseFloat(inputField.value);
    const availableBalance = parseFloat(document.getElementById('available-balance').innerText);

    if(isNaN(donateAmount)||donateAmount<0){
        alert("Please Input a Valid Number");
        return;
    }
    if(donateAmount>availableBalance){
        alert("Insufficient Balance!!");
        return ;
    }
    const previousDonationElement = card.querySelector('.donated');
    const previousDonationNumber = parseFloat(previousDonationElement.innerText);
    const totalDonation = (donateAmount+previousDonationNumber).toFixed(2);
    previousDonationElement.innerText = totalDonation;
    inputField.value = "";
    const newBalance = (availableBalance-donateAmount).toFixed(2);
    document.getElementById('available-balance').innerText = newBalance;
    
    // Trigger Successfull Transaction Alert
    const modal = document.getElementById('my_modal_1');
    if(!modal.showModal()){
        dialogPolyfill.registerDialog(modal);
    }

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

    //update sesssion storages of history page
    sessionStorage.setItem('history-page', history.innerHTML);

    // Update session Storages of balance
    const donatedPlace = previousDonationElement.id;
    sessionStorage.setItem(donatedPlace, totalDonation);
    sessionStorage.setItem('available-balance', newBalance);


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

