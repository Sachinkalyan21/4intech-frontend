document.addEventListener('DOMContentLoaded', async () => {
    const token = localStorage.getItem('token');
    if (!token) {
        alert('You are not logged in');
        window.location.href = 'login.html';
    }

    // Mock API for user details and appointments
    document.getElementById('username').textContent = 'User'; // Mock user name

    const form = document.getElementById('availabilityForm');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const startTime = document.getElementById('startTime').value;
        const endTime = document.getElementById('endTime').value;

        // Mock API to send availability
        console.log('Availability:', { startTime, endTime });
        alert('Availability set successfully');
    });
});