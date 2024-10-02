<template>
    <div class="main-cont  d-flex align-items-center justify-content-center">
        <div class="container">
            <div class="content text-center ">
                <h1>Contact Us</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.main-cont {
    background-image: url(/images/AboutUs/ExampleTwo/city.png);
    min-height: 591px;
    background-size: cover;
    background-position: center;
    height: 260px;
    min-height: 400px;

    .content {
        h1 {
            font-size: 53px;
            font-weight: 700;
            color: white;
        }

        P {
            font-size: 16px;
            font-weight: 500;
            line-height: 32px;
            color: white;
            max-width: 600px;
            margin: 20px auto;
        }


    }
}
</style>