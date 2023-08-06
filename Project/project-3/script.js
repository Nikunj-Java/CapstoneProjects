document.getElementById("registrationForm").addEventListener("submit", function(event) {
    var isValid = true;

    // Username validation
    var username = document.getElementById("username").value;
    if (username.trim() === "") {
        document.getElementById("usernameError").textContent = "Username is required";
        isValid = false;
         
    } else {
        document.getElementById("usernameError").textContent = "";
    }

    // Email validation
    var email = document.getElementById("email").value;
    if (!/\S+@\S+\.\S+/.test(email)) {
        document.getElementById("emailError").textContent = "Valid email is required";
        isValid = false;
    } else {
        document.getElementById("emailError").textContent = "";
    }

    // Password validation
    var password = document.getElementById("password").value;
    if (password.length < 8) {
        document.getElementById("passwordError").textContent = "Password must be at least 8 characters";
        isValid = false;
    } else {
        document.getElementById("passwordError").textContent = "";
    }

    if (!isValid) {
        event.preventDefault(); // Prevent form submission if there are errors
    }
});
