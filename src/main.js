import { createApp } from 'vue'
import './styles/style.scss'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

library.add(faBookOpen)
library.add(faCircleInfo)
library.add(faCartShopping)
library.add(faUserPlus)
library.add(faMagnifyingGlass)
library.add(faCalendarDays)
library.add(faUser)
library.add(faPlus)
library.add(faMoneyBill)
library.add(faEye)
library.add(faPaperPlane)
library.add(faFacebook)
library.add(faTwitter)
library.add(faInstagram)


createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
