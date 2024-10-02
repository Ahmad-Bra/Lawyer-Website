<template>
    <!-- one -->
    <div class="our-serv my-5">
        <div class="container">
            <div class="title m-auto w-50 text-center">
                <h1>Our Services</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor,
                </p>
            </div>
            <div class="row d-none d-md-flex">
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <div class="serv-box">
                        <img src="/images/2.Services/Service 3.png" alt="">
                        <div class="serv-text">
                            <h4>service name</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                            <NuxtLink class="read-more" to="#">Read more</NuxtLink>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12" v-for="card in 5 " :key="card">
                    <div class="serv-box">
                        <img src="/images/2.Services/Service-1.png" alt="">
                        <div class="serv-text">
                            <h4>service name</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                            <NuxtLink class="read-more" to="#">Read more</NuxtLink>
                        </div>
                    </div>
                </div>

                <NuxtLink to="#" class="see-all">See All <i class="fa-solid fa-chevron-right m-1"></i></NuxtLink>
            </div>
            <div class="row d-md-none">
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <Swiper :loop="true" slidesPerView="1" :space-between="30" :centeredSlides="true" :modules="modules"
                        :autoplay="{ delay: 3000 }"
                        :navigation="{ prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next' }">
                        <swiper-slide>
                            <div class="serv-box">
                                <img src="/images/2.Services/Service-1.png" alt="">
                                <div class="serv-text">
                                    <h4>service name</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                                    <NuxtLink class="read-more" to="#">Read more</NuxtLink>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide v-for="card in 5" :key="card">
                            <div class="serv-box">
                                <img src="/images/2.Services/Service 3.png" alt="">
                                <div class="serv-text">
                                    <h4>service name</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                                    <NuxtLink class="read-more" to="#">Read more</NuxtLink>
                                </div>
                            </div>
                        </swiper-slide>
                        <div class="swiper-button-prev arr">
                        </div>
                        <div class="swiper-button-next arr">
                        </div>
                    </Swiper>
                </div>
                <NuxtLink to="#" class="see-all">See All <i class="fa-solid fa-chevron-right m-1"></i></NuxtLink>
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
    .see-all {
        .fa-chevron-right {
            transform: rotate(180deg);
        }
    }
}

body.dark {
    .title {
        h1 {
            color: #ffffff;
        }
    }

    .serv-box {
        background: #000000;
        box-shadow: 0px 8px 24px 0px #FFFFFF26;

        p {
            color: #F0F0F0;

        }

        h4 {
            color: #ffffff;
        }

    }

    .see-all {
        box-shadow: 0px 4px 40px 0px #78560C;
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

.serv-box {
    overflow: hidden;
    text-align: center;
    margin-bottom: 20px;
    box-shadow: 0px 8px 24px 0px #00000026;

    img {
        transition: .3s;
        max-width: 100%;
        width: 100%;
    }

    img:hover {
        transform: scale(1.05);
        transition: .3s;
    }

    .serv-text {
        padding-bottom: 30px;

        h4 {
            font-weight: 700;
            font-size: 16px;
        }

        p {
            font-size: 12px;
            font-weight: 400;
            color: var(--text-gray);
            line-height: 20px;
            max-width: 320px;
            margin: 17px auto;
        }

        .read-more:hover {
            background-color: white;
            color: var(--text-black);
            transition: .3s;
        }

        .read-more {
            display: block;
            width: fit-content;
            background-color: var(--primary);
            padding: 8px 20px;
            color: white;
            text-decoration: none;
            border-radius: 20px;
            margin: 10px auto;
        }
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
    padding: 10px 30px;
    border-radius: 20px;
    color: white;
    width: fit-content;
    margin: 50px auto 0;
    text-decoration: none;
    font-weight: 700;
    box-shadow: 0px 4px 40px 0px rgb(255, 232, 183);
    font-size: 14px;
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