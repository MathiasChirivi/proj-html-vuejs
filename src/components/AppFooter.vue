<script >
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FooterGet } from '../data/store'
export default {
    name: "AppFooter",
    computed: {
        // We connect the data.js to pass the various strings (text, voices, link...)
        voices() {
            return FooterGet.voices;
        },
        // We connect the data.js to pass the various strings (voices, voicesText, link...)
        voicesText() {
            return FooterGet.voicesText;
        }
    }
}
</script>

<!-- In the Footer I have divided into the various cols with their description
     inside whether it is a button or the various items or an input with the button -->
<template>
    <div class="headerBg ">
        <div class="container-fluid containerMain">
            <div class="row ">
                <div class="col-2">
                    <div class="hButton d-flex flex-column justify-content-end align-items-end">
                        <button class="mb-3 d-flex justify-content-center align-items-center firstBtn">
                            <img class="imgBtn" src="../assets/svg/svg-3.svg" alt="">
                            <p>Purchase theme</p>
                        </button>
                        <button class="mb-3 d-flex justify-content-center align-items-center firstBtn">
                            <img class="imgBtn" src="../assets/svg/svg-2.svg" alt="">
                            <p>Reteal Themes</p>
                        </button>
                    </div>
                </div>
                <div class="col-3">
                    <img src="../assets/img/theme_eduprime_logo.png" alt="">
                    <p class="text-left mt-4 text-white">EduPrime is the most versatile WordPress theme for
                        educational purposes, showcasing universities,
                        courses, secondary schools etc.</p>
                    <div class="mt-5">
                        <a href="#" class="fontAwe">
                            <font-awesome-icon class="color-white" :icon="['fab', 'facebook']" />
                        </a>
                        <a href="#" class="fontAwe">
                            <font-awesome-icon :icon="['fab', 'twitter']" />
                        </a>
                        <a href="#" class="fontAwe">
                            <font-awesome-icon :icon="['fab', 'instagram']" />
                        </a>
                    </div>
                </div>
                <div class="col-2">
                    <h4 class="text-white mb-4">Get EduPrime</h4>
                    <ul class="list-unstyled">
                        <li class="mb-2" v-for="voce in voices">
                            <a class="text-decoration-none text-white" href="#">{{ voce.text }}</a>
                        </li>
                    </ul>
                </div>
                <div class="col-2">
                    <h4 class="text-white mb-4">NetWorking</h4>
                    <ul class="list-unstyled">
                        <li class="mb-2" v-for="voc in voicesText">
                            <a class="text-decoration-none text-white" href="#">{{ voc.text }}</a>
                        </li>
                    </ul>
                </div>
                <div class="col-2">
                    <div class="position-relative">
                        <input class="inputText " type="text" placeholder="Search ...">
                        <button class="bgButton position-absolute"><font-awesome-icon :icon="['fas', 'magnifying-glass']" />
                        </button>
                    </div>

                    <h3 class="text-white text-end my-2">Search categories</h3>
                    <div class="d-flex flex-wrap justify-content-end">
                        <p class="m-2">
                            <a href="#">
                                <span>ECONOMY</span>
                            </a>
                            <a href="#">
                                <span>DESIGN</span>
                            </a>
                            <a href="#">
                                <span>COACHING</span>
                            </a>
                            <a href="#">
                                <span>BUSINESS</span>
                            </a>
                        </p>
                        <p class="m-2">
                            <a href="#">
                                <span>MEDICINE</span>
                            </a>
                            <a href="#">
                                <span>LAW</span>
                            </a>
                            <a href="#">
                                <span>FITNESS</span>
                            </a>
                        </p>
                        <p class="marginLeft">ModelTheme.All rights reserved</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<!-- Add SCSS for the primary color and varius CSS  -->
<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as var;

.headerBg {
    background-color: var.$primaryColor;
}

.containerMain {
    margin: 0px auto;
    padding-top: 100px;
    height: 500px;
}

.firstBtn {
    background-color: #222;
    border: 0px solid #222;
    box-shadow: 3px 11px 18px -1px rgba(0, 0, 0, 0.53);
    color: white;
    width: 200px;
    height: 40px;
}

.imgBtn {
    width: 10% !important;
    margin-right: 20px;
}

button p {
    margin: 0 !important;
}

.inputText {
    width: 100%;
    height: 70px;
    border: none;
    border-radius: 35px;
    padding-left: 20px;
    font-size: 25px;
}

.bgButton {
    width: 70px;
    height: 70px;
    border: none;
    background-color: #E9D758;
    border-radius: 50%;
    right: -2px;
    top: 0;
}


.hButton {
    height: 400px;
}

.containerMain img {
    width: 70%;
}

.fontAwe {
    margin-right: 10px;
    padding: 15px 18px;
    border: 2px solid #E9D758;
    border-radius: 50%;
}

a {
    color: #FFFFFF;
    text-decoration: none !important;
}

.HeightWidthColumns {
    width: 100%;
}

.marginLeft {
    color: #E9D758;
}

span {
    border: 1px solid #FFFFFF;
    border-radius: 35px;
    margin-right: 5px;
    padding: 5px;
    color: white;
}
</style>

