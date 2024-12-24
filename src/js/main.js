console.log("main 已成功匯入！");
import '../assets/styles/all.css'; // 注意 ../ 回到上層資料夾
import javascriptLogo from '../assets/images/javascript.svg';
import viteLogo from '../assets/images/vite.svg';
import { setupCounter } from '../assets/scripts/counter.js';
//import "../assets/scripts/live2d.js";
//import "../assets/scripts/renderBooks.js";
import "../assets/scripts/login.js";
import "../assets/scripts/register.js";
//import "../assets/scripts/shop.js";
import "../assets/scripts/animation.js";
import "../assets/scripts/shop2.js";

import { initSprites } from "../assets/scripts/animation.js";
//import { renderProducts } from '../assets/scripts/shop.js';

document.addEventListener("DOMContentLoaded", () => {
  initSprites();
  // renderProducts('character');
});


fetch('/api/test')
  .then((response) => response.text())
  .then((data) => console.log('代理測試結果:', data))
  .catch((error) => console.error('代理測試失敗:', error));

document.addEventListener("DOMContentLoaded", () => {
  const includes = document.querySelectorAll("[data-include]");

  includes.forEach((el) => {
    const url = el.getAttribute("data-include");

    fetch(url)
      .then((response) => response.text())
      .then((data) => {
        el.outerHTML = data;
      })
      
  });
});

