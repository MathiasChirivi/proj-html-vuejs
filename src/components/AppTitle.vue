<script >
import { headerLink } from '../data/store'
export default {
    name: "AppTitle",
    computed: {
        links() {
            return headerLink.links;
        }
    }
}
</script>

<template>
    <div class="headerBg">
        <div class="container containerHeader align-items-center d-flex justify-content-between">
            <div class="logo">
                <img src="../assets/img/theme_eduprime_logo.png" alt="">
            </div>
            <ul class="d-flex align-items-center justify-content-center gap-5 list-unstyled">
                <li class="nav-item dropdown" v-for="link in links">
                    <a class="text-white text-decoration-none nav-item dropdown nav-link dropdown-toggle"
                        v-if="link.box.length > 1" data-bs-toggle="dropdown" aria-expanded="false" :href="link.url">
                        {{ link.text }}
                        <ul class="dropdown-menu">
                            <li><a v-for="item in link.box" class="dropdown-item" href="#">{{ item }}</a></li>
                        </ul>
                    </a>
                    <a v-else class="text-white text-decoration-none" href="#">{{ link.text }}</a>
                </li>
                <button class="text-white viewCouses">VIEW COURSES</button>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as var;

.headerBg {
    background: #00000000;
    position: relative;
    z-index: 999999;
}

.containerHeader {
    height: 120px;
}

.logo {
    width: 370px;
}

ul {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
}

div img {
    width: 50%;
}

.viewCouses {
    background-color: #E9D758;
    border: 2px solid #E9D758;
    border-radius: 30px;
    padding: 10px;
}

.viewCouses:hover {
    border: 2px solid white;
    transition: 1s;
    color: var.$primaryColor !important;
    background-color: white;
}

.vocBox {
    color: white !important;
}
</style>
