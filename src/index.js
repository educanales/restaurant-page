import "./styles.css";
import { home } from "./home.js";
import { menu } from "./menu.js";
import { about } from "./about.js";

function tabs() {
  const homeBtn = document.querySelector(".home-btn");
  const menuBtn = document.querySelector(".menu-btn");
  const aboutBtn = document.querySelector(".about-btn");

  homeBtn.addEventListener("click", home);
  menuBtn.addEventListener("click", menu);
  aboutBtn.addEventListener("click", about);
}

home();
tabs();