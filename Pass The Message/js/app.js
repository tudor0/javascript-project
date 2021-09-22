const submit = document.getElementById("submitBtn");
const input = document.getElementById("message");
const message = document.getElementById("message1");
const alert2 = document.getElementById("feedback");
submit.addEventListener("click", () => {
  console;
  if (input.value === "") {
    alert2.classList.remove("feedback");
  } else {
    message.innerText = input.value;
    input.value = "";
    alert2.classList.add("feedback");
  }
});

