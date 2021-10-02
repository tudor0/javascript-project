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
    tag: "salty",
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
input.addEventListener("keyup", () => {
  const tagsearch = input.value.toLowerCase();
  let filter = [];
  items.forEach((item) => {
    if (item.name.toLowerCase().includes(tagsearch)) filter.push(item.name);
  });
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
