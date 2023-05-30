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
</style>
