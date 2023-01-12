import { defineStore } from "pinia"

export const useCatalogStore = defineStore('Catalog Store', {
    state: () => ({
        title: 'каталог авто',
        sliders: [
            {
                name: 'седан',
                active: true,
                data: [
                    {
                        name: 'Bmw 7-series',
                        info: 'Bmw 2016 4-Door Sedan 740i RWD V8',
                        img: '/src/assets/images/main/catalog/sedans/sedan-car-1.png'
                    },
                    {
                        name: 'Genesis G80',
                        info: 'Genesis 2022 2.0 AT AWD V6',
                        img: '/src/assets/images/main/catalog/sedans/sedan-car-2.png'
                    },
                    {
                        name: 'Honda Accord 2022',
                        info: 'Honda 2022 1.5T Sedan FWD V16',
                        img: '/src/assets/images/main/catalog/sedans/sedan-car-3.png'
                    },
                    {
                        name: 'Honda Accord 2015',
                        info: 'Honda 2015 EX-L FWD V6',
                        img: '/src/assets/images/main/catalog/sedans/sedan-car-4.png'
                    },
                    {
                        name: 'Kia K5',
                        info: 'Kia 2012 2.0 MPI FWD',
                        img: '/src/assets/images/main/catalog/sedans/sedan-car-5.png'
                    },
                    {
                        name: 'Mazda 6',
                        info: 'Mazda 2019 2.5 Turbo AT FWD',
                        img: '/src/assets/images/main/catalog/sedans/sedan-car-6.png'
                    },
                    {
                        name: 'Volkswagen Arteon',
                        info: 'Volkswagen 2020-2023 2.0 AMT 4WD',
                        img: '/src/assets/images/main/catalog/sedans/sedan-car-7.png'
                    },
                    {
                        name: 'Volkswagen Passat',
                        info: 'Volkswagen 2019 2.0 AT FWD',
                        img: '/src/assets/images/main/catalog/sedans/sedan-car-8.png'
                    }
                ]      
            },
            {
                name: 'внедорожник',
                active: false,
                data: [
                    {
                        name: 'mercedes gla 250',
                        info: 'mercedes gla 2021 2.0L inline-4 turbo',
                        img: '/src/assets/images/main/catalog/suvs/suv-car-1.png'
                    },
                    {
                        name: 'Mazda CX-5',
                        info: 'Mazda 2020 2.5L 6AT 4WD',
                        img: '/src/assets/images/main/catalog/suvs/suv-car-2.png'
                    },
                    {
                        name: 'cadillac escalade',
                        info: 'Cadillac 2020 3.0 TD AT Sport Platinum ESV',
                        img: '/src/assets/images/main/catalog/suvs/suv-car-3.png'
                    },
                    {
                        name: 'ford edge',
                        info: 'ford 2019 2.7L AT AWD ST',
                        img: '/src/assets/images/main/catalog/suvs/suv-car-4.png'
                    },
                    {
                        name: 'mazda CX-5',
                        info: 'mazda 2023 2.5L turbo signature',
                        img: '/src/assets/images/main/catalog/suvs/suv-car-5.png'
                    },
                    {
                        name: 'mercedes-Benz m-class',
                        info: 'mercedes m-class 2014 4MATIC 4dr ML63 AMG',
                        img: '/src/assets/images/main/catalog/suvs/suv-car-6.png'
                    },
                    {
                        name: 'nissan kicks',
                        info: 'nissan 2022 4-Cyl 1.6 Liter',
                        img: '/src/assets/images/main/catalog/suvs/suv-car-7.png'
                    },
                    {
                        name: 'volkswagen atlas',
                        info: 'Atlas 2020 Utility 4D SEL R-Line AWD V6',
                        img: '/src/assets/images/main/catalog/suvs/suv-car-8.png'
                    },
                ]               
            },
            {
                name: 'электромобили',
                active: false,
                data: [
                    {
                        name: 'tesla model s',
                        info: 'mercedes gla 2021 2.0L inline-4 turbo',
                        img: '/src/assets/images/main/catalog/electromobiles/electric-car-1.png'
                    },
                    {
                        name: 'toyota bz4x',
                        info: 'toyota 2023',
                        img: '/src/assets/images/main/catalog/electromobiles/electric-car-2.png'
                    },
                    {
                        name: 'bmw IX',
                        info: 'mercedes gla 2021 2.0L inline-4 turbo',
                        img: '/src/assets/images/main/catalog/electromobiles/electric-car-3.png'
                    },
                    {
                        name: 'bmw i3',
                        info: 'mercedes gla 2021 2.0L inline-4 turbo',
                        img: '/src/assets/images/main/catalog/electromobiles/electric-car-4.png'
                    },
                    {
                        name: 'nissan leaf',
                        info: 'mercedes gla 2021 2.0L inline-4 turbo',
                        img: '/src/assets/images/main/catalog/electromobiles/electric-car-5.png'
                    },
                    {
                        name: 'audi e-tron',
                        info: 'mercedes gla 2021 2.0L inline-4 turbo',
                        img: '/src/assets/images/main/catalog/electromobiles/electric-car-6.png'
                    },
                    {
                        name: 'tesla model y',
                        info: 'mercedes gla 2021 2.0L inline-4 turbo',
                        img: '/src/assets/images/main/catalog/electromobiles/electric-car-7.png'
                    },
                    {
                        name: 'tesla model 3',
                        info: 'mercedes gla 2021 2.0L inline-4 turbo',
                        img: '/src/assets/images/main/catalog/electromobiles/electric-car-8.png'
                    },
                ]               
            },
            {
                name: 'гибриды',
                active: false,
                data: [
                    {
                        name: 'mercedes gla 250',
                        info: 'mercedes gla 2021 2.0L inline-4 turbo',
                        img: '/src/assets/images/main/catalog/hybrids/hybrid-car-1.png'
                    },
                    {
                        name: 'mercedes gla 250',
                        info: 'mercedes gla 2021 2.0L inline-4 turbo',
                        img: '/src/assets/images/main/catalog/hybrids/hybrid-car-2.png'
                    },
                    {
                        name: 'mercedes gla 250',
                        info: 'mercedes gla 2021 2.0L inline-4 turbo',
                        img: '/src/assets/images/main/catalog/hybrids/hybrid-car-3.png'
                    },
                    {
                        name: 'mercedes gla 250',
                        info: 'mercedes gla 2021 2.0L inline-4 turbo',
                        img: '/src/assets/images/main/catalog/hybrids/hybrid-car-4.png'
                    },
                    {
                        name: 'mercedes gla 250',
                        info: 'mercedes gla 2021 2.0L inline-4 turbo',
                        img: '/src/assets/images/main/catalog/hybrids/hybrid-car-5.png'
                    },
                    {
                        name: 'mercedes gla 250',
                        info: 'mercedes gla 2021 2.0L inline-4 turbo',
                        img: '/src/assets/images/main/catalog/hybrids/hybrid-car-6.png'
                    },
                    {
                        name: 'mercedes gla 250',
                        info: 'mercedes gla 2021 2.0L inline-4 turbo',
                        img: '/src/assets/images/main/catalog/hybrids/hybrid-car-7.png'
                    },
                    {
                        name: 'mercedes gla 250',
                        info: 'mercedes gla 2021 2.0L inline-4 turbo',
                        img: '/src/assets/images/main/catalog/hybrids/hybrid-car-8.png'
                    },
                ]               
            }
        ],
        contactLinks: [
            {
                icon: '<i class="fab fa-telegram-plane"></i>',
                className: 'tg-link',
                url: 'https://t.me/redfox4ever'
            },
            {
                icon: '<i class="fab fa-instagram"></i>',
                className: 'insta-link',
                url: 'https://www.instagram.com/redfox_4ever/'
            }
        ]
    })
})