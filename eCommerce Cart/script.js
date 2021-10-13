// Node containing all the cards
const items = document.querySelectorAll(".store-item");

//
const input = document.querySelector("#input");

// Cart Opens and Closes
let openPanelButton = document.getElementById("open-panel");
let closePanelButton = document.getElementById("close-panel");
let cartPanel = document.querySelector(".cart-panel");

// Selecting all add to cart buttons
const addToCart = document.querySelectorAll(".additem");

// Add cart items here
const list = document.querySelector("#list");

// All delete buttons inside the cart
let deleteBtns = document.querySelectorAll(".deleteBtn");

// Total Price
let totalpPrice = document.querySelector("#totalPrice");

// Total price
let sum = 0;

// Filter functionality

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

// Cart opens
openPanelButton.onclick = (e) => {
  e.preventDefault();
  cartPanel.classList.add("open");
  openPanelButton.classList.add("hide");
};

// Cart closes
closePanelButton.onclick = (e) => {
  e.preventDefault();
  cartPanel.classList.remove("open");
  openPanelButton.classList.remove("hide");
};

// Testing addToCart buttons

addToCart.forEach((btn, index) => {
  // btn.addEventListener("click", () => console.log("works", btn.parentElement.childNodes[1].innerText,btn.parentElement.childNodes[3].innerText));
  btn.addEventListener("click", () => {
    // console.log(
    //   btn.parentElement.childNodes[1].innerText,
    //   btn.parentElement.childNodes[3].innerText
    // );
    // console.log(btn.parentElement.parentElement.childNodes[1].src);
    addToCartList(
      btn.parentElement.childNodes[1].innerText,
      btn.parentElement.childNodes[3].innerText,
      btn.parentElement.parentElement.childNodes[1].src
    );
  });
});

// This funcition adds the item to the cart

function addToCartList(name, price, src) {
  // QA Testing

  // console.log(name, price, src);
  // console.log(typeof name);
  // <div class="product">
  // <img width="80" src="images/cake-1.jpeg" alt="iphone">
  //   <div>
  //        <span>
  //              Cak
  //        </span>
  //   </div>
  //   <button>
  //      <i class="bi bi-x"></i>
  //    </button>
  //  </div>
  const mainDiv = document.createElement("div");
  mainDiv.classList.add("product");
  const image = document.createElement("img");
  image.width = 80;
  image.src = src;
  mainDiv.appendChild(image);
  const textDiv = document.createElement("div");
  const span1 = document.createElement("span");
  span1.textContent = name;
  span1.classList.add("pr");
  textDiv.appendChild(span1);
  const span2 = document.createElement("span");
  span2.innerText = price;
  textDiv.appendChild(span2);
  mainDiv.appendChild(textDiv);
  const button = document.createElement("button");
  button.addEventListener("click", () => {
    button.parentElement.style.display = "none";
  });
  button.innerHTML = '<i class="bi bi-x"></i>';
  button.classList.add("deleteBtn");
  mainDiv.appendChild(button);
  list.appendChild(mainDiv);
  updateTotalPrice(price.charAt(price.length - 1));
}

function updateTotalPrice(str) {
  sum += parseInt(str);
  totalpPrice.innerText = sum + '$';
}
