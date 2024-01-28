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