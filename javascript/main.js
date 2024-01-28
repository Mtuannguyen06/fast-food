let productList = [];
const productTemp = document.getElementById("product-template");
const productListElm = document.getElementById("product-list");

function getProductList() {
  fetch("https://6578608ef08799dc80451942.mockapi.io/new")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      productList = data;
      renderProductList();
    });
}

function renderProductList() {
  for (let index = 65; index < 72; index++) {
    const product = productList[index];
    const productItem = productTemp.content.cloneNode(true);
    productItem.getElementById("product-img").src = product.image;
    productItem.getElementById("product-text-a").textContent = product.title;
    productItem.getElementById("position-product").href = product.text;
    productListElm.appendChild(productItem);
  }
}

getProductList();

const producctTemp = document.getElementById("product-template-c");
const productListcElm = document.getElementById("product-list-c");

function getProductListc() {
  fetch("https://6578608ef08799dc80451942.mockapi.io/new")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      productList = data;
      renderProductListc();
    });
}

function renderProductListc() {
  for (let index = 18; index < 21; index++) {
    const product = productList[index];
    const productItem = producctTemp.content.cloneNode(true);
    productItem.getElementById("product-image").src = product.image;
    productItem.getElementById("product-name").textContent = product.title;
    productItem.getElementById("product-price").textContent = product.price;
    productItem.getElementById("product-text").textContent = product.text;
    productListcElm.appendChild(productItem);
  }
}

getProductListc();