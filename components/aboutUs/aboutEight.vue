<template>
    <!-- about one -->
    <div class="who-are-we">
        <div class="container">
            <div class="row ">
                <div class="about-header">
                    <span>About us</span>
                    <h1>Who We Are?</h1>
                </div>
                <div class="col-lg-6">
                    <div class="about-text">
                        <h1>We are professional legal service &
                            law</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore.Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore.Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        <div class="read-button">
                            <NuxtLink class="btn button cont" to="#"><span>READ MORE</span></NuxtLink>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="parent-img">
                        <div class="rect"></div>
                        <img src="/images/AboutUs/LangingPageSection/WhoWe2.png" alt="">
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
    .about-text {

        p,
        h1 {
            color: #ffffff !important;
        }
    }

    .btn {
        box-shadow: 0px 4px 40px 0px #78560C !important;
    }



    .about-header {
        span {
            color: #F0F0F0;
        }

        h1 {
            color: #FFFFFF;
        }
    }



    .read-button {
        .button {
            box-shadow: 0px 4px 40px 0px #78560C;
        }
    }


}








.about-two,
.who-are-we {

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










@media (max-width: 1299px) {
    .rect {
        left: 50px !important;
    }


}

@media (max-width: 1199px) {
    .parent-img {
        img {
            margin-left: 80px !important;
        }
    }


}

@media (max-width: 992px) {


    .rect {
        left: 150px !important;
    }



}

@media (max-width: 767px) {
    .parent-img {
        img {
            margin-left: 0 !important;
        }
    }

    .rect {
        left: 54px !important;
        top: 23px !important;
    }



}



@media (max-width:539px) {
    .rect {
        left: -15px !important;
        top: 23px !important;
    }
}
</style>