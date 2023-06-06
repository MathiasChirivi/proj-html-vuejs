<script >
import { Main } from '../data/store'
export default {
    name: "AppSection1",
    data() {
        return {
            clickedImage: 0,
        }
    },
    // We connect the data.js to pass the various strings (img, description...)
    computed: {
        imagePath() {
            return Main.imagePath;
        }
    },
    //method that changes the displayed image on click
    methods: {
        showImage(index) {
            this.clickedImage = index;
            for (let i = 0; i < this.imagePath.length; i++) {
                if (i == index) {
                    this.imagePath[i].display = 'active';
                }
                else {
                    this.imagePath[i].display = 'none';
                }
            }
            console.log("img ", this.imagePath[index].imgPath)
        }
    }
}
</script>

<!-- section where we see the data passed from the store.js
     with the relative v-if to see the activated Image -->
<template>
    <div class="position-relative">
        <div class=" container containerMain d-flex flex-column align-items-center marginContainer">
            <h2 class="mb-2">Faculties available at EduPrime</h2>
            <p class="text-center textSecondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
                recusandae
                ipsam quidem sapiente necessitatibus!</p>
            <div class="list-unstyled d-flex justify-content-center mt-5">
                <div v-for="(item, index) in imagePath" class="p-3 d-flex flex-column align-items-center border"
                    :class="item.display" @click="showImage(index)">
                    <img class="imgPath" :src="item.imgPath">
                    <h5 class="colorh5 mt-3">{{ item.text }}</h5>
                    <i v-if="item.display == 'active'"></i>
                </div>
            </div>
        </div>
        <div class="container containerMain d-flex mt-1">
            <div class="left d-flex justify-content-center">
                <img :src="imagePath[clickedImage].imgPathBig">
            </div>
            <div class="right marginContainerBottom d-flex flex-column justify-content-center">
                <h2 class="mb-5">{{ imagePath[clickedImage].text }}</h2>
                <p class="mb-3">{{ imagePath[clickedImage].description }}</p>
                <button class=" buttonMain text-white">Read More</button>
            </div>
        </div>
        <img class="position-absolute w-100 positionImg" src="../assets/svg/svg-0.svg" alt="">
    </div>
</template>

<!-- Add SCSS for the primary color and varius CSS  -->
<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as var;

.containerMain {
    margin: 0 auto;
}

.marginContainer {
    margin-bottom: 100px;
}

.marginContainerBottom {
    margin-bottom: 200px;
}

.textSecondary {
    width: 500px;
}

.imgPath {
    width: 50%;
}

.left {
    width: calc(100% / 2);
    height: 500px;
}

.left img {
    height: 80%;
    width: 80%;
}

.colorh5 {
    color: var.$primaryColor
}

.buttonMain {
    padding: 13px;
    border-radius: 30px;
    border: 0px;
    background-color: var.$primaryColor;
    width: 200px;
}

.right {
    width: calc(100% / 2);
    height: 500px;
}

.active {
    background-color: lightgray;
}

.positionImg {
    bottom: -1px;
    left: 0;
}
</style>
