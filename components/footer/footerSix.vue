<template>
    <!-- footer one -->
    <div class="footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-6">
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
                <div class="col-lg-3 col-md-6 col-sm-6">
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
                <div class="col-lg-3 col-md-6 col-sm-6">
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
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="info">
                        <h4>Stay Connected</h4>
                        <div class="social-icon">
                            <NuxtLink to="#"><i class="fa-brands fa-facebook-f"></i></NuxtLink>
                            <NuxtLink to="#"><i class="fa-brands fa-instagram"></i></NuxtLink>
                            <NuxtLink to="#"><i class="fa-brands fa-linkedin-in"></i></NuxtLink>
                        </div>
                        <h4>About</h4>
                        <p>Learn more about our law firm and our commitment to providing high-quality legal services.
                        </p>
                        <p>© 2024 John Doe. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
            <div class="end d-flex align-items-center justify-content-between">
                <ul class="d-flex align-items-center justify-content-between">
                    <li>
                        <NuxtLink to="/#"> Privacy Policy</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/#">Terms of Service </NuxtLink>
                    </li>
                </ul>
                <div class="social d-flex align-items-center">
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


</script>

<style lang="scss" scoped>
body.dark {

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

        .end {
            i {
                opacity: .5 !important;
                color: white !important;
            }
        }
    }

    .social {
        a {
            background-color: #ffffff;

            i {
                color: #ffffff !important;
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
    padding: 100px;
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

.info {
    .social-icon {
        margin: 40px 0;

        a {
            background: #000000;
            padding: 5px;
            border-radius: 5px;
            transition: 0.3s;
            margin: 0 10px;
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

    p {
        font-size: 14px;
        font-weight: 400;
        color: #000000;
    }
}

.end {
    color: white;
    border-top: 1px solid #ccc;
    font-size: 14px;
    font-weight: 400;
    padding-top: 40px;
    margin-top: 20px;

    ul {

        li {
            font-size: 14px;
            font-weight: 400;

            a {
                color: #4d4d4d;
                padding: 1px 12px;
                text-decoration: none
            }

            a:hover {
                color: var(--primary) !important;
                transition: 0.3s;
            }
        }
    }

    .social {
        color: #959595;

        i {
            margin: 0 10px;
            color: #000000;
        }
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