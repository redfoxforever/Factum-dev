import { defineStore } from "pinia";

export const useContactStore = defineStore('Contact Store', {
    state: () => ({
        header: {
            content: {
                title: '<span>выбирай</span> авто!',
                text: 'Мы поможем с выбором под бюджет или найдем конкретную марку'
            },
            modal: {
                title: 'Оставьте нам свои контакты',
                text: '*Гарантируем, что они не будут переданы третьим лицам',
                inputs: [
                    {
                        type: 'text',
                        value: '',
                        name: 'name',
                        placeholder: 'Имя'
                    },
                    {
                        type: 'email',
                        value: '',
                        name: 'email',
                        placeholder: 'Ваш адрес электронной почты'
                    },
                    {
                        type: 'number',
                        value: '',
                        name: 'number',
                        placeholder: 'Контактный телефон'
                    }
                ]
            }
        },
        footer: {
            modal: {
                title: 'наши контакты',
                numberInfo: {
                    number: '+998(99) 817-30-66',
                    url: 'tel:+998998173066'
                },
                emailInfo: {
                    email: 'freelanceredfox@gmail.com',
                    url: 'mailto: freelanceredfox@gmail.com'
                },
                addresses: [
                    {
                        name: 'Ташкент, Бизнес-центр "Морской 2", Польский спуск 11, офис 7-14'
                    },
                    {
                        name: 'Ташкент, ул. Предславинская, 35Д, оф. 107 (г. Дворец Украина)'
                    },
                    {
                        name: 'Ташкент, ул. Дмитрия Яворницкого (Карла Маркса) 72б, Бизнес-центр "Дельмар Люкс" 7 этаж, офис 705'
                    }
                ]
            }
        }
    })
})