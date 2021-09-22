const btn = document.getElementById("myBtn");

btn.addEventListener("click", () => {
  document.body.style.backgroundColor = generateRandomColor();
});

function generateRandomColor() {
  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}
