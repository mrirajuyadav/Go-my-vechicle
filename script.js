function bookRide() {
    document.getElementById('book').scrollIntoView({ behavior: 'smooth' });
}

function submitBooking(event) {
    event.preventDefault();

    const pickup = document.getElementById('pickup').value;
    const drop = document.getElementById('drop').value;
    const rideType = document.getElementById('rideType').value;

    alert(`Booking confirmed!\nPickup: ${pickup}\nDrop: ${drop}\nRide Type: ${rideType}`);
}
