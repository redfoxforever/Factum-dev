<template>
  <header class="header">
    <div class="container">
        <div class="row">

            <div class="header__desc">
                <h1 class="header__desc-title" v-html="store.desc.title"></h1>

                <div class="header__contents">
                    <div class="header__contents-card" 
                    v-for="(content, idx) in store.desc.infoContents" :key="idx">
                        <img src="" alt="" :class="`card-img img-${++idx}`">
                        <p class="card-text">{{ content.text }}</p>
                    </div>
                </div>

                <div class="header__buttons">
                    <button class="header-btn" v-for="(btn, idd) in store.desc.buttons" 
                    :key="idd" :class="btn.className">
                        {{ btn.text }} 
                    </button>
                </div>
            </div>

            <div class="header__img-box">
                <img src="" alt="" class="box-bg">
                <img src="" alt="" class="header-car-img">
            </div>

        </div>
    </div>
  </header>
</template>

<script>
import { useHeaderStore } from "@/stores/headerStore.js";
import info1Img from "@/assets/images/header/info1.png";
import info2Img from "@/assets/images/header/info2.png";
import bgImg from "@/assets/images/header/box-bg.svg";
import carImg from "@/assets/images/header/tesla.png";

export default {
    name: 'Header',
    data() {
        return {
            store: useHeaderStore()
        }
    },
    mounted() {
        document.querySelector('.card-img.img-1').src = info1Img;
        document.querySelector('.card-img.img-2').src = info2Img;
        document.querySelector('.box-bg').src = bgImg;
        document.querySelector('.header-car-img').src = carImg;
    }
}

</script>

<style lang="scss" scoped>

.header {
    width: 100%;
    padding: 60px 0 30px;

    .row {
        justify-content: space-between;
        align-items: center;
        flex-wrap: unset;
    }

    &__desc {
        max-width: 650px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        row-gap: 40px;
    }

    &__contents {
        width: 100%;
        display: flex;
        justify-content: space-between;
        gap: 35px;

        &-card {
            max-width: max-content;
            width: 100%;
            display: flex;
            gap: 15px;
            align-items: center;

            .card-text {
                max-width: 200px;
                width: 100%;
                color: #818181;
                font-size: 14px;
            }

            .card-img {
                max-width: 65px;
                width: 100%;
                display: block;
                object-fit: cover;
                object-position: center;
            }
        }
    }

    &__buttons {
        width: 100%;
        display: flex;
        gap: 40px;
        align-items: center;
    }

    &-btn {
        max-width: 300px;
        width: 100%;
        text-transform: uppercase;
        font-size: 14px;
        padding: 15px 15px;
        font-weight: 700;
    }

    &__img-box {
        max-width: 795px;
        width: 100%;
        position: relative;
        display: grid;
        place-items: center;

        .box-bg {
            max-width: 430px;
            width: 100%;
            z-index: -1;
        }

        .header-car-img {
            width: 100%;
            position: absolute;
            top: 50%;
            left: 50%;
            z-index: -1;
            translate: -50% -50%;
        }
    }
}

</style>