const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z]{6,12}$/;

form.addEventListener('submit', e => {
    e.preventDefault();

    // Validação
    const username = form.username.value;    

    if (usernamePattern.test(username)) {
        // feedback good info
        feedback.textContent = 'That username is valid!';
    } else {
        // feedback help info
        feedback.textContent = 'Username must contain letters only & be between 6 & 12 characters long.';
    }
});

// live feedback
form.username.addEventListener('keyup', e => {

    if (usernamePattern.test(e.target.value)) {
        form.username.setAttribute('class', 'sucess');
    } else {
        form.username.setAttribute('class', 'error');
    }
});