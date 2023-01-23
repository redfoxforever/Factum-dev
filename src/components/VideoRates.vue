<template>
  <section class="video-rates__section">
    <div class="container">
        <div class="row">

            <h2 class="video-rates__title">{{ store.title }}</h2>

            <div class="video__slider">
                <swiper class="video-rates__swiper" :modules="modules" :slides-per-view="3" :space-between="40" :speed="900" :pagination="{clickable: true}"
                :autoplay="{ delay: 1800, disableOnInteraction: false}" 
                :navigation="{ nextEl: '.video-slide-next', prevEl: '.video-slide-prev'}">
                    <swiper-slide class="video-rates__swiper-slide" v-for="(slide, idx) in store.sliderData" :key="idx">
                        <div class="video-box">
                            <img :src="`/src/assets/images/main/video-rates/video-slide-${idx + 1}.png`" alt="" class="video-box-img">

                            <span class="filter-bg"></span>

                            <a :href="slide.url" class="play-btn" target="_blank">
                                <span class="middle-round"></span>
                                <span class="sm-round"><i class="fas fa-play"></i></span>
                            </a>
                        </div>

                        <p class="video-name">{{ slide.name }}</p>
                        <p class="author-name">{{ slide.author }}</p>
                    </swiper-slide>
                </swiper>

                <div class="slider-btn video-slide-prev"><i class="fal fa-chevron-left"></i></div>
                <div class="slider-btn video-slide-next"><i class="fal fa-chevron-right"></i></div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
import { useVideoStore } from "@/stores/videoRatesStore.js";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation, Autoplay, A11y } from "swiper";

import "swiper/scss";
import 'swiper/scss/pagination';
import "swiper/scss/navigation";

export default {
    name: 'Video Rates',
    components: {
        Swiper,
        SwiperSlide
    },
    data() {
        return {
            store: useVideoStore(),
            modules: [Pagination, Navigation, Autoplay, A11y]
        }
    }
}

</script>

<style lang="scss" scoped>

@keyframes playAnim {
    0% {
        transform: translate(-50%, -50%) scale(1);
    }
    50% {
        transform: translate(-50%, -50%) scale(.7);
    }
    100% {
        transform: translate(-50%, -50%) scale(1);
    }
}

.video-rates__section {
    width: 100%;

    .row {
        flex-direction: column;
        align-items: center;
        row-gap: 50px;
    }

    .video-rates__title {
        text-align: center;

        &::first-letter {
            text-transform: uppercase;
        }
    }

    .video__slider {
        width: 100%;
        position: relative;

        .video-rates__swiper {
            width: 100%;
    
            &-slide {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                row-gap: 15px;
    
                .video-box {
                    width: 100%;
                    border-radius: 10px;
                    overflow: hidden;
                    max-height: max-content;
                    height: 100%;
                    position: relative;
                    display: grid;
                    place-items: center;
                    cursor: pointer;
    
                    &-img {
                        width: 100%;
                    }

                    .filter-bg {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: linear-gradient(180deg, rgba(0, 0, 0, 0.07) 19.69%, rgba(0, 0, 0, 0.8) 100%);
                    }
    
                    .play-btn {
                        width: 85px;
                        height: 85px;
                        display: block;
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        background: rgba(255, 255, 255, 0.35);
                        border-radius: 50%;
                        transition: .5s;
    
                        .middle-round {
                            width: 65px;
                            height: 65px;
                            display: block;
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                            background: rgba(255, 255, 255, 0.55);
                            border-radius: 50%;
                            transition: .5s;
                        }
    
                        .sm-round {
                            width: 35px;
                            height: 35px;
                            display: grid;
                            place-items: center;
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                            background: linear-gradient(336.46deg, #67B8FF -2.37%, #1E91F6 89.69%);
                            box-shadow: 0px 10px 22px -7px rgba(30, 145, 246, 0.86);
                            border-radius: 50%;
                            transition: .5s;
    
                            i {
                                color: var(--white-color);
                                font-size: 12px;
                            }
                        }
                    }
    
                    &:hover {
                    
                        .play-btn {
                            animation: playAnim 1.5s linear infinite;
                        }
                    }
                }

                .video-name {
                    font-size: 18px;
                    font-weight: 700;
                }

                .author-name {
                    font-size: 14px;
                    color: var(--text-color);
                    letter-spacing: 0.3em;
                    text-transform: uppercase;
                }
            }
        }

        .slider-btn {
            max-width: max-content;
            width: 100%;
            font-size: 40px;
            cursor: pointer;
            transition: .4s;
            position: absolute;
            top: 30%;
            z-index: 3;

            i {
                color: var(--blue-color);
            }

            &.video-slide-prev {
                left: 0;
            }

            &.video-slide-next {
                right: 0;
            }

            &.swiper-button-disabled {
                opacity: .4;
            }
        }
    }
}

</style>