var email = document.querySelector("#email");
var emailRegex = /^[^@]+@[^@]+.[a-zA-Z]{2,}$/;
var password = document.querySelector("#password");
var buttonLogin = document.querySelector("#button-login");

function emailValidation() {
    if (email.value === "" || !emailRegex.test(email.value)) {
      return false;
    } else {
      return true;
    }
  }
  function passwordValidation() {
    if (
      password.value === "" || password.value.length < 8 ||
      validateNumbersAndLetters(password.value) == false
    ) {
      return false;
    } else {
      return true;
    }
  }
  function validateNumbersAndLetters(passwordTest) {
    var hasNumbers = false;
    var i = 0;
    do {
      if (!isNaN(passwordTest[i])) {
        hasNumbers = true;
      }
      i++;
    } while (i < passwordTest.length && hasNumbers == false);
    if (hasNumbers == true && isNaN(passwordTest)) {
      return true;
    } else {
      return false;
    }
  }
  function blurEmail() {
    if (emailValidation() === false) {
      password.insertAdjacentHTML(
        "afterend",
        '<div id="errorEmailPassword" class="errorEmailPassword">Email or password incorrect</div>'
      );
    }
  }
  function blurPassword() {
    if (passwordValidation() === false) {
      password.insertAdjacentHTML(
        "afterend",
        '<div id="errorEmailPassword" class="errorEmailPassword">Email or password incorrect</div>'
      );
    }
  }
  function focusInputEmailPassword() {
    if (document.querySelector("#errorEmailPassword")) {
      document.querySelector("#errorEmailPassword").remove();
    }
  }
  function onClickLogIn() {
    if (emailValidation() && passwordValidation() == true) {
      alert("Email: " + email.value + "\nPassword: " + password.value);
    } else {
      alert("Email or password incorrect");
    }
  }
  email.addEventListener("blur", blurEmail);
  email.addEventListener("focus", focusInputEmailPassword);
  password.addEventListener("blur", blurPassword);
  password.addEventListener("focus", focusInputEmailPassword);
  buttonLogin.addEventListener("click", onClickLogIn);