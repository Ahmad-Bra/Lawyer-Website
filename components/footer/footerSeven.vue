<template>
    <!-- footer one -->
    <div class="footer">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d19783.17673215492!2d37.10861469459967!3d36.21622623729515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2s!4v1714684943717!5m2!1sen!2s"
            width="100%" height="350" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        <div class="foot">
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
                            <p>Learn more about our law firm and our commitment to providing high-quality legal
                                services.
                            </p>
                            <p>© 2024 John Doe. All Rights Reserved.</p>
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


    .foot {
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
    margin: 100px 0 0;
}

.foot {
    padding: 100px 0 50px;
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
    .foot {
        margin-top: 40px;
        padding: 20px;
    }




    .end {
        font-size: 12px;

        .social-box {
            text-align: center;
        }
    }
}
</style>