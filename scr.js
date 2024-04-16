// script.js

function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Both username and password are required!");
    } else {
        // You can add additional authentication logic here.
        // For simplicity, let's just show an alert for successful login.
        alert("Login successful! Redirecting to the weather page...");
        // You can add code here to redirect the user to the weather page.
    }
}

function redirectToSignUp() {
    // You can add code here to redirect the user to the sign-up page.
    alert("Redirecting to Sign Up page...");
    window.location.href = "signup.html";
}
