function togglePassword() {
  let showPassword = document.getElementById("eyeicon");
  let password = document.getElementById("password");
  
  if (password.type === "password") {
    password.type = "text";
    showPassword.classList.remove('fa-eye');
    showPassword.classList.add('fa-eye-slash');
  } else {
    password.type = "password";
    showPassword.classList.remove('fa-eye-slash');
    showPassword.classList.add('fa-eye');
  }
}

function emailValidation() {
  let email = document.getElementById("email");
  let emailValue = email.value;
  let errorMessage = document.querySelector(".email-error-message");
  
  if (emailValue === "") {
    errorMessage.textContent = "Enter your email";
    email.classList.add("error");
    return false;
  }
  else if (emailValue.length < 5) {
    errorMessage.textContent = "Email must be at least 5 characters long";
    return false;
  }
  else {
    errorMessage.textContent = "";
    email.classList.remove("error");
    return true;
  }
}

function passwordValidation() {
  let password = document.getElementById("password");
  let passwordValue = password.value;
  let errorMessage = document.querySelector(".password-error-message");
  
  if (passwordValue.length < 8 && passwordValue.length > 0) {
    errorMessage.textContent = "Password is less than 8 characters";
    password.classList.add("error");
    return false;
  } else if (passwordValue === "") {
    errorMessage.textContent = "Enter your Password";
    password.classList.add("error");
    return false;
  } else {
    errorMessage.textContent = "";
    password.classList.remove("error");
    return true;
  }
}

function validateForm() {
  const isEmailValid = emailValidation();
  const isPasswordValid = passwordValidation();
  
  if (isEmailValid && isPasswordValid) {
    window.location = "homepage.html";
  }

}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector(".log-in-btn").addEventListener('click', function (event) {
    event.preventDefault();
    validateForm();
  });

  document.querySelector("form").addEventListener('submit', function (event) {
    event.preventDefault();
    validateForm();
  });
});
