<template>
    <div class="why-clients">
        <div class="container">
            <div class="clients-text">
                <h1>Meet Out Team</h1>
                <p>Meet the experienced attorneys who comprise the backbone of our firm. From seasoned litigators to
                    skilled negotiators, our diverse team is dedicated to advocating for our clients' best interests.
                </p>
            </div>
            <div class="row align-items-center">
                <div class="col-lg-4 col-md-4">
                    <div class="rate-box">
                        <h5>Cases Won</h5>
                        <span>98%</span>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4">
                    <div class="rate-box">
                        <h5>Happy Clients</h5>
                        <span>350+</span>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4">
                    <div class="rate-box">
                        <h5>Awards Won</h5>
                        <span>18</span>
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
    .rate-box {
        color: white;
        background: #392904;
    }

    .clients-text {
        p {
            color: #F0F0F0;
        }
    }
}

.why-clients {
    margin: 40px 0;

    .clients-text {
        margin: 20px auto 60px;
        text-align: center;
        max-width: 600px;

        h1 {
            font-size: 40px;
            font-weight: 700;
            color: var(--primary);
            margin-bottom: 20px;
        }

        p {
            font-size: 16px;
            font-weight: 400;
            color: var(--text-gray);
            line-height: 24px;
        }
    }

    .rate-box {
        background: #F5EDDB;
        border-radius: 12px;
        padding: 25px;
        margin-bottom: 20px;

        h5 {
            font-size: 16px;
            font-weight: 500;
        }

        span {
            font-size: 24px;
            font-weight: 700;
        }
    }
}

@media (max-width:767px) {
    .rate-box {
        text-align: center;
    }
}
</style>