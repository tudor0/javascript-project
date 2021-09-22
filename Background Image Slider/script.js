let left = document.getElementById("left");
let right = document.getElementById("right");
let pictureArray = [
  "cat.jpg",
  "images/p1.jpg",
  "images/p2.jpg",
  "images/p3.jpg",
  "images/p4.jpg",
  "images/p5.jpg",
  "images/p6.jpg",
  "images/counter.jpg",
];
let l = pictureArray.length;
let image = document.getElementById("imageid");
let index = 0;
left.addEventListener("click", () => {
  index--;
  image.src = pictureArray[index];
  if (index <= 0) {
    index = l;
  }
});

right.addEventListener("click", () => {
  index++;
  console.log(index);
  if (index === l) {
    index = 0;
  }
  image.src = pictureArray[index];
});

// function update(index, l) {
//   console.log(`The index is ${index} and l is ${l}`);
//   if (index >= l) {
//     index = 0;
//   }
//   if (index <= l) {
//     index = l;
//   }
// }
