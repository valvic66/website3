<template>
  <div class='who-we-are'>
    <div class="who-we-are__l-panel">
      <div class="who-we-are__l-panel__title">Who We Are</div>
      <div class="who-we-are__l-panel__descr">
        <p>A <b>Frontend JavaScript Developer</b> with more than 2 years experience in production. <b>Giving the best for client's needs</b> ...<br /></p>
        <p>A <b>Frontend JavaScript Developer</b> with more than 2 years experience in production. <b>Giving the best for client's needs</b> ...</p>
      </div>
      <div class="who-we-are__l-panel__features">
        <div class="who-we-are__l-panel__features__icon"></div>
        <div class="who-we-are__l-panel__features__descr"></div>
      </div>
    </div>
    <div class="who-we-are__r-panel">
      <div class="who-we-are__r-panel__icon"></div>
      <div class="who-we-are__r-panel__icon"></div>
      <div class="who-we-are__r-panel__icon"></div>
      <div class="who-we-are__r-panel__icon"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WhoWeAre',
  props: [''],
  data () {
    return {

    }
  }
}
</script>

<style scoped lang='scss'>
* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

.who-we-are {
  background-color: lightcyan;
  max-width: 100%;
  margin: 1em;

  .who-we-are__l-panel {
    .who-we-are__l-panel__title {
      font-family: 'Open Sans', sans-serif;
      font-size: 1.4em;
      letter-spacing: -1px;
      line-height: 1.4;
      color: #1a2328;
      max-width: 14em;
      margin-bottom: 1em;
    }
    .who-we-are__l-panel__descr {
      transform: scaleY(.9);
      line-height: 1.2em;
      max-width: 45em;
    }
    .who-we-are__l-panel__features {

    }
  }
  .who-we-are__r-panel {

  }
}

@media screen and (min-width: 576px) {
  .who-we-are {
    .who-we-are__l-panel {
      .who-we-are__l-panel__title {
        font-size: 1.4em;
        letter-spacing: -1px;
        line-height: 1.4;
      }
      .who-we-are__l-panel__descr {
        transform: scaleY(.9);
        line-height: 1.2em;
        max-width: 45em;
      }
      .who-we-are__l-panel__features {

      }
    }
    .who-we-are__r-panel {

    }
  }
}

@media screen and (min-width: 768px) {}

@media screen and (min-width: 990px) {
  .who-we-are {
    .who-we-are__l-panel {
      .who-we-are__l-panel__title {
        font-size: 2.3em;
        letter-spacing: -1px;
        line-height: 1.4;
      }
      .who-we-are__l-panel__descr {

      }
      .who-we-are__l-panel__features {

      }
    }
    .who-we-are__r-panel {

    }
  }
}
</style>
