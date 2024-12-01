/////////////////////////////////
/////////////////////////////////
/////////////////////////////////

let loginEmailInput = document.getElementById("loginEmail");
let loginPasswordInput = document.getElementById("loginPassword");
let btnLogin = document.getElementById("btnLogin");
let SignUp = document.getElementById("SignUp");
let incorrectInputs = document.getElementById("incorrect");
let requiredInputs = document.getElementById("inputsRequired");
let userName;

let loginList = [];

if (localStorage.getItem("usersInfoContainer") !== null) {
  loginList = JSON.parse(localStorage.getItem("usersInfoContainer"));
}
// console.log(loginList);

btnLogin.addEventListener("click", function () {
  if (validationInputs()) {
    if (checkLoginInputs()) {
      localStorage.setItem("NameContainer", userName);
      window.location.href = "mainpage.html";
    } else {
      requiredInputs.classList.add("d-none");
      incorrectInputs.classList.remove("d-none");
    }
  } else {
    requiredInputs.classList.remove("d-none");
    incorrectInputs.classList.add("d-none");
  }
});

function checkLoginInputs() {
  for (let i = 0; i < loginList.length; i++) {
    if (
      loginList[i].userPassword === loginPasswordInput.value &&
      loginList[i].userEmail === loginEmailInput.value
    ) {
      userName = loginList[i].userName;
      return true;
    }
  }
  return false;
}

function validationInputs() {
  if (loginPasswordInput.value === "" || loginEmailInput.value === "") {
    return false;
  }
  return true;
}
