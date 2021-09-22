let left = document.getElementById("left");
let right = document.getElementById("right");
let pictureArray = [
  "images/cat.jpg",
  "images/p1.jpg",
  "images/p2.jpg",
  "images/p3.jpg",
  "images/p4.jpg",
  "images/p5.jpg",
  "images/p6.jpg",
  "images/counter.jpg",
];

let image = document.getElementById("imageid");
let index = 0;
left.addEventListener("click", () => {
  index--;
  if (index <= -1) {
    index = 7;
  }
  image.src = pictureArray[index];
});

right.addEventListener("click", () => {
  index++;
  if (index >= 7) {
    index = 0;
  }
  image.src = pictureArray[index];
});
