<template>
    <div class="serv">
        <div class="container">
            <div class="head text-center">
                <span>Services</span>
                <h1>Our Services</h1>
            </div>
            <div class="row d-none d-md-flex">
                <div class="col-lg-4 col-md-4" v-for="card in 6" :key="card">
                    <div class="box">
                        <div class="img-holder">
                            <img src="/images/2.Services/books.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="row d-md-none">
                <Swiper grabCursor="true" :breakpoints="breakpoints" :centeredSlides="true" class="footerBox2-slider"
                    :modules="modules" :space-between="20" :autoplay="{ delay: 3000 }" effect="coverflow" :loop="true"
                    :coverflow-effect="{ rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: true, }">
                    <swiper-slide v-for="card in 6" :key="card">
                        <div class="box">
                            <div class="img-holder">
                                <img src="/images/2.Services/books.png" alt="">
                            </div>
                        </div>
                    </swiper-slide>
                </Swiper>
            </div>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, EffectCoverflow } from "swiper/modules";
export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Autoplay, EffectCoverflow],
        };
    },
    data() {
        return {
            breakpoints: {
                40: {
                    slidesPerView: 2,
                },
                540: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 2,
                },
                1400: {
                    slidesPerView: 2,
                }
            }
        }
    },
}
</script>

<style lang="scss" scoped>
body.dark {
    :where(h1, h5, p) {
        color: #F0F0F0;
    }

}

.serv {
    padding: 40px 0;
    margin: 40px 0;
}

.box {
    .img-holder {
        img {
            width: 100%;
        }
    }

    h5 {
        font-size: 16px;
        font-weight: 700;
    }

    p {
        font-size: 12px;
        font-weight: 400;
        color: var(--text-gray);
        max-width: 300px;
        margin: 10px auto;
    }
}

.button {
    padding: 12px 24px 12px 24px;
    font-size: 14px;
    font-weight: 500 !important;
    box-shadow: 0px 4px 40px 0px rgba(255, 232, 183, 1);
    background-color: var(--primary);
    color: white;
    border-radius: 30px;

    span {
        color: white;
    }

    i {
        margin: 0 5px;
    }
}

.button:hover {
    background-color: white;

    span {
        color: var(--primary) !important;
    }

    transition: .3s;
}

.head {
    margin-bottom: 20px;

    span {
        font-size: 16px;
        color: var(--text-gray);
        font-weight: 400;
    }

    h1 {
        font-size: 35px;
        font-weight: 700;
    }
}
</style>