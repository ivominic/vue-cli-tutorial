<template>
  <header>
    <h1 v-on:click="promijeniNaslov">{{ title }}</h1>
  </header>
</template>

<script>
import {bus} from '../main';
export default {
  name: 'HeaderKomponenta',
  props: {
    
  },
  data() {
      return {
        title: "Naslov prve komponente",
        nizImena: ['Prvo', 'Drugo', 'Treće']
      }
  },
  methods: {
    promijeniNaslov: function(){
      //this.$emit("promijeniNaslov", 'Drugi tekst za naslov');
      this.title = "Promijenjen naslov";
      bus.$emit("naslovPromijenjen", 'Event bus naslov');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{
    background: lightgreen;
    padding: 10px;
}
h1{
    color: #222;
    text-align: center;
}
</style>