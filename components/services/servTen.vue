<template>
    <div class="serv-parent  d-flex align-items-center justify-content-center">
        <img src="/images/2.Services/points.png" class="points" />
        <img src="/images/2.Services/points.png" class="points-2" />
        <div class="container">
            <div class="head">
                <span>Our Services</span>
                <h1>Our Services</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor,
                </p>
            </div>
            <div class="row d-none d-lg-flex">
                <div class="col-lg-6 col-md-12" v-for="box in 6 " :key="box">
                    <div class="box gap-4 d-flex align-items-center justify-content-center">
                        <img src="/images/2.Services/vector-1.png" alt="">
                        <div class="text-box">
                            <h5>Personal Injury</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row d-lg-none">
                <Swiper grabCursor="true" :loop="true" slidesPerView="1" :space-between="30" :centeredSlides="true"
                    :modules="modules" :breakpoints="breakpoints" :autoplay="{ delay: 3000 }"
                    :navigation="{ prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next' }">
                    <swiper-slide v-for="box in 6 " :key="box">
                        <div class="col-md-12">
                            <div class="box gap-4 d-flex align-items-center justify-content-center">
                                <img src="/images/2.Services/vector-1.png" alt="">
                                <div class="text-box">
                                    <h5>Personal Injury</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                                </div>
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
    .serv-parent {
        background-image: url(/images/2.Services/background-dark.png);
    }

    :where(h1, p, h5) {
        color: #F0F0F0;
    }

    .points,
    .points-2 {
        opacity: .05;
    }

    .head {
        p {
            color: #F0F0F0;
        }
    }
}

.head {
    span {
        color: #0000000D;
        font-size: 48px;
        font-weight: 700;
        margin-bottom: -16px;
        display: block;
    }

    h1 {
        font-size: 32px;
        font-weight: 700;
    }

    p {
        font-size: 16px;
        color: #4B4B4B;
        font-weight: 400;
        max-width: 700px;
    }
}

.serv-parent {

    background-image: url(/images/2.Services/background.png);
    background-position: center;
    background-size: cover;
    height: 1000px;
    position: relative;


    .points {
        position: absolute;
        top: 100px;
        left: 0;
        z-index: -1;
    }

    .points-2 {
        position: absolute;
        top: 400px;
        right: 0;
        z-index: -1;
    }



    .box {
        padding: 20px 40px;
        transition: .3s;

        .text-box {
            h5 {
                font-weight: 700;
                margin-bottom: 33px;
                font-size: 16px;
                transition: .3s;
                margin-bottom: 20px !important;
            }

            p {
                font-weight: 400;
                font-size: 16px;
            }

            color: #404040;
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

@media (min-width: 992px) {
    .box:hover {
        border-left: 1px solid #ccc;
        transition: .3s;

        h5 {
            transition: .3s;
            color: var(--primary);
        }
    }
}

@media (max-width:992px) {
    .serv-parent {
        height: 800px;
    }

    .box {
        border: 1px solid var(--primary);
        border-radius: 12px;
    }
}

@media (max-width:767px) {

    .points,
    .points-2 {
        display: none;
    }
}

@media (max-width:539px) {
    .serv-parent {
        height: 500px;
    }

    .box {
        padding: 20px;
        gap: 10px !important;

        img {
            width: 130px;
        }

        p {
            font-size: 14px;
        }

        h5 {
            font-size: 17px;
        }
    }


}
</style>