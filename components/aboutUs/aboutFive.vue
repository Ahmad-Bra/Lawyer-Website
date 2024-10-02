<template>

    <div class="about-two">
        <div class="container">
            <img class="white-points " src="/images/AboutUs/ExampleTwo/white-points.png" alt="">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="parent-img-two">
                        <div class="about-rect"></div>
                        <img class="points-two" src="/images/Banner/points.png" alt="">
                        <img src="/images/Banner/banner-four.png" alt="">
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="about-text">
                        <span class="little-about">About Us</span>
                        <h1>We Are Professional
                            Medical Service &
                            Clinc</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nostrum nobis, ratione hic
                            voluptatum in asperiores aliquam possimus quia exercitationem optio culpa a vitae sequi
                            sint. Ea porro deleniti saepe.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nostrum nobis, ratione hic
                            voluptatum in asperiores aliquam possimus quia exercitationem optio culpa a vitae sequi
                            sint. Ea porro deleniti saepe.</p>
                        <div class="contact-button">
                            <NuxtLink class="btn button cont" to="/contact-us"><span>More about
                                    me</span></NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
body.dark {
    .white-points {
        opacity: .3;
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


    .btn {
        box-shadow: 0px 4px 40px 0px #78560C !important;
    }
}

.about-two {
    position: relative;
    padding: 30px 0;
    margin: 30px 0;

    .white-points {
        position: absolute;
        right: 150px;
        top: 0;
    }
}

.parent-img-two {
    position: relative;
    padding-top: 100px;
    text-align: center;
    margin-bottom: 40px;
}

.points-two {
    position: absolute;
    z-index: -1;
    bottom: -28px;
    right: 137px
}

.little-about {
    font-weight: 700;
    font-size: 14px;
}

.contact-button {
    margin-top: 32px;

    .button {
        padding: 12px 24px 12px 24px;
        font-size: 14px;
        font-weight: 500 !important;
        box-shadow: 0px 4px 40px 0px rgba(255, 232, 183, 1);
        background-color: var(--primary);
        color: white;

        i {
            margin: 0 5px;
        }
    }

    .button:hover {
        background-color: white;
        color: black;
        transition: .3s;
    }

    .cont {
        margin: 0 16px;
    }
}

.parent-img {
    position: relative;
    text-align: center;
    padding-top: 45px;


    .rect {
        width: 340px;
        height: 460px;
        background-color: var(--primary);
        position: absolute;
        left: 100px;
        top: 0;
        z-index: -1;
        border-radius: 12px;
    }
}


.about-two {

    .about-header {
        text-align: center;
        margin: 40px auto;

        h1 {
            font-size: 32px;
            font-weight: 700;
            color: #000000;
        }

        span {
            color: #B0AFAC;
            font-size: 16px;
            font-weight: 400;
        }

    }

    .about-text {
        padding: 20px 0;

        h1 {
            font-weight: 700;
            font-size: 40px;
            line-height: 48px;

            span {
                background: -webkit-linear-gradient(50deg,
                        #f3bc46 3.68%,
                        #f346c3 64.04%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
        }

        p {
            font-weight: 400;
            font-size: 14px;
            margin-top: 24px;
            max-width: 420px;

            color: #989399;
        }
    }

    .contact-button,
    .read-button {
        margin-top: 32px;

        .button {
            padding: 12px 24px 12px 24px;
            font-size: 14px;
            font-weight: 500 !important;
            box-shadow: 0px 4px 40px 0px rgba(255, 232, 183, 1);
            background-color: var(--primary);
            color: white;

            i {
                margin: 0 5px;
            }
        }

        .button:hover {
            background-color: white;
            color: black;
            transition: .3s;
        }

        .cont {
            margin: 0 16px;
        }
    }

    .parent-img {
        position: relative;
        text-align: center;
        padding-top: 45px;


        .rect {
            width: 340px;
            height: 460px;
            background-color: var(--primary);
            position: absolute;
            left: 100px;
            top: 0;
            z-index: -1;
            border-radius: 12px;
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



.about-rect {
    width: 140px;
    height: 260px;
    background-color: var(--primary);
    position: absolute;
    left: 132px;
    top: 72px;
    z-index: -1;
}

@media (max-width: 1299px) {
    .about-rect {
        left: 88px;
    }

    .points-two {
        right: 93px;
    }
}

@media (max-width: 1199px) {
    .about-rect {
        left: 43px;
    }

    .points-two {
        right: 47px;
    }
}

@media (max-width: 992px) {
    .about-rect {
        left: 163px;
    }

    .points-two {
        right: 165px;
    }

    .about-text {
        text-align: center;

        p {
            margin: 0 auto;
        }
    }
}

@media (max-width: 767px) {
    .about-rect {
        left: 72px;
    }

    .points-two {
        right: 75px !important;
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
}

@media (max-width:539px) {
    .white-points {
        display: none;
    }

    .about-rect {
        left: 0;
    }

    .points-two {
        right: 0 !important;
    }
}
</style>