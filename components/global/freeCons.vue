<template>
    <div class="free-cons">
        <div class="container">
            <div class="title m-auto w-50 text-center">
                <h1>Free Consultation</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor,
                </p>
            </div>
            <div class="row row-1 align-items-center" style="">
                <div class="col-lg-6">
                    <div class="img-holder">
                        <img class="w-100" src="/images/6.Free-Consultation/Rectangle 173.png" alt="">
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="contact-parent">
                        <form @submit.prevent>
                            <div class="row ">
                                <div class="col-lg-6">
                                    <label for="input-cont" class="form-label">Email</label>
                                    <input placeholder="EX: Eliza Maguire" type="email" id="input-cont"
                                        class="form-control" aria-describedby="passwordHelpBlock">
                                </div>
                                <div class="col-lg-6">
                                    <label for="input-cont" class="form-label">Full Name</label>
                                    <input placeholder="EX: Eliza Maguire@gmail.com" type="text" id="input-cont"
                                        class="form-control" aria-describedby="passwordHelpBlock">
                                </div>
                                <div class="col-lg-6">
                                    <label for="input-cont" class="form-label">Phone</label>
                                    <input placeholder="EX: +963987654321" type="text" id="input-cont"
                                        class="form-control" aria-describedby="passwordHelpBlock">
                                </div>
                                <div class="col-lg-6">
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
                                            id="floatingTextarea2" style="height: 100px"></textarea>
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
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
body.rtl {
    .form-select {
        background-size: 809px 12px;
    }
}

body.dark {
    .title {
        h1 {
            color: #ffffff;
        }


        p {
            color: #F0F0F0;
        }

    }



    .form-label {
        color: #ffffff;
    }

    .row-1 {
        box-shadow: 0px 4px 24px 0px #FFFFFF40;
    }

    .send {
        box-shadow: 0px 4px 40px 0px #78560C;
    }
}

.row-1 {
    box-shadow: 0px 4px 24px 0px #00000040;
}

.title {
    margin: 120px auto 40px !important;

    h1 {
        font-size: 32px;
        font-weight: 700;
        position: relative;
    }

    h1::before {
        position: absolute;
        content: '';
        background-color: var(--primary);
        width: 57px;
        height: 5px;
        border-radius: 5px;
        left: 50%;
        top: -45%;
        transform: translate(-50%, -50%);
    }

    p {
        max-width: 600px;
        color: #333333;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        margin-top: 20px;
    }
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
        background-size: 19px 12px;
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
        width: 148px;
        background-color: var(--primary);
        color: white;
        outline: none;
        border: none;
        border-radius: 12px;
        height: 51px;
        box-shadow: 0px 4px 40px 0px #FFE8B7;
    }
}

@media (max-width: 992px) {
    .title {
        margin: 80px auto 40px !important;
    }
}

@media (max-width: 767px) {
    .title {
        margin: 50px auto 40px !important;

        h1 {
            font-size: 30px;
        }
    }
}
</style>