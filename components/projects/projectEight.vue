<template>
    <div class="recent-parent mt-5">
        <div class="container">
            <div class="title m-auto w-50 text-center ">
                <h1>Our Recent Case Studies</h1>
            </div>
            <div class="row mt-5">
                <div class="col-md-6">
                    <div class="content">
                        <h5>Project type </h5>
                        <h1>Project Title</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <NuxtLink to="/project-details" class="read-more">View all projects<i
                                class="fa-solid fa-chevron-right m-1"></i></NuxtLink>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="img-holder">
                        <div class="rect"></div>
                        <img src="/images/projects/project-4.png" alt="">
                    </div>
                </div>
            </div>
            <div class="row mt-5 ">
                <div class="col-md-6">
                    <div class="content">
                        <h5>Project type </h5>
                        <h1>Project Title</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <NuxtLink to="/project-details" class="read-more">View all projects<i
                                class="fa-solid fa-chevron-right m-1"></i></NuxtLink>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="img-holder">
                        <div class="rect"></div>
                        <img src="/images/projects/project-4.png" alt="">
                    </div>
                </div>
            </div>
            <NuxtLink to="/project-details" class="view-all">View all projects<i
                    class="fa-solid fa-chevron-right m-1"></i>
            </NuxtLink>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {

        }
    },


}
</script>

<style lang="scss" scoped>
body.dark {
    .title {
        h1 {
            color: #ffffff;
        }
    }

    .read-more {
        box-shadow: none;
    }

    .content {
        h1 {
            color: white;
        }

        p {
            color: #F0F0F0;
        }

        .read-more:hover {
            color: var(--primary);
        }

        .read-more {
            color: #F0F0F0;

        }
    }
}

body.rtl {

    .view-all,
    .read-more {
        i {
            transform: rotate(180deg);
        }
    }
}

.title {
    margin-bottom: 60px;

    h1 {
        font-size: 32px;
        font-weight: 700;
    }
}

.content {
    h5 {
        font-size: 14px;
        font-weight: 700;
        color: #F1B42F;
        border-bottom: 2px solid #F1B42F;
        padding: 20px 0;
        position: relative;
    }

    h5::before {
        content: '';
        position: absolute;
        border-width: 10px 10px 10px 10px;
        border-color: #F1B42F transparent transparent #F1B42F;
        border-style: solid;
        top: -10px;
        left: 0;
    }

    h1 {
        font-size: 28px;
        font-weight: 700;
        margin: 32px 0;
    }

    p {
        font-size: 14px;
        font-weight: 400;
        color: #555555;
        line-height: 24px;
    }

}

.read-more:hover {
    transition: .3s;
    background-color: rgb(255, 232, 183);
}


.view-all {
    background: var(--primary);
}

.view-all,
.read-more {
    transition: .3s;
    display: block;
    padding: 15px 30px;
    border-radius: 20px;
    color: white;
    width: fit-content;
    margin: auto;
    text-decoration: none;
    font-weight: 500;
    font-size: 14px;
}

.img-holder {
    position: relative;
    display: flex;
    justify-content: center;

    img {
        max-width: 100%;
    }

    .rect {
        position: absolute;
        left: 156px;
        top: 23px;
        background: var(--primary);
        width: 250px;
        height: 271px;
        z-index: -1;
    }
}

.edit-row {
    padding-left: 100px;
}

.edit-row {
    .rect {
        left: 128px !important;
    }
}

@media (max-width:1299px) {
    .rect {
        left: 110px !important;
    }

    .edit-row {
        .rect {
            left: 37px !important;
        }
    }
}

@media (max-width:1199px) {
    .rect {

        left: 59px !important;
    }
}

.edit-row {
    .rect {
        width: 224px;
        height: 222px;
        left: 41px;
    }
}


@media (max-width:992px) {

    .rect {
        width: 224px !important;
        height: 222px !important;
        left: 24px !important;
    }

    .edit-row {
        padding: 50px;

        .rect {
            left: 25px !important;
            width: 170px !important;
            height: 180px !important;
        }
    }

}

@media (max-width:767px) {
    .title {
        h1 {
            font-size: 25px !important;
        }
    }

    .edit-row {
        padding: 0;

        .rect {
            left: 94px !important;
            width: 250px !important;
            height: 250px !important;
        }
    }

    .rect {
        left: 110px !important;
    }
}
</style>
