// Upload button
const uploadButton = document.querySelector("#uploadButton");

// Close modal button
const closeModal = document.querySelector("#closeModal");

// End of opening and closing Modal

const addPhoto = document.querySelector("#submitButton");

// Collection array
let collectionArray = [];

class UI {
  static createPicture(img) {
    let image = img;
    let reader = new FileReader();
    reader.onload = function (e) {
      const img = new Image();
      img.src = reader.result;
      const div = document.createElement("div");
      div.classList.add("imgWButtons");
      div.innerHTML = `<img src="${img.src}" alt="" class="img-restrictions" />`;
      const button = document.createElement("button");
      button.addEventListener("click", () => {
        UI.redHeart(button);
        if (button.classList.contains("red")) {
          collectionArray.push(button.parentElement.childNodes[0].src);
          UI.raiseCounterSpecialPic(button);
        } else {
          collectionArray.pop(button.parentElement.childNodes[0].src);
          UI.lowerCounterSpecialPic(button);
        }
      });
      button.classList.add("heartBtn");
      button.innerHTML = `<i class="fa-solid fa-heart"></i>`;
      div.appendChild(button);
      const counter = document.createElement("p");
      counter.classList.add("likeCount");
      counter.innerHTML = 0;
      div.appendChild(counter);
      document.querySelector("#imageContainer").appendChild(div);
    };
    reader.readAsDataURL(image);
    UI.closeModal();
  }
  static openModal() {
    document.querySelector("#uploadModal").style.display = "block";
  }
  static closeModal() {
    document.querySelector("#uploadModal").style.display = "none";
  }
  static addEventListenerToHeartButtons() {
    document.querySelectorAll(".heartBtn").forEach((button) => {
      button.addEventListener("click", () => {
        UI.redHeart(button);
        if (button.classList.contains("red")) {
          collectionArray.push(button.parentElement.childNodes[1].src);
          this.raiseCounter(button);
        } else {
          collectionArray.pop(button.parentElement.childNodes[1].src);
          this.lowerCounter(button);
        }
      });
    });
  }
  static redHeart(button) {
    button.classList.toggle("red");
  }

  static raiseCounter(button) {
    button.parentElement.childNodes[5].innerText =
      +button.parentElement.childNodes[5].innerText + 1;
  }
  static lowerCounter(button) {
    button.parentElement.childNodes[5].innerText =
      +button.parentElement.childNodes[5].innerText - 1;
  }

  static raiseCounterSpecialPic(button) {
    button.parentElement.childNodes[2].innerText =
      +button.parentElement.childNodes[2].innerText + 1;
  }
  static lowerCounterSpecialPic(button) {
    button.parentElement.childNodes[2].innerText =
      +button.parentElement.childNodes[2].innerText - 1;
  }
}

// Adds event listeners to all cards

document.addEventListener("DOMContentLoaded", () => {
  UI.addEventListenerToHeartButtons();
});

// Opens modal

uploadButton.addEventListener("click", () => {
  UI.openModal();
});

// Closes modal

closeModal.addEventListener("click", () => {
  UI.closeModal();
});

// Closes modal

window.addEventListener("click", (e) => {
  if (e.target == document.querySelector("#uploadModal")) UI.closeModal();
});

// Adds a photo

addPhoto.addEventListener("click", () => {
  UI.createPicture(document.querySelector("#file").files[0]);
});
