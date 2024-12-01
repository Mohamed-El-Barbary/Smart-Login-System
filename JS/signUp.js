///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
let signNameInput = document.getElementById("signName");
let signEmailInput = document.getElementById("signEmail");
let signPasswordInput = document.getElementById("signPassword");
let btnAddValue = document.getElementById("addValue");
let emailExists = document.getElementById("extistsEmail");
let emailSuccess = document.getElementById("success");
let Signin = document.getElementById("Signin");

let usersList = [];

if (localStorage.getItem("usersInfoContainer") !== null) {
  usersList = JSON.parse(localStorage.getItem("usersInfoContainer"));
}

btnAddValue.addEventListener("click", function () {
  AddValue();
});

function AddValue() {
  if (
    validationInputs(signNameInput, "msgName") &&
    validationInputs(signEmailInput, "msgEmail") &&
    validationInputs(signPasswordInput, "msgPassword")
  ) {
    if (!checkEmail()) {
      let signinValue = {
        userName: signNameInput.value,
        userEmail: signEmailInput.value,
        userPassword: signPasswordInput.value,
      };
      usersList.push(signinValue);
      localStorage.setItem("usersInfoContainer", JSON.stringify(usersList));
      clearInputs();
    }
  }
}

function checkEmail() {
  for (let i = 0; i < usersList.length; i++) {
    if (usersList[i].userEmail === signEmailInput.value) {
      emailExists.classList.remove("d-none");
      emailSuccess.classList.add("d-none");
      return true;
    }
  }
  emailExists.classList.add("d-none");
  emailSuccess.classList.remove("d-none");
  return false;
}

function validationInputs(element, msgId) {
  let regex = {
    signName: /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*([ ]?[a-zA-Z0-9]+)*$/,
    signEmail: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    signPassword:
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+={}\[\]:;"'<>,.?/-]{8,}$/,
  };
  let text = element.value;
  let msgInput = document.getElementById(msgId);

  if (regex[element.id].test(text)) {
    element.classList.add("is-valid");
    element.classList.remove("is-invalid");
    msgInput.classList.add("d-none");
    return true;
  } else {
    element.classList.remove("is-valid");
    element.classList.add("is-invalid");
    msgInput.classList.remove("d-none");
    return false;
  }
}

function clearInputs() {
  signNameInput.value = null;
  signEmailInput.value = null;
  signPasswordInput.value = null;

  signNameInput.classList.remove("is-valid");
  signEmailInput.classList.remove("is-valid");
  signPasswordInput.classList.remove("is-valid");
}
