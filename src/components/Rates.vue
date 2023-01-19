<template>
  <section class="rates__section" id="rates">
    <div class="container">
        <div class="row">

            <h2 class="rates__title">{{ store.title }}</h2>

            <div class="rates__content">
                <span class="rates__content-num">
                    {{ store.rateContent.num }}
                </span>

                <span class="rates__content-stars">
                    <span class="star-icon" v-for="star in store.rateContent.stars" :key="star">
                    <i class="fas fa-star"></i>
                    </span>
                </span>

                <span class="rates__content-evidence">{{ store.rateContent.evidence }}</span>
            </div>

            <div class="rates__slider">
                <swiper class="rates__swiper" :modules="modules" :slides-per-view="3" :space-between="40" :speed="900" :pagination="{clickable: true}" :autoplay="{ delay: 1500, disableOnInteraction: false}" :navigation="{ nextEl: '.rates__slider-btn.next', prevEl: '.rates__slider-btn.prev'}">
                    <swiper-slide class="rates__swiper-slide" v-for="(slide, idx) in store.sliderData" :key="idx">
                        <div class="author-avatar">
                            <img :src="`/src/assets/${slide.img}`" alt="" class="author-avatar-img">
                        </div>

                        <div class="rate-info">
                            <span class="rate-num">{{ slide.rate }} из 5</span>
                            <span class="rate-icons"><i class="fas fa-star" v-for="star in slide.stars" :key="star"></i></span>                        
                        </div>

                        <p class="author-name">{{ slide.author }}</p>
                        <p class="author-comment">{{ slide.comment }}</p>
                    </swiper-slide>
                </swiper>

                <div class="rates__slider-btn prev"><i class="fal fa-chevron-left"></i></div>
                <div class="rates__slider-btn next"><i class="fal fa-chevron-right"></i></div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
import { useRatesStore } from "@/stores/ratesStore.js";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation, Autoplay, A11y } from "swiper";

import "swiper/scss";
import 'swiper/scss/pagination';
import "swiper/scss/navigation";

export default {
    name: 'Rates',
    components: {
        Swiper,
        SwiperSlide
    },
    data() {
        return {
            store: useRatesStore(),
            modules: [Pagination, Navigation, Autoplay, A11y]
        }
    }
}

</script>

<style lang="scss" scoped>

.rates__section {
    width: 100%;

    .row {
        flex-direction: column;
        align-items: center;
        row-gap: 40px;
    }

    .rates__title {
        &::first-letter {
            text-transform: uppercase;
        }
    }

    .rates__content {
        max-width: max-content;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        row-gap: 10px;

        &-num {
            font-size: 40px;
            color: var(--text-color);
        }

        &-stars {
            display: flex;
            column-gap: 5px;
            align-items: center;

            .star-icon {
                font-size: 15px;

                i {
                    color: var(--red-color);
                }
            }
        }

        &-evidence {
            font-size: 12px;
            font-weight: 700;
            text-transform: uppercase;
            color: var(--text-color);
            letter-spacing: 0.14em;
        }
    }

    .rates__slider {
        width: 100%;
        position: relative;

        .rates__swiper {
            width: 100%;

            &-slide {
                padding: 0 50px;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                row-gap: 15px;

                .author-avatar {
                    max-width: 80px;
                    width: 100%;
                    height: max-content;
                    border-radius: 50%;
                    overflow: hidden;
                    margin: 0 auto;

                    .author-avatar-img {
                        width: 100%;
                        display: block;
                    }
                }

                .rate-info {
                    width: 100%;
                    display: flex;
                    column-gap: 10px;
                    align-items: center;
                    
                    .rate-num {
                        font-size: 14px;
                        font-weight: 700;
                    }

                    .rate-icons {
                        display: flex;
                        column-gap: 3px;
                        align-items: center;
                        font-size: 15px;

                        i {
                            color: var(--red-color);
                        }
                    }
                }

                .author-name {
                    font-weight: 700;
                    font-size: 17px;
                }

                .author-comment {
                    font-size: 15px;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 5;
                    overflow: hidden;
                }
            }
        }

        &-btn {
            max-width: max-content;
            width: 100%;
            font-size: 40px;
            cursor: pointer;
            transition: .4s;
            position: absolute;
            top: 30%;

            i {
                color: var(--red-color);
            }

            &.prev {
                left: -5%;
            }

            &.next {
                right: -5%;
            }

            &.swiper-button-disabled {
                opacity: .4;
            }
        }
    }    
}

</style>