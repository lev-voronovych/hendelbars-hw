import TemplatesProducts from "./templates/products.hbs";
import { products as productsData } from "./data.js";

const container = document.getElementById("productContainer");
const inputEl = document.querySelector(".search-input");

function renderProducts(data) {
  const markup = TemplatesProducts(data);
  container.innerHTML = markup;
}

function onSearch(event) {
  const value = event.target.value.toLowerCase();

  const filtered = productsData.filter(function (product) {
    return (
      product.name.toLowerCase().includes(value) ||
      product.description.toLowerCase().includes(value)
    );
  });

  renderProducts(filtered);
}

inputEl.addEventListener("input", onSearch);

renderProducts(productsData);
