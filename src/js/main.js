import '../assets/styles/all.css'; // 注意 ../ 回到上層資料夾
import javascriptLogo from '../assets/images/javascript.svg';
import viteLogo from '../assets/images/vite.svg';
import { setupCounter } from '../assets/scripts/counter.js';
import "../assets/scripts/live2d.js";
import "../assets/scripts/renderBooks.js";

document.addEventListener("DOMContentLoaded", () => {
    const includes = document.querySelectorAll("[data-include]");
  
    includes.forEach((el) => {
      const url = el.getAttribute("data-include");
  
      fetch(url)
        .then((response) => response.text())
        .then((data) => {
          el.outerHTML = data;
        })
        .catch((error) => console.error("Error loading component:", error));
    });
  });
  