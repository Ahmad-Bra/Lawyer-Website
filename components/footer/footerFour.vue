<template>
    <!-- footer one -->
    <div class="footer">
        <div class="container">
            <div class="row gap-lg-2">
                <div class="col-lg-5 col-md-6 col-sm-6">
                    <div class="info">
                        <div class="logo d-flex align-items-center">
                            <img class="img-fluid" v-if="!isDark" src="/images/navbar/logo.png" alt="">
                            <img class="img-fluid" v-if="isDark" src="/images/navbar/logo-dark.png" alt="">
                        </div>
                        <p>Learn more about our law firm and our commitment to providing high-quality legal services.
                        </p>
                    </div>
                </div>
                <div class="col-lg-2 col-md-6 col-sm-6">
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
                <div class="col-lg-2 col-md-6 col-sm-6">
                    <div class="links">
                        <h4>Legal Links</h4>
                        <ul>
                            <li>
                                <NuxtLink to="#">Privacy Policy</NuxtLink>
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
                <div class="col-lg-2 col-md-6 col-sm-6">
                    <div class="links">
                        <h4>Our Services</h4>
                        <ul>
                            <li>
                                <NuxtLink to="#">Legal Consultations</NuxtLink>
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
                <div class="end d-flex align-items-center justify-content-between">
                    <div class="social-icon">
                        <NuxtLink to="#"><i class="fa-brands fa-facebook-f"></i></NuxtLink>
                        <NuxtLink to="#"><i class="fa-brands fa-instagram"></i></NuxtLink>
                        <NuxtLink to="#"><i class="fa-brands fa-linkedin-in"></i></NuxtLink>
                    </div>
                    <p>&copy; 2024 John Doe. All Rights Reserved.</p>
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

    .footer {
        background-color: #000000;

        p,
        h3,
        h5,
        h4 {
            color: #ffffff;
        }

        a {
            color: #ffffff;
            opacity: .5;
        }

        .social-icon {
            a {
                background-color: #ffffff;

                i {
                    color: #000000;
                }
            }
        }
    }
}

ul {
    margin: 0;
    padding: 0;
}

.footer {
    margin: 120px 0 0;
    padding: 100px 0 30px;
    background: #F4F2EF;
}

h4 {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 30px;
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

.end {
    border-top: 1px solid #ccc;
    margin-top: 20px;

    p {
        font-size: 14px;
        font-weight: 400;
    }

    .social-icon {
        margin: 40px 0;

        a {
            background: #4D4D4D;
            padding: 5px;
            border-radius: 5px;
            transition: 0.3s;
            margin: 0 5px;
        }

        a:hover {
            background-color: var(--primary);
            transition: 0.3s;
        }

        i {
            color: white;
            width: 20px;
            height: 20px;
            text-align: center;
        }
    }
}

.info {


    p {
        max-width: 337px;
        font-size: 14px;
        font-weight: 400;
        color: #000000;
        margin: 20px 0 40px;
    }
}



@media (max-width:767px) {
    .footer {
        margin-top: 40px;
        padding: 20px;
    }


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