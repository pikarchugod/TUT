import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    // 啟用輪詢方式監控檔案變更，解決熱更新問題
    watch: {
      usePolling: true,
    },
    // API 代理設定，解決 CORS 問題
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000//', // 後端服務的地址
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api'), // 將 /api 前綴移除
      },
    },
  },
});
