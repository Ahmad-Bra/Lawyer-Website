<template>
    <!-- footer one -->
    <div class="footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li>
                                <NuxtLink to="#">Home</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="#">Home</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="#">Home</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="#">Home</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="#">Home</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="#">Home</NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="links">
                        <h4>Legal Links</h4>
                        <ul>
                            <li>
                                <NuxtLink to="#">Privacy Policy</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="#">Home</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="#">Home</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="#">Home</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="#">Home</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="#">Home</NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="links">
                        <h4>Our Services</h4>
                        <ul>
                            <li>
                                <NuxtLink to="#">Legal Consultations</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="#">Home</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="#">Home</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="#">Home</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="#">Home</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="#">Home</NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="info">
                        <h4>Stay Connected</h4>
                        <div class="social-icon">
                            <NuxtLink to="#"><i class="fa-brands fa-facebook-f"></i></NuxtLink>
                            <NuxtLink to="#"><i class="fa-brands fa-instagram"></i></NuxtLink>
                            <NuxtLink to="#"><i class="fa-brands fa-linkedin-in"></i></NuxtLink>
                        </div>
                        <h4>About</h4>
                        <p>Learn more about our law firm and our commitment to providing high-quality legal services.
                        </p>
                        <p>© 2024 John Doe. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
            <div class="latest">
                <div class="row d-none d-md-flex align-items-center">
                    <h3>Lastest news</h3>
                    <div class="col-lg-2 col-md-4">
                        <div class="box-news">
                            <div class="img-holder">
                                <img class="img-fluid w-100" src="/images/7.Footer/1.png" alt="">
                            </div>
                            <h5>Lorem ipsum</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-4">
                        <div class="box-news">
                            <div class="img-holder">
                                <img class="img-fluid w-100" src="/images/7.Footer/2.png" alt="">
                            </div>
                            <h5>Lorem ipsum</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-4">
                        <div class="box-news">
                            <div class="img-holder">
                                <img class="img-fluid w-100" src="/images/7.Footer/3.png" alt="">
                            </div>
                            <h5>Lorem ipsum</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-4">
                        <div class="box-news">
                            <div class="img-holder">
                                <img class="img-fluid w-100" src="/images/7.Footer/4.png" alt="">
                            </div>
                            <h5>Lorem ipsum</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-4">
                        <div class="box-news">
                            <div class="img-holder">
                                <img class="img-fluid w-100" src="/images/7.Footer/5.png" alt="">
                            </div>
                            <h5>Lorem ipsum</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-4">
                        <div class="box-news">
                            <div class="img-holder">
                                <img class="img-fluid w-100" src="/images/7.Footer/6.png" alt="">
                            </div>
                            <h5>Lorem ipsum</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>
                    </div>
                </div>
                <div class="row d-flex d-md-none align-items-center">
                    <h3>Lastest news</h3>
                    <div class="col-lg-2 col-md-4">
                        <Swiper :breakpoints="breakpoints" :centeredSlides="true" class="footerBox2-slider"
                            :modules="modules" :space-between="20" :autoplay="{ delay: 3000 }" effect="coverflow"
                            :loop="true"
                            :coverflow-effect="{ rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: true, }">
                            <swiper-slide>
                                <div class="box-news">
                                    <div class="img-holder">
                                        <img class="img-fluid w-100" src="/images/7.Footer/1.png" alt="">
                                    </div>
                                    <h5>Lorem ipsum</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="box-news">
                                    <div class="img-holder">
                                        <img class="img-fluid w-100" src="/images/7.Footer/2.png" alt="">
                                    </div>
                                    <h5>Lorem ipsum</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="box-news">
                                    <div class="img-holder">
                                        <img class="img-fluid w-100" src="/images/7.Footer/3.png" alt="">
                                    </div>
                                    <h5>Lorem ipsum</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="box-news">
                                    <div class="img-holder">
                                        <img class="img-fluid w-100" src="/images/7.Footer/4.png" alt="">
                                    </div>
                                    <h5>Lorem ipsum</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="box-news">
                                    <div class="img-holder">
                                        <img class="img-fluid w-100" src="/images/7.Footer/5.png" alt="">
                                    </div>
                                    <h5>Lorem ipsum</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="box-news">
                                    <div class="img-holder">
                                        <img class="img-fluid w-100" src="/images/7.Footer/6.png" alt="">
                                    </div>
                                    <h5>Lorem ipsum</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                </div>
                            </swiper-slide>
                        </Swiper>
                    </div>
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
    .footer-two {
        .circul {
            background: #000000;
        }
    }

    .footer {
        background-color: #000000;

        p,
        h3,
        h5,
        h4 {
            color: #ffffff;
        }

        a {
            color: #ffffff;
            opacity: .5;
        }

        .social-icon {
            a {
                background-color: #ffffff;

                i {
                    color: #000000;
                }
            }
        }
    }
}

ul {
    margin: 0;
    padding: 0;
}

.footer {
    margin: 120px 0 0;
    padding: 100px;
    background: #F4F2EF;
}

h4 {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 30px;
}

.links {

    li {
        margin-bottom: 16px;

        a {
            text-decoration: none;
            color: #000000;
            opacity: .7;
            font-size: 14px;
            font-weight: 400;
            padding: 5px;
        }

        a:hover {
            transition: .3s;
            color: var(--primary)
        }
    }
}

.info {
    .social-icon {
        margin: 40px 0;

        a {
            background: #000000;
            padding: 5px;
            border-radius: 5px;
            transition: 0.3s;
            margin: 0 10px;
        }

        a:hover {
            background-color: var(--primary);
            transition: 0.3s;
        }

        i {
            color: white;
            width: 20px;
            height: 20px;
            text-align: center;
        }
    }

    p {
        font-size: 14px;
        font-weight: 400;
        color: #000000;
    }
}

.latest {
    margin: 42px 0;

    h3 {
        font-size: 19px;
        margin: 16px;
        font-weight: 700;
    }

    .box-news {
        margin-bottom: 20px;

        h5 {
            font-size: 12px;
            font-weight: 700;
            margin: 10px 0;
        }

        p {
            font-size: 12px;
            font-weight: 700;
            margin: 0;
        }
    }

    .img {
        border-radius: 12px;
    }
}

@media (max-width:767px) {
    .footer {
        margin-top: 40px;
        padding: 20px;
    }


    .box-news {
        margin-bottom: 10px;

        p,
        h5 {
            font-size: 12px !important;
        }
    }

    .footer-two {
        padding: 120px 0 60px;
        margin-top: 50px;

    }

    .end {
        font-size: 12px;

        .social-box {
            text-align: center;
        }
    }
}
</style>