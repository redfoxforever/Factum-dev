<template>
  <swiper :modules="modules" :slides-per-view="4" :space-between="50"
   :pagination="{ clickable: true }" class="catalog__swiper" :speed="900" :grabCursor="true" 
   :autoplay="{ delay: 1800, disableOnInteraction: false}">
    <swiper-slide v-for="(slide, idx) in sliderData" :key="idx" class="catalog__swiper-slide">
        <img :src="slide.img" alt="" class="car-img">
        <p class="car-name">{{ slide.name }}</p>
        <p class="car-info">{{ slide.info }}</p>

        <p class="money-save-info">
            <i class="fas fa-check-circle"></i> Вы экономите ${{ slide.saveNum }}
        </p>

        <a href="https://www.instagram.com/redfox_4ever/" target="_blank" class="send-btn">
            Отправить запрос
        </a>

        <div class="contact__content">
            <p class="contact__content-name">Получить Варианты в мессенджер</p>

            <div class="contact__content-links">
                <a :href="link.url" class="contact-link" target="_blank"
                v-for="(link, idx) in store.contactLinks" 
                :key="idx" :class="link.className" v-html="link.icon"></a>
            </div>
        </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Autoplay, A11y } from "swiper";
import { useCatalogStore } from "@/stores/catalogStore.js";

import 'swiper/scss';
import 'swiper/scss/pagination';

export default {
    name: 'Catalog Slider',
    components: {
        Swiper,
        SwiperSlide
    },
    data() {
        return {
            modules: [Pagination, Autoplay, A11y],
            store: useCatalogStore()
        }
    },
    props: {
        sliderData: {
            type: Array,
            default: [],
            required: true
        }
    }
}

</script>

<style lang="scss" scoped>

.catalog__swiper {
    width: 100%;
    height: 100%;

    &-slide {
        background: red;
        background: #F0F0F0;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 40px 25px 30px;
        row-gap: 10px;
        text-align: center;

        .car-img {
            width: 100%;
            max-height: 200px;
            min-height: 200px;
            height: 100%;
            object-fit: cover;
            object-position: center;
        }

        .car-name {
            font-size: 18px;
            text-transform: capitalize;
            font-weight: 700;
        }

        .money-save-info {
            font-size: 14px;
            color: var(--green-color);

            i {
                color: var(--green-color);
            }

            &::first-letter {
                text-transform: uppercase;
            }
        }

        .car-info {
            font-size: 12px;
            font-weight: 700;
            color: #828282;
            text-transform: capitalize;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            overflow: hidden;
            -webkit-line-clamp: 1;
        }

        .send-btn {
            width: 100%;
            font-weight: 700;
            font-size: 13px;
            padding: 15px;
            background: linear-gradient(336.46deg, rgba(229, 13, 35, 0.63) -2.37%, #E50D23 89.69%);
            box-shadow: 0px 18px 28px -9px rgba(229, 13, 35, 0.61);
            border-radius: 5px;
            color: var(--white-color);
            text-transform: uppercase;
            letter-spacing: 0.21em;
            transition: .4s;
            margin: 20px 0 10px;

            &:hover {
                box-shadow: 0px 10px 28px -9px rgba(229, 13, 35, 0.61);
            }
        }

        .contact__content {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            row-gap: 10px;

            &-name {
                font-size: 12px;
                text-transform: uppercase;
                font-weight: 700;
            }

            &-links {
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 20px;

                .contact-link {
                    font-size: 25px;
                    width: 45px;
                    height: 45px;
                    display: grid;
                    place-items: center;
                    border-radius: 10px;
                }
            }
        }
        
    }

}

.sliders-enter-active,
.sliders-leave-active {
  transition: all .4s ease;
}
.sliders-enter-from,
.sliders-leave-to {
  opacity: 0;
}

.sliders-enter-to,
.sliders-leave-from {
    transition-delay: .5s;
}

</style>