const checkbox = document.querySelector('.checkbox input[type="checkbox"]');
const login = document.querySelector(".login");
const register = document.querySelector(".register");
checkbox.addEventListener("change", function () {
  if (checkbox.checked) {
    login.classList.add("login-exit");
    setTimeout(function () {
      login.classList.add("login-zindex");
    }, 500);
    setTimeout(function () {
      login.classList.add("login-enter");
    }, 510);
    setTimeout(function () {
      register.classList.add("register-normal");
    }, 510);
    setTimeout(function () {
      login.classList.add("login-lazy");
    }, 1000);
  } else {
    login.classList.remove('login-lazy');
    login.classList.remove("login-enter");
    setTimeout(function () {
      login.classList.remove("login-zindex");
    }, 500);
    setTimeout(function () {
      login.classList.remove("login-exit");
    }, 510);
    setTimeout(function(){
        register.classList.remove("register-normal");
    },1000)
  }
});
