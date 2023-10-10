import { createApp } from 'vue'
import router from './router'
import './style.css'
import App from './App.vue'
import i18n from '/locales/i18n'
import store from './store'
const app = createApp( App )
app.use( router )
app.use( store )

app.use( i18n )
app.mount( '#app' )
