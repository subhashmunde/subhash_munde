const form = document.querySelector('form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const submitBtn = document.getElementById('submit-btn');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (username === '' || password === '') {
        alert('Please enter a username and password.');
        return;
    }
    const correctUsername = '12';
    const correctPassword = '12';

    if (username === correctUsername && password === correctPassword) {
        alert('login sucessfuly'); 
        window.location.href = 'img.html'; 
    } else {
        alert('Incorrect username or password. Please try again.'); 
    }
});
