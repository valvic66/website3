<template>
  <div id="app">
    <div class="wrapper">
      <nav-menu></nav-menu>
      <router-view/>
    </div>
  </div>
</template>

<script>
import NavMenu from './components/NavMenu'
export default {
  name: 'App',
  components: {
    NavMenu
  }
}
</script>

<style lang="scss">
// style for whole app
// bootstrap included in the project
@import './styles/custom-bootstrap.scss';
@import '../node_modules/bootstrap/scss/bootstrap.scss';

#app {
  overflow-y: scroll;
}
html {
  overflow-y: scroll;
}
</style>

<style scoped lang="scss">
.wrapper {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
