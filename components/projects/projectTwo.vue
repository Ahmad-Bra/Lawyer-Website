<template>
    <div class="recent-parent mt-5">
        <div class="container">
            <div class="title m-auto w-50 text-center ">
                <h1>Our Recent Case Studies</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor,
                </p>
            </div>
            <div class="row d-none d-md-flex mt-5 align-items-center">
                <div class="col-lg-4 col-md-6">
                    <div class="case-box">
                        <h4>Real State Law Firm</h4>
                        <div class="line"></div>
                        <i class="box-icon fa-solid fa-building"></i>
                    </div>
                    <div class="case-box">
                        <h4>Marriage Contract In Law</h4>
                        <div class="line"></div>
                        <i class="box-icon fa-solid fa-book"></i>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 d-lg-block d-md-none d-sm-none d-none ">
                    <div class="img-holder">
                        <img class="img-fluid w-100 " src="/images/3.Our Recent Case Studies/Banner.png" alt="">
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="case-box">
                        <h4>International Law And Justice</h4>
                        <div class="line"></div>
                        <i class="box-icon fa-solid fa-building-columns"></i>
                    </div>
                    <div class="case-box">
                        <h4>Competition and antitrust law</h4>
                        <div class="line"></div>
                        <i class="box-icon fa-solid fa-graduation-cap"></i>
                    </div>
                </div>
                <NuxtLink to="/project-details" class="see-all">See All <i class="fa-solid fa-chevron-right m-1"></i>
                </NuxtLink>
            </div>
            <div class="row  d-md-none mt-5 align-items-center">
                <div class="col-lg-4 col-md-6">
                    <Swiper :loop="true" slidesPerView="1" :space-between="30" :centeredSlides="true" :modules="modules"
                        :breakpoints="breakpoints" :autoplay="{ delay: 3000 }"
                        :navigation="{ prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next' }"
                        class=" case-box">
                        <swiper-slide>
                            <h4>Real State Law Firm</h4>
                            <div class="line"></div>
                            <i class="box-icon fa-solid fa-building"></i>
                        </swiper-slide> <swiper-slide>
                            <h4>Marriage Contract In Law</h4>
                            <div class="line"></div>
                            <i class="box-icon fa-solid fa-book"></i>
                        </swiper-slide>
                        <swiper-slide>
                            <h4>International Law And Justice</h4>
                            <div class="line"></div>
                            <i class="box-icon fa-solid fa-building-columns"></i>
                        </swiper-slide>
                        <swiper-slide>
                            <h4>Competition and antitrust law</h4>
                            <div class="line"></div>
                            <i class="box-icon fa-solid fa-graduation-cap"></i>
                        </swiper-slide>
                        <div class="swiper-button-prev arr">
                        </div>
                        <div class="swiper-button-next arr">
                        </div>
                    </Swiper>
                    <NuxtLink to="/project-details" class="see-all">See All <i
                            class="fa-solid fa-chevron-right m-1"></i></NuxtLink>
                </div>
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
body.rtl {
    .fa-chevron-right {
        transform: rotate(180deg);
    }
}

body.dark {
    .title {
        h1 {
            color: #ffffff;
        }

        p {
            color: #F0F0F0;
        }
    }

    .case-box {
        h4 {
            color: white;
        }

        background: #000000;
    }

    .box-icon {
        border-left: 50px solid #000000;
        ;
        border-right: 50px solid #000000;
        ;
        background-color: #000000;
        ;

    }

    .case-box:hover {
        background-color: var(--primary);
    }

    .see-all {
        box-shadow: none;
    }
}

.title {
    margin-bottom: 30px;

    h1 {
        font-size: 32px;
        font-weight: 700;
    }

    p {
        max-width: 600px;
        color: var(--text-gray);
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        margin-top: 20px;
    }
}

.img-holder {

    img {
        max-height: 433px;
        background-size: contain;
        border-radius: 31px;
    }
}

.see-all:hover {
    transition: .3s;
    background-color: rgb(255, 232, 183);
    color: var(--text-black);
}

.see-all {
    display: block;
    background-color: var(--primary);
    padding: 20px 40px;
    border-radius: 20px;
    color: white;
    width: fit-content;
    margin: 50px auto 0;
    text-decoration: none;
    font-weight: 700;
    box-shadow: 0px 4px 40px 0px rgb(255, 232, 183);
    font-size: 14px;
}

.case-box:hover {
    background-color: var(--primary);
    transition: .3s;

    h4 {
        color: white;
        transition: .3s;
    }

    .box-icon {
        color: white;
        transition: .3s;
        background-color: var(--primary);
        border-color: var(--primary);
    }

    .read-more:hover {
        color: white;
        transition: .3s;
    }
}

.case-box {
    transition: .3s;
    position: relative;
    box-shadow: 0px 4px 40px 0px #00000026;
    border-radius: 32px;
    min-height: 155px;
    padding: 29px;

    text-align: center;
    margin-bottom: 25px;

    p {
        font-weight: 400;
        color: #666666;
        font-size: 12px;
        margin-bottom: 58px;
    }

    h4 {
        font-weight: 600;
        color: var(--text-black);
        font-size: 16px;
        margin-bottom: 15px;
    }

    .box-icon {
        font-size: 65px;
        color: var(--primary);
        border-radius: 50%;
        border-left: 50px solid white;
        border-right: 50px solid white;
        display: block;
        width: fit-content;
        background-color: white;
        transition: .3s;
        margin: 10px auto 30px;
    }

    .line {
        background-color: var(--primary);
        width: 80%;
        height: 3px;
        position: absolute;
        top: 50%;
        z-index: -1;
    }

    .read-more:hover {
        color: var(--primary);
        transition: .3s;
    }

    .read-more {
        color: #999999;
        font-size: 14px;
        font-weight: 600;
        border-top: 1px solid #F0F0F0;
        padding-top: 24px;
        text-decoration: none;
        display: block;

        i {
            font-size: 11px;
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

@media (max-width: 767px) {
    .title {
        h1 {
            font-size: 25px !important;
        }
    }

    .case-box {
        .line {
            left: 10%;
        }

        h4 {
            text-align: center;
        }
    }
}
</style>