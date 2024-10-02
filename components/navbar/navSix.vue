<template>
    <div class="navbar d-none d-md-block">
        <div class="container">
            <div class="parent-2-nav w-100 d-flex align-items-center justify-content-between">
                <div class="logo d-flex align-items-center">
                    <img class="img-fluid" v-if="!isDark" src="/images/navbar/logo.png" alt="">
                    <img class="img-fluid" v-if="isDark" src="/images/navbar/logo-dark.png" alt="">
                </div>
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
                    <div data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <img src=" /images/navbar/Vector.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- sm screen navbar -->

    <div class="navbar d-block d-md-none">
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
        <div type="button" class="close-btn " data-bs-dismiss="offcanvas" aria-label="Close">
            <i class="fa-solid fa-close"></i>
        </div>
        <form class="form">
            <label for="search">
                <input required="" autocomplete="off" placeholder="search your chats" id="search" type="text">
                <div class="icon">
                    <svg stroke-width="2" stroke="currentColor" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg" class="swap-on">
                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-linejoin="round"
                            stroke-linecap="round"></path>
                    </svg>
                </div>
            </label>
        </form>
        <ul class="d-flex align-items-center justify-content-between text-center flex-column">
            <li> <router-link to="/">Home</router-link></li>
            <li> <router-link to="/about-us">About</router-link></li>
            <li> <router-link to="/services">Services</router-link></li>
            <li> <router-link to="/projects">projects</router-link></li>
        </ul>
        <div class="social-icon">
            <router-link to="#"><i class="fa-brands fa-facebook-f"></i></router-link>
            <router-link to="#"><i class="fa-brands fa-instagram"></i></router-link>
            <router-link to="#"><i class="fa-brands fa-linkedin-in"></i></router-link>
        </div>
        <div class="settings mt-5">
            <div class="d-flex  justify-content-between align-items-center px-5">
                <div class="mode-btn">
                    <i class="fa-solid fa-moon" @click="ToggleDark()"></i>
                    <i class="fa-solid fa-sun " @click="ToggleDark()"></i>
                </div>
                <div class="lang d-flex align-items-center">
                    <div class="en " v-if="isAr" @click="ltrDir()">
                        <span>En</span>
                    </div>
                    <div class="ar " v-if="!isAr" @click="rtlDir()">
                        <span>Ar</span>
                    </div>
                </div>
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
body.light {
    .fa-sun {
        color: #ffffff;
        font-size: 20px;
        transition: .7s;
    }

    .light {
        color: #ffffff;
    }

    .mode-box-two {
        .fa-sun {
            color: #000000;
        }
    }
}

body.rtl {

    .cosn-btn i,
    .header i,
    .btn i {
        transform: rotate(180deg);
    }
}

body.dark {
    textarea label {
        color: black !important;
    }

    .header,
    label,
    .btn {
        color: #FFFFFF;
    }

    .btn,
    .send {
        box-shadow: 0px 4px 40px 0px #735108;
    }

    .modal-content,
    .modal-dialog {
        background-color: var(--dark) !important;
        ;
    }

    .sidebar {
        background: #000000;

        .form {
            background: transparent !important;

            input {
                color: white;
            }
        }

        .close-btn i {
            color: white;
        }
    }

    .btn {
        color: #FFFFFF !important;
    }

    .btn:hover {
        background: transparent;
        color: white;
    }

    .btn,
    .send {
        box-shadow: 0px 4px 40px 0px #735108;
    }

    .sidebar {
        background: #000000;

        .form {
            background: transparent !important;

            input {
                color: white;
            }
        }

        .close-btn i {
            color: white;
        }
    }

    a {
        color: #FFFFFF !important;
    }

    .dark {
        color: #ffffff;
    }

    .fa-moon {
        color: #ffffff;
        font-size: 20px;
        transition: .7s;
    }

    .lang {
        color: #ffffff;
    }
}

ul {
    padding: 0;
    margin: 0;
}

a {
    text-decoration: none !important;
}


