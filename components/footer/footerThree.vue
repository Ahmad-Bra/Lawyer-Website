<template>
    <div class="footer">
        <div class="circul"></div>
        <div class="container">
            <div class="parent">
                <div class="sub">
                    <div class="field ">
                        <div class="box d-flex align-items-center justify-content-center gap-5">
                            <p>Subscribe Newsletters</p>
                            <div class="feild">
                                <input class="w-75" type="text" placeholder="Enter your email">
                                <input class="w-25" type="submit" value="Subcribe Now">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="links d-flex align-items-center justify-content-between">
                    <ul class="d-flex align-items-center justify-content-between">
                        <li>
                            <NuxtLink to="/">Home</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/about-us">About Us</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/services">Services</NuxtLink>
                        </li>
                    </ul>
                    <div class="social-icon">
                        <NuxtLink to="#"><i class="fa-brands fa-facebook-f"></i></NuxtLink>
                        <NuxtLink to="#"><i class="fa-brands fa-instagram"></i></NuxtLink>
                        <NuxtLink to="#"><i class="fa-brands fa-linkedin-in"></i></NuxtLink>
                    </div>
                </div>
            </div>
            <div class="end d-flex align-items-center justify-content-between">
                <p>&copy; 2024 John Doe. All Rights Reserved.</p>
                <div>
                    <img class="img-fluid" v-if="!isDark" src="/images/navbar/logo.png" alt="">
                    <img class="img-fluid" v-if="isDark" src="/images/navbar/logo-dark.png" alt="">
                </div>
                <ul class="d-flex align-items-center justify-content-between">
                    <li>
                        <NuxtLink to="/">Privacy Policy</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about-us">Terms of Service </NuxtLink>
                    </li>
                </ul>
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

    li a {
        color: white !important;
    }

    .end {
        border-top: 1px solid #777;

        p {
            color: white;
        }
    }
}

.footer {

    position: relative;
    overflow: hidden;

    .circul {
        width: 1858px;
        height: 461px;
        position: absolute;
        background: #FEAE00;
        opacity: .05;
        border-radius: 0 0 130% 130%;
        top: -31%;
        left: 50%;
        z-index: -1;
        transform: translateX(-50%);
    }

    .parent {
        padding: 200px 100px 50px;

        .sub {
            background: #2F230A;
            padding: 50px;
            box-shadow: 0 9px 19px rgba(0, 0, 0, 0.5019607843);
            border-radius: 12px;

            p {
                color: white;
                font-size: 24px;
                font-weight: 500;
            }

            .feild {
                border-radius: 12px;
                margin: 16px 0 40px;
                display: flex;
                align-items: center;
                flex: 1;

                input[type='text'] {
                    border: none;
                    outline: none;
                    background-color: white;
                    padding: 10px;
                    height: 36px;
                }

                input[type='submit'] {
                    border: none;
                    outline: none;
                    background-color: var(--primary);
                    color: white;
                    font-size: 10px;
                    padding: 12px;
                    height: 36px;
                }

                input[type='text']::placeholder {
                    font-size: 12px;
                    font-weight: 400;
                }
            }
        }
    }

    .end {
        color: white;
        border-top: 1px solid #ccc;
        font-size: 14px;
        font-weight: 400;
        padding-top: 40px;
        margin: 0 0 30px;

        p {
            margin: 0;
            color: #2F230A;
        }

    }

    ul {
        gap: 30px;
        padding: 0;
        margin: 0;

        li {
            font-size: 14px;
            font-weight: 400;

            a {
                text-decoration: none;
                color: #000000;
                padding: 1px 12px;
            }

            a:hover {
                color: var(--primary) !important;
                transition: 0.3s;
            }
        }
    }
}

.links {
    margin-top: 30px;

    ul {
        gap: 30px;
        padding: 0;
        margin: 0;

        li {
            font-size: 14px;
            font-weight: 400;

            a {
                text-decoration: none;
                color: #000000;
                padding: 1px 12px;
            }

            a:hover {
                color: var(--primary) !important;
                transition: 0.3s;
            }
        }
    }

    .social-icon {
        text-align: center;

        a {
            background: #000000;
            padding: 5px;
            border-radius: 5px;
            transition: 0.3s;
            margin: 7px;
        }

        i {
            color: white;
            width: 20px;
            height: 20px;
        }
    }
}

@media (max-width: 1199px) {
    .feild p {
        font-size: 20px !important;
    }

}

@media (max-width:992px) {
    .circul {
        top: -50% !important;
    }

    .box {
        flex-direction: column;
        gap: 10px !important;
    }

    .parent .sub .feild {
        width: 100%;
    }

    .parent {
        padding: 150px 20px 30px !important;
    }
}

@media (max-width:767px) {
    .circul {
        top: -81% !important;
    }

    .footer {
        ul {
            gap: 10px;

            li {
                font-size: 10px;

                a {
                    padding: 0;
                }
            }
        }
    }

    .parent {
        padding: 49px 0 10px !important;
    }
}

@media (max-width:539px) {
    .end {
        gap: 10px;

        p {
            font-size: 14px;
        }
    }

    .sub {
        padding: 30px !important;
    }

    input[type='submit'] {
        font-size: 9px !important;
        padding: 6px !important;
    }
}
</style>
