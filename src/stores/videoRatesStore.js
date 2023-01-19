import { defineStore } from "pinia";

export const useVideoStore = defineStore('Video Rates Store', {
    state: () => ({
      title: 'видео отзывы наших клиентов',
      sliderData: [
        {
            name: 'Новый DODGE JOURNEY за 13.000$ из Америки',
            author: 'Александр Винник',
            url: 'https://youtu.be/Rg4k_p6iLtM'
        },
        {
            name: 'Новая Toyota CAMRY из США за 20 000$',
            author: 'Дмитрий Панышев',
            url: 'https://youtu.be/tjW6S3In-e8'
        },
        {
            name: 'Новый Hyundai Santa Fe Sport из США за 17 000$',
            author: 'Петр Роменский',
            url: 'https://youtu.be/0_8tuBVrxuA'
        },
        {
            name: 'Новый DODGE JOURNEY за 13.000$ из Америки',
            author: 'Александр Винник',
            url: 'https://youtu.be/Rg4k_p6iLtM'
        },
        {
            name: 'Новая Toyota CAMRY из США за 20 000$',
            author: 'Дмитрий Панышев',
            url: 'https://youtu.be/tjW6S3In-e8'
        },
        {
            name: 'Новый Hyundai Santa Fe Sport из США за 17 000$',
            author: 'Петр Роменский',
            url: 'https://youtu.be/0_8tuBVrxuA'
        }
      ]  
    })
})