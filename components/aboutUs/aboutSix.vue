<template>
    <div class="about-three d-flex align-items-center justify-content-center">
        <div class="container">
            <div class="parent-box d-flex align-items-center justify-content-center">
                <div class="box text-center">
                    <i class="fa-solid fa-eye"></i>
                    <h3>Vision</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                </div>
                <div class="box text-center">
                    <i class="fa-solid fa-eye"></i>
                    <h3>Mission</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                </div>
                <div class="box text-center">
                    <i class="fa-solid fa-eye"></i>
                    <h3>Target</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
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
    .box {
        background: #000000 !important;
        box-shadow: 0px 8px 24px -3px #FFFFFF26 !important;

        h3,
        i,
        p {
            color: white;
        }
    }
}

.about-three {
    background-image: url(/images/AboutUs/ExampleOne/3.png);
    height: 450px;
    background-position: center;
    background-size: cover;
    margin: 70px 0;



    .parent-box {
        gap: 30px;

        .box:hover {

            h3,
            p,
            i {
                color: var(--primary);
                transition: .3s;
            }
        }

        .box {
            background-color: white;
            border-radius: 12px;
            box-shadow: 0px 8px 24px -3px #00000040;
            padding: 25px 47px;
            transition: .3s;

            h3 {
                font-size: 19px;
                font-weight: 600;
                margin: 24px 0;
            }

            i {
                font-size: 50px;
            }

            p {
                color: var(--text-gray);
                font-size: 12px;
                font-weight: 500;
                line-height: 24px;
            }
        }
    }
}

@media (max-width:767px) {
    .about-three {
        .box {
            padding: 10px 23px !important;
        }
    }
}

@media (max-width:539px) {
    .about-three {
        height: 800px !important;

        .parent-box {
            flex-wrap: wrap;
        }
    }
}
</style>
