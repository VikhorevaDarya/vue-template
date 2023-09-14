import { defineConfig } from 'vite'
import mkcert from 'vite-plugin-mkcert'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import Vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [
    mkcert(),
    Vue(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(__dirname, './src/assets/icons')],
      symbolId: 'icon-[name]'
    })
  ],
  server: {
    port: 3000,
    host: true,
    https: false,

    cors: {
      origin: '*'
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      images: path.resolve(__dirname, './src/assets/images'),
      icons: path.resolve(__dirname, './src/assets/icons'),
      fonts: path.resolve(__dirname, './src/assets/fonts'),
      styles: path.resolve(__dirname, './src/themes')
    }
  },
  build: {
    outDir: path.resolve(__dirname, 'build')
  }
})
