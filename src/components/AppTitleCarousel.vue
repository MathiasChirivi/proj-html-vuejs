<script >
export default {
    name: "AppTitleCarousel",
}
</script>

<template>
    <div id="carouselExampleSlidesOnly" class=" position-relative carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <div class="containerCarousel">
                    <img src="../assets/img/theme_slider1_bg-1.jpg" class="d-block heightCarousel w-100">
                </div>
            </div>
            <div class="carousel-item ">
                <div class="containerCarousel">
                    <img src="../assets/img/theme_slider2_bg-1.jpg" class="d-block heightCarousel w-100">
                </div>
            </div>
            <div class="carousel-item ">
                <div class="containerCarousel">
                    <img src="../assets/img/theme_slider3_bg-1.jpg" class="d-block heightCarousel w-100">
                </div>
            </div>
        </div>
        <img class="position-absolute positionImg" src="../assets/img/Wave-1.png" alt="">
    </div>
    <div class="positionText position-absolute text-center">
        <h2 class="text-white mb-4">Key to your success</h2>
        <p class="text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem iste illum maxime? Facilis
            tempora delectus,
            earum eos iure deleniti deserunt, optio nihil dolore laboriosam rerum? Molestiae non quos rerum amet.</p>
        <button class="p-3 m-5 text-white text-center colorButton"><font-awesome-icon class="mx-2"
                :icon="['fas', 'magnifying-glass']" /> Search
            Courses</button>
        <button class="p-3 text-center textButton"><font-awesome-icon class="mx-2" :icon="['fas', 'user-plus']" />Apply for
            University</button>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as var;

#carouselExampleSlidesOnly {
    margin-top: -120px;
}

.heightCarousel {
    height: 700px;
}

.positionImg {
    left: 0;
    width: 100%;
    bottom: 0px;

}

.containerCarousel {
    position: relative;
}

.containerCarousel::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var.$ColorRGBA;
    /* Colore dello sfondo con opacità */
}

.positionText {
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.colorButton {
    background-color: #E9D758;
    border-radius: 30px;
    border: 0px;
}

.colorButton:hover {
    transition: 1s;
    background-color: white;
    color: var.$primaryColor !important;
    border-radius: 30px;
    border: 0px;
}

.textButton {
    color: var.$primaryColor !important;
    border-radius: 30px;
    border: 0px;
}

.textButton:hover {
    transition: 1s;
    background-color: #E9D758;
    color: white !important;
}
</style>
