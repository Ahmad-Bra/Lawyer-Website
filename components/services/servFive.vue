<template>
    <div class="banner-serv">
        <div class="container">
            <div class="content">
                <p>We provide high quality services & innovative solutions for the realiable growth
                </p>
                <div class="contact-button">
                    <NuxtLink class="btn button cont" to="/contact-us"><span>Contact us</span> <i
                            class="fa-solid fa-phone"></i>
                    </NuxtLink>
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
.banner-serv {
    background-image: url(/images/2.Services/banner-serv.png);
    background-position: center;
    background-size: cover;
    padding: 50px 0;

    .content {
        p {
            font-size: 32px;
            font-weight: 700;
            color: white;
        }
    }
}

.contact-button {
    margin-top: 32px;

    .button {
        padding: 12px 24px 12px 24px;
        font-size: 14px;
        font-weight: 500 !important;
        box-shadow: 0px 4px 40px 0px #6A562B;
        background-color: var(--primary);
        color: white;

        i {
            margin: 0 5px;
        }
    }

    .button:hover {
        background-color: white;
        color: black;
        transition: .3s;
    }

    .cont {
        margin: 0 16px;
    }
}
</style>