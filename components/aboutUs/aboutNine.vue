<template>
    <div class="who-parent ">
        <div class="container">
            <div class="title m-auto w-50 text-center">
                <h1>Who We Are?</h1>
                <p>Get to Know the Team Behind Your Trusted Legal Advocates</p>
            </div>
            <div class="row">
                <div class="col-lg-6">
                    <div class="img-holder">
                        <img class="img-fluid" src="/images/AboutUs/1.png" alt="">
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="about-content ">
                        <span>ABOUT US</span>
                        <h1 class=" mb-sm-4">We are professional legal service &
                            law</h1>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore.Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore.Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        <div class="read-more">
                            <NuxtLink to="#">Read more
                                <i class="fa-solid fa-chevron-right m-1"></i>
                            </NuxtLink>
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
body.rtl {
    .fa-chevron-right {
        transform: rotate(180deg);
    }

    .who-parent::after {
        left: -94% !important;
        margin: auto;
    }
}

body.dark {
    .rate-box {
        background: #392904;

        h5,
        span {
            color: white;
        }
    }

    .comp-text {
        p {
            color: #ffffff !important;
        }
    }

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

    .title {
        h1 {
            color: #ffffff;
        }



        p {
            color: #F0F0F0;
        }
    }

    .about-content {

        span,
        h1 {
            color: #ffffff !important;
        }
    }

    .who-parent {
        .read-more {
            box-shadow: 0px 4px 40px 0px #600789;
        }
    }
}


.title {
    margin-bottom: 40px !important;

    h1 {
        font-size: 32px;
        font-weight: 700;
    }

    p {
        max-width: 600px;
        color: var(--text-gray);
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        margin-top: 20px;
    }


}

.who-parent::after,
.who-parent::before {
    position: absolute;
    content: '';
    background-color: var(--primary);
    width: 175px;
    height: 82px;
}

.who-parent::after {
    right: 0;
    top: 70%;
    width: 140px;
}

.who-parent {
    position: relative;

    .img-holder {
        position: relative;

        img {
            width: 100%;
        }
    }

    .img-holder::before {
        position: absolute;
        content: '';
        inset: 0;
        background-color: rgba(0, 0, 0, .3);
    }

    .about-content {
        padding: 25px 20px;

        span {
            font-size: 14px;
            font-weight: 700;
        }

        p {
            font-size: 12px;
            line-height: 24px;
            font-weight: 500;
            color: #989399;
            margin-bottom: 40px;
        }

        h1 {
            font-size: 40px;
            line-height: 48px;
            font-weight: 700;
            max-width: 412px;
            margin-block: 18px;
        }

        .read-more {
            background-color: var(--secondery-purp);
            text-transform: uppercase;
            padding: 10px 20px;
            border-radius: 12px;
            width: fit-content;
            box-shadow: 0px 4px 40px 0px #E8B7FF;

            a {
                text-decoration: none;
                color: white;
            }
        }
    }

}


@media (max-width:1299px) {
    .who-parent::after {
        width: 125px;
    }
}

@media (max-width:1199px) {
    .who-parent::after {
        width: 100px;
    }
}

@media (max-width:992px) {
    .who-parent::after {
        width: 125px;
    }

    .img-parent {

        margin: 0 auto 30px !important;
    }

    .row-1 {
        flex-direction: column-reverse;
    }
}

@media (max-width:767px) {
    .who-parent::after {
        top: 68%;
    }

    .img-parent {
        max-width: 400px;
    }

    .about-content {
        margin-bottom: 20px;

        h1 {
            font-size: 32px !important;
        }
    }
}

@media (max-width:567px) {
    .who-parent::after {
        width: 0px;
    }

    .who-parent::before {
        width: 100px;
    }
}
</style>