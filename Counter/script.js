const add = document.getElementById("add");
const lower = document.getElementById("lower");
let counter = document.getElementById("counter");
const reset = document.getElementById("reset");
let number = 0;
lower.addEventListener("click", () => {
  number--;
  updatenumber(number);
});
add.addEventListener("click", () => {
  number++;
  updatenumber(number);
});
reset.addEventListener("click", () => {
  number = 0;
  updatenumber(number);
});
function updatenumber(number) {
  if (number !== 0) {
    if (number < 0) {
      counter.style.color = "red";
    }
    if (number > 0) {
      counter.style.color = "green";
    }
  } else {
    counter.style.color = "black";
  }
  counter.innerText = number;
}
