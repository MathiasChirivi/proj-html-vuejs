<script >
export default {
    name: "AppSection0",
}
</script>

<!-- In this section, we start with the Main with various text and image -->
<template>
    <div class="mx-5 blackBox position-relative ">
        <p class="mb-0">Purchase EduPrime On Envato Market</p>
        <font-awesome-icon class="CaretDown position-absolute" :icon="['fas', 'caret-down']" />
    </div>

    <div class="container containerMain d-flex">
        <div class="left d-flex flex-column justify-content-center">
            <img src="../assets/img/Books-icon.png" alt="">
            <h2>Thousands of courses for any type of Student</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque atque temporibus sit. Voluptates minus
                cupiditate nemo facilis debitis ea, doloremque ut, saepe autem quaerat, eum consequuntur sit aperiam
                consequatur tempora?</p>
            <button class=" buttonMain text-white">Browse through courses</button>
        </div>
        <div class="right d-flex align-items-center ">
            <img src="../assets/img/Graduation-Illustration.png" alt="">
        </div>
    </div>
</template>

<style scoped>
.containerMain {
    height: 500px;
    margin: 0 auto;
}

.left {
    width: calc(100% / 2);
    height: 500px;
}

.buttonMain {
    padding: 13px;
    border-radius: 30px;
    border: 0px;
    background-color: #E9D758;
    width: 200px;
}

.right {
    width: calc(100% / 2);
    height: 500px;
}

.left img {
    width: 10%;
    margin-bottom: 20px;
}

.blackBox {
    width: 250px;
    text-align: center;
    border: 1px solid black;
    color: white;
    background-color: #222;
}

.CaretDown {
    color: #222;
    bottom: -10px;
}

.right img {
    width: 100%;
}
</style>
