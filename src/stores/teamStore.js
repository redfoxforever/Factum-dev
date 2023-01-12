import { defineStore } from "pinia";

export const useTeamStore = defineStore('Team Store', {
    state: () => ({
        title: 'наша команда',
        cards: [
            {
                name: 'Петр Роменский',
                job: 'Руководитель отдела продаж'
            },
            {
                name: 'Михаил Блажко',
                job: 'Эксперт по подбору авто'
            },
            {
                name: 'Олег Шампиньона',
                job: 'Руководитель отдела маркетинга'
            },
            {
                name: 'Дарья Шершикова',
                job: 'Главный специалист по сопровождению авто из США'
            }
        ]
    })
})