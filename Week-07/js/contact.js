var myName = document.querySelector("#name");
var lastName = document.querySelector("#lastname");
var email = document.querySelector("#email");
var contactReason = document.querySelector("#contact-reason");
var message = document.querySelector("#message");
var submitButtonContact = document.querySelector("#submit-button-contact");
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

function validateEmail() {
  if (email.value === "") {
    return 1;
  } else if (!emailRegex.test(email.value)) {
    return 2;
  } else {
    return true;
  }
}

function validateContactReason() {
  if (contactReason.value == "") {
    return 1;
  } else {
    return true;
  }
}

function validateMessage() {
  if (message.value == "") {
    return 1;
  }else if (message.value.length < 15) {
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
    case 4:
      var errorConctactReason = validateContactReason();
      if (errorConctactReason === 1) {
        contactReason.insertAdjacentHTML(
          "afterend",
          '<span id="contactReasonError" class="errorMessage">Field required</span>'
        );
      }
    case 5:
      var errorMessage = validateMessage();
      if (errorMessage === 1) {
        message.insertAdjacentHTML(
          "afterend",
          '<span id="messageError" class="errorMessage">Field required</span>'
        );
      }else if (errorMessage === 2) {
        message.insertAdjacentHTML(
            "afterend",
            '<span id="messageError" class="error-Message">This field must have a minimum of 15 characters</span>'
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

function buttonSignUpClick(event) {
    event.preventDefault();
  if (
    validateName() &&
    validateLastName() &&
    validateEmail() &&
    validateContactReason() &&
    validateMessage() === true
  ) {
    alert(
      "Name: " +
        myName.value +
        "\nLastName: " +
        lastName.value +
        "\nEmail: " +
        email.value +
        "\nContact Reason: " +
        contactReason.value +
        "\nMessage: " +
        message.value

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
  email.addEventListener("blur", function () {
    blurFunction(3);
  });
  email.addEventListener("focus", function () {
    focusFunction("email");
  });
  contactReason.addEventListener("blur", function () {
    blurFunction(4);
  });
  contactReason.addEventListener("focus", function () {
    focusFunction("contact-reason");
  });
  message.addEventListener("blur", function () {
    blurFunction(5);
  });
  message.addEventListener("focus", function () {
    focusFunction("message");
  });

  submitButtonContact.addEventListener("click", buttonSignUpClick);