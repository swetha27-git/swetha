function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var usernamePattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&#]).{10,}$/;
    var passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&#]).{10,}$/;

    if (!usernamePattern.test(username)) {
        alert("Username must be at least 10 characters long, including letters, numbers, and symbols.");
    } else if (!passwordPattern.test(password)) {
        alert("Password must be at least 10 characters long, including letters, numbers, and symbols.");
    } else {
        // Simulate successful login
        window.location.href = "dashboard.html";
    }
}

document.getElementById('togglePassword').addEventListener('click', function () {
    var passwordField = document.getElementById('password');
    var type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);

    // Toggle the eye icon
    this.textContent = type === 'password' ? '👁️' : '🙈';
});
