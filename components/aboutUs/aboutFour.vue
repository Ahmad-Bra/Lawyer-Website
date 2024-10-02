<template>
    <div class="about-two">
        <div class="container">
            <div class="header">
                <h1>About Us</h1>
                <h3>About Us</h3>
            </div>
            <div class="row row-1 align-items-center flex-sm-column-reverse flex-lg-row">
                <div class="col-lg-6 ">
                    <div class="box-info d-flex justify-content-center ">
                        <i class="fa-solid fa-person"></i>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit consectetur dolores
                            consequuntur commodi id ullam magni! Quidem asperiores error ad, dolore aliquid aliquam
                            quasi accusantium earum omnis repellendus quia porro?</p>
                    </div>
                    <div class="box-info d-flex justify-content-center ">
                        <i class="fa-solid fa-person"></i>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit consectetur dolores
                            consequuntur commodi id ullam magni! Quidem asperiores error ad, dolore aliquid aliquam
                            quasi accusantium earum omnis repellendus quia porro?</p>
                    </div>
                    <div class="box-info d-flex justify-content-center ">
                        <i class="fa-solid fa-person"></i>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit consectetur dolores
                            consequuntur commodi id ullam magni! Quidem asperiores error ad, dolore aliquid aliquam
                            quasi accusantium earum omnis repellendus quia porro?</p>
                    </div>
                    <div class="box-info d-flex justify-content-center ">
                        <i class="fa-solid fa-person"></i>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit consectetur dolores
                            consequuntur commodi id ullam magni! Quidem asperiores error ad, dolore aliquid aliquam
                            quasi accusantium earum omnis repellendus quia porro?</p>
                    </div>
                </div>
                <div class="col-lg-6 text-center">
                    <img class="img-fluid about-img" src="/images/AboutUs/LangingPageSection/WhoWeAre3.png" alt="">
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
    .box-info {
        p {
            color: #F5F5F5 !important;
        }
    }

    .about-two {
        .header {
            h1 {
                color: #F0F0F00D;
            }

            h3 {
                color: #FFFFFF;
                ;
            }
        }
    }

}

.box-info {
    gap: 40px;
    margin-bottom: 30px;
    padding: 0px 31px;

    i {
        width: 190px;
        height: 59px;
        font-size: 29px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        color: var(--primary);
        background: #FEFAF1;
    }

    p {
        font-size: 14px;
        font-weight: 400;
        color: #989399;
        line-height: 32px;
    }
}


.header {
    margin: 40px auto;
    text-align: center;

    h1 {
        font-size: 48px;
        font-weight: 700;
        color: #0000000D;
        margin-bottom: -15px;
    }


    h3 {
        font-size: 32px;
        font-weight: 700;
        color: #000000;
    }
}


@media (max-width:1299px) {
    .box-info {
        p {
            font-size: 12px;
            line-height: 27px;
        }
    }

    .box-info {
        margin: 0;
    }

}

@media (max-width:992px) {
    .about-img {
        width: 500px;
        margin-bottom: 60px;
    }

}

@media (max-width:767px) {
    .box-info {
        p {
            font-size: 11px;
        }
    }

}

@media (max-width:576px) {
    .about-img {
        width: 350px;
        margin-bottom: 60px;
    }
}

@media (max-width:539px) {
    .box-info {
        padding: 0;
        gap: 20px;

        i {
            font-size: 20px;
            width: 250px;
        }
    }
}
</style>