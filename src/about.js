import { removeChild } from "./removeChilds";

export function about() {
  const divContent = document.querySelector("#content");

  removeChild(divContent);

  divContent.appendChild(document.createElement("h2")).textContent = "About";

  divContent.appendChild(document.createElement("p")).textContent = "Welcome to Edu's Pizza, where the spirit of Naples comes alive in every bite. We are proud to bring the rich tradition of Neapolitan pizza-making to your table, staying true to the time-honored methods that have been passed down for generations.";
  divContent.appendChild(document.createElement("p")).textContent = "At the heart of our pizzeria is our wood-fired oven, meticulously crafted to bake pizzas at the perfect temperature, creating that signature airy crust with just the right char. We use only the finest ingredients: San Marzano tomatoes grown in the volcanic soil of Mount Vesuvius, creamy mozzarella di bufala, and extra virgin olive oil sourced from local farms. Every pizza is made by hand, with love and precision, reflecting the authenticity and passion of Naples.";

}