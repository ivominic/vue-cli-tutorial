<template>
  <div id="imena">
    <ul>
      <li v-for="(objekat, index) in nizObjekata" v-on:click="objekat.prikaz = !objekat.prikaz" :key="index">
        <h2>{{objekat.ime}}</h2>
        <h3 v-show="objekat.prikaz">{{objekat.osobina}}</h3>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SredinaKomponenta',
  props: {
    
  },
  data() {
      return {
        title: "Naslov prve komponente",
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#imena{
  width: 100%;
  max-width: 1200;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}
ul{
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li{
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
  margin: 10px;
}
</style>