<template>

  <section class="about__section" id="about us">
    <div class="container">
        <div class="row">
            
            <div class="about__desc">
                <h2 class="about__desc-title">{{ store.desc.title }}</h2>
                <p class="about__desc-subtitle">{{ store.desc.subtitle }}</p>

                <p class="about__desc-text">{{ store.desc.text }}</p>
            </div>

            <h3 class="about__group-title">В нашу группу компаний входят</h3>

            <div class="about__group-cards">
                <div class="about-card" v-for="(card, idx) in store.cards" :key="idx">
                    <img :src="card.img" alt="" class="about-card-img">
                    <p class="about-card-text">{{ card.text }}</p>
                </div>
            </div>

            

        </div>
    </div>
  </section>

</template>

<script>
import { useAboutStore } from "@/stores/aboutStore.js";

export default {
    name: 'About Us',
    data() {
        return {
            store: useAboutStore()
        }
    }
}

</script>

<style lang="scss" scoped>

.about__section {
    width: 100%;

    .row {
        flex-direction: column;
        align-items: center;
        row-gap: 40px;
    }

    .about__desc {
        max-width: 600px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        row-gap: 25px;

        &-title {
            &::first-letter {
                text-transform: uppercase;
            }
        }

        &-subtitle {
            font-size: 18px;
            color: var(--red-color);
            text-transform: uppercase;
        }

        &-text {
            font-size: 15px;
            color: var(--text-color);
        }
    }

    .about__group-cards {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 35px;
        grid-row-gap: 70px;
        padding-top: 30px;

        .about-card {
            width: 100%;
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 30px 40px;
            background: linear-gradient(338.85deg, #0871FC 4.07%, #54AFFF 90.25%);
            border-radius: 0px 10px;

            &-img {
                max-width: 40px;
                width: 100%;
                position: absolute;
                top: -20%;
                left: 8%;
            }

            &-text {
                font-size: 18px;
                color: var(--white-color);
                font-weight: 700;
                display: -webkit-box;
                -webkit-line-clamp: 4;
                -webkit-box-orient: vertical;
                overflow: hidden;
            }
        }
    }
}


</style>