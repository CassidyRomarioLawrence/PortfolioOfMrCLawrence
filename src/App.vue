<template>
  <div id="app">
    <NavBar />
    <router-view/>
    <FooterC />
  </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
import NavBar from '@/components/NavBar.vue';
import FooterC from './components/FooterC.vue';

export default{
  components:{
    NavBar,
    FooterC
  },
  mounted(){
    AOS.init();
  }
}
</script>

<style>
/* Poppins font */
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css");

#app {
  font-family: 'Poppins', sans-serif;
  background-image: url(https://i.postimg.cc/DwmwMySn/24373155-sl-020620-27800-35.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow-x: hidden;
}

</style>
