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
                <li v-for="link in links">
                    <a class="text-white text-decoration-none" :href="link.url">{{ link.text }}</a>
                </li>
                <button>VIEW COURSES</button>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.headerBg {
    background: rgba(218, 108, 110, 0.8);
}

.containerHeader {
    height: 120px;
}

.logo {
    width: 450px;
}

ul {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
}

div img {
    width: 40%;
}
</style>
