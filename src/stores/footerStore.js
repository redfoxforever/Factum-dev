import { defineStore } from "pinia";

export const useFooterStore = defineStore('Footer Store', {
    state: () => ({
        navLinks: {
            title: 'навигация'
        },
        legalInfo: {
            title: 'юридическая информация',
            text: 'ООО "ОПЕРАТОР", <br> ЕГРПОУ 38425888 <br> Юридический адрес: 65013, г. Одесса, <br> ул. Балтская дорога, дом. 1'
        },
        officesInfo: {
            title: 'офисы в других странах',
            offices: [
                {
                    class: 'us-office',
                    text: 'St. Petersburg, Florida USA <br> +1 505-385-36636 <br> factum-auto.com',
                    url: 'tel: +998998173066'
                },
                {
                    class: 'uz-office',
                    text: 'Tashkent, Uzbekistan <br> +998(99) 817-30-66 <br> factum-auto.com',
                    url: 'tel: +998998173066'
                },
                {
                    class: 'kz-office',
                    text: 'Almaty, Kazakhstan <br> +7 8097-24224 <br> factum-auto.com',
                    url: 'tel: +998998173066'
                }
            ]
        }
    })
})