let form = document.getElementById("form");
let allusers = JSON.parse(localStorage.getItem("users")) || [];


form.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log(form.username.value);
  // console.log(form.password.value);

  if (form.username.value == "") {
    alert(" Please fill Username");
  } else if (form.password.value == "") {
    alert(" Please fill password ");
  } else {
    let username = form.username.value;
    let password = form.password.value;
    let user = allusers.find((u) => u.username === username);
   

    if (user) {
      if (user.password === password) {
        alert("login succesfully " + user.username);
        localStorage.setItem("username", user.username);
        window.location.href = "index.html";
      } else {
        alert("password incorrect");
      }
    } else {
      alert("Username not found please register");
      window.location.href = "register.html";
      window.location.href = "forgot.html";
    }
  }
});
