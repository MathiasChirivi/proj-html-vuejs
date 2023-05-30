<script >
export default {
    name: "AppSection2",
}
</script>

<template>
    <div class="headerBg ">
        <div class="container containerMain d-flex flex-column align-items-center">
            <img class="imgClock mb-4" src="../assets/img/Clock-and-Bell.png" alt="">
            <h2 class="bg-danger mt-4 mb-5 text-white">University Year</h2>
            <div class="rowFirst text-center text-white">
                <div class="text">
                    <h3>Demo Classes</h3>
                    <p>In the first week, students try to accommodate with the teaching style and choose their optional
                        courses.</p>
                </div>
                <div class="text">
                    <h3>Graduation Day</h3>
                    <p>On the day of graduation, all students gather for the ceremony and then network and party among
                        others.</p>
                </div>
            </div>
            <img class=" timeLineItem" src="../assets/img/Timeline-Item.png" alt="">
            <div class="rowLast text-center text-white">
                <div class="textLast">
                    <h3>Orientation</h3>
                    <p>First day of the university year, all students gather for the opening ceremony and then network with
                        others.</p>
                </div>
                <div class="text">
                    <h3>Evaluation</h3>
                    <p>At the end of a semester, students take a general evaluation test for every subject they’re learning.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.headerBg {
    background-color: #E56768;
    padding: 150px 0;
}

.containerMain {
    margin: 0 auto;
}

.imgClock {
    width: 5%;
}

.timeLineItem {
    width: 100%;
}

.rowFirst {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
}

.rowLast {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
}

.text {
    width: 400px;
    margin-left: 240px;
}

.textLast {
    width: 400px;
}

.text:last-child {
    width: 400px;
    margin-right: 0;
    margin-left: 100px;
}

.rowLast .text:last-child {
    margin-left: 130px;
    margin-right: 260px;
}
</style>
