<template>
  <div class="main-page">
    Dashboard
  </div>
</template>

<script>
export default {
  name: 'Main',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/style/_variables.scss';

  .main-page {
    height: 80%;
    margin: 2rem 10%;
    padding: 2rem;
    background-color: $light-blue;
    border-radius: $border-radius;
    box-sizing: border-box;
  }
</style>
