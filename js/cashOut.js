document.getElementById('cashout-btn').addEventListener('click', function (e) {
    e.preventDefault();
    const cashoutAmount = getInputFieldValueById('cashout-amount');
    const pin = getInputFieldValueById('cashout-pin');
    if (pin === 1234) {
        const currentBalance = getTextFieldValueById('current-balance');
        const newBalance = currentBalance - cashoutAmount;
        document.getElementById('current-balance').innerText = newBalance;
        // add transaction to history
        addTransactionToHistory(cashoutAmount, currentBalance, newBalance);
    } else {
        alert('Failed to cash out!');
    }
})