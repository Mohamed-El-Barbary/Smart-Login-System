let btnLogout = document.getElementById("log-out");

let userName = document.getElementById("userName");

userName.innerHTML += `<span>${localStorage.getItem("NameContainer")}</span>`; // Set the text content of userNameh



btnLogout.addEventListener("click", function () {
  window.location.href = "index.html";
});
