<template>
    <div class="what-say">
        <img class="points" src="/images/2.Services/points.png" alt="">
        <div class="container">
            <div class="header text-center ">
                <h1>What We Do?</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor,
                </p>
            </div>
            <div class="comments" v-for="comm in 3" :key="comm">
                <div class="comm">
                    <div class="profile d-flex align-items-center justify-content-start">
                        <img src="/images/2.Services/avatar.png" alt="">
                        <div>
                            <h5>James Gordon</h5>
                            <span>Jan 20, 2023</span>
                        </div>
                    </div>
                    <div class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <p>I highly recommend this law firm. Their attention to detail and professionalism made all the
                        difference in my case.</p>
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
    .header {
        h1 {
            color: white;
        }

        p {
            color: #F0F0F0;
        }
    }


    .points {
        opacity: .1;
    }

    .comm {
        background: #2F230A;

        .profile {
            h5 {
                color: white;
            }
        }
    }

    p {
        color: #F3EAD8;
    }

}

.what-say {
    margin: 50px 0;
    position: relative;

    .points {
        right: 0;
        position: absolute;
        top: 200px;
        z-index: -1;
    }
}

.header {
    margin-bottom: 35px;

    h1 {
        font-size: 32px;
        font-weight: 700;
        margin-bottom: 24px;
    }

    p {
        font-size: 16px;
        font-weight: 400;
        max-width: 700px;
        margin: auto;
    }
}

.comments {
    .comm {
        padding: 50px;
        background: #FEF8EA;

        .profile {
            gap: 20px;
            margin-bottom: 20px;

            h5 {
                font-size: 16px;
                font-weight: 500;
                color: #211A0A;
            }

            span {
                color: #A17D1C;
                font-size: 14px;
                font-weight: 400;
            }
        }


        .stars {
            margin-bottom: 10px;

            i {
                color: #FAC738;
                margin: 0 2px;
            }
        }

        p {
            font-size: 16px;
            font-weight: 400;
        }
    }
}

@media (max-width:767px) {
    .comm {
        padding: 10px !important;
    }

    .points {
        display: none;
    }
}
</style>