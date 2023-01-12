<template>
  <nav class="nav">
    <div class="container">
        <div class="row">

            <router-link to="/" class="logo">
                <img src="" alt="" class="logo-img">
            </router-link>

            <span class="line-span"></span>

            <div class="nav__collapse">
                <ul class="nav__list">
                    <li class="nav__list-item" v-for="(link, idx) in store.navLinks" :key="idx">
                        <a :href="link.url" class="nav__list-link">
                            {{ link.text }}
                        </a>
                    </li>
                </ul>

                <span class="line-span"></span>

                <div class="work__info">
                    <p class="work__info-place">{{ store.workInfo.place }}</p>
                    <p class="work__info-text">{{ store.workInfo.text }}</p>
                    <p class="work__info-time">{{ store.workInfo.time }}</p>
                </div>
            </div>

            <span class="line-span"></span>

            <div class="contact__info">
                <a :href="`tel: ${store.contactInfo.tel.url}`" class="contact__info-num">{{ store.contactInfo.tel.text }}</a>

                <p class="contact__info-text">{{ store.contactInfo.text }}</p>
            </div>

        </div>
    </div>
  </nav>
</template>

<script>
import logo from "@/assets/images/logo.png";
import { useNavStore } from "@/stores/navStore.js";

export default {
    name: 'Nav',
    data() {
        return {
            store: useNavStore()
        }
    },
    mounted() {
        document.querySelector('.logo-img').src = logo;
    }
}

</script>

<style lang="scss" scoped>

.nav {
    width: 100%;
    padding: 20px 0;
    background: #FFFFFF;
    box-shadow: 0px 8px 34px rgba(0, 0, 0, 0.03);
    position: sticky;
    top: 0;
    left: 0;
    z-index: 2022;

    .row {
        justify-content: space-between;
        gap: 20px;
        align-items: center;
    }

    .logo {
        max-width: 125px;
        width: 100%;
        display: grid;
        place-items: center;

        img {
            width: 100%;
        }
    }

    .nav__collapse {
        max-width: max-content;
        width: 100%;
        display: flex;
        column-gap: 30px;
        align-items: center;

        .nav__list {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 20px;

            &-link {
                font-size: 15px;
                font-weight: 500;
                transition: .4s;
                user-select: none;

                &:hover {
                    color: var(--blue-color);
                }
            }
        }

        .work__info {
            max-width: max-content;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            user-select: none;

            &-place {
                font-size: 15px;
                font-weight: 700;
                color: var(--blue-color);
                text-transform: capitalize;
            }

            &-text {
                font-size: 12px;
                font-weight: 700;
                text-transform: uppercase;
                color: var(--gray-color);
            }

            &-time {
                font-size: 14px;
                font-weight: 700;
            }
        }
    }

    .contact__info {
        max-width: max-content;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        user-select: none;

        &-num {
            font-size: 18px;
            font-weight: 700;
        }

        &-text {
            color: var(--red-color);
            text-transform: uppercase;
            font-weight: 700;
            font-size: 13px;
            border-bottom: 2px dashed var(--red-color);
        }
    }
}

</style>