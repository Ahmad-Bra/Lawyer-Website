<template>
    <div class="main-about-two  d-flex align-items-center justify-content-center">
        <div class="container">
            <div class="content text-center ">
                <h1>About US</h1>
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
.main-about-two {
    background-image: url(/images/AboutUs/ExampleTwo/city.png);
    min-height: 591px;
    background-size: cover;
    background-position: center;
    height: 260px;
    margin-bottom: 130px;

    p {
        font-size: 16px;
        font-weight: 500;
        color: white;
        max-width: 500px;
        margin: 20px auto;
        line-height: 32px;
    }



    .content {
        h1 {
            font-size: 53px;
            font-weight: 700;
            color: white;
        }

        .content-link {
            a {
                text-decoration: none;
                color: white;
                font-size: 12px;
                font-weight: 700;
                margin: 30px 10px;
                padding: 5px;
            }

            i {
                font-size: 12px;
                font-weight: 700;
                color: white;
            }
        }
    }
}
</style>