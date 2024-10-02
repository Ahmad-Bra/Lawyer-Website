<template>
    <div class="what-do">
        <div class="container">
            <div class="header text-center ">
                <h1>What We Do?</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor,
                </p>
            </div>
            <div class="row d-none d-md-flex">
                <div class="col-lg-4 col-md-4 col m-0 p-0" v-for="card in 9" :key="card">
                    <div class="what-do-box">
                        <i class="fa-solid fa-home"></i>
                        <h4>Labour law</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        </p>
                    </div>
                </div>
            </div>
            <div class="row d-md-none">
                <Swiper grabCursor="true" :loop="true" slidesPerView="1" :space-between="30" :centeredSlides="true"
                    :modules="modules" :breakpoints="breakpoints" :autoplay="{ delay: 3000 }"
                    :navigation="{ prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next' }">
                    <swiper-slide v-for="card in 8" :key="card">
                        <div class="col-lg-4 col-md-4 col m-0 p-0">
                            <div class="what-do-box text-center">
                                <i class="fa-solid fa-home"></i>
                                <h4>Labour law</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt
                                </p>
                            </div>
                        </div>
                    </swiper-slide>
                    <div class="swiper-button-prev arr">
                    </div>
                    <div class="swiper-button-next arr">
                    </div>
                </Swiper>
            </div>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation } from "swiper/modules";
export default {
    data() {
        return {

        }
    },
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Autoplay, Navigation],
        }
    }
}
</script>

<style lang="scss" scoped>
body.dark {
    .header {
        h1 {
            color: white;
        }

        p {
            color: #F0F0F0;
        }
    }

    .what-do-box {
        color: white;

        p {
            color: #F0F0F0;
        }
    }
}

.what-do {

    col {
        border: 1px solid#333333;
        padding: 0 !important;
        margin: 0;
    }

    .header {
        margin-bottom: 25px;

        h1 {
            font-size: 32px;
            font-weight: 700;
            margin-bottom: 24px;
        }

        p {
            font-size: 16px;
            font-weight: 400;
            max-width: 700px;
            margin: auto;
        }
    }

    .what-do-box {
        padding: 35px 35px;
        border: 1px solid #33333324;

        i {
            font-size: 50px;
            color: var(--primary);
        }

        h4 {
            font-size: 16px;
            font-weight: 700;
            margin: 20px 0;
        }

        p {
            color: #555555;
            font-size: 14px;
            font-weight: 400;
            line-height: 25px;
        }
    }
}

.arr::after {
    font-size: 20px;
    font-weight: bold;
}

.arr {
    border-radius: 50%;
    background-color: var(--primary);
    padding: 10px;
    font-size: 15px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
}
</style>