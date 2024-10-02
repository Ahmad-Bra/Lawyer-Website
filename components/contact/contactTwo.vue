<template>
    <div class="contact">
        <div class="container">
            <div class="title m-auto text-center ">
                <h1>Get in touch</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor,
                </p>
            </div>
            <div class="row row-1 align-items-center">
                <div class="col-lg-12">
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
                                    <label class="form-label">Subject</label>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Consultation</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div class="col-lg-12">
                                    <div class="form-floating">
                                        <textarea class="form-control pt-4" placeholder="Leave a comment here"
                                            id="floatingTextarea2" style="height: 100px"></textarea>
                                        <label for="floatingTextarea2">Message</label>
                                    </div>
                                </div>
                                <button class="send ps-2">Send Request </button>
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
        background-position: left 0.75rem center;
    }
}

body.dark {
    .contact {
        background-image: linear-gradient(180deg, transparent 50%,
                #000000 50%);
    }

    .row-1 {
        background: #000000;
    }

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

    .send {
        box-shadow: 0px 4px 40px 0px #78560C;
    }
}

.row-1 {
    background: #ffffff;
    padding: 40px;
    box-shadow: 0px 8px 40px 0px #04223E26;
    border-radius: 12px;
    margin-top: 30px;
}

.contact {
    padding: 100px 0;
    background-image: linear-gradient(180deg, white 50%,
            #04223E 50%);
}

.contact-parent {

    padding: 10px;

    .form-control {
        margin-bottom: 16px;
        border-radius: 15px;
        padding: 15px;
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
        padding: 15px;
        position: relative;

        img {
            position: absolute;
            right: 0;
            top: 0;
        }
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
        margin-left: 10px;
    }
}

@media (max-width: 767px) {
    .title {
        h1 {
            font-size: 25px !important;
        }
    }
}


@media (max-width:767px) {

    .row-1 {
        padding: 15px;
    }
}
</style>