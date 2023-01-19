<template>

    <footer class="footer" id="footer">
        <div class="container">
            <div class="row">

                <div class="footer__logo">
                    <img src="@/assets/images/logo.png" alt="" class="footer-logo-img">

                    <span class="privacy-text">
                        Factum.ua @ 2010-{{ new Date().getFullYear() }} <br> Все права защищены
                    </span>
                </div>

                <div class="footer__info nav-list">
                    <p class="info-title">{{ store.navLinks.title }}</p>

                    <ul class="footer__nav-list">
                        <li class="list-item" v-for="(link, idx) in navStore.navLinks" :key="idx">
                            <a :href="link.url" class="list-link">{{ link.text }}</a>
                        </li>
                    </ul>
                </div>

                <div class="footer__info offices-list">
                    <p class="info-title">{{ store.officesInfo.title }}</p>
                    
                    <ul class="officeses__list">
                        <li class="officeses__list-item" v-for="(item, idx) in store.officesInfo.offices" :key="idx">
                            <a :href="item.url" class="officeses__list-link" 
                            :class="item.class" v-html="item.text">
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="footer__info legal-info">
                    <p class="info-title legal-info-title">{{ store.legalInfo.title }}</p>
                    <p class="legal-info-text" v-html="store.legalInfo.text"></p>
                </div>

            </div>
        </div>
    </footer>

</template>

<script>
import { useFooterStore } from "@/stores/footerStore.js";
import { useNavStore } from "@/stores/navStore.js";

export default {
    name: 'Footer',
    data() {
        return {
            store: useFooterStore(),
            navStore: useNavStore()
        }
    }
}

</script>

<style lang="scss" scoped>

.footer {
    width: 100%;
    padding: 50px 0;

    .row {
        justify-content: space-between;
        gap: 25px;
    }

    &__logo {
        max-width: 200px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        row-gap: 10px;

        .footer-logo-img {
            max-width: 125px;
            width: 100%;
        }

        .privacy-text {
            font-size: 13px;
            font-weight: 700;
            color: var(--gray-color);
        }

    }

    &__info {
        max-width: 250px;
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 15px;

        .info-title {
            font-size: 18px;
            font-weight: 700;

            &::first-letter {
                text-transform: uppercase;
            }
        }

        .footer__nav-list {
            width: 100%;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 15px;

            .list-link {
                font-size: 14px;
                color: var(--text-color);
                transition: .4s;

                &:hover {
                    color: var(--blue-color);
                }

                &::first-letter {
                    text-transform: uppercase;
                }
            }
        }

        .legal-info-text {
            font-size: 14px;
            color: var(--text-color);
            line-height: 150%;
        }

        .officeses__list {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            row-gap: 10px;

            &-link {
                font-size: 13px;
                color: var(--text-color);
                transition: .5s;

                &:hover {
                    color: var(--red-color);
                }
            }
        }
    }
}

</style>