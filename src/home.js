import { removeChild } from "./removeChilds";

function home() {
  const divContent = document.querySelector("#content");
  
  removeChild(divContent);

  divContent.appendChild(document.createElement("h1")).textContent = "Edu's Pizza";

  divContent.appendChild(document.createElement("p")).textContent = "Traditional Neapolitan Pizza, naturally leavened and baked at over 400ºC.";

  // divContent.appendChild(document.createElement("p")).textContent = "315 Bowery New York, NY";
  
}

export { home };