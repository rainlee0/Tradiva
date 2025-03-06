document.addEventListener("DOMContentLoaded", function () {
    const signupScreen = document.getElementById("signup-screen");
    const loginScreen = document.getElementById("login-screen");

    function showSignup() {
        signupScreen.style.display = "flex";
        loginScreen.style.display = "none";
    }

    function showLogin() {
        signupScreen.style.display = "none";
        loginScreen.style.display = "flex";
    }

    // Attach functions globally
    window.showSignup = showSignup;
    window.showLogin = showLogin;

    // Handle form submission and redirect to index.html
    document.querySelector(".signup-screen form").addEventListener("submit", function (event) {
        event.preventDefault();
        window.location.href = "index.html";
    });

    document.querySelector(".login-screen form").addEventListener("submit", function (event) {
        event.preventDefault();
        window.location.href = "index.html";
    });

    // Initially show Sign Up screen
    showSignup();
});
