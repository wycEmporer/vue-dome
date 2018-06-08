<template>
  <div id="app">
    <app-head></app-head>
    <div>
      <router-view/>
    </div>
  </div>
</template>

<script>
import AppHead from './components/head/head.vue';
export default {
  name: 'App',
  data(){
    return {

    }
  },
  components: {
    AppHead
  },

}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 0.14rem;
  box-sizing: border-box;
}
</style>
