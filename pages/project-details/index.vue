<template>
    <div class="pro-det">
        <div class="container">
            <div class="box-content">
                <div><span class="res">Research</span><span class="law">Law firm</span></div>
                <h5>Landmark Trial Victory</h5>
                <ul class=" time ">
                    <div class="d-flex align-items-center gap-3">
                        <div class="d-flex align-items-center ">
                            <i class="fa-regular fa-calendar"></i>
                            <li>28/4/2022</li>
                            <li class="mx-1">~</li>
                            <li>28/4/2022</li>
                        </div>
                        <li><i class="fa-solid fa-location"></i>Aleppo, Syria</li>
                        <li><i class="fa-regular fa-clock"></i>24 Hours</li>
                    </div>
                </ul>
            </div>
            <div class="content">
                <h5>Introduction</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua</p>
                <h5>Purpose and Goals.</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua</p>
                <div class="img-holder">
                    <img class="img-fluid" src="/images/projects/project-details.png" alt="">
                    <p>This is a italic font style to describe the photo.</p>
                </div>
                <h5>content</h5>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus quos molestias consequatur
                    quisquam expedita porro facilis corporis rerum distinctio sapiente beatae architecto, quidem soluta
                    quae quo earum accusantium a hic.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus quos molestias consequatur
                    quisquam expedita porro facilis corporis rerum distinctio sapiente beatae architecto, quidem soluta
                    quae quo earum accusantium a hic.</p>
                <div class="prog-box">
                    <h5>Client Success Rate.</h5>
                    <p>Our firm achieves an 85% success rate in personal injury claims.</p>
                    <div class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75"
                        aria-valuemin="0" aria-valuemax="100">
                        <span>85% </span>
                        <div class="progress-bar" style="width: 75%"></div>
                    </div>
                </div>
                <h5>Client Testimonials.</h5>
                <div class="testemonials">
                    <img src="/images/projects/profile.png" alt="">
                    <i class="fa-solid fa-quote-left ql"></i>
                    <i class="fa-solid fa-quote-left qr"></i>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
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
.content {
    padding: 30px 0;

    h5 {
        font-size: 16px;
        font-weight: 700;
        position: relative;
        margin: 16px;
    }

    h5::before {
        content: '';
        position: absolute;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: black;
        transform: translateY(-50%);
        top: 50%;
        left: -20px;
    }

    p {
        font-size: 16px;
        font-weight: 400;
        color: #111111;
        margin-bottom: 50px;
        line-height: 32px;
    }

    .img-holder {
        text-align: center;

        img {}

        p {
            margin: 30px auto;
            font-size: 13px;
            font-style: italic;
            color: #666666;
        }
    }

    .prog-box {
        margin: 30px 0;
        padding: 30px 0 40px;
        position: relative;
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;

        .progress {
            height: 10px;

            span {
                position: absolute;
                right: 0;
                top: 120px;
                font-weight: bold;
                font-size: 16px;
            }

            .progress-bar {
                background: var(--primary);
            }
        }
    }

    .testemonials {

        position: relative;
        margin: 130px 0 0;
        text-align: center;
        padding: 100px;
        border: 1px solid #ccc;
        border-radius: 10px;

        img {
            position: absolute;
            top: -75px;
            left: 50%;
            transform: translateX(-50%)
        }

        p {
            font-style: italic;
            margin: 0 !important;
        }

        .ql {
            font-size: 50px;
            color: var(--primary);
            position: absolute;
            left: 46px;
            top: 45px;
        }

        .qr {
            font-size: 50px;
            color: var(--primary);
            position: absolute;
            right: 45px;
            bottom: 45px;
        }
    }
}

.box-content {

    padding: 30px 0;
    border-bottom: 1px solid #ccc;

    .res,
    .law {
        display: inline-block;
        font-size: 10px;
        color: #E9A40E;
        font-weight: 500;
        background: #FFFAEE;
        padding: 8px 10px;
        border-radius: 17px;
        margin: 10px 5px;
    }

    .res {
        color: #9747FF;
        background: #F5EEFF;
    }

    h5 {
        font-size: 36px;
        font-weight: 700;
    }

    p {
        font-size: 14px;
        font-weight: 400;
        margin: 10px 0;
    }

    .time {
        padding: 0;
        margin: 0;

        li {
            padding: 5px 0;
            font-weight: 500;
            font-size: 12px;

            span {
                font-size: 12px;
            }
        }

        i {
            margin: 0 10px;
        }
    }
}

@media (max-width:767px) {
    .box-content {
        h5 {
            font-size: 30px;
        }

        li {
            font-size: 10px !important;
        }
    }

    .progress {
        span {
            top: 125px !important;
        }
    }

    .testemonials {
        margin: 70px 0 !important;
        padding: 50px 40px !important;
    }

    .ql {
        font-size: 35px !important;
        top: 20px !important;
        left: 20px !important;
    }

    .qr {
        font-size: 35px !important;
        right: 20px !important;
        bottom: 20px !important;
    }
}

@media (max-width:539px) {
    .progress {
        span {
            top: 150px !important;
        }
    }
}
</style>