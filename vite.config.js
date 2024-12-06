import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    watch: {
      usePolling: true, // 啟用輪詢方式監控檔案變更
    },
  },
});
