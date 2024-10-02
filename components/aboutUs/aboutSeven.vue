<template>
    <div class="about-four">
        <img class="pnts-1" src="/images/AboutUs/ExampleTwo/dark-points.png" alt="">
        <img class="pnts-2" src="/images/AboutUs/ExampleTwo/dark-points.png" alt="">
        <img class="pnts-3" src="/images/AboutUs/ExampleTwo/dark-points.png" alt="">
        <div class="rect-four">

        </div>
        <div class="container" style="position: relative;">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="about-text">
                        <span>ACHIEVEMENTS</span>
                        <h1>Lorem ipsum dolor</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore.</p>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="row d-flex d-md-none mt-5">
                        <div class="col-lg-6 col-md-6 ">
                            <Swiper :loop="true" slidesPerView="1" :space-between="30" :centeredSlides="true"
                                :modules="modules" :breakpoints="breakpoints" :autoplay="{ delay: 3000 }"
                                :navigation="{ prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next' }">
                                <swiper-slide>
                                    <div class="box-parent">
                                        <div class="box text-center">
                                            <i class="fa-solid fa-hammer"></i>
                                            <h3>Hyper best 2016</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
                                        </div>
                                    </div>
                                </swiper-slide>
                                <swiper-slide>
                                    <div class="box-parent">
                                        <div class="box text-center">
                                            <i class="fa-solid fa-hammer"></i>
                                            <h3>Hyper best 2016</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
                                        </div>
                                    </div>
                                </swiper-slide>
                                <swiper-slide>
                                    <div class="box-parent">
                                        <div class="box text-center">
                                            <i class="fa-solid fa-hammer"></i>
                                            <h3>Hyper best 2016</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
                                        </div>
                                    </div>
                                </swiper-slide>
                                <swiper-slide>
                                    <div class="box-parent">
                                        <div class="box text-center">
                                            <i class="fa-solid fa-hammer"></i>
                                            <h3>Hyper best 2016</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
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
                    <div class="row mt-5 d-none d-md-flex">
                        <div class="col-lg-6 col-md-6">
                            <div class="box-parent">
                                <div class="box text-center">
                                    <i class="fa-solid fa-hammer"></i>
                                    <h3>Hyper best 2016</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
                                </div>
                                <div class="box text-center">
                                    <i class="fa-solid fa-hammer"></i>
                                    <h3>Hyper best 2016</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6  mt-lg-4">
                            <div class="box-parent">
                                <div class="box text-center">
                                    <i class="fa-solid fa-hammer"></i>
                                    <h3>Hyper best 2016</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
                                </div>
                                <div class="box text-center">
                                    <i class="fa-solid fa-hammer"></i>
                                    <h3>Hyper best 2016</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
    .rect-four {
        background-color: #272114;
    }

    .box {
        background: #000000 !important;
        box-shadow: 0px 8px 24px -3px #FFFFFF26 !important;

        h3,
        i,
        p {
            color: white;
        }
    }

    .about-text {
        h1 {
            color: #FFFFFF;
        }

        span,
        p {
            color: #F0F0F0;
        }
    }
}

.about-four {
    padding: 40px 0;
    position: relative;

    .rect-four {
        width: 100px;
        height: 190px;
        background-color: #F5EEDE;
        position: absolute;
        right: 150px;
        z-index: -1;
        top: 0;
    }

    .pnts-1,
    .pnts-2,
    .pnts-3 {
        position: absolute;
        opacity: .2;
    }

    .pnts-1 {
        right: 0;
        top: 269px;
        z-index: -1;
        max-width: 100%;
    }

    .pnts-2 {
        top: 500px;
        width: 150px;
        left: 100px;
    }

    .pnts-3 {
        top: 387px;
        left: 251px;
        z-index: -1;
        max-width: 150px;
    }




    .box-parent {
        text-align: center !important;

        .box:hover {
            box-shadow: 0px 4px 15px 0px rgb(232, 216, 182);

            i {
                color: var(--primary);
                transition: .3s;
            }
        }

        .box {
            padding: 30px 23px;
            background-color: white;
            border-radius: 12px;
            box-shadow: 0px 8px 24px -3px #00000026;
            max-width: 300px;
            margin: 0 auto 20px;
            transition: .3s;

            h3 {
                font-size: 19px;
                font-weight: 600;
                margin: 24px 0;
            }

            i {
                transition: .3s;
                font-size: 40px;

            }

            p {
                color: var(--text-gray);
                font-size: 12px;
                font-weight: 500;
                line-height: 24px;
            }
        }
    }
}

.about-text {
    span {
        font-size: 14px;
        font-weight: 700;
    }

    h1 {
        font-size: 42px;
        font-weight: 700;
        margin-bottom: 30px;
    }

    p {
        font-size: 12px;
        font-weight: 400;
        max-width: 400px;
        line-height: 23px;
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

@media (max-width:767px) {
    .box {
        max-width: 400px !important;

        i {
            font-size: 30px !important;
        }

        h3 {
            margin: 14px 0 !important;
        }

        p {
            font-size: 11px;
            line-height: 20px;
        }
    }

    .about-text {
        text-align: center;

        p {
            margin: 24px auto;
        }

        h1 {
            font-size: 30px !important;
            margin: 20px 0;
        }
    }

    .about-four {
        height: 550px;


    }

    .rect-four {
        display: none
    }
}

@media (max-width:767px) {
    .pnts-2 {
        left: 50px !important;
    }

    .pnts-3 {
        left: 201px !important;
    }
}
</style>