// https://vitejs.dev/config/



import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import WindiCSS from 'vite-plugin-windicss'
export default defineConfig({
  plugins: usePlugins(),
  server: useServer(),
  resolve: useResolve(),
  build: useBuild(),
})


function usePlugins () {
  return [
    vue(),
    WindiCSS(),
    // Unocss({
    //   presets: [
    //       presetUno(), 
    //       presetAttributify(), 
    //       presetIcons()
    //     ],
    // }),
  ]
}

function useResolve () {
  return {
    alias: {
      "@": resolve(__dirname, 'src'),
      'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
    },

  } 
}

function useServer () {
  return {
    open: true,
    port: 8083,
    proxy: {
      // '/api': {
      //   target: 'http://212.64.72.51:81',
      //   changeOrigin: true,
      //   ws: true,
      //   rewrite: (path) => path.replace(/^\/api/, '/api')
      // },
      // '/myapi': {
      //   target: 'http://127.0.0.1:9988',
      //   changeOrigin: true,
      //   ws: true,
      //   rewrite: (path) => path.replace(/^\/myapi/, '/myapi')
      // },
    },
  }
}

function useBuild () {
  return {
    rollupOptions: {
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
      }
    }
  }
}

