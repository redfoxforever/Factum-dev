import { defineStore } from "pinia";

export const useHeaderStore = defineStore('Header Store', {
    state: () => ({
        desc: {
            title: 'Совершите безопасную покупку авто из США и <span>сэкономьте до 50%</span> от среднерыночных цен в Ташкенте',
            infoContents: [
                {
                    text: 'FACTUM – Ваш надежный импортер с автоаукционов в США'
                },
                {
                    text: 'Без посредников и непредвиденных расходов'
                }
            ],
            buttons: [
                {
                    text: 'подобрать авто',
                    className: 'red-btn'
                },
                {
                    text: 'популярные предложения',
                    className: 'gray-btn'
                }
            ]
        }       
    })
})