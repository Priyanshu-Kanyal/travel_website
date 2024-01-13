javascript
function processPayment() {
    const cardNumber = document.getElementById('cardNumber').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;

    // Perform client-side validation for payment details (you can add more checks)
    if (!validatePaymentDetails(cardNumber, expiryDate, cvv)) {
        alert('Please provide valid payment details.');
        return;
    }

    // Simulate a successful payment (replace with actual payment gateway integration)
    const paymentResult = document.getElementById('paymentResult');
    paymentResult.innerHTML = '<p>Payment successful!</p>';
}

function validatePaymentDetails(cardNumber, expiryDate, cvv) {
    // Perform client-side validation for payment details (you can add more checks)
    const cardNumberRegex = /^\d{16}$/;
    const expiryDateRegex = /^(0[1-9]|1[0-2])\/20[0-9]{2}$/;
    const cvvRegex = /^\d{3}$/;

    return cardNumberRegex.test(cardNumber) && expiryDateRegex.test(expiryDate) && cvvRegex.test(cvv);
}

