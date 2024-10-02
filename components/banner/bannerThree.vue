<template>
    <div class="banner-three">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="banner-text">
                        <div class="circiul-3"></div>
                        <div style="position: relative;">
                            <h1>Providing best
                                <span>growth</span> solutions
                            </h1>
                            <p>With user-friendly tools and expert guidance, we're here to support your success.</p>
                            <div class="contact-button">
                                <NuxtLink class="btn button cont w-50 " to="/contact-us"><span>Get FREE
                                        Consultation</span>
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div style="position:  relative; text-align: center; height: 620px;">
                        <div class="circiul-1"></div>
                        <div class="circiul-2"></div>
                        <img style="position: relative; z-index: 100;" src="/images/Banner/Banner.png" alt="">
                        <i class="hammer fa-solid fa-gavel"></i>
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
body.rtl {
    .circiul-3 {
        right: -10%;
    }
}

body.dark {
    .contact-button a {
        box-shadow: none !important;
        border-radius: 52px;
    }

    .banner-three {
        background: transparent;



        .hammer {
            color: black;

        }

        h1 {
            color: white;
        }

        p {
            color: #f0f0f0;
        }
    }

    .circiul-1 {
        background: #302B20;
    }

    .circiul-2,
    .circiul-3 {
        background: #222222;


    }
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

.hammer {
    position: absolute;
    font-size: 35px;
    color: #ffffff;
    background-color: var(--primary);
    padding: 15px;
    border: 12px solid white;
    border-radius: 50%;
    left: 130px;
    top: 137px;
    box-shadow: 0px 20px 40px 0px rgba(0, 0, 0, 0.25);
    z-index: 199;
}

.banner-text {
    h1 {
        font-weight: 700;
        font-size: 64px;
        line-height: 80px;

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
        font-size: 16px;
        margin-top: 24px;
        max-width: 420px;

        color: #00000099;
    }
}

.banner-three {
    margin-bottom: 80px;
    background-color: white;
    background-image: none;
    z-index: 0;

    .circiul {
        position: absolute;
        width: 430px;
        height: 430px;
        border-radius: 50%;
        background-color: rgba(241, 180, 47, 0.2);
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border: 40px solid rgba(241, 180, 47, 0.15);
        outline: 40px solid rgba(241, 180, 47, 0.1);
    }

    .circiul-1 {
        background: #F5EDDB;
        width: 500px;
        height: 500px;
        border-radius: 50%;
        position: absolute;
        left: 50%;
        top: 60%;
        transform: translate(-50%, -50%);
        z-index: 1;
    }

    .circiul-3,
    .circiul-2 {
        position: absolute;
        width: 600px;
        height: 600px;
        background: #F3F2F2;
        border-radius: 50%;
        top: 0;
    }

    .circiul-3 {
        top: -20%;
        left: -7%;
        z-index: -1;
    }

    .social-icon {
        margin: 120px 20px 0;


        a {
            background: #000000;
            padding: 5px;
            border-radius: 5px;
            transition: 0.3s;
            margin-right: 4px;
        }

        i {
            color: white;
            width: 20px;
            height: 20px;
            text-align: center;
        }
    }
}

@media (max-width:1399) {
    .hammer {
        left: 81px;
        font-size: 30px;
    }
}

@media (max-width:1199) {
    .hammer {
        left: 30px;
        font-size: 25px;
    }
}

@media (max-width:992px) {
    .circiul-3 {
        width: 500px !important;
        height: 500px !important;
    }

    .hammer {
        left: 160px;
        font-size: 25px;
    }

    .circiul-1 {
        width: 400px !important;
        height: 400px !important;
    }

    .circiul-2 {
        width: 500px !important;
        top: 10% !important;
        height: 500px !important;
        left: 69px;
    }

    .banner-text {
        text-align: center;
    }
}

@media (max-width:767px) {
    .circiul-2 {
        left: -15px !important;
    }

    .banner-text {
        text-align: center;

        p {
            margin: 24px auto;
        }

        h1 {
            font-size: 54px;
        }
    }

    .hammer {
        left: 100px;
        font-size: 30px;
        padding: 10px;
        border: 8px solid white;
    }
}

@media (max-width:539px) {
    .banner-text h1 {
        font-size: 44px;
        line-height: 50px;
    }

    .circiul-2 {
        width: 350px !important;
        top: 20% !important;
        height: 350px !important;
        left: 20px !important;
    }

    .hammer {
        left: 60px;
        top: 188px;
    }
}
</style>