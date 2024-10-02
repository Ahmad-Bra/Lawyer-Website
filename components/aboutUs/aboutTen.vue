<template>
    <div class="main-about  d-flex align-items-center justify-content-center">
        <div class="container">
            <div class="content text-center ">
                <h1>About US</h1>
                <div class="content-link">
                    <i class="fa-solid fa-home"></i>
                    <NuxtLink to="/">Home</NuxtLink>
                    <i class="fa-solid fa-chevron-right"></i>
                    <NuxtLink to="/about-us">About Us</NuxtLink>
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
.main-about-two,
.main-about {
    background-image: url(/images/AboutUs/ExampleOne/1.png);
    background-size: cover;
    background-position: center;
    height: 260px;
    margin-bottom: 130px;

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

.main-about-two {
    background-image: url(/images/AboutUs/ExampleTwo/city.png);
    min-height: 591px;

    p {
        font-size: 16px;
        font-weight: 500;
        color: white;
        max-width: 500px;
        margin: 20px auto;
        line-height: 32px;
    }
}
</style>