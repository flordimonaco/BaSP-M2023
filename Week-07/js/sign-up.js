var myName = document.querySelector("#name");
var lastName = document.querySelector("#surname");
var dni = document.querySelector("#dni");
var dateOfBirth = document.querySelector("#dateOfBirth");
var phoneNumber = document.querySelector("#phone");
var adress = document.querySelector("#adress");
var city = document.querySelector("#city");
var zipCode = document.querySelector("#zipCode");
var email = document.querySelector("#email");
var password = document.querySelector("#password");
var repeatPassword = document.querySelector("#repeatPassword");
var buttonSignUp = document.querySelector("#button-signup");
var emailRegex = /^[^@]+@[^@]+.[a-zA-Z]{2,}$/;


function validateName() {
  if (myName.value === "") {
    return 1;
  } else if (onlyLetters(myName.value) == false) {
    return 2;
  } else if (myName.value.length < 3) {
    return 3;
  } else {
    return true;
  }
}

function validateLastName() {
  if (lastName.value === "") {
    return 1;
  } else if (onlyLetters(lastName.value) == false) {
    return 2;
  } else if (lastName.value.length < 3) {
    return 3;
  } else {
    return true;
  }
}

function validateDni() {
  if (dni.value === "") {
    return 1;
  } else if (isNaN(dni.value)) {
    return 2;
  } else if (dni.value.length > 7) {
    return 3;
  } else {
    return true;
  }
}

function validateDateOfBirth() {
  var splitDate = dateOfBirth.value.split('-');
  var year = parseInt(splitDate[0], 10);
  var month = parseInt(splitDate[1], 10);
  var day = parseInt(splitDate[2], 10);
  var dateOfBirthValue= new Date(year, month - 1, day);
  var currentDate = new Date();
  console.log(dateOfBirthValue)
  console.log(currentDate)
  
  if (dateOfBirth.value === "") {
    return 1;
  }else if (dateOfBirthValue > currentDate) {
    return 2;
  }else {
    return true;
  }
}

function validatePhoneNumber() {
  var myPhoneNumber = Number(phoneNumber.value);

  if (phoneNumber.value === "") {
    return 1;
  } else if (Number.isInteger(myPhoneNumber) == false) {
    return 2;
  } else if (phoneNumber.value.length != 10) {
    return 3;
  } else {
    return true;
  }
}

function validateAdress() {
  var myAdress = adress.value.split(" ");

  if (adress.value === "") {
    return 1;
  } else if (adress.value.length < 5) {
    return 2;
  } else if (myAdress.length !== 2) {
    return 3;
  } else if (
    onlyLetters(myAdress[0]) == false ||isNaN(Number(myAdress[1]))
  ) {
    return 4;
  } else {
    return true;
  }
}

function validateCity() {
  if (city.value === "") {
    return 1;
  } else if (city.value.length < 3) {
    return 2;
  } else {
    return true;
  }
}

function validateZipCode() {
  if (zipCode.value === "") {
    return 1;
  } else if (isNaN(zipCode.value)) {
    return 2;
  } else if (zipCode.value.length < 4 || zipCode.value.length > 5) {
    return 3;
  } else {
    return true;
  }
}

function validateEmail() {
  if (email.value === "") {
    return 1;
  } else if (!emailRegex.test(email.value)) {
    return 2;
  } else {
    return true;
  }
}

function validatePassword() {
  if (password.value === "") {
    return 1;
} else if (password.value.length < 8) {
      return 2;
    } else if (validateNumbersAndLetters(password.value) == false) {
    return 3;
  } else {
    return true;
  }
}

function validateRepeatPassword() {
  if (repeatPassword.value === "") {
    return 1;
  } else if (password.value != repeatPassword.value) {
    return 2;
  } else {
    return true;
  }
}


