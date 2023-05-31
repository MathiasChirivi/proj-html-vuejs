<script >
export default {
    name: "AppSection3",

}
</script>

<template>
    <div class=" container containerMain mt-5 mb-2">
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

    </div>
</template>

<style scoped>
.containerMain {
    height: 500px;
    margin: 0 auto;
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
</style>
