import { URL, fileURLToPath } from 'node:url'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from '@vant/auto-import-resolver'
import viteCompression from 'vite-plugin-compression'
import { viteMockServe } from 'vite-plugin-mock'
import pxtovw from 'postcss-px-to-viewport-8-plugin'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

const loader_pxtovw = pxtovw({
  viewportWidth: 375,
  viewportUnit: 'vw',
  exclude: [/node_modules\/vant/i],
})

const vant_pxtovw = pxtovw({
  viewportWidth: 375,
  viewportUnit: 'vw',
  exclude: [/^(?!.*node_modules\/vant)/],
})

// https://vitejs.dev/config/
export default defineConfig({
  base: '/future-mall/',
  plugins: [
    vue(),
    UnoCSS(),
    AutoImport({
      imports: ['vue', 'vue-router', '@vueuse/core', '@vueuse/head', 'pinia'],
      resolvers: [VantResolver()],
      dirs: ['src/composables', 'src/stores'],
      vueTemplate: true,
      dts: 'src/auto-imports.d.ts',
    }),
    Components({
      resolvers: [VantResolver()],
      dts: 'src/components.d.ts',
    }),
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz',
    }),
    viteMockServe({
      mockPath: 'mock',
      prodEnabled: true,
      localEnabled: true,
      injectCode: `
        import { setupProdMockServer } from './plugins/mockProdServer'
        setupProdMockServer()
      `,
    }),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [resolve(process.cwd(), 'src/assets/icons')],
      // 指定symbolId格式
      symbolId: 'icon-[name]',
      inject: 'body-last',
      customDomId: '__svg__icons__dom__',
    }),
  ],
  server: {
    open: true,
    proxy: {
      '/api': {
        target: '',
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/api/, ''),
      },
    },
  },
  preview: {
    open: true,
    proxy: {
      '/api': {
        target: '',
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/api/, ''),
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    devSourcemap: false,
    postcss: {
      plugins: [loader_pxtovw, vant_pxtovw],
    },
  },
  build: {
    sourcemap: false,
    reportCompressedSize: false,
    outDir: 'docs',
    terserOptions: {
      compress: {
        drop_console: false,
        drop_debugger: false,
      },
    },
  },
})
