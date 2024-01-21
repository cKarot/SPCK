let productList = [];

const productListElm = document.getElementById("product-list");
const productTemp = document.getElementById("product-template");

function getProductList() {
  fetch("https://65acd4a4adbd5aa31bdf9c2b.mockapi.io/:endpoint")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      productList = data;
      renderProductList();
    });
}

function renderProductList() {
  for (let index = 0; index < productList.length; index++) {
    const product = productList[index];
    const productItem = productTemp.content.cloneNode(true);
    productItem.getElementById("product-image").src = product.image;
    productItem.getElementById("product-name").textContent = product.title;
    productItem.getElementById("product-price").textContent = product.price;
    productListElm.appendChild(productItem);
  }
}

getProductList();