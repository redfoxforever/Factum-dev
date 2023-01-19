<template>
  
  <section class="messengers__section">
    <div class="container">
        <div class="row">

            <img src="@/assets/images/main/messengers/iphone-img.png" alt="" class="messengers-img">

            <div class="messengers__contents">
                <div class="messengers__content" v-for="(content, idx) in store.contents" :key="idx">
                    <h3 class="messengers__content-title" v-html="content.title"></h3>

                    <a :href="link.url" class="messengers__content-link" target="_blank"
                    v-for="(link, idx) in content.links" :key="idx" 
                    v-html="`${link.icon} ${link.text}`" :class="link.name"></a>
                </div>
            </div>

        </div>
    </div>
  </section>

</template>

<script>
import { useMessengersStore } from "@/stores/messengersStore.js";

export default {
    name: 'Messengers',
    data() {
        return {
            store: useMessengersStore()
        }
    }
}

</script>

<style lang="scss" scoped>

.messengers__section {
    width: 100%;

    .row {
        justify-content: space-between;
        align-items: center;
        gap: 50px;
    }

    .messengers__contents {
        max-width: 770px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        row-gap: 100px;

        .messengers__content {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            row-gap: 50px;
            column-gap: 40px;

            &-title {
                font-size: 30px;
            }

            &-link {
                max-width: 280px;
                width: 100%;
                display: flex;
                justify-content: center;
                column-gap: 10px;
                align-items: center;
                padding: 15px 30px;
                color: var(--white-color);
                border-radius: 5px;
                text-transform: uppercase;
                font-size: 18px;
                transition: .4s;
                letter-spacing: 0.1em;

                &.tg-link {
                    background: linear-gradient(332.27deg, #67B8FF 10.25%, #1E91F6 100%);
                    box-shadow: 0px 10px 26px -9px #1E91F6;
                }

                &.fcbook-link {
                    background: linear-gradient(333.69deg, #E15E79 10.56%, #A24BCB 58.65%, #0E86F0 100%);
                    box-shadow: 0px 12px 28px -10px #A84AC7;
                }

                &.insta-link {
                    background: linear-gradient(333.69deg, #525ACB -2.58%, #C837AB 32.41%, #FF8947 71.59%, #FFDA54 100%);
                    box-shadow: 0px 10px 29px -7px #F57A5A;
                }

                &:hover {
                    box-shadow: 0 0;
                    transform: scale(.9);
                }
            }
        }
    }

    .messengers-img {
        max-width: 480px;
        width: 100%;
        user-select: none;
        pointer-events: none;
    }
}

</style>