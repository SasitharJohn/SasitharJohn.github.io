function validatecard() {
    const cardnumber = document.getElementById('cardnumber').value;
    const valid = luhnCheck(cardnumber);
    const result = document.getElementById('result');
    result.textContent = valid ? "The card is valid" : "Not valid";
    result.style.color = valid ? "green" : "red";
}

function luhnCheck(cardnumber) {
    let sum = 0;
    let product;

    for (let i = cardnumber.length - 1; i >= 0; i--) {
        let digit = parseInt(cardnumber.charAt(i));

        if ((cardnumber.length - i) % 2 === 0) {  // Corrected alternation check
            product = digit * 2;
            sum += product > 9 ? product - 9 : product;  // Adjust for doubled digits > 9
        } else {
            sum += digit;
        }
    }  

    return (sum % 10 === 0);
}
