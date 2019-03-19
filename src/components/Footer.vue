<template>
  <footer>
    <p>{{copyright}} {{title}}</p>
  </footer>
</template>

<script>
  import {bus} from '../main';
  export default {
    name: 'FooterKomponenta',
    props: {
      title:{
        type: String
      }
    },
    data() {
        return {
          copyright: "Copyright 2019"        
        }
    },
    created(){
      bus.$on("naslovPromijenjen", (data) => {
        this.title = data;
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  footer{
    background: #222;
    padding: 6px;
  }
  p{
    color: lightgreen;
    text-align: center;
  }
</style>