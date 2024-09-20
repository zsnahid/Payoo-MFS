// document.getElementById('add-money-btn').addEventListener('click', function (e) {
//     e.preventDefault();
//     const addAmount = document.getElementById('add-amount').value;
//     const pin = document.getElementById('add-money-pin').value;
//     if (pin === '1234') {
//         let currentBalance = parseInt(document.getElementById('current-balance').innerText);
//         console.log(currentBalance);
//         currentBalance += parseInt(addAmount);
//         document.getElementById('current-balance').innerText = currentBalance;
//         console.log('Money added');
//     }
//     else {
//         alert('Wrong pin');
//     }
// })

// document.getElementById('cashout-btn').addEventListener('click', function (e) {
//     e.preventDefault();
//     const cashoutAmount = document.getElementById('cashout-amount').value;
//     const pin = document.getElementById('cashout-pin').value;
//     if (pin === '1234') {
//         let currentBalance = parseInt(document.getElementById('current-balance').innerText);
//         console.log(currentBalance);
//         currentBalance -= parseInt(cashoutAmount);
//         document.getElementById('current-balance').innerText = currentBalance;
//         console.log('Money added');
//     }
//     else {
//         alert('Wrong pin');
//     }
// })

// document.getElementById('cashout-option').addEventListener('click', function(){
//     // document.getElementById('add-money-form').style.display = 'none';
//     // document.getElementById('cashout-form').style.display = 'block';
//     document.getElementById('add-money-form').classList.add('hidden');
//     document.getElementById('cashout-form').classList.remove('hidden');
// })

// document.getElementById('add-money-option').addEventListener('click', function(){
//     document.getElementById('add-money-form').classList.remove('hidden');
//     document.getElementById('cashout-form').classList.add('hidden');
// })



