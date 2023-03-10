import { defineStore } from "pinia";

export const useStagesStore = defineStore('Stages Store', {
    state: () => ({
        title: 'этапы покупки авто в США',
        subtitle: 'Весь процесс. От выбора авто в США до регистрации в Ташкента',
        stagesCards: [
            {
                title: 'Мы участвуем в аукционе за выбранные вами автомобили',
                text: 'В США самая низкая в мире стоимость новых автомобилей. Наименьшее ДТП – повод для замены авто от страховой компании. Поэтому можно приобрести практически новые машины за 30-40% стоимости от средней на рынке.',
                icon: '/src/assets/images/main/stages/card-icon-1.svg'
            },
            {
                title: 'Если автомобиль выиграл, мы формируем официальный инвойс к оплате авто',
                text: 'В США самая низкая в мире стоимость новых автомобилей. Наименьшее ДТП – повод для замены авто от страховой компании. Поэтому можно приобрести практически новые машины за 30-40% стоимости от средней на рынке.',
                icon: '/src/assets/images/main/stages/card-icon-2.svg'
            }
        ],
        contentCards: [
            {
                title: 'Подбор автомобиля',
                active: true,
                num: 1
            },
            {
                title: 'Аукцион и покупка',
                active: false,
                num: 2
            },
            {
                title: 'Доставка в Украину и экспедирование в порту',
                active: false,
                num: 3
            },
            {
                title: 'Растаможка, сертификация и регистрация автомобиля',
                active: false,
                num: 4
            }
        ]
    })
})