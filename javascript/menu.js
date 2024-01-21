let productList = [];

const productListaElm = document.getElementById("product-list-a");
const productTemp = document.getElementById("product-template");

function getProductLista() {
  fetch("https://6578608ef08799dc80451942.mockapi.io/new")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      productList = data;
      renderProductLista();
    });
}

function renderProductLista() {
  for (let index = 0; index < 14; index++) {
    const product = productList[index];
    const productItem = productTemp.content.cloneNode(true);
    productItem.getElementById("product-image").src = product.image;
    productItem.getElementById("product-name").textContent = product.title;
    productItem.getElementById("product-price").textContent = product.price;
    productItem.getElementById("product-text").textContent = product.text;
    productListaElm.appendChild(productItem);
  }
}

getProductLista();


const productListbElm = document.getElementById("product-list-b");

function getProductListb() {
  fetch("https://6578608ef08799dc80451942.mockapi.io/new")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      productList = data;
      renderProductListb();
    });
}

function renderProductListb() {
  for (let index = 14; index < 18; index++) {
    const product = productList[index];
    const productItem = productTemp.content.cloneNode(true);
    productItem.getElementById("product-image").src = product.image;
    productItem.getElementById("product-name").textContent = product.title;
    productItem.getElementById("product-price").textContent = product.price;
    productItem.getElementById("product-text").textContent = product.text;
    productListbElm.appendChild(productItem);
  }
}

getProductListb();


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
    const productItem = productTemp.content.cloneNode(true);
    productItem.getElementById("product-image").src = product.image;
    productItem.getElementById("product-name").textContent = product.title;
    productItem.getElementById("product-price").textContent = product.price;
    productItem.getElementById("product-text").textContent = product.text;
    productListcElm.appendChild(productItem);
  }
}

getProductListc();


const productListdElm = document.getElementById("product-list-d");

function getProductListd() {
  fetch("https://6578608ef08799dc80451942.mockapi.io/new")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      productList = data;
      renderProductListd();
    });
}

function renderProductListd() {
  for (let index = 21; index < 34; index++) {
    const product = productList[index];
    const productItem = productTemp.content.cloneNode(true);
    productItem.getElementById("product-image").src = product.image;
    productItem.getElementById("product-name").textContent = product.title;
    productItem.getElementById("product-price").textContent = product.price;
    productItem.getElementById("product-text").textContent = product.text;
    productListdElm.appendChild(productItem);
  }
}

getProductListd();


const productListeElm = document.getElementById("product-list-e");

function getProductListe() {
  fetch("https://6578608ef08799dc80451942.mockapi.io/new")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      productList = data;
      renderProductListe();
    });
}

function renderProductListe() {
  for (let index = 34; index < 48; index++) {
    const product = productList[index];
    const productItem = productTemp.content.cloneNode(true);
    productItem.getElementById("product-image").src = product.image;
    productItem.getElementById("product-name").textContent = product.title;
    productItem.getElementById("product-price").textContent = product.price;
    productItem.getElementById("product-text").textContent = product.text;
    productListeElm.appendChild(productItem);
  }
}

getProductListe();


const productListfElm = document.getElementById("product-list-f");

function getProductListf() {
  fetch("https://6578608ef08799dc80451942.mockapi.io/new")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      productList = data;
      renderProductListf();
    });
}

function renderProductListf() {
  for (let index = 48; index < 67; index++) {
    const product = productList[index];
    const productItem = productTemp.content.cloneNode(true);
    productItem.getElementById("product-image").src = product.image;
    productItem.getElementById("product-name").textContent = product.title;
    productItem.getElementById("product-price").textContent = product.price;
    productItem.getElementById("product-text").textContent = product.text;
    productListfElm.appendChild(productItem);
  }
}

getProductListf();


const productListgElm = document.getElementById("product-list-g");

function getProductListg() {
  fetch("https://6578608ef08799dc80451942.mockapi.io/new")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      productList = data;
      renderProductListg();
    });
}

function renderProductListg() {
  for (let index = 67; index < 82; index++) {
    const product = productList[index];
    const productItem = productTemp.content.cloneNode(true);
    productItem.getElementById("product-image").src = product.image;
    productItem.getElementById("product-name").textContent = product.title;
    productItem.getElementById("product-price").textContent = product.price;
    productItem.getElementById("product-text").textContent = product.text;
    productListgElm.appendChild(productItem);
  }
}

getProductListg();
