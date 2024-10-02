<template>
  <div class="contact my-5">
    <div class="container">
      <div class="title m-auto text-center">
        <h1>Feel Free To Visit Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus. Suspendisse lectus tortor,
        </p>
      </div>
      <div class="map text-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d19783.17673215492!2d37.10861469459967!3d36.21622623729515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2s!4v1714684943717!5m2!1sen!2s"
          width="800" height="540" style="border: 0" allowfullscreen="" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
        <div class="get-touch d-none d-md-block">
          <h5>Get in touch</h5>
          <ul>
            <li>
              <i class="fa-solid fa-location"></i>
              <span>Address</span>
            </li>
            <li>
              <p>1901 Thornridge Cir. Shiloh, Hawaii 81063</p>
            </li>
            <li>
              <i class="fa-solid fa-phone"></i>
              <span>Contact Us</span>
            </li>
            <li>
              <p>(505) 555-0125</p>
            </li>
            <li>
              <p>tanya.hill@example.com</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="get-touch d-md-none">
        <h5>Get in touch</h5>
        <ul>
          <li>
            <i class="fa-solid fa-location"></i>
            <span>Address</span>
          </li>
          <li>
            <p>1901 Thornridge Cir. Shiloh, Hawaii 81063</p>
          </li>
          <li>
            <i class="fa-solid fa-phone"></i>
            <span>Contact Us</span>
          </li>
          <li>
            <p>(505) 555-0125</p>
          </li>
          <li>
            <p>tanya.hill@example.com</p>
          </li>
        </ul>
      </div>
      <ul class="social d-flex align-items-center justify-content-center gap-md-5 gap-3 ">
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
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
body.dark {
  .social {
    a {
      border: 1.56px solid #FFFFFF4D;
      color: white;
    }
  }

  .get-touch {
    background: #000000;
  }

  .title {
    h1 {
      color: #ffffff;
    }

    p {
      color: #f0f0f0;
    }
  }

  .form-label {
    color: #ffffff;
  }

  .send {
    box-shadow: 0px 4px 40px 0px #78560c;
  }
}


.social {
  padding: 0;
  margin: 40px 0 0;

  ul {
    padding: 0;
    margin: 0;

  }

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

.map {
  position: relative;

  .get-touch {
    padding: 90px 30px;
    background: #493b1a;
    box-shadow: 8px 8px 60px 0px #00000026;
    position: absolute;
    left: 150px;
    top: 50%;
    transform: translateY(-50%);
    color: white;
    text-align: start;

    h5 {
      font-size: 33px;
      font-weight: 700;
      margin-bottom: 40px;
    }

    ul {
      margin: 0;
      padding: 0;

      li {
        margin-bottom: 25px;

        i,
        span {
          margin: 0 5px;
          font-size: 18px;
          font-weight: 700;
        }

        p {
          font-size: 16px;
          font-weight: 400;
        }
      }
    }
  }
}

.get-touch {
  padding: 90px 30px;
  background: #493b1a;
  box-shadow: 8px 8px 60px 0px #00000026;
  color: white;
  text-align: start;
  margin-top: 20px;

  h5 {
    font-size: 33px;
    font-weight: 700;
    margin-bottom: 40px;
  }

  ul {
    margin: 0;
    padding: 0;

    li {
      margin-bottom: 25px;

      i,
      span {
        margin: 0 5px;
        font-size: 18px;
        font-weight: 700;
      }

      p {
        font-size: 16px;
        font-weight: 400;
      }
    }
  }
}


@media (max-width: 1299px) {
  .get-touch {
    left: 75px !important;
  }
}

@media (max-width: 1199px) {
  .get-touch {
    left: -0px !important;
  }
}

@media (max-width: 992px) {
  .get-touch {
    left: -62px !important;
    padding: 40px 20px !important;

    h5 {
      font-size: 27px !important;
    }

    p {
      font-size: 14px !important;
    }
  }

  .map {
    iframe {
      width: 100% !important;
    }
  }
}

@media (max-width: 767px) {
  .map {
    iframe {
      height: 400px !important;
    }
  }

  .title {
    h1 {
      font-size: 25px !important;
    }
  }

  .get-touch {
    padding: 52px 15px !important;
  }

  h5 {
    font-size: 25px !important;
    margin-bottom: 20px !important;
  }

  li {
    margin-bottom: 15px !important;
  }

  i,
  span {
    font-size: 14px !important;
  }

  p {
    font-size: 11px !important;

  }
}
</style>
