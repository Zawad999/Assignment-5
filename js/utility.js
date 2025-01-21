// Donate Money Function
function donateMoney(card){
    const inputField = card.querySelector('input');
    const donateAmount = parseFloat(inputField.value);
    const availableBalance = parseFloat(document.getElementById('available-balance').innerText);

    if(isNaN(donateAmount)){
        alert("not a number");
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
    
    return;
}