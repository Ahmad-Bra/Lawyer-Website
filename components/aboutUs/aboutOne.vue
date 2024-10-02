<template>
    <div class="about-comp">
        <div class="container">
            <div class="row align-items-center row-1">
                <div class="col-lg-6 ">
                    <div class="comp-text">
                        <h1>About Company</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod corrupti, distinctio laborum
                            hic
                            ullam illo, iure quaerat voluptatum, inventore et tenetur. Eligendi suscipit aliquam dolorem
                            itaque dolores tempora officiis commodi.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod corrupti, distinctio laborum
                            hic
                            ullam illo, iure quaerat voluptatum, inventore et tenetur. Eligendi suscipit aliquam dolorem
                            itaque dolores tempora officiis commodi.</p>
                    </div>
                </div>
                <div class="col-lg-6  ">
                    <div class="img-parent ">
                        <div class="half-rect"></div>
                        <div class="half-rect-2"></div>
                        <img class="img-fluid" style="border-radius: 18px;"
                            src="/images/AboutUs/ExampleTwo/buildings.jpg" alt="">
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
    .comp-text {
        p {
            color: #ffffff !important;
        }
    }
}

.about-comp {
    margin-bottom: 80px;

    .comp-text {
        padding: 20px;

        h1 {
            color: var(--primary);
            font-size: 32px;
            font-weight: 700;
            margin-bottom: 20px;
        }

        p {
            font-size: 16px;
            font-weight: 400;
            margin-bottom: 30px;
            padding-right: 30px;
        }
    }

    .img-parent {
        position: relative;

        .half-rect-2,
        .half-rect {
            width: 125px;
            height: 160px;
            position: absolute;
            z-index: -1;
            background-color: var(--primary);
            border-radius: 76px 76px 0 0;
        }

        .half-rect {
            left: -39px;
            top: -59px;
        }

        .half-rect-2 {
            border-radius: 0 0 76px 76px;
            right: -39px;
            bottom: -59px;
        }
    }
}

@media (max-width:992px) {
    .img-parent {

        margin: 0 auto 30px !important;
    }

    .row-1 {
        flex-direction: column-reverse;
    }
}

@media (max-width:767px) {

    .half-rect-2,
    .half-rect {
        width: 90px !important;
        height: 100px !important;
    }

    .comp-text {
        text-align: center !important;

        p {
            font-size: 14px !important;
        }

        h1 {
            font-size: 25px !important;
        }
    }
}

@media (max-width:567px) {

    .half-rect-2,
    .half-rect {
        display: none
    }
}
</style>