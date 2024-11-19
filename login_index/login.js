document.addEventListener("DOMContentLoaded", function() {
    // Get elements for toggling forms
    const signupLink = document.querySelector(".signup-link");
    const loginLink = document.querySelector(".login-link");
    const signupSection = document.getElementById("signup-section");
    const signinSection = document.getElementById("signin-section");

    // Toggle between sign-up and sign-in forms
    signupLink.addEventListener("click", function(event) {
        event.preventDefault();
        signupSection.style.display = "block";
        signinSection.style.display = "none";
    });

    loginLink.addEventListener("click", function(event) {
        event.preventDefault();
        signupSection.style.display = "none";
        signinSection.style.display = "block";
    });


    // Twitter Login
    document.getElementById("twitter-login").addEventListener("click", function() {
        window.location.href = "YOUR_BACKEND_TWITTER_LOGIN_URL"; // Redirect to your backend for OAuth
    });
});


