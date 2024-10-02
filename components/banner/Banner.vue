<template>
    <!--start banner  -->
    <div class="banner-four">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="banner-text">
                        <h1>Count on Us for Exceptional Legal Care</h1>
                        <p>With user-friendly tools and expert guidance, we're here to support your success.</p>
                        <div class="contact-button">
                            <NuxtLink class="btn button cont" to="/contact-us"><span>More about
                                    me</span></NuxtLink>
                            <NuxtLink class="btn button" to="/services">Free Consultation</NuxtLink>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 mt-4 mt-sm-0">
                    <div class="parent-img">
                        <div class="rect"></div>
                        <img class="points" src="/images/Banner/points.png" alt="">
                        <img src="/images/Banner/banner-four.png" alt="">
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
    .banner-four {
        background: #161616;

    }

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

/* start banner */

.points {
    left: 61%;
    position: absolute;
    top: 75%;
}

.rect {
    width: 150px;
    height: 350px;
    background-color: var(--primary);
    position: absolute;
    left: 137px;
    top: 75px;
}

.banner-four {
    background-color: #E6E4E1;
    ;
    margin-bottom: 30px;

    .contact-button {
        a {
            border-radius: 52px;
        }
    }
}





.banner-two {
    background-image: url(/images/Banner/Background-2.png);
    background-position: center;
    background-size: cover;
}

.social-box {
    color: black;
    font-size: 12px;
    margin: 0 5px;

    span {
        font-weight: 400;
    }

    i {
        font-size: 12px;
        color: var(--primary);
        margin: 0 5px;

    }
}

.parent-img {
    position: relative;
    height: 620px;
}

img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -46%);
    max-width: 100%;
    z-index: 100;
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
        background-color: transparent;
        color: var(--primary);
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
    z-index: 99;
}

@media (max-width: 1399px) {
    .hammer {
        left: 81px;
        font-size: 30px;
    }

    .rect {
        left: 93px;
    }
}

@media (max-width: 1199px) {
    .hammer {
        left: 30px;
        font-size: 25px;
    }

    .rect {
        left: 47px;
    }
}

@media (max-width: 992px) {
    .hammer {
        left: 160px;
        font-size: 25px;
    }





    .rect {
        left: 165px;
    }

    .banner-text {
        text-align: center;
    }
}

@media (max-width: 767px) {
    .hammer {
        left: 100px;
        font-size: 20px;
        padding: 10px;
        border: 8px solid white;
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

    .banner .circiul {
        width: 390px;
        height: 390px;
    }

    .rect {
        left: 77px;
    }
}

@media (max-width: 539px) {
    .banner-text h1 {
        font-size: 44px;
        line-height: 50px;
    }

    img {
        max-width: 50%;
    }



    .cont {
        font-size: 11px !important;
        height: auto !important;
    }

    .points {
        top: 82%;
        left: 66%;
        max-width: 130px !important;
    }

    .rect {
        height: 200px;
        top: 4%;
        left: 81px;
    }

    .parent-img {
        height: 420px;
    }
}
</style>