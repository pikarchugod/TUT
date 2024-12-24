import { setSpriteAnimation } from './animation.js';

// 確保 shop2.js 可以使用 animation.js 的功能
setSpriteAnimation();

  
  // 按鈕 active
  document.addEventListener("DOMContentLoaded", () => {
    
    
    const buttons = document.querySelectorAll(".btn-group .btn");
    
      buttons.forEach((button) => {
        button.addEventListener("click", () => {
          buttons.forEach((btn) => btn.classList.remove("active")); // 移除其他按鈕的 active
          button.classList.add("active");
          // 清空卡片區域
        productList.innerHTML = "";
  
        // 渲染對應類別的卡片
        renderProducts(products[category]);
  
        // 如果是 action，初始化動畫
        if (category === "action") {
        setSpriteAnimation();
      } // 當前按鈕添加 active
        });
      });
    });

function renderProducts(products) {
  const productList = document.getElementById("product-list");
  productList.innerHTML = ""; // 清空內容

  products.forEach((product) => {
    const col = document.createElement("div");
    col.className = "col-6 col-md-5 col-lg-3"; // 設定卡片佈局
    col.innerHTML = `
      <div class="card h-100">
        <img src="${product.img}" class="card-img-top" alt="${product.name}">
        <div class="card-body text-center">
          <h6 class="card-title">${product.name}</h6>
          <p class="text-muted">${product.price}</p>
          <button class="btn btn-warning">購買</button>
        </div>
      </div>
    `;
    productList.appendChild(col);
  });
}








document.addEventListener("DOMContentLoaded", () => {
    const productList = document.getElementById("product-list");
  
    const products = {
      character: [
        { name: 'role1', price: '$200', img: '/src/assets/images/shop-character/1.png' },
        { name: 'role2', price: '$100', img: '/src/assets/images/shop-character/2.png' },
        { name: 'role3', price: '$100', img: '/src/assets/images/shop-character/3.png' },
        { name: 'role4', price: '$100', img: '/src/assets/images/shop-character/4.png' },
        { name: 'role5', price: '$100', img: '/src/assets/images/shop-character/5.png' },
        { name: 'role6', price: '$100', img: '/src/assets/images/shop-character/6.png' },
        { name: 'role7', price: '$100', img: '/src/assets/images/shop-character/7.png' },
      ],
      action: [
        { name: '1-1', price: '$200', sprite: '/src/assets/images/shop-action/1-1.png' },
        { name: '1-2', price: '$200', sprite: '/src/assets/images/shop-action/1-2.png' },
        { name: '1-3', price: '$200', sprite: '/src/assets/images/shop-action/1-3.png' },
        { name: '1-4', price: '$200', sprite: '/src/assets/images/shop-action/1-4.png' },
        { name: '1-5', price: '$200', sprite: '/src/assets/images/shop-action/1-5.png' },
      ]

      // 渲染商品
  // renderProducts(products);
    };

  
// 渲染角色卡片
  products.character.forEach(product => {
  const card = `
    <div class="col-2"> <!-- 確保每行顯示五個 -->
      <div class="card h-100">
        <img src="${product.img}" class="card-img-top" alt="${product.name}" style="object-fit: contain; width: 100%; height: 200px;">
        <div class="card-body text-center">
          <h6 class="card-title">${product.name}</h6>
          <p class="text-muted">${product.price}</p>
          <button class="btn btn-warning">購買</button>
        </div>
      </div>
    </div>`;
      productList.insertAdjacentHTML('beforeend', card);
    });
  });

  

