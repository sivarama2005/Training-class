function validateform(){
let valid = true;

    // Clear previous errors
    document.querySelectorAll("span").forEach(e => e.innerHTML = "");

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let age = document.getElementById("age").value;
    let gender = document.getElementById("gender").value;
    let course = document.getElementById("course").value;
    let password = document.getElementById("password").value;

    // Name
    if (name === "") {
        document.getElementById("nameError").innerHTML = "Name is required<br>";
        valid = false;
    }

    // Email
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        document.getElementById("emailError").innerHTML = "Invalid email format<br>";
        valid = false;
    }

    // Phone
    if (!phone.match(/^[0-9]{10}$/)) {
        document.getElementById("phoneError").innerHTML = "Phone must be 10 digits<br>";
        valid = false;
    }

    // Age
    if (age < 17 || age > 60) {
        document.getElementById("ageError").innerHTML = "Age must be between 17 and 60<br>";
        valid = false;
    }

    // Gender
    if (gender === "") {
        document.getElementById("genderError").innerHTML = "<br>Select gender<br>";
        valid = false;
    }

    // Course
    if (course === "") {
        document.getElementById("courseError").innerHTML = "<br>Select a course<br>";
        valid = false;
    }

    // Password
    if (password.length < 6) {
        document.getElementById("passwordError").innerHTML = "Password must be at least 6 characters<br>";
        valid = false;
    }

    if (valid) {
        alert("Registration Successful!");
    }

    return valid;
}