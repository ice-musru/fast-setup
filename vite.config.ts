import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), WindiCSS()],
  resolve: {
    alias: {
      '@/': new URL('./src/', import.meta.url).pathname,
    },
  },
  css: { preprocessorOptions: { scss: { charset: false } } },
  build: {
    cssCodeSplit: false,
    chunkSizeWarningLimit: 1024, // 单位kb  打包后文件大小警告的限制 (文件大于此此值会出现警告)
    assetsInlineLimit: 4096, // 单位字节（1024等于1kb） 小于此阈值的导入或引用资源将内联为 base64 编码，以避免额外的 http 请求。设置为 0 可以完全禁用此项。
    rollupOptions: {
      output: {
        manualChunks: {
          // 拆分代码
          vue: ['vue', 'vue-router'], // 如果打包有BUG请屏蔽
          'element-plus': ['element-plus'],
        },
      },
    },
  },
})
