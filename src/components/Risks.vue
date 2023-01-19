<template>

<section class="risks__section" id="risks">
    <div class="container">
        <div class="row">
            <h2 class="risks__title">{{ store.title }}</h2>

            <div class="risks__cards">
                <div class="risks__card" v-for="(card, idx) in store.cards" :key="idx">
                    <div class="risks__card-content red-content">
                        <p class="content-title">{{ card.redContent.title }}</p>
                    </div>

                    <img src="@/assets/images/main/risks/arrow.svg" alt="" class="risks__card-img">

                    <div class="risks__card-content blue-content">
                        <h4 class="content-title">{{ card.blueContent.title }}</h4>

                        <p class="content-text">{{ card.blueContent.text }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

</template>

<script>
import { useRisksStore } from "@/stores/risksStore.js";

export default {
    name: 'Risks',
    data() {
        return {
            store: useRisksStore()
        }
    }
}

</script>

<style lang="scss" scoped>

.risks__section {
    width: 100%;

    .row {
        flex-direction: column;
        align-items: center;
        row-gap: 60px;
    }

    .risks__title {
        text-align: center;
    }

    .risks__cards {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        row-gap: 50px;

        .risks__card {
            width: 100%;
            display: flex;
            justify-content: space-between;
            gap: 30px;
            align-items: flex-start;

            &-content {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                row-gap: 20px;
                border-radius: 0px 10px;
                padding: 40px 50px;

                .content-text {
                    color: var(--white-color);
                    font-size: 15px;
                }
                
                .content-title {
                    color: var(--white-color);
                    font-size: 22px;
                    font-weight: 700;
                }

                &.red-content {
                    max-width: 500px;
                    width: 100%;
                    background: var(--red-gradient);
                    height: max-content;
                    padding-left: 30px;

                    .content-title {
                        position: relative;
                        display: flex;
                        column-gap: 15px;

                        &::before {
                            content: url('@/assets/images/main/risks/thinking-icon.png');
                            max-width: 40px;
                            width: 100%;
                            height: max-content;
                            object-fit: cover;
                        }
                    }
                }

                &.blue-content {
                    max-width: 750px;
                    width: 100%;
                    background: var(--blue-gradient);

                    .content-title {
                        position: relative;
                        display: flex;
                        column-gap: 20px;
                        align-items: center;

                        &::before {
                            content: url('@/assets/images/main/risks/tick-icon.png');
                            max-width: 35px;
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                        }
                    }
                }
            }

            &-img {
                max-width: 90px;
                width: 100%;
            }
        }
    }
}

</style>