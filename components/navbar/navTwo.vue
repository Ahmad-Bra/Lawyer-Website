<template>
    <div class="navbar d-none d-lg-block">
        <div class="container">
            <div class="parent-navbar w-100 d-flex align-items-center justify-content-between ">
                <div class="social d-flex align-items-center flex-grow-1">
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
                <div class="social-icon-two">
                    <router-link to="#"><i class="fa-brands fa-facebook-f"></i></router-link>
                    <router-link to="#"><i class="fa-brands fa-instagram"></i></router-link>
                    <router-link to="#"><i class="fa-brands fa-linkedin-in"></i></router-link>
                </div>

            </div>
            <div class="parent-2-nav w-100 d-flex align-items-center justify-content-between">
                <div class="logo d-flex align-items-center">
                    <img class="img-fluid" v-if="!isDark" src="/images/navbar/logo.png" alt="">
                    <img class="img-fluid" v-if="isDark" src="/images/navbar/logo-dark.png" alt="">
                </div>
                <ul class="d-flex align-items-center flex-grow-1">
                    <li>
                        <NuxtLink to="/">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about-us">About Us</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/services">Services</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/projects">Projects</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/contact-us">Contact Us</NuxtLink>
                    </li>
                </ul>
                <div class="d-flex align-items-center gap-3">
                    <div class="mode-box-two">
                        <i class="fa-solid fa-moon" v-if="isDark" @click="ToggleDark()"></i>
                        <i class="fa-solid fa-sun " v-if="!isDark" @click="ToggleDark()"></i>
                    </div>
                    <div class="lang d-flex align-items-center">
                        <div class="me-1" v-if="isAr" @click="ltrDir()">
                            <i class="fa-solid fa-earth"></i>
                        </div>
                        <div class="me-1" v-if="!isAr" @click="rtlDir()">
                            <i class="fa-solid fa-earth"></i>
                        </div>
                    </div>
                    <div class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Consultation<i class="fa-solid fa-chevron-right "></i>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- sm screen navbar -->

    <div class="navbar d-block d-lg-none">
        <div class="container">
            <div class="parent-nav w-100 d-flex align-items-center justify-content-between ">
                <div class="logo d-flex align-items-center">
                    <img class="img-fluid" src="/images/navbar/logo.png" alt="">
                </div>
                <div class="align-items-center d-flex align gap-3">
                    <div class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Consultation <i class="fa-solid fa-chevron-right m-1"></i>
                    </div>
                    <button class="toggle-nav " type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i class="fa-solid fa-bars"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div class="sidebar offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel">
        <div type="button" data-bs-dismiss="offcanvas" aria-label="Close">
            <i class="fa-solid fa-close"></i>
        </div>
        <ul class="d-flex align-items-center justify-content-between flex-column">
            <li> <router-link to="/">Home</router-link></li>
            <li> <router-link to="/about-us">About</router-link></li>
            <li> <router-link to="/services">Services</router-link></li>
            <li> <router-link to="/projects">projects</router-link></li>
        </ul>
        <div class="settings">
            <div class="d-flex align-items-center">
                <div class="mode dark" @click="ToggleDark()">
                    <i class=" fa-solid fa-moon"></i> Dark
                </div>
                <div class="mode light " @click="ToggleDark()">
                    <i class=" fa-solid fa-sun "></i> Light
                </div>
            </div>
        </div>
        <div class="settings">
            <div class="d-flex align-items-center">
                <div class="lang d-flex align-items-center">
                    <div class="en-box " @click="ltrDir()"><span>En</span><img class="img-fluid"
                            src="/images/navbar/England.png" alt="">
                    </div>
                    <div class="ar-box " @click="rtlDir()"><span>Ar</span><img class="img-fluid"
                            src="/images/navbar/arab.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="social d-flex align-items-center text-center gap-4">
            <div class="social-box ">
                <i class="fa-solid fa-phone mb-2"></i><span>+963987654321</span>
            </div>
            <div class="social-box ">
                <i class="fa-solid fa-message mb-2"></i><span>+lorem@lorem.gamil</span>
            </div>
            <div class="social-box ">
                <i class="fa-solid fa-location mb-2"></i><span>Street,City</span>
            </div>
        </div>

    </div>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="row row-1 align-items-center ">
                    <div class="header text-center d-flex align-items-center">
                        <i class="fa-solid fa-arrow-left" data-bs-dismiss="modal"></i>
                        <h2>Request for Legal Consultation</h2>
                    </div>
                    <div class="col-lg-12">
                        <div class="contact-parent">
                            <form @submit.prevent>
                                <div class="row ">
                                    <div class="col-lg-12">
                                        <label for="input-cont" class="form-label">Email</label>
                                        <input placeholder="EX: Eliza Maguire" type="email" id="input-cont"
                                            class="form-control" aria-describedby="passwordHelpBlock">
                                    </div>
                                    <div class="col-lg-12">
                                        <label for="input-cont" class="form-label">Full Name</label>
                                        <input placeholder="EX: Eliza Maguire@gmail.com" type="text" id="input-cont"
                                            class="form-control" aria-describedby="passwordHelpBlock">
                                    </div>
                                    <div class="col-lg-12">
                                        <label for="input-cont" class="form-label">Phone</label>
                                        <input placeholder="EX: +963987654321" type="text" id="input-cont"
                                            class="form-control" aria-describedby="passwordHelpBlock">
                                    </div>
                                    <div class="col-lg-12">
                                        <label class="form-label">Request type</label>
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>Consultation</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-floating">
                                            <textarea class="form-control" placeholder="Leave a comment here"
                                                id="floatingTextarea2" style="height: 140px; resize: none"></textarea>
                                            <label for="floatingTextarea2">Message</label>
                                        </div>
                                    </div>
                                    <button class="send">Send Request </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { useDark, useToggle } from '@vueuse/core'

