let loginBtn = document.querySelector(".login-btn");
let closeLogin = document.querySelector(".login-form span");
loginBtn.addEventListener("click", function () {
  document.querySelector(".overlay").classList.add("show-overlay");
  document.querySelector(".login-form").style.top = 50 + "%";
});

closeLogin.addEventListener("click", function () {
  document.querySelector(".overlay").classList.remove("show-overlay");
  document.querySelector(".login-form").style.top = -50 + "%";
});
