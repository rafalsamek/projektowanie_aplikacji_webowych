window.onload = function () {
    const MIN_EMAIL_LENGTH = 5;
    const MIN_PASSWORD_LENGTH = 8;

    let form = document.getElementById('form');
    let emailInput = document.getElementById('email-input');
    let passwordInput = document.getElementById('password-input');
    let emailError = document.getElementById('email-error');
    let passwordError = document.getElementById('password-error');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (validateForm()) {
            window.alert('Poprawnie wysłany formularz.');
            clearForm();
        }
    });

    function validateForm() {
        validEmail = true;
        validPassword = true;

        if (emailInput.value.length < MIN_EMAIL_LENGTH) {
            validEmail = false;
            emailError.removeAttribute('hidden')
        } else {
            emailError.setAttribute('hidden', '');
        }

        if (passwordInput.value.length < MIN_PASSWORD_LENGTH) {
            validPassword = false;
            passwordError.removeAttribute('hidden')
        } else {
            passwordError.setAttribute('hidden', '');
        }



        return validEmail & validPassword;
    }

    function clearForm() {
        emailInput.value = '';
        passwordInput.value = '';
    }
};