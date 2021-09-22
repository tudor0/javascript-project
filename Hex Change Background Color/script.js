const button = document.getElementById("btn");

button.addEventListener('click', () => {
    document.body.style.backgroundColor=generateRandomColor()
    document.getElementById('textarea').innerHTML="HEX COLOR: " +generateRandomColor()
})


function generateRandomColor() {
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
  }