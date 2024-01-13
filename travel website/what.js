function submitBooking() {
    const checkInDate = document.getElementById('checkInDate').value;
    const checkOutDate = document.getElementById('checkOutDate').value;
    const numGuests = document.getElementById('numGuests').value;
    const approxBudget = document.getElementById('approxBudget').value;
    const mealsIncluded = document.querySelector('input[name="mealsIncluded"]:checked').value;

    // Perform client-side validation (you can add more checks)
    if (checkInDate === '' || checkOutDate === '' || numGuests <= 0 || approxBudget <= 0 || !mealsIncluded) {
        alert('Please fill in all fields with valid information.');
        return;
    }

    // Sending data to the server
    fetch('http://localhost:3000/submitBooking', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            checkInDate,
            checkOutDate,
            numGuests: parseInt(numGuests),
            approxBudget: parseInt(approxBudget),
            mealsIncluded,
        }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert(`Booking successful! Your Booking ID is ${data.bookingId}`);
        } else {
            alert('Booking failed. Please try again later.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred during booking. Please try again later.');
    });
}
