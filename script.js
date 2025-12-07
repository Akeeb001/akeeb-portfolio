const button = document.querySelector("button");

button.addEventListener("click", function() {
  alert("Hello! You can contact me at: akeebahamed123@gmail.com");
});

const text = "Future Full-Stack Developer ";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  }
}

typeEffect();


function add() {
  let a = Number(document.getElementById("num1").value);
  let b = Number(document.getElementById("num2").value);
  document.getElementById("result").innerHTML = "Result: " + (a + b);
}

function subtract() {
  let a = Number(document.getElementById("num1").value);
  let b = Number(document.getElementById("num2").value);
  document.getElementById("result").innerHTML = "Result: " + (a - b);
}

function multiply() {
  let a = Number(document.getElementById("num1").value);
  let b = Number(document.getElementById("num2").value);
  document.getElementById("result").innerHTML = "Result: " + (a * b);
}

function divide() {
  let a = Number(document.getElementById("num1").value);
  let b = Number(document.getElementById("num2").value);
  if (b === 0) {
    document.getElementById("result").innerHTML = "Cannot divide by zero";
  } else {
    document.getElementById("result").innerHTML = "Result: " + (a / b);
  }
}

function checkEvenOdd() {
  let num = Number(document.getElementById("checkNumber").value);

  if (num % 2 === 0) {
    document.getElementById("evenOddResult").innerHTML = " Even Number";
  } else {
    document.getElementById("evenOddResult").innerHTML = " Odd Number";
  }
}

function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  if (name === "" || email === "") {
    document.getElementById("formResult").innerHTML = " Please fill all fields";
  } 
  else if (!email.includes("@")) {
    document.getElementById("formResult").innerHTML = " Invalid email address";
  }
  else {
    document.getElementById("formResult").innerHTML = " Form submitted successfully!";
  }
}
