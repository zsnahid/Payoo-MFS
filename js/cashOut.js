document.getElementById('cashout-btn').addEventListener('click', function (e) {
    e.preventDefault();
    const cashoutAmount = getInputFieldValueById('cashout-amount');
    const pin = getInputFieldValueById('cashout-pin');

    if(cashoutAmount === null){
        alert('Enter valid amount!');
        return;
    }

    if (pin === 1234) {
        const currentBalance = getTextFieldValueById('current-balance');

        if(currentBalance < cashoutAmount){
            alert('Insufficient balance!');
            return;
        }

        const newBalance = currentBalance - cashoutAmount;
        document.getElementById('current-balance').innerText = newBalance;
        // add transaction to history
        addTransactionToHistory(cashoutAmount, currentBalance, newBalance);
    } else {
        alert('Failed to cash out!');
    }
})