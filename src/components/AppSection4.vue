<script >
export default {
    name: "AppSection4",
}
</script>

<!-- in this section there is an input and a button for sending the user's email -->
<template>
    <div class="headerBg ">
        <div class=" container containerMain">
            <div class="d-flex align-items-center text-center ">
                <div class="right d-flex align-items-center justify-content-center">
                    <h2 class="text-white">Subscribe Now to Our Newsletter</h2>
                </div>
                <div class="left position-relative d-flex align-items-center justify-content-center">
                    <input class="inputText" type="text" placeholder="Email address">
                    <button class="bgButton position-absolute"><font-awesome-icon :icon="['fas', 'paper-plane']"
                            style="color: #ffffff;" /></button>
                </div>
            </div>
        </div>
    </div>
</template>

<!-- Add SCSS for the primary color and varius CSS  -->
<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as var;

.headerBg {
    background-color: var.$primaryColor;
}

.containerMain {
    margin: 0 auto;
    height: 150px;
}

.right {
    width: calc(100% / 2);
    height: 150px;
}

.inputText {
    height: 70px;
    width: 500px;
    border: none;
    border-radius: 35px;
    padding-left: 20px;
    font-size: 25px;
}

.bgButton {
    width: 80px;
    height: 80px;
    border: none;
    background-color: #E9D758;
    border-radius: 50%;
    right: 65px;
    top: 35px;
}

.left {
    width: calc(100% / 2);
    height: 150px;
}
</style>
