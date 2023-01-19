<template>

  <section class="catalog__section" id="catalog">
    <div class="container">
        <div class="row">

            <h2 class="catalog__title">{{ store.title }}</h2>

            <div class="catalog__car-types">
                <button class="car-type" v-for="(type, idx) in store.sliders" 
                :key="idx" :class="{'active': type.active}" @click="changeActive(idx)">
                    {{ type.name }}
                </button>
            </div>

            <TransitionGroup tag="div" name="sliders" class="catalog__sliders">
                <CatalogSlider v-for="(slider, idx) in store.sliders" :key="idx" 
                v-show="slider.active" :sliderData="slider.data"/>
            </TransitionGroup>

        </div>
    </div>
  </section>

</template>

<script>
import { useCatalogStore } from "@/stores/catalogStore.js";
import CatalogSlider from './CatalogSlider.vue';

export default {
    name: 'Catalog',
    components: {
        CatalogSlider
    },
    data() {
        return {
            store: useCatalogStore()
        }
    },
    methods: {
        changeActive(id) {
            this.store.sliders.map(item => {
                item.active = false
            })
            this.store.sliders[id].active = true
        }
    }
}

</script>

<style lang="scss" scoped>

.catalog__section {
    width: 100%;

    .row {
        flex-direction: column;
        align-items: center;
        row-gap: 25px;
    }

    .catalog__title {
        text-align: center;

        &::first-letter {
            text-transform: uppercase;
        }
    }

    .catalog__car-types {
        max-width: 700px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        column-gap: 15px;
        overflow-x: auto;

        &::after {
            content: '';
            width: 100%;
            height: 2px;
            background: #F2F2F2;
            position: absolute;
            bottom: 0;
            left: 0;
            z-index: -1;
        }

        .car-type {
            font-size: 15px;
            text-transform: uppercase;
            color: var(--gray-color);
            padding-bottom: 20px;
            font-weight: 700;
            transition: .4s;
            border-bottom: 2px solid #F2F2F2;
            
            &.active {
                color: var(--red-color);
                border-color: var(--red-color);
            }
        }
    }

    .catalog__sliders {
        width: 100%;
        max-height: 569px;
        overflow-y: hidden;
    }
}

</style>