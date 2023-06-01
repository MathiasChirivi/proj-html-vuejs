import { reactive } from 'vue'

export const headerLink = reactive({
    links: [
        {
            text: "Home",
            url: "#",
            box: ['Low Faculty', 'Economy', 'Medicine', 'Computer Science', 'Graphic Design'],
        },
        {
            text: "Coureses",
            url: "#",
            box: ['Low Faculty', 'Economy', 'Medicine', 'Computer Science', 'Graphic Design'],
        },
        {
            text: "About Us",
            url: "#",
            box: false,
        },
        {
            text: "News",
            url: "#",
            box: ['Low Faculty', 'Economy', 'Medicine', 'Computer Science', 'Graphic Design'],
        },
        {
            text: "Pages",
            url: "#",
            box: ['Low Faculty', 'Economy', 'Medicine', 'Computer Science', 'Graphic Design'],
        },
        {
            text: "Contact",
            url: "#",
            box: false,
        },
        {
            text: "Purchase",
            url: "#",
            box: false,
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

export const MainSection5 = reactive({
    imagePartners: [
        {
            imgPath: "../src/assets/img/partner-2.png",
        },
        {
            imgPath: "../src/assets/img/partner-3.png",
        },
        {
            imgPath: "../src/assets/img/partner-4.png",
        },
        {
            imgPath: "../src/assets/img/partner-5.png",
        },
        {
            imgPath: "../src/assets/img/partner-6.png",
        },
        {
            imgPath: "../src/assets/img/partner-8.png",
        },
        {
            imgPath: "../src/assets/img/partner-1.png",
        },
        {
            imgPath: "../src/assets/img/partner-7.png",
        }
    ]
})

export const FooterGet = reactive({
    voices: [
        {
            text: "Request a website",
        },
        {
            text: "Browse Themes",
        },
        {
            text: "Payment options",
        },
        {
            text: "Support System",
        },
        {
            text: "Checkout",
        },
        {
            text: "Purxhase Theme",
        }
    ],
    voicesText: [
        {
            text: "Purchase theme",
        },
        {
            text: "Our Benefits",
        },
        {
            text: "Our Team",
        },
        {
            text: "Our Services",
        },
        {
            text: "Other Products",
        },
        {
            text: "My account",
        }
    ],
    links: [
        {
            text: "ECONOMY",
        },
        {
            text: "ECONOMY",
        },
        {
            text: "ECONOMY",
        },
        {
            text: "ECONOMY",
        },
        {
            text: "ECONOMY",
        },
        {
            text: "ECONOMY",
        }, {
            text: "ECONOMY",
        },
    ]
})
