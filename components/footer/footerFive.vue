<template>
    <!-- footer one -->
    <div class="footer">
        <div class="container">
            <div class="row  ">
                <div class="col-lg-2 ">
                    <div class="info">
                        <div class="logo d-flex align-items-center">
                            <img class="img-fluid" v-if="!isDark" src="/images/navbar/logo.png" alt="">
                            <img class="img-fluid" v-if="isDark" src="/images/navbar/logo-dark.png" alt="">
                        </div>
                        <p>Learn more about our law firm and our commitment to providing high-quality legal services.
                        </p>
                    </div>
                </div>
                <div class="col-lg-7 ">
                    <div class="d-flex gap-lg-5">
                        <div class="links">
                            <h4>Learn More</h4>
                            <ul>
                                <li>
                                    <NuxtLink to="#">About Lift</NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="#">Environment</NuxtLink>
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
                        <div class="links">
                            <h4>Tickets & Booking</h4>
                            <ul>
                                <li>
                                    <NuxtLink to="#">Season Passes</NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="#">Lift Tickets</NuxtLink>
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
                        <div class="links flex-grow-1">
                            <h4>Contact Us</h4>
                            <div class="contact">
                                <div class="mb-2 d-flex align-items-center justify-content-between">
                                    <span>Email:</span>
                                    <p>123-456-7890</p>
                                </div>
                                <div class="mb-2 d-flex align-items-center justify-content-between">
                                    <span>Phone::</span>
                                    <p>123-456-7890</p>
                                </div>
                                <div class="mb-2 d-flex align-items-center justify-content-between">
                                    <span>What’s app::</span>
                                    <p>123-456-7890</p>
                                </div>
                                <div class="social-icon">
                                    <NuxtLink to="#"><i class="fa-brands fa-facebook-f"></i></NuxtLink>
                                    <NuxtLink to="#"><i class="fa-brands fa-instagram"></i></NuxtLink>
                                    <NuxtLink to="#"><i class="fa-brands fa-linkedin-in"></i></NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="map" style="">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d19783.17673215492!2d37.10861469459967!3d36.21622623729515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2s!4v1714684943717!5m2!1sen!2s"
                            width="100%" height="250" style="border:0;" allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <div class="end d-flex align-items-center justify-content-center">
                    <p>&copy;2024 lawyer website | All Rights Reserved</p>
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

    .footer {
        background-color: #000000;

        .contact {
            span {
                color: #ffffff;
                opacity: .5;
            }

            p {
                color: #ffffff;
                opacity: .5;
            }
        }

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

.contact {

    span {
        font-size: 14px;
        font-weight: 400;
        color: #0A142F;
    }

    p {

        font-size: 14px;
        margin: 0;
        font-weight: bold;
    }
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

.social-icon {
    margin: 40px 0;

    a {
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
        color: black;
        width: 20px;
        height: 20px;
        text-align: center;
    }
}

.end {
    border-top: 1px solid #ccc;
    margin-top: 20px;
    padding: 30px 0 10px;

    p {
        font-size: 14px;
        font-weight: 400;
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
        padding: 10px;
    }

    .contact {

        p,
        span {
            font-size: 12px;
        }
    }

    .col-lg-7 {
        padding: 0;
    }

    .links {
        padding: 0 5px;

        h4 {
            font-size: 12px;
        }

        a {
            font-size: 11px !important;
        }
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