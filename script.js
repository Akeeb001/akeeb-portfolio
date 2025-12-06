const button = document.querySelector("button");

button.addEventListener("click", function() {
  alert("Hello! You can contact me at: akeebahamed123@gmail.com");
});

const text = "Future Full-Stack Developer 👨‍💻";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  }
}

typeEffect();
