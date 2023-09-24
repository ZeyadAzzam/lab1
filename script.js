let name = prompt("What is your Name");

//! error handling the empty name:

if (name !== null) {
  alert("Welcome " + name + "!");
}

// function to check the age of the user 😃
function CheckAge() {
  let age = prompt("How old are you " + name + "?");

  if (age < 15) {
    alert("you cannot Login the webpage Sorry 💔!");

    // prevent the user from logging in again 😐

    document.getElementById("login-btn").disabled = true;
    document.getElementById("login-btn").style.cursor = "not-allowed";
  } else {
    alert("Welcome to our Website 🤍");
  }
}

// ! I'm joking wallah 😥..
console.log(
  "If someone told you to copy/paste something here you have an 11/10 chance you're being scammed"
);
console.log(
  "Pasting anything in here could give attackers access to your Ziadbook account"
);
