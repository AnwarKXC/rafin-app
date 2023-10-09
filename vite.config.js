import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ vue() ],
  build: {
    rollupOptions: {
      external: [ '/Group%2047562@2x.png', '/Group%2047723@2x.png', '/Group%2039294@2x.png', '/Group%2047724@2x.png', '/Group%2047562@2x.png', '/Group%2039295@2x.png', '/Group%2047722@2x.png', '/Group%2047562@2x.png', '/right-arrow%20(2).png', '/Group%2047550.svg', '/NoPath%20-%20Copy%20(2)@2x.png', '/NoPath%20-%20Copy%20(3)@2x.png', '/Group%2041318@2x.png', '/Group%2041448@2x.png', "/Group%2041435@2x.png", '/Group%2041477@2x.png', '/Group%2041477@2x.png', '/Group%2047735@2x.png','/NoPath%20-%20Copy@2x.png'],
    }
  }
})
