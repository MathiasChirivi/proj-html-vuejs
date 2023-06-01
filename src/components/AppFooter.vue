<script >
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FooterGet } from '../data/store'
export default {
    name: "AppFooter",
    computed: {
        voices() {
            return FooterGet.voices;
        },
        voicesText() {
            return FooterGet.voicesText;
        }
    }
}
</script>

<template>
    <div class="headerBg ">
        <div class=" container containerMain d-flex align-items-center justify-content-center">
            <div class="d-flex heightCard justify-content-center align-items-center ">
                <div class="left">
                    <img src="../assets/img/theme_eduprime_logo.png" alt="">
                    <p class="text-left mt-4 text-white">EduPrime is the most versatile WordPress theme for
                        educational purposes, showcasing universities,
                        courses, secondary schools etc.</p>
                    <div class="mt-5">
                        <a href="#" class="fontAwe">
                            <font-awesome-icon :icon="['fab', 'facebook']" />
                        </a>
                        <a href="#" class="fontAwe">
                            <font-awesome-icon :icon="['fab', 'twitter']" />
                        </a>
                        <a href="#" class="fontAwe">
                            <font-awesome-icon :icon="['fab', 'instagram']" />
                        </a>
                    </div>
                </div>
                <div class="center widthCompo">
                    <h4 class="text-white mb-4">Get EduPrime</h4>
                    <ul class="list-unstyled">
                        <li class="" v-for="voce in voices">
                            <a class="text-decoration-none text-white" href="#">{{ voce.text }}</a>
                        </li>
                    </ul>

                </div>
                <div class="center widthCompo">
                    <h4 class="text-white mb-4">NetWorking</h4>
                    <ul class="list-unstyled">
                        <li class="" v-for="voc in voicesText">
                            <a class="text-decoration-none text-white" href="#">{{ voc.text }}</a>
                        </li>
                    </ul>
                </div>
                <div class="right position-relative">
                    <input class="inputText" type="text" placeholder="Email address">
                    <button class="bgButton position-absolute"><font-awesome-icon :icon="['fas', 'paper-plane']"
                            style="color: #ffffff;" />
                    </button>
                    <h3 class="text-white my-2 marginH3">Search categories</h3>
                    <div class="d-flex flex-wrap">
                        <div class="m-3">
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
                        </div>
                        <div class="m-3 d-flex justify-content-end w-100">
                            <a href="#">
                                <span>MEDICINE</span>
                            </a>
                            <a href="#">
                                <span>LAW</span>
                            </a>
                            <a href="#">
                                <span>FITNESS</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as var;

.headerBg {
    background-color: var.$primaryColor;
}

.containerMain {
    margin: 0 auto;
    margin-top: 100px;
    height: 500px;
}

.heightCard {
    height: 500px;
}

.inputText {
    height: 70px;
    width: 350px;
    border: none;
    border-radius: 35px;
    padding-left: 20px;
    font-size: 25px;
    margin-left: 60px;
}

.bgButton {
    width: 80px;
    height: 80px;
    border: none;
    background-color: #E9D758;
    border-radius: 50%;
    right: 30px;
    top: -4px;
}

.left,
.right {
    width: 35%;
    margin-right: 50px;
}

.widthCompo {
    width: calc(100% / 4);
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

.marginH3 {
    margin-left: 180px;
    margin-bottom: 40px;
}

a {
    text-decoration: none;
}

span {
    border: 1px solid #FFFFFF;
    border-radius: 35px;
    margin-right: 10px;
    padding: 10px;
    color: white;
}
</style>

