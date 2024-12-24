function setSpriteAnimation() {
    // 找到所有具有 sprite 類的元素
    document.querySelectorAll('.sprite').forEach(spriteElement => {
      const imagePath = spriteElement.dataset.sprite; // 從 data-sprite 屬性獲取路徑
      const img = new Image();
      img.src = imagePath;
  
      img.onload = () => {
        const totalHeight = img.height; // 圖片總高度
        const frameHeight = 96; // 單幀高度
        const frames = totalHeight / frameHeight; // 計算幀數

        console.log(`圖片總高度: ${totalHeight}, 單幀高度: ${frameHeight}, 計算幀數: ${frames}`);
  
        // 設置背景圖片
        spriteElement.style.backgroundImage = `url(${imagePath})`;
  
        // 動態生成唯一的 @keyframes 名稱
        const animationName = `play-sprite-${Math.random().toString(36).substr(2, 5)}`;
        const styleSheet = document.styleSheets[0];
        const keyframes = `
          @keyframes ${animationName} {
            from { background-position: 0 0; }
            to { background-position: 0 -${totalHeight}px; }
          }
        `;
        styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
  
        // 設置動畫屬性
        spriteElement.style.animation = `${animationName} 1s steps(${frames}) infinite`;
      };
    });
  }
  // 呼叫函式，初始化所有 .sprite 動畫
  setSpriteAnimation();
  



document.addEventListener("DOMContentLoaded", () => {
    const productList = document.getElementById("product-list");
    const buttons = document.querySelectorAll(".btn-group .btn");

    // 產品數據
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
            { name: '1-1', price: '$300', sprite: '/src/assets/images/shop-action/1-1.png' },
            { name: '1-2', price: '$200', sprite: '/src/assets/images/shop-action/1-2.png' },
            { name: '1-3', price: '$200', sprite: '/src/assets/images/shop-action/1-3.png' },
            { name: '1-4', price: '$200', sprite: '/src/assets/images/shop-action/1-4.png' },
            { name: '1-5', price: '$200', sprite: '/src/assets/images/shop-action/1-5.png' },
            
            { name: '2-1', price: '$300', sprite: '/src/assets/images/shop-action/2-1.png' },
            { name: '2-2', price: '$200', sprite: '/src/assets/images/shop-action/2-2.png' },
            { name: '2-3', price: '$200', sprite: '/src/assets/images/shop-action/2-3.png' },
            { name: '2-4', price: '$200', sprite: '/src/assets/images/shop-action/2-4.png' },
            { name: '2-5', price: '$200', sprite: '/src/assets/images/shop-action/2-5.png' },


            { name: '3-1', price: '$200', sprite: '/src/assets/images/shop-action/3-1.png' },
            { name: '3-2', price: '$200', sprite: '/src/assets/images/shop-action/3-2.png' },
            { name: '3-3', price: '$200', sprite: '/src/assets/images/shop-action/3-3.png' },
            { name: '3-4', price: '$200', sprite: '/src/assets/images/shop-action/3-4.png' },
            { name: '3-5', price: '$200', sprite: '/src/assets/images/shop-action/3-5.png' },
        ],
    };

    // 渲染產品
    function renderProducts(category) {
        productList.innerHTML = ""; // 清空展示區域
        products[category].forEach((product) => {
            const col = document.createElement("div");
            col.className = "col-6 col-md-4 col-lg-3";

            // 動畫與靜態卡片的區別
            if (category === "action") {
                col.innerHTML = `
                    <div class="card h-100">
                        <div class="sprite" data-sprite="${product.sprite}"></div>
                        <div class="card-body text-center">
                            <h6 class="card-title">${product.name}</h6>
                            <p class="text-muted">${product.price}</p>
                            <button class="btn btn-warning">購買</button>
                        </div>
                    </div>
                `;
            } else {
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
            }
            productList.appendChild(col);
        });

        // 初始化動畫
        if (category === "action") {
            setSpriteAnimation();
        }
    }

    // 按鈕切換事件
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            buttons.forEach((btn) => btn.classList.remove("active"));
            button.classList.add("active");
            const category = button.dataset.category;
            renderProducts(category);
        });
    });

    // 預設渲染角色
    renderProducts("character");
});

// 動畫初始化函數
// function setSpriteAnimation() {
//     document.querySelectorAll(".sprite").forEach((spriteElement) => {
//         const imagePath = spriteElement.dataset.sprite;
//         spriteElement.style.backgroundImage = `url(${imagePath})`;
//         spriteElement.style.animation = "play-sprite 1s steps(11) infinite";
//     });
// }
