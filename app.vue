<template>
  <div>
    <nuxt-layout>
      <NuxtPage />
    </nuxt-layout>
  </div>
</template>
<script>
import "swiper/css";
import "swiper/css/bundle";
import 'normalize.css';

</script>
<style lang="scss">
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

@font-face {
  font-family: Montserrate;
  src: url(/fonts/Montserrat-Black.ttf);
  src: url(/fonts/Montserrat-BlackItalic.ttf);
  src: url(/fonts/Montserrat-Bold.ttf);
  src: url(/fonts/Montserrat-Italic.ttf);
  src: url(/fonts/Montserrat-Medium.ttf);
  src: url(/fonts/Montserrat-Regular.ttf);
}


:root {
  --dark: #141414;
  --light: #ffffff;
  --primary: #F1B32B;
  --secondery-purp: #B42FF1;
  --secondery-blue: #2F94F1;
  --text-black: #000000;
  --text-gray: #B0AFAC;
}

body {
  font-family: "Montserrat", sans-serif !important;
  background-color: var(--light);
  box-sizing: border-box;
  margin: 0;
  padding: 0;

}

body.rtl {
  direction: rtl;
}

body.dark {
  background-color: var(--dark);

  .dark {
    background-color: var(--primary);
  }


}



ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

nuxt-link,
a {
  text-decoration: none;
}
</style>