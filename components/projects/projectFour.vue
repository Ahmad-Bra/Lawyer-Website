<template>
    <div class="recent-parent mt-5">
        <div class="container">
            <div class="title m-auto w-50 text-center ">
                <h1>Our Recent Case Studies</h1>
            </div>

            <div class="row d-none d-md-flex mt-5">

                <div class="col-lg-3 col-md-6" v-for="col in 4" :key="col">
                    <div class="box">
                        <img class="img-fluid" src="/images/projects/project-2.png" alt="">
                        <div class="box-content">
                            <div><span class="res">Research</span><span class="law">Law firm</span></div>
                            <h5>Landmark Trial Victory</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <ul class=" time ">
                                <div class="d-flex align-items-center ">
                                    <i class="fa-regular fa-clock"></i>
                                    <div class="flex-grow-1">
                                        <li><span>From</span></li>
                                        <li>28/4/2022</li>
                                    </div>
                                    <div>
                                        <li><span>To</span></li>
                                        <li>28/4/2022</li>
                                    </div>
                                </div>
                                <li class="mt-2"><i class="fa-solid fa-location"></i>Aleppo, Syria</li>
                                <li><i class="fa-regular fa-clock"></i>24 Hours</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <NuxtLink to="/project-details" class="read-more">View all projects<i
                        class="fa-solid fa-chevron-right m-1"></i></NuxtLink>
            </div>

            <div class="parent-box d-md-none mt-5">
                <Swiper :grab-cursor="true" :loop="true" slidesPerView="1" :space-between="30" :centeredSlides="true"
                    :modules="modules" :breakpoints="breakpoints" :autoplay="{ delay: 3000 }"
                    :navigation="{ prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next' }" class=" case-box">
                    <swiper-slide>
                        <div class="box">
                            <img class="img-fluid" src="/images/projects/project-2.png" alt="">
                            <div class="box-content">
                                <div><span class="res">Research</span><span class="law">Law firm</span></div>
                                <h5>Landmark Trial Victory</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <ul class=" time ">
                                    <div class="d-flex align-items-center ">
                                        <i class="fa-regular fa-clock"></i>
                                        <div class="flex-grow-1">
                                            <li><span>From</span></li>
                                            <li>28/4/2022</li>
                                        </div>
                                        <div>
                                            <li><span>To</span></li>
                                            <li>28/4/2022</li>
                                        </div>
                                    </div>
                                    <li class="mt-2"><i class="fa-solid fa-location"></i>Aleppo, Syria</li>
                                    <li><i class="fa-regular fa-clock"></i>24 Hours</li>
                                </ul>
                            </div>
                        </div>
                        <NuxtLink to="/project-details" class="read-more">View all projects<i
                                class="fa-solid fa-chevron-right m-1"></i>
                        </NuxtLink>
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
body.rtl {
    .read-more {
        i {
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

    .box {
        background: #000000;
        border: none;

        h5 {
            color: white;
        }

        p {
            color: #F0F0F0;
        }

        li {
            color: #F0F0F0;
        }

    }

    .read-more {
        box-shadow: none;
    }

}

.title {
    margin-bottom: 60px;

    h1 {
        font-size: 32px;
        font-weight: 700;
    }
}



.box {
    border: 1px solid #F0F0F0;
    margin-bottom: 20px;
    border-radius: 12px;
}

.box-content {
    padding: 10px;
    margin-bottom: 20px;
    position: relative;


    .res,
    .law {
        display: inline-block;
        font-size: 12px;
        color: #E9A40E;
        font-weight: 500;
        background: #FFFAEE;
        padding: 8px 10px;
        border-radius: 17px;
        margin: 10px;
    }

    .res {
        color: #9747FF;
        background: #F5EEFF;
    }

    h5 {
        font-size: 16px;
        font-weight: 600;
        color: var(--text-black);
    }

    p {
        font-size: 14px;
        font-weight: 400;
        color: #555555;
        margin: 10px 0;
    }

    .time {
        padding: 0;
        margin: 0;

        li {
            padding: 5px 0;
            font-weight: 500;
            color: #9A9895;
            font-size: 14px;

            span {
                font-size: 12px;
            }
        }

        i {
            margin: 0 10px;
            color: #9A9895;
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

    margin: 30px auto 0;
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

@media (max-width: 992px) {

    .box-content {
        margin-bottom: 20px;

        p {
            font-size: 15px !important;
        }
    }
}

@media (max-width:767px) {

    .arr {
        background-color: #e9a40e2b;
        color: var(--primary);
    }

    .box {
        border: none;

        img {
            display: block;
            margin: auto;
        }
    }

    .title {
        h1 {
            font-size: 25px !important;
        }
    }

    .box-content {
        p {
            font-size: 15px !important;
        }

        p,
        h5 {
            text-align: center;
        }
    }
}
</style>