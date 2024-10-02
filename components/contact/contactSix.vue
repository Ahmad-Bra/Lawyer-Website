<template>
    <div class="cont-info  d-flex justify-content-center align-items-center">
        <div class="container">
            <div class="info">
                <span>About Us</span>
                <h1>About Us</h1>
                <p>Dive Into the Heart of Our Legal Firm and Its Dedicated Professionals</p>
            </div>
        </div>
    </div>
    <div class="container mb-4">
        <ul class="social d-flex align-items-center justify-content-center gap-xs-1 gap-sm-2 gap-md-3 gap-lg-5 ">
            <li>
                <a href=""><i class="fa-brands fa-facebook-f"></i></a>
            </li>
            <li>
                <a href=""><i class="fa-brands fa-instagram"></i></a>
            </li>
            <li>
                <a href=""><i class="fa-brands fa-linkedin-in"></i></a>
            </li>
            <li>
                <a href=""><i class="fa-brands fa-youtube"></i></a>
            </li>
            <li>
                <a href=""><i class="fa-brands fa-google"></i></a>
            </li>
            <li>
                <a href=""><i class="fa-brands fa-twitter"></i></a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
body.dark {
    .social {
        a {
            border: 1.56px solid #FFFFFF4D;
            color: white;
        }
    }
}

.cont-info {
    background-image: url(/images/cocntact/contact-1.png);
    background-size: cover;
    background-position: center;
    height: 350px;
    margin-top: 80px;

    h1 {
        font-size: 40px;
        font-weight: 700;
        color: #FFFFFF;
    }

    span {
        font-size: 48px;
        font-weight: 700;
        color: #FFFFFF0D;
        margin: -17px 7px;
        display: block;
    }

    P {
        font-size: 16px;
        font-weight: 400;
        color: #FFFFFF;
        margin: 0 0 30px;
    }
}

.social {
    padding: 0;
    margin: 40px 0 0;

    li a {
        padding: 15px;
        border: 1px solid #ccc;
        border-radius: 10px;
        color: black;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;

        i {
            font-size: 30px;
            transition: .3s;
        }
    }

    li a:hover {
        i {
            color: var(--primary);
            transition: .3s;
        }
    }
}

@media (max-width:539px) {
    .social {
        gap: 10px;

        a {
            padding: 10px !important;

        }

        i {
            font-size: 23px !important;

        }
    }

    .cont-info {
        h1 {
            font-size: 32px;
        }

        span {
            font-size: 39px;
        }

        p {
            font-size: 11px;
        }
    }
}
</style>
