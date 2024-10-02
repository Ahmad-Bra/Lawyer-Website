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
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
body.dark {
    .contact {
        background: #000000;
    }
}

.contact {
    margin: 50px 0;
    padding: 50px;
    background: #04223E;

    .box:hover {
        color: var(--primary);
        transition: .3s;
    }

    .box {
        padding: 10px;
        color: white;
        transition: .3s;

        i {
            font-size: 50px;
            margin-bottom: 20px;
        }

        p {
            margin: 0;
            font-weight: 400;
            font-size: 16px;
        }
    }
}

@media (max-width:992px) {
    .box {
        p {
            font-size: 13px !important;
        }
    }
}

@media (max-width:576px) {
    .box {
        margin-bottom: 20px;
    }
}
</style>