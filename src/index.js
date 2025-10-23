import TemplatesProducts from "./templates/products.hbs";
import { products as productsData } from "./data";
console.log(productsData);
const container = document.getElementById("productContainer");
const markup = TemplatesProducts(productsData)

container.innerHTML = markup;