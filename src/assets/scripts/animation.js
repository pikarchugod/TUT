console.log("animation 已成功匯入！");

export function initSprites() {
    const sprites = document.querySelectorAll(".sprite");
    sprites.forEach((sprite) => {
      const spritePath = sprite.dataset.sprite;
      sprite.style.backgroundImage = `url(${spritePath})`;
      sprite.style.width = "112px";
      sprite.style.height = "96px";
      sprite.style.backgroundRepeat = "no-repeat";
      sprite.style.animation = "play-sprite 1s steps(11) infinite";
    });
  }
  
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
  