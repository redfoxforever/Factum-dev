<template>

    <section class="contact__section" id="contact">

        <div class="contact__header">
            <div class="container">
                <div class="row">

                    <div class="contact__content">
                        <h2 class="contact__content-title" 
                        v-html="store.header.content.title"></h2>
                        <p class="contact__content-text">{{ store.header.content.text }}</p>
                    </div>

                    <div class="contact__header-modal">
                        <h4 class="modal-title">{{ headerModal.title }}</h4>
                        <p class="modal-text">{{ headerModal.text }}</p>

                        <form action="" class="contact__form" @submit.prevent>
                            <div class="contact__form-inputs">
                                <input :type="inp.type" class="contact-form-input"
                                v-for="(inp, idx) in headerModal.inputs" :key="idx" v-model="inp.value" :class="`contact-${inp.name}-inp`" required :placeholder="inp.placeholder">
                            </div>

                            <button class="contact-btn red-btn">отправить</button>
                        </form>
                    </div>

                    <img src="@/assets/images/main/contact/contact-header-bg.svg" alt="" class="contact__header-bg">

                    <span class="bg-gradient"></span>
    
                </div>
            </div>
        </div>

        <div class="contact__footer">
            <div class="container">
                <div class="row">

                    <div class="contact__info-modal">
                        <h4 class="modal-title">{{ footerModal.title }}</h4>

                        <a class="contact-num" :href="footerModal.numberInfo.url">
                            <i class="fas fa-phone-alt"></i>
                            {{ footerModal.numberInfo.number }}
                        </a>

                        <a :href="footerModal.emailInfo.url" class="contact-email">
                            <i class="fas fa-envelope"></i>
                            {{ footerModal.emailInfo.email }}
                        </a>

                        <a href="https://goo.gl/maps/QhoB4VS9N3pjmFqDA" class="contact-address" v-for="(address, idx) in footerModal.addresses" :key="idx" target="_blank">
                            <i class="fad fa-map-pin"></i>
                            {{ address.name }}
                        </a>
                    </div>
                    
                </div>
            </div>

            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2998.710632171183!2d69.23953554558429!3d41.271635993311605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1674070579274!5m2!1sru!2s" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

    </section>

</template>

<script>
import { useContactStore } from "@/stores/contactStore.js";

export default {
    name: 'Contact',
    data() {
        return {
            store: useContactStore()
        }
    },
    computed: {
        headerModal() {
            return this.store.header.modal
        },
        footerModal() {
            return this.store.footer.modal
        }
    }
}

</script>

<style lang="scss" scoped>

.contact__section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .contact__header {
        width: 100%;
        z-index: 3;
        position: relative;

        .row {
            justify-content: space-between;
            align-items: center;
        }

        .contact__content {
            max-width: 400px;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            row-gap: 15px;

            &-title {
                &::first-letter {
                    text-transform: uppercase;
                }
            }

            &-text {
                font-size: 15px;
                color: var(--text-color);

                &::first-letter {
                    text-transform: uppercase;
                }   
            }
        }

        &-modal {
            max-width: 400px;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 45px 35px 60px;
            background: #fff;
            row-gap: 20px;
            box-shadow: 0px 24px 33px rgba(0, 0, 0, 0.08);
            border-radius: 15px;

            .modal-title {
                font-size: 24px;
                font-weight: 700;
            }

            .modal-text {
                max-width: 315px;
                width: 100%;
                font-size: 15px;
                color: var(--text-color);
            }

            .contact__form {
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                row-gap: 30px;
                margin-top: 20px;

                &-inputs {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    border: 1px solid #cacaca;
                    border-radius: 5px;
                    overflow: hidden;

                    input {
                        width: 100%;
                        border: 0;
                        background: #fff;
                        color: var(--blue-color);
                        font-weight: 700;
                        font-size: 18px;
                        border-bottom: 1px solid #cacaca;
                        padding: 15px 20px;

                        &::placeholder {
                            font-size: 15px;
                            font-weight: 500;
                            color: #cacaca;
                        }
                    }

                    :last-child {
                        border-bottom: none;
                    }

                }

                .contact-btn {
                    width: 100%;
                    font-size: 14px;
                    font-weight: 700;
                    letter-spacing: 0.21em;
                    padding: 15px 0;
                    text-transform: uppercase;
                }

            }
        }

        &-bg {
            max-width: 2300px;
            width: 100%;
            position: absolute;
            top: 2%;
            left: 50%;
            translate: -50% 0;
            z-index: -1;
            transform: scale(1.2);
        }

        .bg-gradient {
            position: absolute;
            bottom: 3%;
            left: 0;
            width: 100%;
            height: 100px;
            z-index: -2;
            background: #fff;
            box-shadow: 15px 80px 70px 50px rgba($color: #fff, $alpha: 1.0);
        }
    }

    .contact__footer {
        width: 100%;
        position: relative;
        padding: 200px 0 150px;
        
        iframe {
            max-width: 2200px;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 50%;
            translate: -50% 0;
        }

        .contact__info-modal {
            max-width: 430px;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            background: #fff;
            box-shadow: 0px 20px 30px -4px rgba(0, 0, 0, 0.15);
            border-radius: 0px 30px;
            row-gap: 25px;
            padding: 50px;
            z-index: 3;

            .modal-title {
                font-size: 30px;
                width: 100%;
                text-align: center;

                &::first-letter {
                    text-transform: uppercase;
                }
            }

            .contact-num {
                font-size: 20px;
                display: flex;
                column-gap: 10px;
                align-items: center;
                transition: .4s;

                i {
                    transition: .4s;
                }

                &:hover {
                    color: var(--blue-color);

                    i {
                        color: var(--blue-color);
                    }
                }
            }

            .contact-email {
                font-size: 17px;
                display: flex;
                column-gap: 10px;
                align-items: center;
                transition: .4s;

                i {
                    transition: .4s;
                    color: #cacaca;
                }

                &:hover {
                    color: var(--red-color);

                    i {
                        color: var(--red-color);
                    }
                }
            }

            .contact-address {
                font-size: 15px;
                display: flex;
                column-gap: 10px;
                transition: .4s;
                color: var(--text-color);

                i {
                    font-size: 20px;
                    transition: .4s;
                    color: var(--red-color);
                }

                &:hover {
                    color: var(--red-color);
                }
            }
        }
    }
}


</style>