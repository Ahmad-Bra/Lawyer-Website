<template>
    <div class="meet-team">
        <div class="container">
            <div class="team-text">
                <h1>Meet Out Team</h1>
                <p>Meet the experienced attorneys who comprise the backbone of our firm. From seasoned litigators to
                    skilled negotiators, our diverse team is dedicated to advocating for our clients' best interests.
                </p>
            </div>
            <div class="row d-none d-md-flex">
                <div class="col-lg-3 col-md-6 col-sm-6 col-xl-3 col-12">
                    <div class="team-info">
                        <img src="/images/AboutUs/LangingPageSection/team-1.png" alt="">
                        <h4>John Smith</h4>
                        <p>Senior Partner</p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-xl-3 col-12">
                    <div class="team-info">
                        <img src="/images/AboutUs/LangingPageSection/team-2.png" alt="">
                        <h4>Diana Prince</h4>
                        <p>Criminal Defense</p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-xl-3 col-12">
                    <div class="team-info">
                        <img src="/images/AboutUs/LangingPageSection/team-3.png" alt="">
                        <h4>Bruce Wayne</h4>
                        <p>Senior Partner</p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 col-xl-3 col-12">
                    <div class="team-info">
                        <img src="/images/AboutUs/LangingPageSection/team-4.png" alt="">
                        <h4>John Smith</h4>
                        <p>Senior Partner</p>
                    </div>
                </div>
            </div>
            <div class="row d-md-none">
                <div class=" col-12">
                    <Swiper grabCursor="true" :breakpoints="breakpoints" :centeredSlides="true"
                        class="footerBox2-slider" :modules="modules" :space-between="20" :autoplay="{ delay: 3000 }"
                        effect="coverflow" :loop="true"
                        :coverflow-effect="{ rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: true, }">
                        <swiper-slide>
                            <div class="team-info">
                                <img src="/images/AboutUs/LangingPageSection/team-1.png" alt="">
                                <h4>John Smith</h4>
                                <p>Senior Partner</p>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="team-info">
                                <img src="/images/AboutUs/LangingPageSection/team-2.png" alt="">
                                <h4>John Smith</h4>
                                <p>Senior Partner</p>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="team-info">
                                <img src="/images/AboutUs/LangingPageSection/team-3.png" alt="">
                                <h4>John Smith</h4>
                                <p>Senior Partner</p>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="team-info">
                                <img src="/images/AboutUs/LangingPageSection/team-4.png" alt="">
                                <h4>John Smith</h4>
                                <p>Senior Partner</p>
                            </div>
                        </swiper-slide>
                    </Swiper>
                </div>
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
    .meet-team {
        background: inherit;

        .clients-text,
        .team-text {
            p {
                color: #F0F0F0;
            }
        }

        .team-info {
            h4 {
                color: white;
            }

        }
    }
}

.meet-team {
    background: #F5F5F5;
    padding: 80px 0;



    .team-text {
        margin: 20px auto 60px;
        text-align: center;
        max-width: 600px;

        h1 {
            font-size: 40px;
            font-weight: 700;
            color: var(--primary);
            margin-bottom: 20px;
        }

        p {
            font-size: 16px;
            font-weight: 400;
            color: var(--text-gray);
            line-height: 24px;
        }
    }

    .team-info {
        text-align: center;

        h4 {
            font-size: 16px;
            font-weight: 500;
            margin: 20px auto 7px;
        }

        p {
            font-size: 14px;
            font-weight: 400;
            color: #A17D1C;
        }
    }
}
</style>