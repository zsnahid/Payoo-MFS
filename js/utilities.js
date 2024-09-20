function getInputFieldValueById(id) {
    let inputValue = document.getElementById(id).value.trim();
    inputValue = Number(inputValue);
    if(isNaN(inputValue)){
        return null;
    }
    return inputValue;
}

function getTextFieldValueById(id) {
    let textValue = document.getElementById(id).innerText;
    textValue = parseInt(textValue);
    return textValue;
}

function showSectionById(id) {
    let options = document.getElementsByClassName('option-display');
    for (let option of options) {
        option.classList.add('hidden');
    }
    document.getElementById(id).classList.remove('hidden');
}

function addTransactionToHistory(amount, oldBalance, newBalance) {
    const transactionHistory = document.getElementById('transaction-history');
    const div = document.createElement('div');
    div.classList.add('stat');
    if (newBalance > oldBalance) {
        div.innerHTML =
            `<p>Money added: <span class="font-semibold">${amount}</span></p>
            <p> New balance: <span class="font-semibold">${newBalance}</span></p>`;
    } else {
        div.innerHTML =
            `<p>Cash Out: <span class="font-semibold">${amount}</span></p>
            <p> New balance: <span class="font-semibold">${newBalance}</span></p>`;
    }
    transactionHistory.append(div);
}