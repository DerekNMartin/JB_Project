<template>
  <div id="app">
    <Topbar/>
    <MainPage/>
  </div>
</template>

<script>
import MainPage from './components/Main.vue'
import Topbar from './components/Topbar.vue'

export default {
  name: 'App',
  components: {
    Topbar,
    MainPage
  }
}
</script>

<style lang="scss">
body {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  width: 100%;
}
</style>
