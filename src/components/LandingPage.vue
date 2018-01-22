<template>
  <div class='landing-page'>
    <!-- <who-we-are></who-we-are><br /> -->
    <!-- <how-we-work></how-we-work><br /> -->
    <div class="who-am-i">
        <p>A skilled <b>frontend developer</b> with extensive knowledge of Javascript technologies and more than 2 years experience in production.</p><br />
      </div>
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
  .who-am-i {
    transform: scaleY(.9);
    line-height: 1.4em;
    max-width: 30em;
    font-size: 1.1em;
    letter-spacing: -1px;
    .whoami-button {
      // margin: 0 auto;
    background-color: #02b875;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 1em;
    font-weight: 700;
    color: #ffffff;
    text-align: center;
    padding: .8em 0;
    max-width: 8em;
    &:hover {
      color: white;
      background-color: #1a2328;
      cursor: pointer;
      -webkit-transition: background-color .3s ease-in-out;
      -moz-transition: background-color .3s ease-in-out;
      -o-transition: background-color .3s ease-in-out;
      transition: background-color .3s ease-in-out;
    }
  }
  }
  max-width: 100%;
  margin: 1em;
}
</style>

