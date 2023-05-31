<script >
export default {
    name: "AppSection3",

}
</script>

<template>
    <div class=" container containerMain ">
        <h2 class="mb-5">Latest Courses</h2>
        <div class="d-flex">
            <div class="col">
                <div class="card h-100 widthCard d-flex align-items-center text-center">
                    <img src="../assets/img/Decisions-icon.png" class=" mt-4 card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Make Better Decision</h5>
                        <div class="d-flex flex-column gap-3">
                            <div class="d-flex justify-content-center align-items-center gap-2">
                                <font-awesome-icon :icon="['fas', 'user']" />
                                <p class="m-0">Teacher: James Colins</p>
                            </div>
                            <div class="d-flex justify-content-center align-items-center gap-2">
                                <font-awesome-icon :icon="['fas', 'money-bill']" />
                                <p class="m-0">Price: $21.00</p>
                            </div>
                        </div>
                        <button class="mt-3 p-2 buttonCards">View Course</button>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100 widthCard d-flex align-items-center text-center">
                    <img src="../assets/img/Speaker-icon.png" class=" mt-4 card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Make Better Decision</h5>
                        <div class="d-flex flex-column gap-3">
                            <div class="d-flex justify-content-center align-items-center gap-2">
                                <font-awesome-icon :icon="['fas', 'user']" />
                                <p class="m-0">Teacher: James Colins</p>
                            </div>
                            <div class="d-flex justify-content-center align-items-center gap-2">
                                <font-awesome-icon :icon="['fas', 'money-bill']" />
                                <p class="m-0">Price: $21.00</p>
                            </div>
                        </div>
                        <button class="mt-3 p-2 buttonCards">View Course</button>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100 widthCard d-flex align-items-center text-center">
                    <img src="../assets/img/Network-icon.png" class=" mt-4 card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Make Better Decision</h5>
                        <div class="d-flex flex-column gap-3">
                            <div class="d-flex justify-content-center align-items-center gap-2">
                                <font-awesome-icon :icon="['fas', 'user']" />
                                <p class="m-0">Teacher: James Colins</p>
                            </div>
                            <div class="d-flex justify-content-center align-items-center gap-2">
                                <font-awesome-icon :icon="['fas', 'money-bill']" />
                                <p class="m-0">Price: $21.00</p>
                            </div>
                        </div>
                        <button class="mt-3 p-2 buttonCards">View Course</button>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100 widthCard d-flex align-items-center text-center">
                    <img src="../assets/img/Brand-icon.png" class=" mt-4 card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Make Better Decision</h5>
                        <div class="d-flex flex-column gap-3">
                            <div class="d-flex justify-content-center align-items-center gap-2">
                                <font-awesome-icon :icon="['fas', 'user']" />
                                <p class="m-0">Teacher: James Colins</p>
                            </div>
                            <div class="d-flex justify-content-center align-items-center gap-2">
                                <font-awesome-icon :icon="['fas', 'money-bill']" />
                                <p class="m-0">Price: $21.00</p>
                            </div>
                        </div>
                        <button class="mt-3 p-2 buttonCards">View Course</button>
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
</template>

<style scoped>
.containerMain {
    height: 500px;
    margin: 0 auto;
    margin-top: 100px;
}

.containerMainAfter {
    margin-top: 150px;
}

.widthCard {
    width: 250px;
}

.widthCard img {
    width: 30%;
}

.buttonCards {
    color: white;
    width: 150px;
    border: 0;
    background-color: #E56768;
    border-radius: 30px;
}

.buttonMain {
    padding: 13px;
    border-radius: 30px;
    border: 0px;
    background-color: #E56768;
    width: 200px;
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
