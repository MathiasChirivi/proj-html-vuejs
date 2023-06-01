<script >
import { MainSection5 } from '../data/store'
export default {
    name: "AppSection5",
    computed: {
        imagePartners() {
            return MainSection5.imagePartners;
        }
    }
}
</script>

<template>
    <div class=" container containerMain">
        <div class="d-flex flex-column justify-content-center align-items-center">
            <h2 class="text-center">Partners</h2>
            <p class="text-center w-50">Leverage agile frameworks to provide a robust
                synopsis for high level overviews. Iterative approaches to corporate strategy.</p>
            <ul class="list-unstyled d-flex align-items-center mt-4 mb-5 ">
                <li class="p-3 d-flex flex-column align-items-center border" v-for="image in imagePartners">
                    <img class="mb-3 imgClass" :src="image.imgPath">
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as var;

.containerMain {
    margin: 0 auto;
    margin-top: 100px;
    margin-bottom: 250px;
}

li img {
    width: 100%;
    opacity: 5;
}

.imgClass {
    filter: opacity(50%);
    height: 80px;
}

.imgClass:hover {
    filter: grayscale(100%);
}
</style>

