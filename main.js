var id = (id) => document.getElementById(id);

var classes = (classes)=> document.getElementsByClassName(classes);

let username = id("username"),
    email = id("email"),
    password = id("password"),
    form = id("form"),
    errorMsg = document.getElementsByClassNamee("error"),
    successIcon = classes("success-icon"),
    failureIcon = classes("failure-icon");

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      if (username.value === ""){
        errorMsg[0].innerHTML = "Username cannot be blank";
        failureIcon[0].style.opacity = "1";
      } else {
        errorMsg[0].innerHTML = "";
        successIcon[0].style.opacity = "1";
      }
    })