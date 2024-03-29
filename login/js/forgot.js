let search = document.getElementById("searchForm");
let allusers = JSON.parse(localStorage.getItem("users")) || [];
let otpInput = document.getElementById("otpInput");
let change = document.getElementById("change");
var email = "";

search.addEventListener("submit", (e) => {
  e.preventDefault();
  if (search.email.value == "") {
    alert("Please enter your email address");
  } else {
    email = search.email.value;
    let user = allusers.find((u) => u.email === email);

    if (user) {
      search.classList.add("hidden");
      otpInput.classList.remove("hidden");
    } else {
      alert("email address not found");
    }
  }
});

otpInput.addEventListener("submit", (e) => {
  e.preventDefault();
  if (otpInput.otp.value == "123456") {
    console.log("otp correct");
    otpInput.classList.add("hidden");
    change.classList.remove("hidden");
  } else {
    alert("invalid otp");
  }
});

change.addEventListener("submit", (e) => {
  e.preventDefault();
  let users = allusers.map((u) => {
    if (u.email === email) {
      u.password = change.password.value;
    }
    return u;
  })
  localStorage.setItem("users", JSON.stringify(users));
  alert("password changed");
  window.location.href = "login.html";

});

closeBtn.addEventListener("click", function () {
  window.location.href = "login.html";
});
