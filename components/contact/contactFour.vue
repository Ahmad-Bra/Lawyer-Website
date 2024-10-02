<template>
  <div class="contact">
    <div class="container">
      <div class="head">
        <span>Contact Us</span>
        <h5>Let’s Geat In Touch</h5>
      </div>
      <div class="row gy-5">
        <div class="col-lg-6 ">
          <div class="box d-flex align-items-center justify-content-center ">
            <div class="icon">
              <i class="fa-solid fa-location-dot"></i>
            </div>
            <div class="text flex-grow-1">
              <span>Location</span>
              <p>1901 Thornridge Cir. Shiloh, Hawaii 81063.</p>
            </div>
          </div>
          <div class="box d-flex align-items-center justify-content-center ">
            <div class="icon">
              <i class="fa-regular fa-envelope"></i>
            </div>
            <div class="text flex-grow-1">
              <span>Email</span>
              <p>tanya.hill@example.com.</p>
            </div>
          </div>
          <div class="box d-flex align-items-center justify-content-center ">
            <div class="icon">
              <i class="fa-solid fa-phone"></i>
            </div>
            <div class="text flex-grow-1">
              <span>Phone</span>
              <p>(505) 555-0125 / (308) 555-0121</p>
            </div>
          </div>
          <div class="box d-flex align-items-center justify-content-center ">
            <div class="icon">
              <i class="fa-solid fa-fax"></i>
            </div>
            <div class="text flex-grow-1">
              <span>Fax</span>
              <p>+44 161 999 8888</p>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="form">
            <h3>Feel Free To Reach Out!</h3>
            <div class="inp">
              <i class="fa-solid fa-user"></i>
              <input placeholder="full name" type="email" id="input-cont" class="form-control"
                aria-describedby="passwordHelpBlock">
            </div>
            <div class="inp">
              <i class="fa-regular fa-envelope"></i>
              <input placeholder="full name" type="email" id="input-cont" class="form-control"
                aria-describedby="passwordHelpBlock">
            </div>
            <div class="inp">
              <i class="fa-solid fa-phone"></i>
              <input placeholder="full name" type="email" id="input-cont" class="form-control"
                aria-describedby="passwordHelpBlock">
            </div>
            <div class="inp">
              <select class="form-select" aria-label="Default select example">
                <option>Consultation</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div class="inp">
              <div class="form-floating">
                <textarea class="form-control pt-4" placeholder="Leave a comment here" id="floatingTextarea2"
                  style="height: 100px"></textarea>
                <label for="floatingTextarea2">write your message</label>
              </div>
            </div>
            <button class="send ps-2">Send Request </button>
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
body.rtl {
  .form-select {
    background-position: left 0.75rem center;
  }
}

body.dark {

  .head {
    h5 {
      color: #ffffff;
    }

    span {
      color: #f0f0f0;
    }
  }

  .box {
    background: #000000;
    border: none;

    span {
      color: #ffffff;
    }

    p {
      color: white;
    }

    .icon i {
      color: black !important;
    }
  }

  .form {
    background: #000000;
    border: none;

    h3 {
      color: white;
    }


    .send {
      box-shadow: none;
    }

    .form-floating {
      label {
        color: #999999 !important;
      }
    }
  }
}

.head {
  margin: 20px 0;

  h5 {
    font-size: 24px;
    font-weight: 700;
  }
}

span {
  font-size: 11px;
  font-weight: 300;
  margin-bottom: 10px;
  display: block;
}

.box:hover {
  border: 1px solid var(--primary);
  transition: .3s;
  box-shadow: 0px 4px 3px 0px #1918180d;

  span {
    color: var(--primary);
    transition: .3s;
  }
}

.box {
  box-shadow: 0px 4px 24px 1px #e01c1c0d;
  border: 1px solid #F0F0F0;
  border-radius: 10px;
  padding: 20px;
  gap: 20px;
  margin-bottom: 20px;
  height: calc((100% - 40px) / 4);
  transition: .3s;

  .icon {
    display: grid;
    place-items: center;
    width: 70px;
    height: 70px;
    background-color: var(--primary);
    border-radius: 50%;

    p {
      font-size: 16px;
      font-weight: 500;
    }

    i {

      color: white;
      font-size: 35px;
    }
  }
}

.form {
  padding: 30px;
  box-shadow: 0px 4px 40px 0px rgba(0, 0, 0, 0.0509803922);
  border: 1px solid #F0F0F0;
  border-radius: 10px;
  height: calc(100% + 22px);

  .send:hover {
    background-color: transparent;
    border: 1px solid var(--primary);
    transition: .3s;
    color: var(--primary);
  }

  .send {
    width: 148px;
    background-color: var(--primary);
    color: white;
    outline: none;
    border: none;
    width: 100%;
    border-radius: 12px;
    height: 51px;
    box-shadow: 0px 4px 40px 0px #FFE8B7;
    margin-left: 10px;
  }

  h3 {
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 25px;
  }

  .inp {
    position: relative;
    margin-bottom: 20px;

    i {
      position: absolute;
      z-index: 100;
      left: 16px;
      top: 50%;
      transform: translateY(-50%);
      color: #999999;
    }

    select {
      padding: 12px 15px;
      box-shadow: none;
    }

    input {
      padding: 12px 0 12px 38px;
      box-shadow: none;
    }

    textarea:focus,
    select:focus,
    input:focus {
      border: 1px solid var(--primary);
      transition: .3s;
    }

    textarea {
      box-shadow: none;
    }

    input::placeholder {
      color: #999999;
    }
  }
}

@media (max-width:767px) {
  .head {
    text-align: center !important;
  }
}

@media (max-width:539px) {
  .text {
    p {
      font-size: 14px;
    }
  }

  .icon {
    width: 50px !important;
    height: 50px !important;

    i {
      font-size: 25px !important;
    }
  }
}
</style>