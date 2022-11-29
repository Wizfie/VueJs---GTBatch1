<template>
  <div >
      <Navbar></Navbar>
      <Breadcrumb></Breadcrumb>
      <GalleyComp></GalleyComp>
      <Slider></Slider>
      <FooterComp></FooterComp>
      <Copyright></Copyright>
      

  </div>
</template>

<script>
import Navbar from './components/Nav.vue';
import Breadcrumb from './components/Breadcrumb.vue'
import GalleyComp from './components/Galley.vue'
import Slider from './components/Slider.vue'
import FooterComp from './components/Footer.vue'
import Copyright from './components/Copyright.vue'


export default {
  name: 'App',
  components: {
    Navbar,
    Breadcrumb,
    GalleyComp,
    Slider,
    FooterComp,
    Copyright
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
