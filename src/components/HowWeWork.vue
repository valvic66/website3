<template>
  <div class='howwework'>
    <div class="howwework-title">Correct steps to follow in <br />Frontend Development</div>
    <div class="howwework-text">We will follow the above steps <b>carefully</b> in order to make sure that <b>your project will be perfect</b> to represent your bussines. </div>
    <div class="howwework-req">
      <div class="row">
        <div class="col-12 col-sm-6 col-md-4 col-lg-4 isFlexCenter">
          <div class="req-icon icon-check" />
          <div class="req-item">Communication</div>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-4 isFlexCenter">
          <div class="req-icon icon-check-circle" />
          <div class="req-item">Analyse Layout</div>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-4 isFlexCenter">
          <div class="req-icon icon-check-square" />
          <div class="req-item">Identify Components</div>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-4 isFlexCenter">
          <div class="req-icon icon-check" />
          <div class="req-item">Shape UI Appearance</div>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-4 isFlexCenter">
          <div class="req-icon icon-check-circle" />
          <div class="req-item">Integration</div>
        </div>
        <div class="col-12 col-sm-6 col-md-4 col-lg-4 isFlexCenter">
          <div class="req-icon icon-check-square" />
          <div class="req-item">Create Style Guide</div>
        </div>
      </div>
    </div>
    <div class="howwework-button">SEE OUR OFFERS</div>
  </div>
</template>

<script>
export default {
  name: 'HowWeWork',
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
.howwework {
  max-width: 100%;
  margin: 1em;
  .howwework-title {
    // background-color: lightblue;
    font-family: 'Open Sans', sans-serif;
    font-size: 1.4em;
    letter-spacing: -1px;
    line-height: 1.4;
    color: #1a2328;
    max-width: 14em;
    margin-bottom: 1em;
  }
  .howwework-text {
    transform: scaleY(.9);
    line-height: 1.2em;
    max-width: 45em;
  }
  .howwework-req {
    margin: 1em 0;
    .req-item {
      font-size: 1.2em;
    }
    .req-icon {
      padding-right: .2em;
      font-size: 1.2em;
      color: #02b875;
    }
  }
  .howwework-button {
    // margin: 0 auto;
    background-color: #02b875;
    text-transform: uppercase;
    font-size: 1.1em;
    font-weight: 700;
    color: #ffffff;
    text-align: center;
    padding: 1em 0;
    max-width: 12em;
    margin-top: 2em;
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
.isFlexCenter {
  padding: 1em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

@media screen and (min-width: 576px) {
  .howwework {
    margin: 1em;
    .howwework-title {
    font-size: 1.4em;
    letter-spacing: -1px;
    line-height: 1.4;
    }
    .howwework-req {
      margin: 1.2em 0;
      .req-item {
        font-size: 1.2em;
      }
      .req-icon {
        padding-right: .2em;
        font-size: 1.2em;
      }
    }
    .howwework-button {
      padding: 1.2em 0;
      max-width: 12em;
    }
  }
}

@media screen and (min-width: 768px) {}

@media screen and (min-width: 990px) {
  .howwework {
    .howwework-title {
    font-size: 2.3em;
    letter-spacing: -1px;
    line-height: 1.4;
    }
    .howwework-req {
      margin: 1.8em 0;
      .req-item {
        font-size: 1.6em;
      }
      .req-icon {
        padding-right: .2em;
        font-size: 1.4em;
      }
    }
    .howwework-button {
      padding: 1.4em 0;
      max-width: 14em;
    }
  }
}
</style>
