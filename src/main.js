import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
library.add(faCalendarDays)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