.lang {
    background-color: transparent;
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

a:hover {
    color: var(--primary);
    transition: 0.3s;
}

.close-btn {
    width: fit-content;
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

.toggle-nav {
    background-color: #222222;
    color: white;
    width: 40px;
    height: 40px;
    border-radius: 7px;
    font-size: 20px;
}

.sidebar {
    padding: 40px 20px;
    width: 345px;

    ul {
        margin: 50px 0;
        gap: 24px;
        padding: 0;

        li {
            font-size: 14px;
            font-weight: 400;
            margin-right: 15px;
            border-bottom: 1px solid #ccc;
            width: 100%;
            padding: 10px 0;

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



    .mode-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 45px;
        background: #404040;
        color: #FFFFFF4D;
        cursor: pointer;
        background-color: var(--secondery-blue);
        border-radius: 29px;
        gap: 6px;
        width: 84px;
        height: 47px;

        i {
            width: 24px;
            text-align: center;
        }
    }
}




// modal
.modal-dialog {
    background-color: white;
    padding: 28px;
    border-radius: 15px;

    .modal-content {
        border: none;
    }

    .header {
        h2 {
            font-size: 18px;
            font-weight: 700;
            margin: 10px auto;
        }

        i {
            font-size: 18px;
            font-weight: 700;
            margin: 0;
            cursor: pointer;

        }
    }
}

.cons-btn {
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
    padding: 0 30px;
    cursor: pointer;
}

.form {
    --input-bg: #FFf;
    --padding: 1.5em;
    --rotate: 80deg;
    --gap: 2em;
    --icon-change-color: #15A986;
    --height: 40px;
    /*  height */
    padding-inline-end: 1em;
    background: var(--input-bg);
    position: relative;
    border-radius: 4px;
}

.form label {
    display: flex;
    align-items: center;
    width: 100%;
    height: var(--height);
    border: 1px solid;
    border-radius: 10px;
    margin-top: 20px;
}

.form input {
    width: 100%;
    padding: 10px 20px;
    outline: none;
    background: none;
    border: 0;
}

.form svg {
    /* display: block; */
    color: #111;
    transition: 0.3s cubic-bezier(.4, 0, .2, 1);
    position: absolute;
    height: 15px;
}

/* search icon */
.icon {
    position: absolute;
    right: -513px !important;
    transition: 0.3s cubic-bezier(.4, 0, .2, 1);
    display: flex;
    justify-content: center;
    align-items: center;
}

/* arrow-icon*/
.swap-off {
    transform: rotate(-80deg);
    opacity: 0;
    visibility: hidden;
}

.form input:focus~.icon {
    transform: rotate(var(--rotate)) scale(1.3);
}

.form input:focus~.icon .swap-off {
    opacity: 1;
    transform: rotate(-80deg);
    visibility: visible;
    color: var(--icon-change-color);
}

.form input:focus~.icon .swap-on {
    opacity: 0;
    visibility: visible;
}

.form input:valid~.icon {
    transform: scale(1.3) rotate(var(--rotate))
}

.form input:valid~.icon .swap-off {
    opacity: 1;
    visibility: visible;
    color: var(--icon-change-color);
}

.form input:valid~.icon .swap-on {
    opacity: 0;
    visibility: visible;
}

.contact-parent {
    padding: 10px;

    .form-control {
        margin-bottom: 16px;
        border-radius: 15px;
    }


    .form-floating {
        margin: 20px 0 40px;
    }

    input::placeholder {
        font-size: 14px;
        font-weight: 400;
        color: #999BA1;
    }

    label {
        font-size: 14px;
        font-weight: 700;
    }

    .form-select {
        border-radius: 15px;
    }

    .form-select:focus,
    .form-control:focus {
        box-shadow: none;

    }

    .send:hover {
        background-color: transparent;
        border: 1px solid var(--primary);
        transition: .3s;
        color: var(--primary);
    }

    .send {
        background-color: var(--primary);
        color: white;
        outline: none;
        border: none;
        border-radius: 12px;
        height: 51px;
        box-shadow: 0px 4px 40px 0px #FFE8B7;
    }
}
</style>