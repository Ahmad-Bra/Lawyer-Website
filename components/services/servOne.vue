<template>
    <div class="what-say ">
        <div class="container">
            <div class="header text-center ">
                <h1>What Our Client Says?</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor,
                </p>
            </div>
            <div class="row d-none d-md-flex ">
                <div class="col-lg-4 col-md-6 col " v-for="card in 6" :key="card">
                    <div class="what-say-box">
                        <p>“Thank you for your exceptional legal care! Your firm's professionalism, expertise, and
                            unwavering support made all the difference. I'm grateful for the positive outcome achieved.
                            Highly recommend your outstanding service”</p>
                        <h4>Ralph Edwards</h4>
                        <span>Ui/Ux Designer</span>
                        <img src="/images/2.Services/avatar.png" alt="">
                    </div>
                </div>
                <ul class="bullits">
                    <li class="active"></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div class="row d-md-none">
                <Swiper grabCursor="true" :breakpoints="breakpoints" :centeredSlides="true" class="footerBox2-slider"
                    :modules="modules" :space-between="20" :autoplay="{ delay: 3000 }" effect="coverflow" :loop="true"
                    :coverflow-effect="{ rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: true, }">
                    <swiper-slide v-for="card in 6" :key="card">
                        <div class="col-lg-4 col-md-6 col ">
                            <div class="what-do-box">
                                <p>“Thank you for your exceptional legal care! Your firm's professionalism, expertise,
                                    and
                                    unwavering support made all the difference. I'm grateful for the positive outcome
                                    achieved.
                                    Highly recommend your outstanding service”</p>
                                <h4>Ralph Edwards</h4>
                                <span>Ui/Ux Designer</span>
                                <img src="/images/2.Services/avatar.png" alt="">
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
    .bullits {
        li {
            background: #333333;
        }

        li.active {
            background-color: var(--primary);
        }
    }

    .header {
        h1 {
            color: white;
        }

        p {
            color: #F0F0F0;
        }
    }

    .what-say-box {
        background: #000000;
        color: white;
        box-shadow: 0px 8px 24px 0px #FFFFFF26;

        h4,
        p {
            color: #F0F0F0;
        }
    }
}

.what-say {
    padding-bottom: 30px;
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


.what-say-box {
    position: relative;
    padding: 30px 25px 50px;
    box-shadow: 0px 8px 24px 0px #00000026;
    margin-bottom: 80px;

    img {
        position: absolute;
        bottom: -37px;
        left: 31px;
    }

    p {
        font-size: 12px;
        font-weight: 400;
        color: #555555;
        line-height: 22px;
    }

    h4 {
        font-size: 14px;
        font-weight: 700;
        color: #111111;
    }

    span {
        font-size: 11px;
        color: var(--primary);
        font-weight: 400;
    }
}

.bullits {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    li.active {
        background-color: var(--primary);
    }

    li {
        width: 15px;
        height: 15px;
        background: #E5E5E5;
        border-radius: 50%;
        cursor: pointer;
        padding: 5px;
    }
}

@media (max-width:767px) {
    .what-say-box {
        margin-bottom: 40px;
        padding: 10px 5px 50px;

        p {
            font-size: 10px;
        }
    }
}
</style>