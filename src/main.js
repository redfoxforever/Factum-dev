import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router/router'
import "@/assets/scss/main.scss";
import '@/assets/css/all.min.css';

const app = createApp(App).use(createPinia()).use(router)
app.mount('#app')
