<template>
  <section class="tariffs__section" id="prices">
    <div class="container">
        <div class="row">

            <h2 class="tariffs__title">{{ store.title }}</h2>

            <div class="tariffs__cards">
                <div class="tariffs__card" v-for="(card, idx) in store.cards" :key="idx"
                :class="card.bgName">
                    <span class="tariffs__card-name">{{ card.name }}</span>

                    <h3 class="tariffs__card-title">{{ card.title }}</h3>

                    <p class="tariffs__card-text">{{ card.text }}</p>

                    <ul class="card__list">
                        <li class="card__list-item" v-for="(limit, idd) in card.limits" :key="idd" :class="{'active': limit.active}">
                            <i class="fas fa-check-circle"></i> {{ limit.name }}
                        </li>
                    </ul>

                    <span class="tariffs__card-price">{{ card.price }} $</span>

                    <button class="choose-btn">подобрать авто</button>
                </div>
            </div>

        </div>
    </div>
  </section>
</template>

<script>
import { useTariffsStore } from "@/stores/tariffsStore.js";

export default {
    name: 'Tariffs',
    data() {
        return {
            store: useTariffsStore()
        }
    }
}

</script>

<style lang="scss" scoped>

.tariffs__section {
    width: 100%;

    .row {
        flex-direction: column;
        align-items: center;
        row-gap: 55px;
    }

    .tariffs__title {
        text-align: center;
    }

    .tariffs__cards {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        column-gap: 40px;
        row-gap: 20px;

        .tariffs__card {
            max-width: 390px;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            row-gap: 15px;
            padding: 50px 60px;
            border-radius: 10px;
            position: relative;

            &-name {
                font-size: 14px;
                color: var(--text-color);
                text-transform: uppercase;
                letter-spacing: 0.345em;
            }

            &-title {
                font-size: 24px;
                margin-bottom: 5px;

                &::first-letter {
                    text-transform: uppercase;
                }
            }

            &-text {
                font-size: 15px;
                margin-bottom: 10px;
                font-weight: 700;

                &::first-letter {
                    text-transform: uppercase;
                }
            }

            .card__list {
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                row-gap: 15px;

                &-item {
                    font-size: 15px;
                    display: flex;
                    column-gap: 10px;
                    align-items: center;
                    font-weight: 700;
                    opacity: .3;
                    transition: .4s;
                    text-overflow: ellipsis;

                    &.active {
                        opacity: 1;
                    }

                    i {
                        color: var(--blue-color);
                    }
                }
            }

            &-price {
                font-size: 24px;
                font-weight: 700;
            }

            .choose-btn {
                max-width: 260px;
                width: 100%;
                padding: 15px 10px;
                text-transform: uppercase;
                font-weight: 700;
                border-radius: 5px;
                color: var(--white-color);
                background: linear-gradient(337.41deg, #F4495A 14.69%, #E50D23 89.91%);
                transition: .4s;

                &:hover {
                    color: var(--white-color);
                    box-shadow: 0px 18px 28px -5px rgba(229, 13, 35, 0.61);
                }
            }

            &.white-bg {
                background: #F4F4F4;

                .choose-btn {
                    color: var(--dark-color);
                    background: #E2E2E2;

                    &:hover {
                        background: var(--blue-color);
                        color: var(--white-color);
                        box-shadow: 0 0;
                    }
                }
            }

            &.blue-bg {
                background: linear-gradient(338.85deg, #0871FC 4.07%, #54AFFF 90.25%);
                
                & > * {
                    color: var(--white-color);
                }

                .card__list-item {
                    color: var(--white-color);

                    i {
                        color: var(--white-color);
                    }
                }

                &::before {
                    content: 'мы рекомендуем';
                    color: var(--white-color);
                    text-transform: uppercase;
                    font-size: 14px;
                    width: 100%;
                    display: grid;
                    place-items: center;
                    padding: 5px;
                    background: rgba(255, 255, 255, 0.34);
                    border-radius: 10px 10px 0px 0px;
                    position: absolute;
                    top: -10%;
                    left: 0;
                }
            }

            &.gold-bg {
                background: linear-gradient(17.9deg, #99814C 4.79%, #E2C166 25.81%, #B79A5B 60.97%, #E2C166 75.35%, #99814C 95.96%);

                & > * {
                    color: var(--white-color);
                }

                .card__list-item {
                    color: var(--white-color);

                    i {
                        color: var(--white-color);
                    }
                }
            }
        }
    }
}

</style>