export default {
    data: () => ({
        isAr: false
    }),
    methods: {
        rtlDir() {
            this.isAr = true
            document.body.classList.remove('ltr')
            document.body.classList.add("rtl")
            localStorage.setItem('dirc', 'rtl')
        },
        ltrDir() {
            this.isAr = false
            document.body.classList.remove('rtl')
            document.body.classList.add("ltr")
            localStorage.setItem('dirc', 'ltr')
        },
    }, mounted() {
        document.body.classList.add(localStorage.getItem('dirc'))
        if (document.body.classList.contains('rtl')) {
            this.isAr = true
        } else {
            this.isAr = false
        }
    },
    setup() {
        const isDark = useDark({
            selector: 'body',
            class: 'dark',
            valueDark: 'dark',
            valueLight: 'light',
        })
        const ToggleDark = useToggle(isDark)
        return {
            ToggleDark, isDark
        }
    }
}
</script>

<style lang="scss" scoped>
body.rtl {


    .ar-box,
    .light {
        border-radius: 8px 0 0 8px;
    }

    .en-box,
    .dark {
        border-radius: 0 8px 8px 0;
    }

    .btn {
        .fa-chevron-right {
            transform: rotate(180deg);
        }
    }


}

.toggle-nav {
    background-color: #222222;
    color: white;
    width: 40px;
    height: 40px;
    border-radius: 7px;
    font-size: 20px;
}

body.light {
    .light {
        color: white !important;
        background-color: var(--primary) !important;
    }
}

.light {
    background: #404040 !important;
    color: rgba(255, 255, 255, 0.3019607843) !important;
}

ul {
    padding: 0;
    margin: 0;
}

a {
    text-decoration: none !important;
}

