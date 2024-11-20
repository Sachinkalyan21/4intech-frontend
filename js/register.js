document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('http://localhost:5001/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password }),
        });
        const result = await response.json();
        if (response.ok) {
            alert('Registration successful');
            window.location.href = 'login.html';
        } else {
            alert(result.error);
        }
    } catch (err) {
        console.error(err);
    }
});