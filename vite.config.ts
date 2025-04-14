import { defineConfig } from 'vite'
// import { VitePWA } from 'vite-plugin-pwa'
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist',
  },
  resolve: {
    alias: [
      { find: /^~/, replacement: '' }
    ],
  },
  server: {
    host: '0.0.0.0', // Mở kết nối cho tất cả thiết bị
    port: 3000, // Chọn cổng bất kỳ
 },
})
