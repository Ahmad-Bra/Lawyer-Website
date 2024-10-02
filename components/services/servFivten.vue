<template>
    <div class="main-serv  d-flex align-items-center justify-content-center">
        <div class="container">
            <div class="content text-center ">
                <h1>Services</h1>
                <div class="content-link">
                    <i class="fa-solid fa-home"></i>
                    <NuxtLink to="/">Home</NuxtLink>
                    <i class="fa-solid fa-chevron-right"></i>
                    <NuxtLink to="/about-us">Services</NuxtLink>
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
.main-serv {
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
</style>