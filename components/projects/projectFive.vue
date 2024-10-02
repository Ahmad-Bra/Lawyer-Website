<template>
  <div class="recent-parent mt-5">
    <div class="container">
      <div class="title m-auto w-50 text-center ">
        <h1>Our Recent Case Studies</h1>
      </div>
      <div class="parent-box  mt-5">
        <Swiper class="align-items-center" :grab-cursor="true" :loop="true" :centeredSlides="true" :modules="modules"
          :breakpoints="breakpoints" :autoplay="{ duration: 2000 }"
          :navigation="{ prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next' }">
          <swiper-slide v-for="slide in 4 " :key="slide">
            <div class="box ">
              <div class="box-content">
                <div><span class="res">Research</span><span class="law">Law firm</span></div>
                <h5>Landmark Trial Victory</h5>
                <ul class=" time ">
                  <div class="d-flex align-items-center gap-3">
                    <div class="d-flex align-items-center ">
                      <i class="fa-regular fa-calendar"></i>
                      <li>28/4/2022</li>
                      <li class="mx-1">~</li>
                      <li>28/4/2022</li>
                    </div>
                    <li><i class="fa-solid fa-location"></i>Aleppo, Syria</li>
                    <li><i class="fa-regular fa-clock"></i>24 Hours</li>
                  </div>
                </ul>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse
                  lectus tortor, dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse
                  lectus tortor.</p>
              </div>
            </div>
          </swiper-slide>
          <NuxtLink to="/project-details" class="read-more">View all projects<i
              class="fa-solid fa-chevron-right m-1"></i></NuxtLink>
          <div class="swiper-button-prev arr">
          </div>
          <div class="swiper-button-next arr">
          </div>
        </Swiper>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation } from "swiper/modules";
export default {
  data() {
    return {
      breakpoints: {
        40: {
          slidesPerView: 1,
          spaceBetween: 130,
        },
        540: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        992: {
          slidesPerView: 2,
          spaceBetween: 130,
        },
        1199: {
          slidesPerView: 2,
        },
        1400: {
          slidesPerView: 2,
        }
      }
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation, Autoplay],
    }
  }
}
</script>

<style lang="scss" scoped>
body.dark {
  .title {
    h1 {
      color: #ffffff;
    }
  }

  .read-more {
    box-shadow: none;
  }
}

body.rtl {
  .read-more {
    i {
      transform: rotate(180deg);
    }
  }
}

.title {
  margin-bottom: 60px;

  h1 {
    font-size: 32px;
    font-weight: 700;
  }
}

.swiper-slide {
  height: 520px;
}

.swiper-slide-active {

  .box {
    margin-top: 0;
    height: 520px !important;
    transition: .3s ease-out;
  }

}


.swiper-wrapper {
  height: 600px !important;
  align-items: center !important;

}


.box {
  background-image: url(/images/projects/project-3.png);
  border-radius: 12px;
  background-size: cover;
  background-position: center;
  position: relative;
  height: 300px;
  width: 520px;
  margin: auto;
  margin-top: 150px;
  transition: .5s ease-out;
}

.box::before {
  content: '';
  position: absolute;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.05) 0%, #111111 80.6%);
  inset: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px
}

.box-content {
  padding: 10px;
  margin-bottom: 20px;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 20;
  width: 100%;
  padding: 35px 35px 10px;

  .res,
  .law {
    display: inline-block;
    font-size: 10px;
    color: #E9A40E;
    font-weight: 500;
    background: #FFFAEE;
    padding: 8px 10px;
    border-radius: 17px;
    margin: 10px 5px;
  }

  .res {
    color: #9747FF;
    background: #F5EEFF;
  }

  h5 {
    font-size: 20px;
    font-weight: 700;
    color: white;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    color: #F0F0F0;
    margin: 10px 0;
  }

  .time {
    padding: 0;
    margin: 0;

    li {
      padding: 5px 0;
      font-weight: 500;
      color: #F0F0F0;
      font-size: 12px;

      span {
        font-size: 12px;
      }
    }

    i {
      margin: 0 10px;
      color: #F0F0F0;
    }
  }
}


.read-more:hover {
  transition: .3s;
  background-color: rgb(255, 232, 183);
  color: var(--text-black);
}

.read-more {
  display: block;
  background-color: var(--primary);
  padding: 15px 30px;
  border-radius: 20px;
  color: white;
  width: fit-content;

  margin: 30px auto 0;
  text-decoration: none;
  font-weight: 700;
  box-shadow: 0px 4px 40px 0px rgb(255, 232, 183);
  font-size: 14px;
}

.arr::after {
  font-size: 20px;
  font-weight: bold;
}

.arr {
  border-radius: 50%;
  background-color: var(--primary);
  padding: 10px;
  font-size: 15px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
}

@media (max-width: 992px) {

  .box-content {
    margin-bottom: 20px;

    p {
      font-size: 15px !important;
    }
  }
}

@media (max-width:767px) {
  .arr {
    color: var(--primary);
    background-color: #e9a40e2b;
  }

  .box {
    width: 100%;
    border: none;

    img {
      display: block;
      margin: auto;
    }
  }

  .title {
    h1 {
      font-size: 25px !important;
    }
  }

  .box-content {
    padding: 10px;

    p {
      font-size: 15px !important;
    }

    p,
    h5 {
      text-align: center;
    }
  }
}
</style>
