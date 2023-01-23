<template>
  <section class="stages__section">
    <div class="container">
        <div class="row">
            <h2 class="stages__title">{{ store.title }}</h2>
            <p class="stages__subtitle">{{ store.subtitle }}</p>

            <div class="stages__content">

                <img src="/src/assets/images/main/stages/car-img.png" alt="" class="stages__car-img">

                <div class="road__lines-list">
                    <span class="road-line" v-for="line in 14" :key="line"></span>
                </div>

                <div class="stages__content-cards">
                    <div class="stages__content-card" v-for="(card, idx) in store.contentCards" :key="idx" :class="{'active': card.active}" @click="contentActive(idx, $event)">
                        <div class="content-desc">
                            <span class="content-desc-num">0{{ card.num }}</span>
                            <p class="content-desc-title">{{ card.title }}</p>
                        </div>

                        <div class="content-dots">
                            <span class="middle-dot"></span>
                            <span class="sm-dot"></span>
                        </div>
                    </div>
                </div>

            </div>

            <div class="stages__cards-list">
                <div class="stages__card" v-for="(card, idx) in store.stagesCards" :key="idx">
                    <div class="stages__card-icon-box">
                        <img :src="card.icon" alt="" class="stages__card-icon">
                    </div>

                    <div class="stages__card-desc">
                        <p class="stages__card-title">{{ card.title }}</p>
                        <p class="stages__card-text">{{ card.text }}</p>
                    </div>
                </div>
            </div>

            <a href="https://www.instagram.com/redfox_4ever/" 
            target="_blank" class="pick-link red-btn">
                Подобрать авто
            </a>
        </div>
    </div>
  </section>
</template>

<script>
import { useStagesStore } from "@/stores/stagesStore.js";

export default {
    name: 'Stages',
    data() {
        return {
            store: useStagesStore()
        }
    },
    methods: {
        contentActive(id, e) {
            this.store.contentCards.map(card => {
                card.active = false
            })
            this.store.contentCards[id].active = true

            setTimeout(() => {
                document.querySelector('.stages__car-img').style.transform = `translateX(${e.target.offsetLeft}px)`
            }, 500);
        }
    }
}

</script>

<style lang="scss" scoped>

.stages__section {
    width: 100%;
    padding: 100px 0;
    position: relative;
    background: rgba($color: #EBEBEB, $alpha: .7);

    .row {
        flex-direction: column;
        align-items: center;
        row-gap: 20px;
    }

    .stages__title {
        font-size: 40px;
        text-align: center;

        &::first-letter {
            text-transform: uppercase;
        }
    }

    .stages__subtitle {
        font-size: 16px;
        color: var(--text-color);
        text-align: center;

        &::first-letter {
            text-transform: uppercase;
        }
    }

    .pick-link {
        max-width: 280px;
        width: 100%;
        padding: 15px;
        font-size: 15px;
        text-transform: uppercase;
    }

    .stages__content {
        width: 100%;
        margin-bottom: 40px;
        min-height: 260px;
        overflow: hidden;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        .stages__car-img {
            max-width: 135px;
            width: 100%;
            display: block;
            transition: 1s;
            user-select: none;
            pointer-events: none;
            position: absolute;
            top: 63%;
            left: 0;
            z-index: 10;
            transform: translateX(10%);
        }

        .road__lines-list {
            width: 100%;
            display: flex;
            column-gap: 60px;
            align-items: center;
            transition: .5s;
            position: absolute;
            top: 75%;
            left: 0;
            translate: -1%;

            span {
                min-width: 50px;
                max-width: 50px;
                width: 100%;
                background: var(--white-color);
                height: 10px;
                border-radius: 34px;
            }
        }

        &-cards {
            width: 100%;
            display: flex;
            justify-content: space-evenly;
            padding-top: 50px;
        }

        &-card {
            max-width: 315px;
            width: 100%;
            min-height: 185px;
            max-height: 185px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            row-gap: 30px;
            transition: .4s;
            position: relative;

            .content-desc {
                width: 100%;
                display: flex;
                column-gap: 12px;
                align-items: center;
                pointer-events: none;

                &-num {
                    font-size: 56px;
                    color: var(--white-color);
                    font-weight: 700;
                    transition: .7s;
                }

                &-title {
                    max-width: 225px;
                    width: 100%;
                    color: var(--gray-color);
                    font-size: 16px;
                    transition: .7s;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
            }

            .content-dots {
                max-width: 75px;
                min-width: 75px;
                width: 100%;
                min-height: 75px;
                max-height: 75px;
                height: 100%;
                background: rgba(255, 255, 255, 0.29);
                border-radius: 50%;
                position: relative;
                z-index: 6;
                position: absolute;
                bottom: 0;
                left: 0;
                pointer-events: none;

                .middle-dot {
                    max-width: 50px;
                    min-width: 50px;
                    width: 100%;
                    height: 50px;
                    display: block;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.56);
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }

                .sm-dot {
                    max-width: 30px;
                    min-width: 30px;
                    width: 100%;
                    height: 30px;
                    display: block;
                    border-radius: 50%;
                    background: linear-gradient(336.46deg, #67B8FF -2.37%, #1E91F6 89.69%);
                    box-shadow: 0px 10px 22px -7px rgba(30, 145, 246, 0.86);
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }
            }

            &.active {
                max-width: 350px;

                .content-desc {
                    &-num {
                        font-size: 134px;
                        color: var(--white-color);
                        font-weight: 700;
                        position: absolute;
                        top: -25%;
                        left: -5%;
                    }

                    &-title {
                        color: var(--dark-color);
                        font-size: 22px;
                        font-weight: 700;
                        margin-left: auto;
                        z-index: 3;
                    }
                }
            }
        }
    }

    .stages__cards-list {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 15px;

        .stages__card {
            max-width: 400px;
            width: 100%;
            display: flex;
            column-gap: 20px;
            justify-content: space-between;

            &-icon-box {
                min-width: 55px;
                max-width: 55px;
                width: 100%;
                height: 55px;
                display: grid;
                place-items: center;
                background: #E0E0E0;
                border-radius: 50%;
                user-select: none;

                img {
                    max-width: 30px;
                    width: 100%;
                }
            }
            
            &-desc {
                display: flex;
                flex-direction: column;
                row-gap: 20px;
                align-items: flex-start;
            }

            &-title {
                font-size: 15px;
                color: var(--text-color);
                letter-spacing: 0.21em;
                text-transform: uppercase;
                display: -webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
                overflow: hidden;
            }

            &-text {
                font-size: 15px;
                display: -webkit-box;
                -webkit-line-clamp: 6;
                -webkit-box-orient: vertical;
                overflow: hidden;
            }
        }
    }
}

</style>