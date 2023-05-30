import { reactive } from 'vue'

export const headerLink = reactive({
    links: [
        {
            text: "Home",
            url: "#",
        },
        {
            text: "Coureses",
            url: "#",
        },
        {
            text: "About Us",
            url: "#",
        },
        {
            text: "News",
            url: "#",
        },
        {
            text: "Pages",
            url: "#",
        },
        {
            text: "Contact",
            url: "#",
        },
        {
            text: "Purchase",
            url: "#",
        },
    ]
})

export const Main = reactive({
    imagePath: [
        {
            imgPath: "../src/assets/img/Gavel-v2.png",
            text: "Low Faculty",
        },
        {
            imgPath: "../src/assets/img/Coins-tabs-v2.png",
            text: "Economy",
        },
        {
            imgPath: "../src/assets/img/Medicine-tabs-v2.png",
            text: "Medicine",
        },
        {
            imgPath: "../src/assets/img/Computer-tabs-v2.png",
            text: "Computer Science",
        },
        {
            imgPath: "../src/assets/img/Palette-tabs-v2.png",
            text: "Graphic Design",
        }
    ]
})