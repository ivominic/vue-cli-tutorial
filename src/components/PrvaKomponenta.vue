<template>
  <div>
      <h1>{{ title }}</h1>
      <ul>
          <li v-for="(ime, index) in nizImena" :key="index">{{ime}} - {{index}}</li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'PrvaKomponenta',
  props: {
    
  },
  data() {
      return {
        title: "Naslov prve komponente",
        nizImena: ['Prvo', 'Drugo', 'Treće']
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
