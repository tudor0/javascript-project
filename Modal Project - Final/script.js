const items = document.querySelectorAll(".store-item");
const input = document.querySelector("#input");
const modal = document.getElementById("myModal");
const close = document.getElementById("close");
const imgs = document.querySelectorAll(".card img");
let imagechange = document.querySelector(".modal-content .img");
let index = 0;



// Filter Part of the Project
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

// Modal Functionality

let imgar = [];
imgs.forEach((img) => imgar.push(img.src));

items.forEach((item, index) => {
  item.addEventListener("click", function () {
    modal.style.display = "block";
    imagechange.src = imgar[index];
  });
});

close.addEventListener("click", () => {
  modal.style.display = "none";
});
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}