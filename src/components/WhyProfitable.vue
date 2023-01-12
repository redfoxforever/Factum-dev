<template>
  <section class="why-profitable__section">
    <div class="container">
        <div class="row">

            <h2 class="why__title">{{ store.title }}</h2>

            <div class="why__cards">
                <div class="why__cards-item" v-for="(card, idx) in store.cards" :key="idx"
                :class="[`card-${++idx}`, card.className]">
                    <h4 class="card-title">{{ card.title }}</h4>
                    <p class="card-text">{{ card.text }}</p>
                </div>
            </div>

        </div>
    </div>
  </section>
</template>

<script>
import { useWhyStore } from "@/stores/whyProfitableStore.js";

export default {
    name: 'Why Profitable',
    data() {
        return {
            store: useWhyStore()
        }
    }
}

</script>

<style lang="scss" scoped>

.blue-bg {
    background: var(--blue-gradient);
}

.red-bg {
    background: var(--red-gradient);
}

.gray-bg {
    background: var(--gray-gradient);
}

.why-profitable__section {
    width: 100%;

    .row {
        flex-direction: column;
        align-items: center;
        row-gap: 75px;
    }

    .why__title {
        max-width: 640px;
        width: 100%;
        text-align: center;
    }

    .why__cards {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        grid-template-rows: repeat(5, 1fr);
        grid-column-gap: 40px;
        grid-row-gap: 40px;

        .card-1 { grid-area: 1 / 1 / 6 / 3; }
        .card-2 { grid-area: 1 / 3 / 6 / 5; }
        .card-3 { grid-area: 1 / 5 / 4 / 8; }
        .card-4 { grid-area: 4 / 5 / 6 / 8; }

        &-item {
            width: 100%;
            border-radius: 0px 10px;
            padding: 30px 20px 30px 40px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            row-gap: 25px;

            .card-title {
                font-size: 24px;
                font-weight: 700;
            }

            .card-text {
                font-size: 14px;
            }

            &.blue-bg,
            &.red-bg {

                .card-title {
                    color: var(--white-color);
                }

                .card-text {
                    color: var(--white-color);
                }
            }
        }
    }

    
}

</style>