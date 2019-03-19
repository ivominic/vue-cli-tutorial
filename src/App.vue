<template>
  <div id="app">
    <app-header/>
    <app-sredina v-bind:nizObjekata="nizObjekata"/>
    <img alt="Vue logo" src="./assets/logo.png">
    <prva-komponenta/>
    <prvaK/> <!--Globalno registrovana komponenta. Red iznad je lokalno registrovana-->
    <app-footer/>
  </div>
</template>

<script>
import PrvaKomponenta from './components/PrvaKomponenta.vue'; //Lokalni import komponente. Za globalni se registruje u main.js fajlu. 
import HeaderKomponenta from './components/Header.vue';
import FooterKomponenta from './components/Footer.vue';
import SredinaKomponenta from './components/Sredina.vue';

export default {
  name: 'app',
  components: {
    'app-header': HeaderKomponenta,
    'app-footer': FooterKomponenta,
    'app-sredina': SredinaKomponenta,
    PrvaKomponenta

  },
  data() {
      return {
        nizObjekata: [
          {ime: "Prvo", osobina: "Prva osobina", prikaz: false},
          {ime: "Drugo", osobina: "Druga osobina", prikaz: false},
          {ime: "Treće", osobina: "Treća osobina", prikaz: false},
          {ime: "Četvrto", osobina: "Četvrta osobina", prikaz: false},
          {ime: "Peto", osobina: "Peta osobina", prikaz: false},
          {ime: "Šesto", osobina: "Šesta osobina", prikaz: false}
        ]
      }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