body.dark {
    .sidebar {
        li {
            a {
                color: black !important;
            }
        }
    }

    .lang {
        color: #ffffff;
    }

    .btn:hover {
        color: white;
    }

    .btn {
        box-shadow: 0px 4px 40px 0px #735108;
    }

    .dark {
        color: #ffffff;
    }

    a {
        color: #FFFFFF !important;
    }

    .fa-moon {
        color: #ffffff;
        font-size: 20px;
        transition: .7s;
    }
}


body.light {
    .mode-box-two {
        .fa-sun {
            color: #000000;
        }
    }
}

.btn {
    background-color: #f1b42f;
    font-size: 15px;
    font-weight: 400;
    padding: 10px 20px;
    color: #ffffff;
    line-height: 24px;
    box-shadow: 0px 4px 40px 0px rgba(255, 232, 183, 1);
    text-transform: uppercase;
    display: flex;
    align-items: center;

    i {
        margin: 0 10px;
    }
}

.navbar {
    z-index: 100;
}

.lang {
    cursor: pointer;

    img {
        width: 20px;
    }

    i {
        font-size: 19px;
    }

    span {
        font-size: 15px;
        margin: 0 5px;
        font-weight: 500;
    }
}

.lang {
    background-color: transparent;
}

.ar-box,
.en-box,
.mode {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 45px;
    background: #404040;
    color: #FFFFFF4D;
    cursor: pointer;

    i {
        width: 24px;
        text-align: center;
    }
}

.sidebar {
    padding: 40px 20px;
    width: 345px;

    ul {
        width: fit-content;
        margin: 100px 0;
        gap: 24px;
        padding: 0;

        li {
            font-size: 14px;
            font-weight: 400;

            margin-right: 15px;

            a {
                color: #4d4d4d;
                padding: 5px;
            }
        }
    }

    a:hover {
        color: var(--primary);
        transition: .3s;

    }

    .en-box {
        border-radius: 8px 0 0 8px;
    }

    .ar-box {
        border-radius: 0 8px 8px 0;
    }

    .social {
        border-top: 1px solid #ccc;
        padding-top: 30px;
    }

    .lang {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 45px;
        color: #FFFFFF4D;
        margin-bottom: 60px;
        cursor: pointer;

        i {
            width: 24px;
            text-align: center;
        }
    }

    .settings {
        margin-bottom: 40px;
    }
}

.mode-box-two {
    i {
        font-size: 20px;
    }
}

.parent-2-nav {
    margin-top: 17px;

    .logo {
        img {
            width: 40px;
            margin-right: 10px;
        }
    }

    ul {

        li {
            font-size: 14px;
            font-weight: 400;
            margin-right: 15px;

            a {
                color: #4d4d4d;
                padding: 1px 12px;
                border-right: 2px solid #ccc;
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
            margin-right: 4px;
        }



        i {
            color: white;
            width: 20px;
            height: 20px;
        }
    }


}

a:hover {
    color: var(--primary);
    transition: 0.3s;
}

.parent-navbar {
    border-bottom: 1px solid #e3e1e1;
    padding: 10px 0;

    .social-icon-three {
        text-align: center;

        a {
            background: #ffffff;
            padding: 3px;
            border-radius: 50%;
            transition: 0.3s;
            margin-right: 4px;
            border: 1px solid #746B57;
        }



        i {
            color: #746B57;
            width: 20px;
            height: 20px;
            font-size: 14px;
        }
    }



    .social-icon-two {
        text-align: center;

        a {
            background: #000000;
            padding: 3px;
            border-radius: 50%;
            transition: 0.3s;
            margin-right: 4px;
            border: 1px solid white;
        }



        i {
            color: white;
            width: 20px;
            height: 20px;
            font-size: 14px;
        }
    }
}

.social-box {
    color: #c1c1c1;
    font-size: 12px;

    span {
        font-weight: 400;
    }

    i {
        font-size: 12px;
        color: #959595;
        margin: 0 5px;

    }
}

.parent-navbar {
    background: #2F230A;
    padding: 10px;
}
</style>