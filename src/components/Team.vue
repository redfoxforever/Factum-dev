<template>
  <section class="team__section">
    <div class="container">
        <div class="row">

            <h2 class="team__title">{{ store.title }}</h2>

            <div class="team__cards">
                <div class="team__cards-item" v-for="(card, idx) in store.cards" :key="idx">

                    <div class="member__img-box">
                        <img src="" alt="" class="member-img">
                    </div>

                    <div class="member__desc">
                        <p class="member__desc-name">{{ card.name }}</p>
                        <p class="member__desc-job">{{ card.job }}</p>
                    </div>
                </div>
            </div>

            <router-link to="/" class="about-link">
                Больше о компании
            </router-link>

        </div>
    </div>
  </section>
</template>

<script>
import { useTeamStore } from "@/stores/teamStore.js";

export default {
    name: 'Team',
    data() {
        return {
            store: useTeamStore()
        }
    },
    mounted() {
        document.querySelectorAll('.member-img').forEach((item, id) => {
            item.src = `/src/assets/images/main/team/worker-${++id}.png` 
        })
    }
}

</script>

<style lang="scss" scoped>

.team__section {
    width: 100%;
    margin-bottom: 100px;

    .row {
        flex-direction: column;
        align-items: center;
        row-gap: 50px;
    }

    .team__title {
        text-align: center;

        &::first-letter {
            text-transform: uppercase;
        }
    }

    .team__cards {
        width: 100%;
        display: flex;
        justify-content: space-between;
        gap: 20px;
        overflow-x: auto;
        padding-bottom: 20px;

        &-item {
            max-width: 325px;
            width: 100%;
            min-width: 235px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            row-gap: 20px;
            user-select: none;

            .member__img-box {
                width: 100%;
                max-height: 350px;
                height: 100%;
                min-height: 350px;
                border-radius: 10px;
                overflow: hidden;
                position: relative;

                .member-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center;
                }

                &::after {
                    content: '';
                    width: 100%;
                    height: 100%;
                    display: block;
                    background: linear-gradient(33.74deg, rgba(30, 145, 246, 0.86) 3.84%, rgba(255, 255, 255, 0) 59.57%);
                    position: absolute;
                    top: 0;
                    left: 0;
                }
            }
        }

        .member__desc {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            row-gap: 5px;

            &-name {
                font-size: 24px;
                font-weight: 700;
                text-transform: capitalize;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
            }

            &-job {
                color: var(--gray-color);
                font-size: 15px;
            }
        }
    }

    .about-link {
        max-width: 300px;
        width: 100%;
        display: grid;
        place-items: center;
        padding: 10px 12px;
        background: #F0F0F0;
        border-radius: 5px;
        text-transform: uppercase;
        color: #636363;
        font-weight: 700;
        font-size: 15px;
        transition: .4s;

        &:hover {
            background: var(--blue-color);
            color: var(--white-color);
            box-shadow: 0px 18px 28px -9px var(--blue-color);
        }
    }
}

</style>