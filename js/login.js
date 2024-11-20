document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('http://localhost:5001/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });
        const result = await response.json();
        if (response.ok) {
            localStorage.setItem('token', result.token);
            alert('Login successful');
            window.location.href = 'dashboard.html';
        } else {
            alert(result.error);
        }
    } catch (err) {
        console.error(err);
    }
});