<script >
import { MainSection3 } from '../data/store'
export default {
    name: "AppSection3",
    computed: {
        CardCourse() {
            return MainSection3.CardCourse;
        }
    }

}
</script>

<template>
    <div class="position-relative">
        <img class="position-absolute positionImg1" src="../assets/svg/svg-1.svg" alt="">
        <div class=" container containerMain ">
            <h2 class="mb-5">Latest Courses</h2>
            <div class="d-flex">
                <div class="col" v-for="(course, index) in CardCourse">
                    <div class="card h-100 widthCard d-flex align-items-center text-center">
                        <img :src="course.img" class=" mt-4 card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">{{ course.TitleCourse }}</h5>
                            <div class="d-flex flex-column gap-3">
                                <div class="d-flex justify-content-center align-items-center gap-2">
                                    <font-awesome-icon :icon="['fas', 'user']" />
                                    <p class="m-0">{{ course.teacher }}</p>
                                </div>
                                <div class="d-flex justify-content-center align-items-center gap-2">
                                    <font-awesome-icon :icon="['fas', 'money-bill']" />
                                    <p class="m-0">Price: <strong class="te">{{ course.price }}</strong></p>
                                </div>
                            </div>
                            <button class="mt-3 p-2 buttonCards"><font-awesome-icon class="mx-2"
                                    :icon="['fas', 'eye']" />View
                                Course</button>
                        </div>
                    </div>
                </div>

            </div>
            <div class="container containerMainAfter d-flex ">
                <div class="left d-flex flex-column justify-content-center">
                    <h2 class="mb-5">The most efficient examination method</h2>
                    <p class="w-75 mb-5">EduPrime has gathered teachers from around the globe to brainstorm in order to
                        facilitate the evaluation of our students. Every teacher from our university has an influence on how
                        students are evaluated at his/her subject.</p>
                    <button class=" buttonMain text-white">Discover the Method</button>
                </div>
                <div class="right d-flex flex-column justify-content-center">
                    <img src="../assets/img/Exam-Illustration.png" alt="">
                </div>
            </div>
            <div class="container containerMainAfter d-flex ">
                <div class="left d-flex flex-column justify-content-center">
                    <img src="../assets/img/Girl-Illustration.png" alt="">
                </div>
                <div class="right d-flex flex-column justify-content-center">
                    <h2 class="mb-5">Variable fees for international students</h2>
                    <p class="w-75 mb-5">EduPrime has gathered teachers from around the globe to brainstorm in order to
                        facilitate the evaluation of our students. Every teacher from our university has an influence on how
                        students are evaluated at his/her subject.</p>
                    <button class=" buttonMain text-white">List of fees</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as var;

.positionImg1 {
    width: 100%;
    top: -101px;
    left: 0;
    bottom: 0px;
}

.containerMain {
    margin: 0 auto;
    margin-top: 100px;
}

.containerMainAfter {
    margin-top: 150px;
}

.widthCard {
    width: 250px;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 20px 0px;
}

.widthCard img {
    width: 30%;
}

.buttonCards {
    color: white;
    width: 150px;
    border: 0;
    background-color: var.$primaryColor;
    border-radius: 30px;
}

.buttonMain {
    padding: 13px;
    border-radius: 30px;
    border: 0px;
    background-color: var.$primaryColor;
    width: 200px;
}

.buttonMain:hover {
    transition: 1s;
    background-color: #E9D758;
}

.left {
    width: calc(100% / 2);
    height: 500px;
}

.left img {
    width: 80%;
}

.right img {
    width: 80%;
}

.right {
    width: calc(100% / 2);
    height: 500px;
}
</style>
