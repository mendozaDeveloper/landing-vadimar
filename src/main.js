import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

// Importar CSS
import 'bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/swiper/swiper-bundle.min.css'
import './css/styles.scss'

// Importar JavaScript de Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const app = createApp(App)

app.use(router)
app.mount('#app')
