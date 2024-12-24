import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue({
            template: {
                compilerOptions: {
                    // Exclude lite-youtube from Vue's component resolution
                    isCustomElement: (tag) => tag === 'lite-youtube'
                }
            }
        })
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src') // Configura el alias '@'
        }
    }
})
