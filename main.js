var id = (id) => document.getElementById(id);

var classes = (classes)=> document.getElementsByClassName(classes);

let username = id("username"),
    email = id("email"),
    password = id("password"),
    form = id("form"),
    errorMsg = document.getElementsByClassNamee("error"),
    successIcon = classes("success-icon"),
    failureIcon = classes("failure-icon");

    form.addEventListener("submit", (e)=>{
      e.preventDefault();
    })