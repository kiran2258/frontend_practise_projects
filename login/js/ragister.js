let signUpForm = document.getElementById("signUpForm");
let allusers= JSON.parse(localStorage.getItem("users")) || [];
let count=localStorage.getItem("count") || 0;


signUpForm.addEventListener("submit", (e) => {
 
  e.preventDefault();
  count= +count + 1;
  localStorage.setItem("count",count)
  // return
  // console.log(signUpForm.myusername.value);
  // console.log(signUpForm.password.value);
  // console.log(signUpForm.email.value);
  // console.log(signUpForm.confirmPassword.value);
  if (signUpForm.myemail.value == "") {
    alert("Email is required");
  } else if (signUpForm.myusername.value == "") {
    alert("username is required");
  }
  let userFound = false;
  allusers.forEach(element => {
    if (element.email === signUpForm.myemail.value) {
      userFound = true;
      
    }
    
  });
  if (userFound) {
    alert("email address already exists please login");
    window.location.href="login.html";
    return;
  }
  let user={
    username:signUpForm.myusername.value,
    email:signUpForm.myemail.value,
    password:signUpForm.mypassword.value,
  }
  console.log(user);
  if(signUpForm.mypassword.value !== signUpForm.myconfirmPassword.value) {
    alert("Passwords do not match");
  } else{
    alert("signUp success");
    allusers.push(user);
    localStorage.setItem("users",JSON.stringify(allusers));
    window.location.href = "login.html";
  }
});
