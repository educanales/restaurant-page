import { removeChild } from "./removeChilds";

function menu() {
  const divContent = document.querySelector("#content");

  removeChild(divContent);

  divContent.appendChild(document.createElement("h2")).textContent = "Pizzas";
  divContent.appendChild(document.createElement("p")).textContent = "MARINARA  |  San Marzano Tomatoes, Oregano, Garlic, Basil, Sea Salt, Extra Virgin Olive Oil";
  divContent.appendChild(document.createElement("p")).textContent = "MARGARITA  |  San Marzano Tomatoes, Buffalo Mozzarella, Basil, Sea Salt, Extra Virgin Olive Oil";
  divContent.appendChild(document.createElement("p")).textContent = "BIANCA  |  Buffalo Mozzarella, Garlic, Basil, Sea Salt, Extra Virgin Olive Oil";
  divContent.appendChild(document.createElement("p")).textContent = "MARCELINA  |  Prosciutto, Cherry Tomatoes, Buffalo Mozzarella, Basil";

}

export { menu };