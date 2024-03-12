let input = document.getElementById("inputbox");
let buttons = document.querySelectorAll("button");
let calculator = document.querySelector(".equlbtn");

let string = "";
let arr = Array.from(buttons);
arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "AC") {
      string = "";
      input.value = string;
    } else if (e.target.innerHTML == "DEL") {
      string = string.substring(0, string.length - 1);
      input.value = string;
    } else {
      let check = e.target.innerHTML == "=";
      
      if (!check) {
       
        string += e.target.innerHTML;
        input.value = string;
      }else{
       string =eval(input.value) ;
       input.value = string;
      }
    }
  });
});

// calculator.addEventListener("click", function (e) {
//   string = eval(string);
//   input.value = string;
// });
