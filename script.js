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

    function enterAsGuest() {
        window.location.href = "Home.html";
    }

    window.showSignup = showSignup;
    window.showLogin = showLogin;
    window.enterAsGuest = enterAsGuest;

   
    document.querySelector(".signup-screen form").addEventListener("submit", function (event) {
        event.preventDefault();
        window.location.href = "Home.html";
    });

    document.querySelector(".login-screen form").addEventListener("submit", function (event) {
        event.preventDefault();
        window.location.href = "Home.html";
    });

    
    document.querySelectorAll(".guest-option").forEach(guestLink => {
        guestLink.addEventListener("click", function (event) {
            event.preventDefault();
            enterAsGuest();
        });
    });

    showSignup();
});
