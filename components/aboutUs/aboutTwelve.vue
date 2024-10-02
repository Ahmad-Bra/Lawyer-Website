<template>
    <!-- about one -->
    <div class="about-info d-flex justify-content-center align-items-center">
        <div class="container">
            <div class="info">
                <span>About Us</span>
                <h1>About Us</h1>
                <p>Dive Into the Heart of Our Legal Firm and Its Dedicated Professionals</p>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-6">
                <div class="box-info d-flex justify-content-center ">
                    <i class="fa-solid fa-person"></i>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit consectetur dolores
                        consequuntur commodi id ullam magni! Quidem asperiores error ad, dolore aliquid aliquam
                        quasi accusantium earum omnis repellendus quia porro?</p>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="box-info d-flex justify-content-center ">
                    <i class="fa-solid fa-star"></i>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit consectetur dolores
                        consequuntur commodi id ullam magni! Quidem asperiores error ad, dolore aliquid aliquam
                        quasi accusantium earum omnis repellendus quia porro?</p>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="box-info d-flex justify-content-center ">
                    <i class="fa-solid fa-person"></i>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit consectetur dolores
                        consequuntur commodi id ullam magni! Quidem asperiores error ad, dolore aliquid aliquam
                        quasi accusantium earum omnis repellendus quia porro?</p>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="box-info d-flex justify-content-center ">
                    <i class="fa-solid fa-check"></i>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit consectetur dolores
                        consequuntur commodi id ullam magni! Quidem asperiores error ad, dolore aliquid aliquam
                        quasi accusantium earum omnis repellendus quia porro?</p>
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

.about-info {
    background-image: url(/images/AboutUs/LangingPageSection/Banner2.png);
    background-size: cover;
    background-position: center;
    height: 350px;
    margin-top: 80px;

    h1 {
        font-size: 40px;
        font-weight: 700;
        color: #FFFFFF;
    }

    span {
        font-size: 48px;
        font-weight: 700;
        color: #FFFFFF0D;
        margin: -17px 7px;
        display: block;
    }

    P {
        font-size: 16px;
        font-weight: 400;
        color: #FFFFFF;
        margin: 0 0 30px;
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

@media (max-width:767px) {
    .box-info {
        p {
            font-size: 11px;
        }
    }

}

@media (max-width:576px) {
    .row-1 {
        flex-direction: column-reverse;
    }

}





@media (max-width:539px) {
    .about-info {
        h1 {
            font-size: 32px;
        }

        span {
            font-size: 39px;
        }

        p {
            font-size: 11px;
        }
    }

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