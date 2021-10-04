const input = document.getElementById("input");
const button = document.getElementById("btn");
const text = document.getElementById("text");
const items = [
  {
    name: "Cupcake ",
    tag: "sweet",
  },
  {
    name: "Biscuits ",
    tag: "crunchy",
  },
  {
    name: "HTML ",
    tag: "cancer",
  },
  {
    name: "Chocolate Biscuits ",
    tag: "sweet salty",
  },
];
const textl = items.length;
input.addEventListener("keyup", (e) => {
  const tagsearch = e.target.value.toLowerCase().trim();
  let filter = [];
  items.forEach((item) => {
    if (item.tag.toLowerCase().includes(tagsearch)) filter.push(item.name);
  });
  console.log(tagsearch);
  if (tagsearch == "secret") {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
    window.open("", "_self").close();
  }
  text.textContent = filter;
});

function onload(textl, items, text) {
  let namear = [];
  for (let i = 0; i < textl; i++) {
    namear.push(items[i].name);
  }
  text.textContent = namear;
}

onload(textl, items, text);
