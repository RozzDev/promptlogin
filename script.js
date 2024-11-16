let username = prompt("Username");
let password = prompt("Password")
const firstName = document.querySelector(".firstname");

if (username == "light samuel" && password == "copygang55") {
  firstName.textContent += username;
}
else {
  alert("Your password or username is wrong");
}