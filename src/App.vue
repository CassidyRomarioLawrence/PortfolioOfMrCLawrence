<template>
  <NavBar />
  <router-view/>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
import NavBar from '@/components/NavBar.vue';

export default{
  components:{
    NavBar
  },
  mounted(){
    AOS.init
  }
}
</script>

<style>
/* Poppins font */
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

#app {
  font-family: 'Poppins', sans-serif;
  background-image: url(https://i.postimg.cc/DwmwMySn/24373155-sl-020620-27800-35.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
