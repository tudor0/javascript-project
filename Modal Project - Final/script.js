const items = document.querySelectorAll(".store-item");
const input = document.querySelector("#input");
const modal = document.getElementById("myModal");
const close = document.getElementById("close");
const imgs = document.querySelectorAll(".card img");
let imagechange = document.querySelector(".modal-content .img");
const next = document.getElementById("next");
const prev = document.querySelector("#prev");

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

let imgar = [],
  imagecounter = 0;
imgs.forEach((img) => imgar.push(img.src));

items.forEach((item, index) => {
  item.addEventListener("click", function () {
    modal.style.display = "block";
    imagechange.src = imgar[index];
    imagecounter = imgar.indexOf(imgar[index]);
  });
});
// Close button

close.addEventListener("click", () => {
  modal.style.display = "none";
});

// When clicking on something else than the modal, it closes

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Modal buttons for previous and next

// Next button

next.addEventListener("click", () => {
  imagecounter--;
  if (imagecounter < 0) {
    imagecounter = imgar.length - 1;
  }
  imagechange.src = imgar[imagecounter];
});

// Previous button

prev.addEventListener("click", () => {
  imagecounter++;
  if (imagecounter > imgar.length) {
    imagecounter = 0;
  }
  imagechange.src = imgar[imagecounter];
});
