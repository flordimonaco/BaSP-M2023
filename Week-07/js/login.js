var email = document.querySelector("#email");
var password = document.querySelector("#password");
var buttonLogin = document.querySelector("#button-login");

function emailValidation() {
    if (email.value === "") {
      return false;
    } else {
      return true;
    }
  }

  function passwordValidation() {
    if (
      password.value === ""
    ) {
      return false;
    } else {
      return true;
    }
  }

  function blurEmail() {
    if (emailValidation() === false) {
      email.insertAdjacentHTML(
        "afterend",
        '<div id="errorEmailPassword" class="errorMessage">Email or password incorrect</div>'
      );
    }
  }

  function blurPassword() {
    if (passwordValidation() === false) {
      password.insertAdjacentHTML(
        "afterend",
        '<div id="errorEmailPassword" class="errorMessage">Password required</div>'
      );
    }
  }

  function focusInputEmailPassword() {
    if (document.querySelector("#errorEmailPassword")) {
      document.querySelector("#errorEmailPassword").remove();
    }
  }

  function fetchLogin(){

    fetch(`https://api-rest-server.vercel.app/login?email=${email.value}&password=${password.value}`)
      .then(function(response){
        return response.json();
      })
      .then(function(data){
        alert(data.msg);
      })
      .catch(function(errors){
          console.log(errors.msg)
      })
  }

  function onClickLogIn() {
  if (emailValidation() && passwordValidation() == true) {
    fetchLogin()
    alert("Email: " + email.value + "\nPassword: " + password.value);
  } else {
    alert("Email or password error");
  }
}

  email.addEventListener("blur", blurEmail);
  email.addEventListener("focus", focusInputEmailPassword);
  password.addEventListener("blur", blurPassword);
  password.addEventListener("focus", focusInputEmailPassword);
  buttonLogin.addEventListener("click", onClickLogIn);