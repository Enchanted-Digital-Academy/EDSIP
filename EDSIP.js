// LOGIN FORM
const loginForm = document.getElementById("formLogin");
const email = document.getElementById("email");
const password = document.getElementById("inPassword");

// FORGOT PASSWORD
const forgotPWD = document.getElementById("forgotPWD");
const forgotPass = document.getElementById("forgotPass");
const newEm = document.getElementById("newEm");
const username = document.getElementById("username");
const newPass = document.getElementById("newPass");
const resetPass = document.getElementById("resetPass");

// LOGIN
loginForm.addEventListener("submit", function(event){
    event.preventDefault();
    if(email.value.trim() === ""){
        alert("Please enter your email");
        return;
    }
    alert("Login Successful!")
});

// SHOW FORGOT PASSWORD
forgotPWD.addEventListener("click", function(){
    forgotPass.style.display = "block";
});

// RESET PASSWORD
resetPass.addEventListener("click", function(){
    if (newEm.value.trim() === ""){
        alert("Enter your email");
        return;
    }
    if (username.value.trim() === ""){
        alert("Enter your username");
        return;
    }
    if (newPass.value.trim() === ""){
        alert("Enter new password");
        return;
    }
    if (newPass.value.length <8){
        alert("Password must be at least 8 characters");
        return;
    }
    alert("Password reset successful!");
    forgotPass.style.display = "none";
});