function onlyLetters(stringTest) {
  var i = 0;
  do {
    if (!isNaN(stringTest[i])) {
      return false;
    }
    i++;
  } while (i < stringTest.length);
  return true;
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

function blurFunction(evt) {
  switch (evt) {
    case 1:
      var errorName = validateName();

      if (errorName === 1) {
        myName.insertAdjacentHTML(
          "afterend",
          '<span id="nameError" class="errorMessage">Field required</span>'
        );
      } else if (errorName === 2) {
        myName.insertAdjacentHTML(
          "afterend",
          '<span id="nameError" class="errorMessage">This field can only contain letters</span>'
        );
      } else if (errorName === 3) {
        myName.insertAdjacentHTML(
          "afterend",
          '<span id="nameError" class="errorMessage">This field must have a minimum of 3 letters</span>'
        );
      }
      break;
    case 2:
      var errorLastName = validateLastName();

      if (errorLastName === 1) {
        lastName.insertAdjacentHTML(
          "afterend",
          '<span id="lastNameError" class="errorMessage">Field required</span>'
        );
      } else if (errorLastName === 2) {
        lastName.insertAdjacentHTML(
          "afterend",
          '<span id="lastNameError" class="errorMessage">This field can only contain letters</span>'
        );
      } else if (errorLastName === 3) {
        lastName.insertAdjacentHTML(
          "afterend",
          '<span id="lastNameError" class="errorMessage">This field must have a minimum of 3 letters</span>'
        );
      }

      break;
    case 3:
      var errorDni = validateDni();

      if (errorDni === 1) {
        dni.insertAdjacentHTML(
          "afterend",
          '<span id="dniError" class="errorMessage">Field required</span>'
        );
      } else if (errorDni === 2) {
        dni.insertAdjacentHTML(
          "afterend",
          '<span id="dniError" class="errorMessage">This field can only contain numbers</span>'
        );
      } else if (errorDni === 3) {
        dni.insertAdjacentHTML(
          "afterend",
          '<span id="dniError" class="errorMessage">This field must have 7 digits.</span>'
        );
      }

      break;
    case 4:
      var errorDateOfBirth = validateDateOfBirth();

      if (errorDateOfBirth === 1) {
        dateOfBirth.insertAdjacentHTML(
          "afterend",
          '<span id="dateOfBirthError" class="errorMessage">Field required</span>'
        );
      }

      break;
    case 5:
      var errorPhone = validatePhoneNumber();

      if (errorPhone === 1) {
        phoneNumber.insertAdjacentHTML(
          "afterend",
          '<span id="phoneNumberError" class="errorMessage">Field required</span>'
        );
      } else if (errorPhone === 2) {
        phoneNumber.insertAdjacentHTML(
          "afterend",
          '<span id="phoneNumberError" class="errorMessage">This field can only contain numbers</span>'
        );
      } else if (errorPhone === 3) {
        phoneNumber.insertAdjacentHTML(
          "afterend",
          '<span id="phoneNumberError" class="errorMessage">This field must have 10 digits.</span>'
        );
      }

      break;
    case 6:
      var errorAdress = validateAdress();

      if (errorAdress === 1) {
        adress.insertAdjacentHTML(
          "afterend",
          '<span id="adressError" class="errorMessage">Field required</span>'
        );
      } else if (errorAdress === 2) {
        adress.insertAdjacentHTML(
          "afterend",
          '<span id="adressError" class="errorMessage">This field must have a minimum of 5 charcaters using letters and numbers</span>'
        );
      } else if (errorAdress === 3 || errorAdress == 4) {
        adress.insertAdjacentHTML(
          "afterend",
          '<span id="adressError" class="errorMessage">This field must start with letters and then have the numbers separated by a space</span>'
        );
      }

      break;
    case 7:
      var errorCity = validateCity();

      if (errorCity === 1) {
        city.insertAdjacentHTML(
          "afterend",
          '<span id="cityError" class="errorMessage">Field required</span>'
        );
      } else if (errorCity === 2) {
        city.insertAdjacentHTML(
          "afterend",
          '<span id="cityError" class="errorMessage">This field must have a minimum of 5 alphanumeric characters</span>'
        );
      }

      break;
    case 8:
      var errorZipCode = validateZipCode();

      if (errorZipCode === 1) {
        zipCode.insertAdjacentHTML(
          "afterend",
          '<span id="zipCodeError" class="errorMessage">Field required</span>'
        );
      } else if (errorZipCode === 2) {
        zipCode.insertAdjacentHTML(
          "afterend",
          '<span id="zipCodeError" class="errorMessage">This field can only contain numbers</span>'
        );
      } else if (errorZipCode === 3) {
        zipCode.insertAdjacentHTML(
          "afterend",
          '<span id="zipCodeError" class="errorMessage">This field must have between 4 and 5 digits</span>'
        );
      }

      break;
    case 9:
      var errorEmail = validateEmail();

      if (errorEmail === 1) {
        email.insertAdjacentHTML(
          "afterend",
          '<span id="emailError" class="errorMessage">Field required</span>'
        );
      } else if (errorEmail === 2) {
        email.insertAdjacentHTML(
          "afterend",
          '<span id="emailError" class="errorMessage">Enter a valid e-mail address</span>'
        );
      }

      break;
    case 10:
      var errorPassword = validatePassword();

      if (errorPassword === 1) {
        password.insertAdjacentHTML(
          "afterend",
          '<span id="passwordError" class="errorMessage">Field required</span>'
        );
      } else if (errorPassword === 2) {
        password.insertAdjacentHTML(
          "afterend",
          '<span id="passwordError" class="errorMessage">This field must be at least 8 characters</span>'
        );
      } else if (errorPassword === 3) {
        password.insertAdjacentHTML(
          "afterend",
          '<span id="passwordError" class="errorMessage">This field must contain letters and numbers</span>'
        );
      }

      break;
    case 11:
      var errorRepeatPassword = validateRepeatPassword();

      if (errorRepeatPassword === 1) {
        repeatPassword.insertAdjacentHTML(
          "afterend",
          '<span id="repeatPasswordError" class="errorMessage">Field required</span>'
        );
      } else if (errorRepeatPassword === 2) {
        repeatPassword.insertAdjacentHTML(
          "afterend",
          '<span id="repeatPasswordError" class="errorMessage">Passwords are not the same</span>'
        );
      }

      break;
    default:
      break;
  }
}

function focusFunction(evt) {
  if (document.querySelector("#" + evt + "-error")) {
    document.querySelector("#" + evt + "-error").remove();
  }
}

function buttonSignUpClick() {
  if (
    validateName() &&
    validateLastName() &&
    validateDni() &&
    validateDateOfBirth &&
    validatePhoneNumber() &&
    validateAdress() &&
    validateCity() &&
    validateZipCode() &&
    validateEmail() &&
    validatePassword() &&
    validateRepeatPassword() === true
  ) {
    alert(
        "Name: " +
        myName.value +
        "\nLastName: " +
        lastName.value +
        "\nDNI: " +
        dni.value +
        "\nDateOfBirth: " +
        dateOfBirth.value +
        "\nPhone number: " +
        phoneNumber.value +
        "\nAdress: " +
        adress.value +
        "\nCity: " +
        city.value +
        "\nZip code: " +
        zipCode.value +
        "\nEmail: " +
        email.value +
        "\nPassword: " +
        password.value
    );
  } else {
    alert("Complete all fields correctly");
  }
}

myName.addEventListener("blur", function () {
  blurFunction(1);
});
myName.addEventListener("focus", function () {
  focusFunction("name");
});
lastName.addEventListener("blur", function () {
  blurFunction(2);
});
lastName.addEventListener("focus", function () {
  focusFunction("lastName");
});
dni.addEventListener("blur", function () {
  blurFunction(3);
});
dni.addEventListener("focus", function () {
  focusFunction("dni");
});
dateOfBirth.addEventListener("blur", function () {
  blurFunction(4);
});
dateOfBirth.addEventListener("focus", function () {
  focusFunction("dateOfBirth");
});
phoneNumber.addEventListener("blur", function () {
  blurFunction(5);
});
phoneNumber.addEventListener("focus", function () {
  focusFunction("phoneNumber");
});
adress.addEventListener("blur", function () {
  blurFunction(6);
});
adress.addEventListener("focus", function () {
  focusFunction("adress");
});
city.addEventListener("blur", function () {
  blurFunction(7);
});
city.addEventListener("focus", function () {
  focusFunction("city");
});
zipCode.addEventListener("blur", function () {
  blurFunction(8);
});
zipCode.addEventListener("focus", function () {
  focusFunction("zipCode");
});
email.addEventListener("blur", function () {
  blurFunction(9);
});
email.addEventListener("focus", function () {
  focusFunction("email");
});
password.addEventListener("blur", function () {
  blurFunction(10);
});
password.addEventListener("focus", function () {
  focusFunction("password");
});
repeatPassword.addEventListener("blur", function () {
  blurFunction(11);
});
repeatPassword.addEventListener("focus", function () {
  focusFunction("repeatPassword");
});

buttonSignUp.addEventListener("click", buttonSignUpClick);
