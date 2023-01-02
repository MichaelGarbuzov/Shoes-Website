import "../src/style.css";
import "../src/productCard.css";
//cart

let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".right-cart");
let closeCart = document.querySelector("#close-cart");
//open cart
cartIcon.onclick = () => {
  cart.classList.add("active");
};
//close cart
closeCart.onclick = () => {
  cart.classList.remove("active");
};

// cart working js
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

// making func

function ready() {
  //    remove items from cart
  let removeCartButtons = document.getElementsByClassName("cart-remove");
  for (let i = 0; i < removeCartButtons.length; i++) {
    var button = removeCartButtons[i];
    button.addEventListener("click", removeCartItem);
  }
  //quantity changes

  const quantityInputs = document.getElementsByClassName("cart-quantity");
  for (let i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }
  //add to cart
  const addCart = document.getElementsByClassName("card-button");
  for (let i = 0; i < addCart.length; i++) {
    var button = addCart[i];
    button.addEventListener("click", addCartClicked);
  }
  //buy button work
  document
    .getElementsByClassName("btn-buy")[0]
    .addEventListener("click", buyButtonClicked);
}

//buy button
function buyButtonClicked() {
  alert("Your order is placed");
  var cartContent = document.getElementsByClassName("cart-content")[0];
  while (cartContent.hasChildNodes()) {
    cartContent.removeChild(cartContent.firstChild);
  }
  updatetotal();
}

// remove itmes from cart
function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  updatetotal();
}
// quantity changes

function quantityChanged(event) {
  const input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updatetotal();
}
//add to cart
function addCartClicked(event) {
  const button = event.target;
  const shopProducts = button.parentElement;
  const title =
    shopProducts.getElementsByClassName("product-title")[0].innerText;
  const price = shopProducts.getElementsByClassName("price")[0].innerText;
  const productImage =
    shopProducts.getElementsByClassName("product-img")[0].src;
  addProductToCart(title, price, productImage);
  updatetotal();
}

function addProductToCart(title, price, productImage) {
  const cartShopBox = document.createElement("div");
  cartShopBox.classList.add("cart-box");
  const cartItems = document.getElementsByClassName("cart-content")[0];
  const cartItemsNames = cartItems.getElementsByClassName("card-product-title");

  for (let i = 0; i < cartItemsNames.length; i++) {
    // If found the item in cart, return!
    console.log(cartItemsNames[i].innerText);
    console.log(title);
    if (cartItemsNames[i].innerText.toLowerCase() == title.toLowerCase()) {
      alert("You have already add this item to the cart");
      return;
    }
  }

  const cartBoxContent = `
     <img src="${productImage}" alt="" class="cart-img" />
     <div class="detail-box">
     <div class="card-product-title">${title}</div>
     <div class="cart-price">${price}</div>
     <input type="number" value="1" class="cart-quantity" />
     </div>
     <span class="material-symbols-outlined cart-remove">delete</span>`;

  cartShopBox.innerHTML = cartBoxContent;
  cartItems.append(cartShopBox);
  cartShopBox
    .getElementsByClassName("cart-remove")[0]
    .addEventListener("click", removeCartItem);
  cartShopBox
    .getElementsByClassName("cart-quantity")[0]
    .addEventListener("change", quantityChanged);
}
// update total func

function updatetotal() {
  const cartContent = document.getElementsByClassName("cart-content")[0];
  const cartBoxes = cartContent.getElementsByClassName("cart-box");
  const total = 0;
  for (let i = 0; i < cartBoxes.length; i++) {
    const cartBox = cartBoxes[i];
    const priceElement = cartBox.getElementsByClassName("cart-price")[0];
    const quantityElemnt = cartBox.getElementsByClassName("cart-quantity")[0];
    const price = parseFloat(priceElement.innerText.replace("$", ""));
    const quantity = quantityElemnt.value;
    total = total + price * quantity;
  }

  // fix if price got cents
  total = Math.round(total * 100) / 100;

  document.getElementsByClassName("total-price")[0].innerText = "$" + total;
}
