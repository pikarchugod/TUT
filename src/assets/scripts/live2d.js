import { loadOml2d } from 'oh-my-live2d';

// 隨機訊息陣列
const messages = [
    "今天也要加油哦！🌟",
    "休息一下，喝杯咖啡吧！☕",
    "記得保持好心情！😊",
    "再努力一下，成功就在眼前！💪",
    "放鬆一下，看看風景吧！🌿",
    "挑戰極限，成就更好的自己！🚀",
    "你的堅持會帶來好結果！✨",
    "學習也是需要休息的哦！📚"
  ];

// 目標標題的 id 陣列
const targetIds = ["hot-novels", "new-comments"];
let currentIndex = 0; // 當前跳轉的標題索引


const oml2d = loadOml2d({
    dockedPosition: "right",
    models: [
        {
          path: 'https://model.oml2d.com/HK416-1-normal/model.json',
          position: [0, 60],
          scale: 0.08,
          stageStyle: {
            height: 450
          }
        }
      ],

    // ... 按鈕
  statusBar: {
    loadingIcon: 'icon-loading'
  },
  menus: {
    items: [
      {
        id: 'Rest',
        icon: 'icon-rest', 
        title: '休息',
        onClick() {
            oml2d.loadNextModel();
          }
      },
      {
        id: 'SwitchModel',
        icon: 'icon-switch', 
        title: '切換模型',
        onClick() {
            oml2d.loadNextModel();
          }
      },
      {
        id: 'About',
        icon: 'icon-about', 
        title: '關於',
        onClick() {
            oml2d.loadNextModel();
          }
          
      }
    ],
    
  }  
})