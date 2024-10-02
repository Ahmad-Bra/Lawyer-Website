<template>
    <div class="footer-two">
        <div class="circul"></div>
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-3 mb-5">
                    <div class="social-box">
                        <div class="logo d-flex align-items-center">
                            <img class="img-fluid" v-if="!isDark" src="/images/navbar/logo.png" alt="">
                            <img class="img-fluid" v-if="isDark" src="/images/navbar/logo-dark.png" alt="">
                        </div>
                        <p>Learn more about our law firm and our commitment to providing high-quality legal services.
                        </p>
                        <div class="social-icon-three">
                            <NuxtLink to="#"><i class="fa-brands fa-facebook-f"></i></NuxtLink>
                            <NuxtLink to="#"><i class="fa-brands fa-instagram"></i></NuxtLink>
                            <NuxtLink to="#"><i class="fa-brands fa-linkedin-in"></i></NuxtLink>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-3  mb-5">
                    <div class="links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li>
                                <NuxtLink to="#">Home</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="#">Home</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="#">Home</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="#">Home</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="#">Home</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="#">Home</NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3 col-md-3 mb-5">
                    <div class="links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li>
                                <NuxtLink to="#">Home</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="#">Home</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="#">Home</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="#">Home</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="#">Home</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="#">Home</NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3 col-md-3 mb-5">
                    <div class="contact-box">
                        <h3>Stay Connected</h3>
                        <div class="feild">
                            <input class="w-75" type="text" placeholder="Enter your email">
                            <input class="w-25" type="submit" value="Subcribe Now">
                        </div>
                        <div class="latest-news ">
                            <h3>Latest news</h3>
                            <div class="box-news gap-2 d-flex align-items-center justify-content-center">
                                <div class="img-holder">
                                    <img class="img-fluid w-100" src="/images/7.Footer/1.png" alt="">
                                </div>
                                <div>
                                    <h5>Lorem ipsum</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                </div>
                            </div>
                            <div class="box-news gap-2 d-flex align-items-center justify-content-center">
                                <div class="img-holder">
                                    <img class="img-fluid w-100" src="/images/7.Footer/3.png" alt="">
                                </div>
                                <div>
                                    <h5>Lorem ipsum</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="end d-flex align-items-center justify-content-between">
                <p class="">&copy; 2024 John Doe. All Rights Reserved.</p>
                <div class="social d-flex align-items-center ">
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
    .footer-two {
        .circul {
            background: #000000;
        }
    }
}

.circul {
    width: 2500px;
    height: 100%;
    border-radius: 50% 50% 0 0;
    position: absolute;
    background: #2F230A;
    z-index: -1;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
}

.links {

    li {
        margin-bottom: 16px;

        a {
            text-decoration: none;
            color: #000000;
            opacity: .7;
            font-size: 14px;
            font-weight: 400;
            padding: 5px;
        }

        a:hover {
            transition: .3s;
            color: var(--primary)
        }
    }
}

.footer-two {
    position: relative;
    padding: 160px 0 60px;
    overflow: hidden;
    margin-top: 100px;

    .links {
        margin: 0 20px;
        color: white;

        a {
            color: white;
        }
    }

    .social-box {
        p {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            margin-top: 20px;
            margin-bottom: 102px;
            color: white;
        }
    }

    .social-icon-three {
        width: 100%;

        a {
            padding: 8px;
            border-radius: 50%;
            transition: 0.3s;
            margin: 10px;
            border: 1px solid #ffffff;
            text-align: center;
        }

        i {
            color: #ffffff !important;
            transition: .3s;
            font-size: 13px;
        }
    }

    .latest-news {
        h5 {
            font-size: 12px;
            font-weight: 700;
            padding-top: 15px;
        }

        p {
            font-size: 12px;
            font-weight: 400;
        }
    }

    .contact-box {
        color: white;

        .feild {
            border-radius: 12px;
            margin: 16px 0 40px;
            display: flex;
            align-items: center;
        }

        input[type='text'] {
            border: none;
            outline: none;
            background-color: white;
            padding: 5px;
            height: 36px;
        }

        input[type='submit'] {
            border: none;
            outline: none;
            background-color: var(--primary);
            color: white;
            font-size: 9px;
            padding: 5px;
            height: 36px;
        }

        input[type='text']::placeholder {
            font-size: 12px;
            font-weight: 400;
        }

        h3 {
            font-size: 16px;
            font-weight: 700;
        }
    }

}


.end {
    color: white;
    border-top: 1px solid #ccc;
    font-size: 14px;
    font-weight: 400;
    padding-top: 40px;

    p {
        margin: 0;
        color: white;
    }

    .social {
        color: #959595;

        i {
            margin: 0 10px;
        }
    }
}

@media (max-width:992px) {


    .footer-two .social-icon-three a {
        margin: 0 5px;
    }

    .box-news {

        p,
        h5 {
            font-size: 9px !important;
        }
    }

}

@media (max-width:767px) {
    .box-news {
        margin-bottom: 10px;

        p,
        h5 {
            font-size: 12px !important;
        }
    }

    .footer-two {
        padding: 120px 0 60px;
        margin-top: 50px;

    }

    .end {
        font-size: 12px;

        .social-box {
            text-align: center;
        }
    }
}
</style>