<template>
  <div class='landing-page'>
    <who-we-are></who-we-are><br />
    <how-we-work></how-we-work><br />
    <show-case></show-case><br />
  </div>
</template>

<script>
import HowWeWork from '@/components/HowWeWork'
import WhoWeAre from '@/components/WhoWeAre'
import ShowCase from '@/components/ShowCase'
export default {
  name: 'LandingPage',
  props: [''],
  data() {
    return {

    }
  },
  components: {
    HowWeWork,
    WhoWeAre,
    ShowCase
  }
}
</script>

<style scoped lang='scss'>
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.landing-page {
  max-width: 100%;
  margin: 1em;
}
</style>

