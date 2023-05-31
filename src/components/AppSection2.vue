<script >
export default {
    name: "AppSection2",
}
</script>

<template>
    <div class="headerBg ">
        <div class="container containerMain d-flex flex-column align-items-center">
            <img class="imgClockCalendar mb-4" src="../assets/img/Clock-and-Bell.png" alt="">
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
            <img class="imgClockCalendar calendarImg" src="../assets/img/upcoming-events-calendar-icon.png" alt=""
                srcset="">
            <h2 class="text-white mb-5">Upcoming Events</h2>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card h-100">
                        <div class="card-body">
                            <h3 class="card-title text-center">Coaching Session</h3>
                            <div class="d-flex align-items-center justify-content-center">
                                <font-awesome-icon :icon="['fas', 'calendar-days']" />
                                <p class="m-0 mx-2">20 May 21:30 PM</p>
                            </div>
                            <p class="card-text text-center lh-sm">This is a longer card with supporting text below as a
                                natural
                                lead-in to
                                additional content. This content is a little bit longer.</p>
                            <a href="#" class="btnFind  text-center">Find More</a>
                        </div>
                    </div>
                </div>
                <div class="col position-relative">
                    <div class="card h-100">
                        <div class="card-body">
                            <h3 class="card-title text-center">Coaching Session</h3>
                            <div class="d-flex align-items-center justify-content-center">
                                <font-awesome-icon :icon="['fas', 'calendar-days']" />
                                <p class="m-0 mx-2">20 May 21:30 PM</p>
                            </div>
                            <p class="card-text text-center lh-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                sed
                                do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua.</p>
                            <a href="#" class="btnFind  text-center">Find More</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card heightBody">
                        <div class="card-body">
                            <h3 class="card-title text-center">Coaching Session</h3>
                            <div class="d-flex align-items-center justify-content-center">
                                <font-awesome-icon :icon="['fas', 'calendar-days']" />
                                <p class="m-0 mx-2">20 May 21:30 PM</p>
                            </div>
                            <p class="card-text text-center lh-sm">This is a longer card with supporting text below as a
                                natural
                                lead-in to
                                additional content. This content is a little bit longer.</p>
                            <a href="#" class="btnFind  text-center">Find More</a>
                        </div>
                    </div>
                </div>
            </div>
            <button class="buttonMargin p-3">View All Events</button>
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

.imgClockCalendar {
    width: 5%;
}

.calendarImg {
    margin-top: 100px;
    margin-bottom: 50px;
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

a {
    width: 180px;
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
    text-decoration: none;
}

.btnFind {
    padding: 15px;
    font-size: 14px;
    border-radius: 35px;
    color: #FFFFFF;
    background-color: #E56768;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 20px 0px;
}

.heightBody {
    height: 180px;
}

.buttonMargin {
    width: 170px;
    margin-top: 130px;
    border: #E56768;
    background-color: #E9D758;
    color: white;
    border-radius: 30px;
}
</style>
