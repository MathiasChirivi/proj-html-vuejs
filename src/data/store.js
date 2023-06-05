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
            imgPathBig: "../src/assets/img/Gavel-Illustration-e1556884768193.png",
            imgPath: "../src/assets/img/Gavel-v2.png",
            text: "Low Faculty",
            description: "Learning from world-leading academics and practitioners, you’ll not only receive an outstanding grounding in the theory of law, but you will be able to understand how those principles are applied in practice through a range of student-led activities and competitions.",
            display: 'active'
        },
        {
            imgPathBig: "../src/assets/img/Economy.png",
            imgPath: "../src/assets/img/Coins-tabs-v2.png",
            text: "Economy",
            description: "Learning from world-leading academics and practitioners, you’ll not only receive an outstanding grounding in the theory of law, but you will be able to understand how those principles are applied in practice through a range of student-led activities and competitions.",
            display: 'none'
        },
        {
            imgPathBig: "../src/assets/img/Medicine.png",
            imgPath: "../src/assets/img/Medicine-tabs-v2.png",
            text: "Medicine",
            description: "Learning from world-leading academics and practitioners, you’ll not only receive an outstanding grounding in the theory of law, but you will be able to understand how those principles are applied in practice through a range of student-led activities and competitions.",
            display: 'none'
        },
        {
            imgPathBig: "../src/assets/img/Computer-Science.png",
            imgPath: "../src/assets/img/Computer-tabs-v2.png",
            text: "Computer Science",
            description: "Learning from world-leading academics and practitioners, you’ll not only receive an outstanding grounding in the theory of law, but you will be able to understand how those principles are applied in practice through a range of student-led activities and competitions.",
            display: 'none'
        },
        {
            imgPathBig: "../src/assets/img/Graphic-Design.png",
            imgPath: "../src/assets/img/Palette-tabs-v2.png",
            text: "Graphic Design",
            description: "Learning from world-leading academics and practitioners, you’ll not only receive an outstanding grounding in the theory of law, but you will be able to understand how those principles are applied in practice through a range of student-led activities and competitions.",
            display: 'none'
        }
    ]
})


export const MainSection3 = reactive({
    CardCourse: [
        {
            img: "../src/assets/img/Decisions-icon.png",
            TitleCourse: "Make Better Decision",
            teacher: "James Colins",
            price: "$21.00",
        },
        {
            img: "../src/assets/img/Speaker-icon.png",
            TitleCourse: "Make Better Decision",
            teacher: "James Colins",
            price: "Free"
        },
        {
            img: "../src/assets/img/Network-icon.png",
            TitleCourse: "Make Better Decision",
            teacher: "James Colins",
            price: "Free"
        },
        {
            img: "../src/assets/img/Brand-icon.png",
            TitleCourse: "Make Better Decision",
            teacher: "James Colins",
            price: "Free"
        },
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
