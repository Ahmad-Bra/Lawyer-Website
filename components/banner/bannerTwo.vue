<template>
    <div class="banner-two">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="banner-text">
                        <div class="social d-flex align-items-center flex-grow-1">
                            <div class="social-box ">
                                <i class="fa-solid fa-phone"></i><span>+963987654321</span>
                            </div>
                            <div class="social-box ">
                                <i class="fa-solid fa-message"></i><span>+lorem@lorem.gamil</span>
                            </div>
                            <div class="social-box ">
                                <i class="fa-solid fa-location"></i><span>Street,City</span>
                            </div>
                        </div>
                        <h1>Justice Served Here.</h1>
                        <p>With user-friendly tools and expert guidance, we're here to support your success.</p>
                        <div class="contact-button">
                            <NuxtLink class="btn button cont" to="/contact-us"><span>Contact us</span> <i
                                    class="fa-solid fa-phone"></i>
                            </NuxtLink>
                        </div>
                        <div class="social-icon">
                            <NuxtLink to="#"><i class="fa-brands fa-facebook-f"></i></NuxtLink>
                            <NuxtLink to="#"><i class="fa-brands fa-instagram"></i></NuxtLink>
                            <NuxtLink to="#"><i class="fa-brands fa-linkedin-in"></i></NuxtLink>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="img-hol" style="position: relative; height: 620px;">
                        <div class="what-do">
                            <ul class="list">
                                <h4>What i do?</h4>
                                <li>Advocate</li>
                                <li>Litigate</li>
                                <li>Counsel</li>
                                <li>Negotiate</li>
                            </ul>
                        </div>
                        <img src="/images/Banner/Banner.png" alt="">
                        <div class="info d-flex align-items-center justify-content-center">
                            <div class="box-info ">
                                <span>1002 </span>
                                <p>cases</p>
                            </div>
                            <div class="box-info">
                                <span>23</span>
                                <p>Lawyers</p>
                            </div>
                            <div class="box-info">
                                <span>386 </span>
                                <p>Connection</p>
                            </div>
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
    .banner-two {
        background-image: url(/images/Banner/bg-dark.jpg);

        .banner-text {
            :where(p, h1, span) {
                color: white;
            }
        }

        .cont:hover {
            background: transparent;
            color: var(--primary);
        }

        .cont {
            box-shadow: 0px 4px 40px 0px #78560C;
        }

        .info {
            background: #111111CC;

            .box-info {
                background: #111111CC;
                color: white;
            }
        }
    }
}

body.rtl {
    .box-info:not(:last-child) {
        border-left: 2px solid #8E8D8D;
        border-right: none;
    }

    .what-do {
        ul {
            left: 0;
            direction: ltr;
        }
    }
}

.banner-two {
    margin-bottom: 80px;
    background-image: url(/images/Banner/Background-2.png);
    background-position: center;
    background-size: cover;

    .social-icon {
        margin: 120px 20px 0;

        a:hover {
            background: transparent;

            i {
                color: var(--primary);
            }
        }

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

.img-hol {
    img {
        transform: translateY(26px);
    }
}

.info {
    padding: 20px;
    position: absolute;
    bottom: 15%;
    left: 50%;
    transform: translateX(-50%);
    background: #F9F9F9CC;
    width: 400px;

    .box-info:not(:last-child) {
        border-right: 2px solid #8E8D8D;
    }

    .box-info {
        width: 120px;
        text-align: center;
        padding: 10px;



        span {
            font-weight: bold;
            font-size: 20px;
        }

        s p {
            color: #8E8D8D;
            font-weight: 600;
            margin: 10px 0;
            font-size: 15px;
        }
    }
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

.what-do {
    h4 {
        margin: 0 0 10px;
        font-size: 16px;
        font-weight: 700;
        white-space: nowrap;
    }

    ul {
        position: absolute;
        top: 16%;
        left: 75%;
        padding: 25px 30px;
        background-color: #6A562B;
        color: white;
        margin: 0;
    }

    li::before {
        position: absolute;
        content: "";
        width: 5px;
        height: 5px;
        background-color: white;
        border-radius: 50%;
        top: 50%;
        transform: translateY(-50%);
        left: -14px;
    }

    li {
        position: relative;
        margin-bottom: 10px;
        border-bottom: 1px solid #cccccc3d;
        padding-bottom: 5px;

    }
}

.banner-text {
    padding-top: 40px;

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

@media (max-width:992px) {
    .banner-text {
        text-align: center;
    }
}

@media (max-width:767px) {
    .banner-text {
        text-align: center;

        p {
            margin: 24px auto;
        }

        h1 {
            font-size: 54px;
        }
    }
}

@media (max-width: 539px) {
    .banner-text h1 {
        font-size: 44px;
        line-height: 50px;
    }

    .img-hol {
        h4 {
            font-size: 14px;
        }

        .list {
            font-size: 14px !important;
            z-index: 1;
            top: 3%;
            left: 68%;
            padding: 12px 25px;
        }
    }
}
</style>