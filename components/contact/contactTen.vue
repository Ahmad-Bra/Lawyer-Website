<template>
    <div class="contact">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-3 col-sm-6">
                    <div class="box text-center">
                        <i class="fa-brands fa-facebook-f"></i>
                        <p>Facebook Account</p>
                        <p>@Facebook Account</p>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="box text-center ">
                        <i class="fa-brands fa-linkedin"></i>
                        <p>Behance Account</p>
                        <p>@behance Account</p>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="box text-center">
                        <i class="fa-brands fa-twitter"></i>
                        <p>Twitter Account</p>
                        <p>@twitter Account</p>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="box text-center">
                        <i class="fa-brands fa-google"></i>
                        <p>Google Email</p>
                        <p>Google@google.gmail</p>
                    </div>
                </div>
            </div>
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
                        <textarea class="form-control pt-4" placeholder="Leave a comment here" id="floatingTextarea2"
                            style="height: 100px"></textarea>
                        <label for="floatingTextarea2">write your message</label>
                    </div>
                </div>
                <button class="send ps-2">Send Message </button>
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

    .form::before {
        left: 0 !important;
        right: calc(100% - 150px);
    }
}

body.dark {
    .box {
        background: #000000;
        color: white;
        border: none;
    }

    .form {
        h1 {
            color: white;
        }

        p {
            color: #F0F0F0;
        }

        .send {
            box-shadow: none;
        }
    }
}

.contact {
    padding: 50px 0;
    margin: 50px 0;

    .row {
        margin-top: -130px;
        margin-bottom: 50px;
    }


    .box {
        padding: 30px 0;
        box-shadow: 0px 4px 24px 0px #04223E1A;
        border-radius: 15px;
        border: 1px solid #F0F0F0;
        background-color: white;
        height: 160px;

        i {
            font-size: 40px;
            margin-bottom: 10px;
        }

        p {
            margin: 0;
            font-weight: 400;
            font-size: 16px;
        }
    }
}

.form::before {
    content: '';
    position: absolute;
    width: 150px;
    height: 100%;
    background-color: var(--primary);
    top: 0;
    right: 0;
}

.form {
    padding: 20px 0;
    position: relative;

    h1 {
        font-size: 32px;
        font-weight: 700;

    }

    p {
        position: relative;
        margin: 20px 0 50px;
        font-size: 14px;
        font-weight: 500;
        max-width: 500px;
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
        width: 85%;

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

@media (max-width:1199px) {
    .form::before {
        width: 100px;
    }
}

@media (max-width:992px) {
    .form::before {
        width: 70px;
    }

    .box {
        margin-bottom: 20px;

        p {
            font-size: 13px !important;
        }
    }
}



@media (max-width:767px) {
    .form::before {
        width: 60px;
    }
}

@media (max-width:539px) {
    .form::before {
        width: 40px;
    }

    .form {
        p {
            max-width: 300px !important;
        }
    }
}
</style>