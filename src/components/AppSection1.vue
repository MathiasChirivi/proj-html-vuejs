<script >
import { Main } from '../data/store'
export default {
    name: "AppSection1",
    computed: {
        imagePath() {
            return Main.imagePath;
        }
    }
}
</script>

<template>
    <div class=" container containerMain d-flex flex-column align-items-center marginContainer">
        <h2 class="mb-2">Faculties available at EduPrime</h2>
        <p class="text-center textSecondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis recusandae
            ipsam quidem sapiente necessitatibus!</p>
        <ul class="list-unstyled d-flex justify-content-center mt-4 mb-5 ">
            <li class="p-3 d-flex flex-column align-items-center border" v-for="item in imagePath" :key="item.text">
                <img class="mb-3" :src="item.imgPath" :alt="item.text">
                <span class="text-center">{{ item.text }}</span>
            </li>
        </ul>
        <div class="container containerMain d-flex mt-4">
            <div class="left d-flex justify-content-center">
                <img src="../assets/img/Gavel-Illustration-e1556884768193.png" alt="">
            </div>
            <div class="right d-flex flex-column justify-content-center">
                <h2 class="mb-5">Law Faculty</h2>
                <p class="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque atque temporibus sit.
                    Voluptates
                    minus
                    cupiditate nemo facilis debitis ea, doloremque ut, saepe autem quaerat, eum consequuntur sit aperiam
                    consequatur tempora?</p>
                <button class=" buttonMain text-white">Read More</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.containerMain {
    margin: 0 auto;
}

.marginContainer {
    margin-bottom: 400px;
}

.textSecondary {
    width: 500px;
}

li img {
    width: 50%;
}

.left {
    width: calc(100% / 2);
    height: 500px;
}

.left img {
    width: 100%;
}

.buttonMain {
    padding: 13px;
    border-radius: 30px;
    border: 0px;
    background-color: #E56768;
    width: 200px;
}

.right {
    width: calc(100% / 2);
    height: 500px;
}
</style>
