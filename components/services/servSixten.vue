<template>
    <div class="count-parent ">
        <div class="container">
            <div class="content-count">
                <h2>Count on Us for Exceptional Legal Care</h2>
                <p>With a Firm Commitment to Integrity, Backed by Decades of Specialized Expertise, and a Dedication to
                    Providing Unwavering Support – We're Always Here to Serve You</p>
                <div class="contact-button">
                    <NuxtLink class="btn button cont" to="/contact-us">Contact us <i class="fa-solid fa-phone"></i>
                    </NuxtLink>
                    <NuxtLink class="btn button" to="/services">Services</NuxtLink>
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
.count-parent {
    background-image: url(/images/6.Free-Consultation/count.png);
    width: 100%;
    min-height: 557px;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 120px 0;
    text-align: center;

    .content-count {


        h2 {
            color: white;
            font-size: 32px;
            font-weight: 700;
            margin-bottom: 24px;
            position: relative;
        }

        h2::before {
            position: absolute;
            content: '';
            background-color: var(--primary);
            width: 150px;
            height: 3px;
            border-radius: 5px;
            left: 50%;
            top: -45%;
            transform: translate(-50%, -50%);
        }

        p {
            color: white;
            font-size: 16px;
            font-weight: 100;
            max-width: 780px;
            margin: auto;
            line-height: 32px;

        }
    }
}

.contact-button {
    margin-top: 32px;



    .button {
        width: 175px;
        height: 52px;
        padding: 12px 24px 12px 24px;
        font-size: 14px;
        font-weight: 500 !important;
        background-color: var(--primary);
        color: white;

        i {
            margin: 0 5px;
        }
    }

    .button:hover {
        background-color: transparent;
        border: 1px solid white;
        color: white;
        transition: .3s;
    }

    .cont {
        margin: 16px;
    }
}
</style>