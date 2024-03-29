let username = localStorage.getItem("username");
let display = document.getElementById("display");
let logout = document.getElementById("out");
let time = document.getElementById("time");

display.innerHTML = username;

console.log(username);
if (username == null) {
  window.location.href = "login.html";
}
logout.addEventListener("click", (e) => {
  localStorage.removeItem("username");
  window.location.href = "login.html";
});
time.innerHTML = new Date().toJSON().slice(0, 10).replace(/-/g, "/");
console.log(Date.now().toString);
