<script >
export default {
    name: "AppSection0",
}
</script>

<template>
    <div class="container containerMain d-flex">
        <div class="left d-flex flex-column justify-content-center">
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

.right img {
    width: 100%;
}
</style>
