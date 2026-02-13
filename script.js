function validateLogin() {

    let user = document.getElementById("loginUser").value;
    let pass = document.getElementById("loginPass").value;

    if (user === "" || pass === "") {
        alert("All fields are required");
        return false;
    }

    if (pass.length < 4) {
        alert("Password must be at least 4 characters");
        return false;
    }

    alert("Login successful (demo)");
    return true;
}

function validateRegister() {

    let user = document.getElementById("regUser").value;
    let email = document.getElementById("regEmail").value;
    let pass = document.getElementById("regPass").value;

    if (user === "" || email === "" || pass === "") {
        alert("All fields are required");
        return false;
    }

    if (!email.includes("@")) {
        alert("Enter a valid email");
        return false;
    }

    if (pass.length < 4) {
        alert("Password must be at least 4 characters");
        return false;
    }

    alert("Registration successful (demo)");
    return true;
}
