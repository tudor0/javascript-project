let picturearray = ["images/cat.jpg", "images/p1.jpg", "images/p2.jpg"];
let index = 0;
let personarray = [
  {
    name: "tuglea tudor",
    occupation: "full stack senior developer",
    picture: picturearray[index],
    testimonial:
      "Physicists like to think that all you have to do is say, these are the conditions, now what happens next?",
  },
  {
    name: "jesus christ",
    occupation: "saviour",
    picture: picturearray[index],
    testimonial: "Any fool can make a rule, and any fool will mind it.",
  },
  {
    name: "ieu",
    occupation: "aks",
    picture: picturearray[index],
    testimonial: "Eu nu fac trapanele coaie eu fac trap",
  },
];

const right = document.getElementById("right");
const left = document.getElementById("left");
const img = document.getElementById("img");
const username = document.getElementById("username");
const role = document.getElementById("role");
const testimonial = document.getElementById("testimonial");

right.addEventListener("click", () => {
  index++;
  if (index > 3) {
    index = 0;
  }
  img.src = picturearray[index];
  username.textContent = personarray[index].name;
  role.textContent = personarray[index].occupation;
  testimonial.textContent = personarray[index].testimonial;
});
left.addEventListener("click", () => {
  index--;
  if (index <= 0) {
    index = 3;
  }
  img.src = picturearray[index];
  username.textContent = personarray[index].name;
  role.textContent = personarray[index].occupation;
  testimonial.textContent = personarray[index].testimonial;
});
