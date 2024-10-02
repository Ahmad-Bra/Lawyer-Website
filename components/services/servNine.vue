<template>
    <div class="serv">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="serv-text">
                        <span>Services</span>
                        <h1>Our Services</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore.Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        <div class="read-button">
                            <NuxtLink class="btn button cont" to="#"><span>READ MORE</span></NuxtLink>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="row">
                        <div class="col-lg-6 col-md-6 " v-for="card in 4" :key="card">
                            <div class="what-do-box text-center">
                                <i class="fa-solid fa-home"></i>
                                <h4>Service name</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                                </p>
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
    .about-text {

        p,
        h1 {
            color: #ffffff !important;
        }
    }

    .btn {
        box-shadow: 0px 4px 40px 0px #78560C !important;
    }


    .read-button {
        .button {


            box-shadow: 0px 4px 40px 0px #78560C;
        }
    }

    h1 {
        color: white;
    }

    :where(h4, p) {
        color: #F0F0F0 !important;
    }
}

.read-button {
    margin-top: 32px;

    .button {
        padding: 12px 24px 12px 24px;
        font-size: 14px;
        font-weight: 500 !important;
        box-shadow: 0px 4px 40px 0px rgba(255, 232, 183, 1);
        background-color: var(--primary);
        color: white;
        border-radius: 30px;

        span {
            color: black !important;
            font-weight: 700;
        }

        i {
            margin: 0 5px;
        }
    }

    .button:hover {
        background-color: white;
        color: black;
        transition: .3s;
    }


}

.what-do-box {
    padding: 28px 18px;
    margin-bottom: 30px;
    border-radius: 20px;
    border: 1px solid var(--primary);
    transition: .3s;

    i {
        font-size: 30px;
        transition: .3s;
        background: -webkit-linear-gradient(50deg,
                #f3bc46 6.68%,
                #f346c3 64.04%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    h4 {
        font-size: 16px;
        font-weight: 700;
        margin: 20px 0;
    }

    p {
        color: #A17D1C;
        font-size: 14px;
        font-weight: 400;
        line-height: 25px;
    }
}

.serv {
    .serv-text {
        margin-bottom: 20px;

        span {
            font-size: 16px;
            font-weight: 400;
            color: #B0AFAC;
        }

        h1 {
            font-size: 35px;
            font-weight: 700;
        }

        p {
            color: var(--text-gray);
            line-height: 35px;
            font-size: 16px;
            font-weight: 400;
            margin: 20px 0;
            max-width: 400px;
        }
    }
}

@media (max-width:767px) {
    .serv-text {
        text-align: center;

        p {
            margin: 20px auto !important;
        }
    }

    .what-do-box {
        margin-bottom: 15px;
    }
}
</style>