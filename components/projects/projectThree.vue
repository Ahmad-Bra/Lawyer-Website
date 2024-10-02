<template>
    <div class="recent-parent mt-5">
        <div class="container">
            <div class="title m-auto w-50 text-center ">
                <h1>Our Recent Case Studies</h1>
            </div>

            <div class="parent-box d-none d-lg-block">
                <div class="box d-flex align-items-center ">
                    <img src="/images/projects/project-2.png" alt="">
                    <div class="box-content">
                        <i class="fa-solid fa-heart"></i>
                        <h5>Landmark Trial Victory</h5>
                        <p>A groundbreaking case that set a new precedent in corporate law.</p>
                        <ul class=" time d-flex align-items-center ">
                            <div class="flex-grow-1">
                                <li><i class="fa-regular fa-clock"></i>24 Hours</li>
                                <li><i class="fa-regular fa-clock"></i>Feb 25th 2024</li>
                            </div>
                            <div class="flex-grow-1">
                                <li><i class="fa-regular fa-clock"></i>24 Hours</li>
                                <li><i class="fa-regular fa-calendar"></i>Feb 25th 2024</li>
                            </div>
                        </ul>
                        <NuxtLink to="/project-details" class="read-more">See All <i
                                class="fa-solid fa-chevron-right m-1"></i></NuxtLink>
                    </div>
                </div>
                <div class="box d-flex align-items-center ">
                    <img src="/images/projects/project-2.png" alt="">
                    <div class="box-content">
                        <i class="fa-solid fa-heart"></i>
                        <h5>Landmark Trial Victory</h5>
                        <p>A groundbreaking case that set a new precedent in corporate law.</p>
                        <ul class=" time d-flex align-items-center ">
                            <div class="flex-grow-1">
                                <li><i class="fa-regular fa-clock"></i>24 Hours</li>
                                <li><i class="fa-regular fa-calendar"></i>Feb 25th 2024</li>
                            </div>
                            <div class="flex-grow-1">
                                <li><i class="fa-regular fa-clock"></i>24 Hours</li>
                                <li><i class="fa-regular fa-clock"></i>Feb 25th 2024</li>

                            </div>
                        </ul>
                        <NuxtLink to="/project-details" class="read-more">See All <i
                                class="fa-solid fa-chevron-right m-1"></i></NuxtLink>
                    </div>
                </div>
            </div>
            <div class="parent-box d-lg-none">
                <Swiper :grab-cursor="true" :loop="true" slidesPerView="1" :space-between="60" :centeredSlides="true"
                    :modules="modules" :breakpoints="breakpoints" :autoplay="{ delay: 3000 }" class=" case-box">
                    <swiper-slide>
                        <div class="box flex-column d-flex align-items-center ">
                            <img src="/images/projects/project-2.png" alt="">
                            <div class="box-content">
                                <i class="fa-solid fa-heart"></i>
                                <h5>Landmark Trial Victory</h5>
                                <p>A groundbreaking case that set a new precedent in corporate law.</p>
                                <ul class=" time d-flex align-items-center ">
                                    <div class="flex-grow-1">
                                        <li><i class="fa-regular fa-clock"></i>24 Hours</li>
                                        <li><i class="fa-regular fa-clock"></i>Feb 25th 2024</li>
                                    </div>
                                    <div class="flex-grow-1">
                                        <li><i class="fa-regular fa-clock"></i>24 Hours</li>
                                        <li><i class="fa-regular fa-calendar"></i>Feb 25th 2024</li>
                                    </div>
                                </ul>
                                <NuxtLink to="/project-details" class="read-more">See All <i
                                        class="fa-solid fa-chevron-right m-1"></i></NuxtLink>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="box flex-column d-flex align-items-center ">
                            <img src="/images/projects/project-2.png" alt="">
                            <div class="box-content">
                                <i class="fa-solid fa-heart"></i>
                                <h5>Landmark Trial Victory</h5>
                                <p>A groundbreaking case that set a new precedent in corporate law.</p>
                                <ul class=" time d-flex align-items-center ">
                                    <div class="flex-grow-1">
                                        <li><i class="fa-regular fa-clock"></i>24 Hours</li>
                                        <li><i class="fa-regular fa-calendar"></i>Feb 25th 2024</li>
                                    </div>
                                    <div class="flex-grow-1">
                                        <li><i class="fa-regular fa-clock"></i>24 Hours</li>
                                        <li><i class="fa-regular fa-clock"></i>Feb 25th 2024</li>

                                    </div>
                                </ul>
                                <NuxtLink to="/project-details" class="read-more">See All <i
                                        class="fa-solid fa-chevron-right m-1"></i></NuxtLink>
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
    .title {
        h1 {
            color: #ffffff;
        }
    }

    .fa-heart {
        color: black !important;
    }

    .parent-box {
        background: #000000;


        h5 {
            color: white;
        }

        li {
            color: #F0F0F0 !important;
        }

        p {
            color: #FFE8B7;
        }

        .read-more {
            box-shadow: none
        }
    }
}

body.rtl {
    .box-content {
        .fa-heart {
            right: 560px;
            left: 0;
        }
    }

    .read-more {
        i {
            transform: rotate(180deg);
        }
    }
}

.title {
    margin-bottom: 60px;

    h1 {
        font-size: 32px;
        font-weight: 700;
    }
}

.parent-box {

    padding: 30px;
    border-radius: 15px;
    background: #FEFAF1;



    .box-content {
        padding: 30px 30px 30px 50px;
        margin-bottom: 20px;
        position: relative;

        .fa-heart {
            position: absolute;
            color: white;
            right: 0;
            top: 30px;
            padding: 10px;
            border-radius: 50%;
            background-color: #FAE5B7;
            cursor: pointer;
        }

        h5 {
            font-size: 18px;
            font-weight: bold;
            color: var(--text-black);
        }

        p {
            font-size: 18px;
            font-weight: normal;
            color: #A17D1C;
            margin: 10px 0;
        }

        .time {
            padding: 0;
            margin: 0;

            li {
                padding: 5px 0;
                font-weight: 500;
                color: #211A0A;
                font-size: 14px;

                i {
                    margin: 0 10px;
                }
            }
        }
    }
}

.read-more:hover {
    transition: .3s;
    background-color: rgb(255, 232, 183);
    color: var(--text-black);
}

.read-more {
    display: block;
    background-color: var(--primary);
    padding: 15px 30px;
    border-radius: 20px;
    color: white;
    width: fit-content;
    margin: 30px 0 0;
    text-decoration: none;
    font-weight: 700;
    box-shadow: 0px 4px 40px 0px rgb(255, 232, 183);
    font-size: 14px;
}

@media (max-width:1199px) {
    body.rtl {
        .box-content {
            .fa-heart {
                right: 383px;
                left: 0;
            }
        }
    }
}

@media (max-width: 992px) {
    body.rtl {
        .box-content {
            .fa-heart {
                right: 463px;
                left: 0;
            }
        }
    }

    .parent-box {
        padding: 30px 0;
    }

    .box-content {
        padding: 26px;
        margin-bottom: 20px;
        position: relative;
        width: 500px;

        p {
            font-size: 15px !important;
        }
    }
}

@media (max-width:767px) {

    .title {
        h1 {
            font-size: 25px !important;
        }
    }

    .box-content {
        .fa-heart {
            display: none;
        }

        padding: 26px;
        margin-bottom: 20px;
        position: relative;
        width: 500px;

        p {
            font-size: 15px !important;
        }

        .read-more {
            margin: 20px auto 0;
            padding: 10px 15px;
        }

        p,
        h5 {
            text-align: center;
        }
    }
}
</style>