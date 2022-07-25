var changesingup = document.querySelector(".change-singup");
var changelogin = document.querySelector(".change-login");
var login = document.querySelector(".login");
var singup = document.querySelector(".singup");
var password = document.querySelector(".password");
var password2 = document.querySelector(".password2");
var password3 = document.querySelector(".password3");
var eyetogle2 = document.querySelector(".eye-togle2");
var eyeclose = document.querySelector(".eye-close");
var eyeopen = document.querySelector(".eye-open");
var eyetoggle = document.querySelector(".eye-toggle");

changelogin.addEventListener("click", function () {
  singup.classList.add("singrot");
  login.classList.remove("singrot");
  changesingup.classList.remove("active");
  changelogin.classList.add("active");
});
changesingup.addEventListener("click", function () {
  singup.classList.remove("singrot");
  login.classList.add("singrot");
  changesingup.classList.add("active");
  changelogin.classList.remove("active");
});
//    eys seectio
eyetoggle.addEventListener("click", function () {
  if (password.type === "password") {
    password.setAttribute("type", "text");
    password2.setAttribute("type", "text");
    eyetoggle.classList.add("hide");
  } else {
    password.setAttribute("type", "password");
    password2.setAttribute("type", "password");
    eyetoggle.classList.remove("hide");
  }
});
eyetogle2.addEventListener("click", function () {
  if (password3.type === "password") {
    password3.setAttribute("type", "text");
    eyetogle2.classList.add("hide");
  } else {
    password3.setAttribute("type", "password");
    eyetogle2.classList.remove("hide");
  }
});
