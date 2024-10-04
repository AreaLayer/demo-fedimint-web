import { defineConfig } from 'vite'
import wasm from 'vite-plugin-wasm'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    wasm(),
  ],

  worker: {
    format: 'es',
    plugins: () => [
      wasm(),
    ],
  },

  optimizeDeps: {
    exclude: ['@fedimint/core-web'],
  },
})