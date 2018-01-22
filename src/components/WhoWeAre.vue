<template>
  <div class='who-we-are row'>
    <div class="who-we-are__l-panel col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
      <div class="who-we-are__l-panel__title bc1">Who am I ...</div>
      <div class="who-we-are__l-panel__descr">
        <p>A skilled <b>frontend developer</b> with extensive knowledge of Javascript technologies and more than 2 years experience in production.</p><br />
        <p>Develop <b>responsive</b> and elegant cross-platform functionality.</p><br />
        <p><b>High speed projects assured</b> working with the best Javascript-based client-side MV* frameworks.</p><br />
        <p>Follow <b>modern web best practices</b> by writing clean, modular well-functioning code.<p><br />
        <p><b>My motto: </b> Give my best for deliver according to market and client's needs!</p>
      </div>
      <div class="who-we-are__l-panel__features isFlexCol">
        <div class="who-we-are__l-panel__features__icon"></div>
        <div class="who-we-are__l-panel__features__descr"></div>
      </div>
    </div>
    <div class="who-we-are__r-panel row col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 isFlexRow">
      <div class="who-we-are__r-panel__icon col-12 col-sm-6 col-md-4 col-lg-6 col-xl-4 isFlexRow">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png" width='120' />
      </div>
      <div class="who-we-are__r-panel__icon col-12 col-sm-6 col-md-4 col-lg-6 col-xl-4 isFlexRow">
        <img src="http://www.idlewilddigital.com/sites/default/files/css3.png" width='80' />
      </div>
      <div class="who-we-are__r-panel__icon col-12 col-sm-6 col-md-4 col-lg-6 col-xl-4 isFlexRow">
        <img src='https://cdn-images-1.medium.com/max/512/1*qUlxDdY3T-rDtJ4LhLGkEg.png' width='180' />
      </div>
      <div class="who-we-are__r-panel__icon col-12 col-sm-6 col-md-4 col-lg-6 col-xl-4 isFlexRow">
        <img src="https://vuejs.org/images/logo.png" width='100' />
      </div>
      <div class="who-we-are__r-panel__icon col-12 col-sm-6 col-md-4 col-lg-6 col-xl-4 isFlexRow">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Webpack.png/214px-Webpack.png" width='120' />
      </div>
      <div class="who-we-are__r-panel__icon col-12 col-sm-6 col-md-4 col-lg-6 col-xl-4 isFlexRow">
        <img src="https://afrisoft.co.ke/wp-content/uploads/2017/11/github.png" width='200' />
      </div>
    </div>
  </div>
</template>
http://vue-newsletter.com/vue-newsletter.png
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
@import '../styles/custom-bootstrap.scss';
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.who-we-are {
  // background-color: lightcyan;
  max-width: 100%;
  margin: 1em;
  .who-we-are__l-panel {
    .who-we-are__l-panel__title {
      // background-color: $bc1;
      font-family: 'Open Sans', sans-serif;
      font-size: 1.4em;
      letter-spacing: -1px;
      color: #1a2328;
      max-width: 14em;
      margin-bottom: 1em;
    }
    .who-we-are__l-panel__descr {
      // background-color: $bc2;
      transform: scaleY(.9);
      line-height: 1em;
      max-width: 30em;
      font-size: 1.1em;
      letter-spacing: -1px;
      
    }
    .who-we-are__l-panel__features {

    }
  }
  .who-we-are__r-panel {
    .who-we-are__r-panel__icon {
      padding: 1.2em;
    }
  }
}

.isFlexRow {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
}
.isFlexCol {
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: flex-start;
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
        line-height: 1.2em;
        letter-spacing: -1px;
        font-size: 1.1em;
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
      }
      .who-we-are__l-panel__descr {
        line-height: 1.2em;
        font-size: 1.2em;
        letter-spacing: -1px;    
      }
      .who-we-are__l-panel__features {

      }
    }
    .who-we-are__r-panel {

    }
  }
}
</style>
