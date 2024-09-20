document.getElementById('add-money-btn').addEventListener('click', function (e) {
    e.preventDefault();
    const addAmount = getInputFieldValueById('add-amount');
    const pin = getInputFieldValueById('add-money-pin');
    
    if (addAmount === null) {
        alert('Enter valid amount!');
        return;
    }

    if (pin === 1234) {
        const currentBalance = getTextFieldValueById('current-balance');
        const newBalance = currentBalance + addAmount;
        document.getElementById('current-balance').innerText = newBalance;
        addTransactionToHistory(addAmount, currentBalance, newBalance);

    } else {
        alert('Failed to add money!');
    }
})