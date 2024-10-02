<template>
    <div class="banner">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="banner-text">
                        <h1>Boost Your <span>Business</span> with Us!</h1>
                        <p>With user-friendly tools and expert guidance, we're here to support your success.</p>
                        <div class="contact-button">
                            <NuxtLink class="btn button cont" to="/contact-us"><span>Contact us</span> <i
                                    class="fa-solid fa-phone"></i></NuxtLink>
                            <NuxtLink class="btn button" to="/services">Services</NuxtLink>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div style="text-align: center; position: relative; height: 620px;">
                        <div class="circiul"></div>
                        <img class="person" src="/images/Banner/Banner.png" alt="">
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
body.dark {
    h1 {
        color: #ffffff;
    }

    p {
        color: #FFFFFF99;
    }

    .btn {
        box-shadow: 0px 4px 40px 0px #78560C;
    }


}

.body.rtl {
    .circiul {
        left: 50%;
        top: 50%;
    }
}

.person {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
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
    z-index: 99;
}

.banner {
    margin-bottom: 80px;
    background-image: url(/images/Banner/Background.png);


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

@media (max-width: 1199px) {
    .hammer {
        left: 30px;
        font-size: 25px;
    }


}

@media (max-width:992px) {
    .hammer {
        left: 160px;
        font-size: 25px;
    }
}

@media (max-width:767px) {
    .banner .circiul {
        width: 390px;
        height: 390px;
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

    img {
        max-width: 60%;
    }

    .hammer {
        left: 100px;
        font-size: 20px;
        padding: 10px;
        border: 8px solid white;
    }
}

@media (max-width:539px) {
    .circiul {
        width: 280px !important;
        height: 280px !important;
    }

    img {
        max-width: 50%;
    }

    .banner-text h1 {
        font-size: 44px;
        line-height: 50px;
    }

    .hammer {
        left: 120px !important;
        top: 188px !important;
    }
}
</style>