import { defineStore } from "pinia";

export const useNavStore = defineStore('Nav Store', {
    state: () => ({
        navLinks: [
            {
                text: 'Каталог авто',
                url: '#catalog'
            },
            {
                text: 'Удобства',
                url: '#'
            },
            {
                text: 'Цены',
                url: '#'
            },
            {
                text: 'О компании',
                url: '#about us'
            },
            {
                text: 'Риски и гарантии',
                url: '#'
            },
            {
                text: 'Отзывы',
                url: '#rates'
            },
            {
                text: 'Контакты',
                url: '#contact'
            },
        ],
        workInfo: {
            place: 'Ташкент',
            text: 'время работы',
            time: 'ПН-СБ с 9:00 до 19:00'
        },
        contactInfo: {
            tel: {
                text: '+998(99)817-30-66',
                url: '+998998173066'
            },
            text: 'заказать звонок'
        }
    })
})