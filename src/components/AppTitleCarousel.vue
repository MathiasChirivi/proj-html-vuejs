<script >
export default {
    name: "AppTitleCarousel",
}
</script>

<template>
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
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
    </div>
    <div class="positionText position-absolute text-center">
        <h2 class="text-white mb-4">Key to your success</h2>
        <p class="text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem iste illum maxime? Facilis
            tempora delectus,
            earum eos iure deleniti deserunt, optio nihil dolore laboriosam rerum? Molestiae non quos rerum amet.</p>
        <button class="p-3 m-5 text-white colorButton">Search Courses</button>
        <button class="p-3 textButton">Apply for University</button>
    </div>
</template>

<style scoped>
.heightCarousel {
    height: 700px;
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
    background: rgba(218, 108, 110, 0.6);
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
    border-color: #E9D758;
    border: 0px;
}

.textButton {
    color: #E56768;
    border-radius: 30px;
    border-color: #E56768;
    border: 0px;
}
</style>
