import { defineStore } from "pinia";

export const useAboutStore = defineStore('About Store', {
    state: () => ({
        desc: {
            title: 'о компании Factum',
            subtitle: 'С нами купить авто из США – это легко!',
            text: 'Группа компаний FACTUM – официальный экспортер на аукционах Сopart, Manheim, IAAI. Мы предоставляем вам все услуги из первых рук в процессе покупки автомобиля из США (покупка – транспортировка – ремонт – сертификация).'
        },
        groupTitle: 'В нашу группу компаний входят',
        cards: [
            {
                text: 'Лицензированный дилер на IAAI, Copart, Manheim',
                img: '/src/assets/images/main/about/about-card-1.png'
            },
            {
                text: 'Транспортно-экспедиторская компания: морской фрахт по всему миру',
                img: '/src/assets/images/main/about/about-card-2.png'
            },
            {
                text: 'Собственная брокерская служба',
                img: '/src/assets/images/main/about/about-card-3.png'
            },
            {
                text: 'Испытательный центр в Одессе: сертификация автомобилей для регистрации в МРЭО',
                img: '/src/assets/images/main/about/about-card-4.png'
            },
            {
                text: 'Партнерский малярно-рихтовочный комплекс',
                img: '/src/assets/images/main/about/about-card-5.png'
            },
            {
                text: 'Сервис заказа автомобильных запчастей и компонентов',
                img: '/src/assets/images/main/about/about-card-6.png'
            }
        ]
    })
})