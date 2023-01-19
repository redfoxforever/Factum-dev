import { defineStore } from "pinia";

export const useMessengersStore = defineStore('Messengers Store', {
    state: () => ({
        contents: [
            {
                title: 'Получайте <span class="blue-spn">наилучшие предложения</span> авто из США в удобный мессенджер',
                links: [
                    {
                        icon: '<i class="fab fa-telegram-plane"></i>',
                        text: 'telegram',
                        url: 'https://t.me/redfox4ever',
                        name: 'tg-link'
                    },
                    {
                        icon: '<i class="fab fa-facebook"></i>',
                        text: 'facebook',
                        url: 'https://www.facebook.com/',
                        name: 'fcbook-link'
                    }
                ]
            },
            {
                title: 'Или напишите нам в <span class="orange-spn">Instagram</span> слово "Каталог"',
                links: [
                    {
                        icon: '<i class="fab fa-instagram"></i>',
                        text: 'instagram',
                        url: 'https://www.instagram.com/redfox_4ever/',
                        name: 'insta-link'
                    }
                ]
            }
        ]
    })
})