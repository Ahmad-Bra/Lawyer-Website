<template>
    <div class="contact my-5">
        <div class="container">
            <div class="row gy-5 gy-lg-0">
                <div class="col-lg-6">
                    <div class="cont-us">
                        <h1>Contact Us</h1>
                        <div class="box d-flex align-items-center justify-content-center ">
                            <div class="icon">
                                <i class="fa-solid fa-location-dot"></i>
                            </div>
                            <div class="text flex-grow-1">
                                <p>1901 Thornridge Cir. Shiloh, Hawaii 81063.</p>
                            </div>
                        </div>
                        <div class="box d-flex align-items-center justify-content-center ">
                            <div class="icon">
                                <i class="fa-regular fa-envelope"></i>
                            </div>
                            <div class="text flex-grow-1">
                                <p>tanya.hill@example.com.</p>
                            </div>
                        </div>
                        <div class="box d-flex align-items-center justify-content-center ">
                            <div class="icon">
                                <i class="fa-solid fa-phone"></i>
                            </div>
                            <div class="text flex-grow-1">
                                <p>(505) 555-0125 / (308) 555-0121</p>
                            </div>
                        </div>
                        <div class="box d-flex align-items-center justify-content-center ">
                            <div class="icon">
                                <i class="fa-solid fa-fax"></i>
                            </div>
                            <div class="text flex-grow-1">
                                <p>+44 161 999 8888</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="form">
                        <h1>Get in touch with us!</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        </p>
                        <div class="inp">
                            <i class="fa-solid fa-user"></i>
                            <input placeholder="full name" type="email" id="input-cont" class="form-control"
                                aria-describedby="passwordHelpBlock">
                        </div>
                        <div class="inp">
                            <i class="fa-regular fa-envelope"></i>
                            <input placeholder="full name" type="email" id="input-cont" class="form-control"
                                aria-describedby="passwordHelpBlock">
                        </div>
                        <div class="inp">
                            <i class="fa-solid fa-phone"></i>
                            <input placeholder="full name" type="email" id="input-cont" class="form-control"
                                aria-describedby="passwordHelpBlock">
                        </div>
                        <div class="inp">
                            <select class="form-select" aria-label="Default select example">
                                <option>Consultation</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div class="inp">
                            <div class="form-floating">
                                <textarea class="form-control pt-4" placeholder="Leave a comment here"
                                    id="floatingTextarea2" style="height: 100px"></textarea>
                                <label for="floatingTextarea2">write your message</label>
                            </div>
                        </div>
                        <button class="send ps-2">Send Message </button>
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
body.rtl {
    .form {
        p::before {
            right: 0;
        }
    }

    .form-select {
        background-position: left 0.75rem center;
    }
}

body.dark {

    .cont-us {
        background: #000000;
    }

    .form {
        background: transparent;
        border: none !important;

        .send {
            box-shadow: none;
        }

        p {
            color: #F0F0F0;
        }

        h1 {
            color: white;
        }
    }
}

.cont-us {

    border-radius: 12px;
    background: #04223E;
    padding: 155px 70px;

    h1 {
        font-size: 32px;
        font-weight: 700;
        color: white;
        margin-bottom: 30px;
    }
}



.box {
    padding: 20px 0;
    gap: 20px;

    .icon {
        border-radius: 50%;

        p {
            font-size: 16px;
            font-weight: 500;
        }

        i {
            color: var(--primary);
            font-size: 20px;
        }
    }
}

.text {
    p {
        color: white;
        margin: 0;
    }
}

.form {
    padding: 30px;
    box-shadow: 0px 4px 40px 0px rgba(0, 0, 0, 0.0509803922);
    border: 1px solid #F0F0F0;
    border-radius: 10px;
    height: calc(100% + 22px);

    h1 {
        font-size: 32px;
        font-weight: 700;

    }

    p {
        position: relative;
        margin: 20px 0 50px;
        font-size: 14px;
        font-weight: 500;
    }

    p::before {
        content: '';
        position: absolute;
        left: 0;
        bottom: -24px;
        width: 80px;
        height: 2px;
        border-radius: 10px;
        background-color: var(--primary);
    }

    .send:hover {
        background-color: transparent;
        border: 1px solid var(--primary);
        transition: .3s;
        color: var(--primary);
    }

    .send {
        width: 148px;
        background-color: var(--primary);
        color: white;
        outline: none;
        border: none;
        border-radius: 12px;
        height: 51px;
        box-shadow: 0px 4px 40px 0px #FFE8B7;
        margin-left: 10px;
    }

    h3 {
        font-size: 20px;
        font-weight: 500;
        text-align: center;
        margin-bottom: 25px;
    }

    .inp {
        position: relative;
        margin-bottom: 20px;

        i {
            position: absolute;
            z-index: 100;
            left: 16px;
            top: 50%;
            transform: translateY(-50%);
            color: #999999;
        }

        select {
            padding: 12px 15px;
            box-shadow: none;
        }

        input {
            padding: 12px 0 12px 38px;
            box-shadow: none;
        }

        textarea:focus,
        select:focus,
        input:focus {
            border: 1px solid var(--primary);
            transition: .3s;
        }

        textarea {
            box-shadow: none;
        }

        input::placeholder {
            color: #999999;
        }
    }
}

@media (max-width:767px) {
    .head {
        text-align: center !important;
    }

    .cont-us {
        padding: 100px 50px;
    }
}

@media (max-width:539px) {
    .text {
        p {
            font-size: 14px;
        }
    }

    .icon {
        width: 50px !important;
        height: 50px !important;

        i {
            font-size: 25px !important;
        }
    }
}
</style>