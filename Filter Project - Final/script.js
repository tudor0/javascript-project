const items = document.querySelectorAll(".store-item");
const input = document.querySelector("#input");

input.addEventListener("keyup", (e) => {
  const value = e.target.value.toLowerCase().trim();
  items.forEach((item) => {
    if (item.textContent.toLowerCase().includes(value)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});