console.clear();

document.getElementById('login-btn').addEventListener('click', function (e) {
    e.preventDefault();
    const phoneNum = document.getElementById('phone-number').value;
    const pin = document.getElementById('pin').value;
    console.log(phoneNum, pin);
    if (phoneNum === '5' && pin === '1234') {
        console.log('Login successful');
        window.location.href = "./home.html";
    }
    else {
        alert('Wrong phone number or pin!');
    }
})
