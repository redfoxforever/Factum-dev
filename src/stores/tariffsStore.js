import { defineStore } from "pinia";

export const useTariffsStore = defineStore('Tariffs Store', {
    state: () => ({
        title: 'Тарифы',
        cards: [
            {
                bgName: 'white-bg',
                name: 'тариф',
                title: 'чистая доставка',
                text: 'без консультации сотрудников',
                limits: [
                    {
                        name: 'Преимущество номер 1',
                        active: true
                    },
                    {
                        name: 'Преимущество номер 2',
                        active: true
                    },
                    {
                        name: 'Преимущество номер 3',
                        active: true
                    },
                    {
                        name: 'Преимущество номер 4',
                        active: false
                    },
                    {
                        name: 'Преимущество номер 5',
                        active: false
                    },
                    {
                        name: 'Преимущество номер 6',
                        active: false
                    },
                    {
                        name: 'Преимущество номер 7',
                        active: false
                    },
                    {
                        name: 'Преимущество номер 8',
                        active: false
                    }
                ],
                price: 349
            },
            {
                bgName: 'blue-bg',
                name: 'тариф',
                title: 'стандартный',
                text: 'помощь в подборе автомобиля',
                limits: [
                    {
                        name: 'Преимущество номер 1',
                        active: true
                    },
                    {
                        name: 'Преимущество номер 2',
                        active: true
                    },
                    {
                        name: 'Преимущество номер 3',
                        active: true
                    },
                    {
                        name: 'Преимущество номер 4',
                        active: true
                    },
                    {
                        name: 'Преимущество номер 5',
                        active: true
                    },
                    {
                        name: 'Преимущество номер 6',
                        active: true
                    },
                    {
                        name: 'Преимущество номер 7',
                        active: false
                    },
                    {
                        name: 'Преимущество номер 8',
                        active: false
                    }
                ],
                price: 599
            },
            {
                bgName: 'gold-bg',
                name: 'тариф',
                title: 'все включено',
                text: 'все что в "Стандарте" и больше!',
                limits: [
                    {
                        name: 'Преимущество номер 1',
                        active: true
                    },
                    {
                        name: 'Преимущество номер 2',
                        active: true
                    },
                    {
                        name: 'Преимущество номер 3',
                        active: true
                    },
                    {
                        name: 'Преимущество номер 4',
                        active: true
                    },
                    {
                        name: 'Преимущество номер 5',
                        active: true
                    },
                    {
                        name: 'Преимущество номер 6',
                        active: true
                    },
                    {
                        name: 'Преимущество номер 7',
                        active: true
                    },
                    {
                        name: 'Преимущество номер 8',
                        active: true
                    }
                ],
                price: 929
            },
        ]
    })
})