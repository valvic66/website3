<template>
  <div class="wrapper">
    <div class="header-container-desktop row">
      <div class="col-md-3 header-logo">
        <div class="header-logo-img">
          <img src="https://fmexdirect.com/includes/img/technology-icons/html-css-js.png" alt="">
        </div>
        <div class="header-logo-title">FRONTEND DEV</div>
      </div>
      <div class="col-md-9 header-menu">
        <div class="header-menu-item">HOW WE WORK</div>
        <div class="header-menu-item">WHO WE ARE</div>
        <div class="header-menu-item">SHOW CASE</div>
        <div class="header-menu-item">WHY US</div>
        <div class="header-menu-item header-menu-item-btn">START A PROJECT</div>
        <div class='header-menu-item-more icon-more_horiz' />
      </div>
    </div>

    <div v-bind:class='{isGrey: isHamburgerClicked}' class="header-container-mobile">
      <div class="header-logo">
        <div class="header-logo-img">
          <img src="https://fmexdirect.com/includes/img/technology-icons/html-css-js.png" alt="">
        </div>
        <div class="header-logo-title">FRONTEND DEV</div>
      </div>
      <div @click='onHamburgerClick' class="header-sandwich icon-menu" />
    </div>

    <div v-if='isHamburgerClicked' class="submenu">
      <div class="submenu-upper">
        <div class="submenu-left">
          <div class="header-menu-item">HOW WE WORK</div>
          <div class="header-menu-item">WHO WE ARE</div>
          <div class="header-menu-item">SHOW CASE</div>
          <div class="header-menu-item">WHY US</div>
          <div class="header-menu-item header-menu-item-btn">START A PROJECT</div>
        </div>
        <div class="submenu-right">
          <div class="header-menu-item">Web Design</div>
          <div class="header-menu-item">Website de Prezentare</div>
          <div class="header-menu-item">Magazin Online</div>
          <div class="header-menu-item">Promovare Online</div>
          <div class="header-menu-item">Branding</div>
          <div class="header-menu-item">Despre Noi</div>
          <div class="header-menu-item">Contact</div>
          <div class="header-menu-item">Cariera</div>
        </div>
      </div>

      <div class="breakline row" />

      <div class="submenu-lower">
        <div class="contact-title">CONTACT</div>

        <div class="contact-skype isFlexStart">
          <div class="icon-brand10" />
          <div class="submenu-lower-item">micuvalentin3</div>
        </div>

        <div class="contact-skype isFlexStart">
          <div class="icon-brand5" />
          <div class="submenu-lower-item">valvic6@gmail.com</div>
        </div>

        <div class="contact-skype isFlexStart">
          <div class="icon-brand2" />
          <div class="submenu-lower-item">Constanta, Romania</div>
        </div>
      </div>
    </div>

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

  </div>
</template>

<script>
export default {
  name: 'Header',
  props: [''],
  data () {
    return {
      isHamburgerClicked: false
    }
  },
  methods: {
    onHamburgerClick: function () {
      this.isHamburgerClicked = !this.isHamburgerClicked
    }
  }
}
</script>

<style scoped lang='scss'>
@import '../styles/custom-bootstrap.scss';

@font-face {
  font-family: 'icomoon';
  src:  url('fonts/icomoon.eot?4p5d2l');
  src:  url('fonts/icomoon.eot?4p5d2l#iefix') format('embedded-opentype'),
    url('fonts/icomoon.ttf?4p5d2l') format('truetype'),
    url('fonts/icomoon.woff?4p5d2l') format('woff'),
    url('fonts/icomoon.svg?4p5d2l#icomoon') format('svg');
  font-weight: normal;
  font-style: normal;
}
[class^="icon-"], [class*=" icon-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'icomoon' !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.icon-check:before {
  content: "\e90d";
}
.icon-check-circle:before {
  content: "\e90c";
}
.icon-check-square:before {
  content: "\e90e";
}
.icon-menu:before {
  content: "\e5d2";
}
.icon-more_horiz:before {
  content: "\e5d3";
}
.icon-reorder:before {
  content: "\e8fe";
}
.icon-brand:before {
  content: "\e900";
  color: #999;
}
.icon-brand2:before {
  content: "\e901";
  color: #19a9e5;
}
.icon-brand3:before {
  content: "\e902";
  color: #3b5998;
}
.icon-brand4:before {
  content: "\e903";
}
.icon-brand5:before {
  content: "\e904";
  color: #d14836;
}
.icon-brand6:before {
  content: "\e905";
  color: #4285f4;
}
.icon-brand7:before {
  content: "\e906";
  color: #0077b5;
}
.icon-brand8:before {
  content: "\e907";
  color: #0084ff;
}
.icon-brand9:before {
  content: "\e908";
  color: #00d8ff;
}
.icon-brand10:before {
  content: "\e909";
  color: #00aff0;
}
.icon-brand11:before {
  content: "\e90a";
  color: #56b68b;
}
.icon-brand12:before {
  content: "\e90b";
  color: #1da1f2;
}

.bc1 {
  background-color: $bc1;
}
.bc2 {
  background-color: $bc2;
}

* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

.wrapper {
  max-width: 1200px;
  margin: 0 auto;
}

.header-container-desktop {
    animation-name: header_slide;
    animation-duration: .3s;
    animation-fill-mode: both;

  display: none;
  .header-logo {

    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    .header-logo-img {
      margin-left: 1em;
     img {
      width: 150px;
      height: 70px;
     }
    }
    .header-logo-title {
      font-size: 1.2em;
      font-weight: 600;
      letter-spacing: -2px;
      color: #1a2328;
      text-transform: uppercase;
      padding-left: .5em;
    }
  }
  .header-menu {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    .header-menu-item {
      cursor: pointer;
      margin: 0 1em;
      font-size: 14px;
      font-weight: 700;
      color: #1a2328;
      text-transform: uppercase;
      letter-spacing: -1px;
      &:hover {
        color: #02b875;
      }
      &:first-child {
        margin-left: 0;
      }
      &:last-child {
        margin-right: 0;
      }
    }
    .header-menu-item-btn {
      background-color: #02b875;
      text-transform: uppercase;
      font-size: 14px;
      font-weight: 700;
      color: #ffffff;
      padding: 8px 11px 10px 11px;
      // -webkit-transition: background-color .2s ease-in-out, margin-top .2s ease-in-out;
      // -moz-transition: background-color .2s ease-in-out, margin-top .2s ease-in-out;
      // -o-transition: background-color .2s ease-in-out, margin-top .2s ease-in-out;
      // transition: background-color .2s ease-in-out, margin-top .2s ease-in-out;
      height: 38px;
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
    .header-menu-item-more {
      font-size: 1.5em;
      margin-right: 1em;
      cursor: pointer;
      &:hover {
        color: #02b875;
      }
    }
  }
}

.header-container-mobile {
  padding-top: 1em;
  padding-bottom: .5em;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .header-sandwich {
    font-size: 1.8em;
    margin-right: .5em;
    padding: .5em;
    &:hover {
      cursor: pointer;
    }
  }
  .header-logo {
    margin-left: 2em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    img {
      width: 120px;
      height: 60px;
    }
    .header-logo-title {
      font-size: 1.2em;
      letter-spacing: -2px;
      padding-left: .5em;
    }
  }
}
.isGrey {
  background-color: #f5f7fa;
}

.submenu {
  background-color: #f5f7fa;

  width: 100%;

  display: flex;
  flex-direction: column;
  padding-top: .6em;

  .submenu-upper {
    width: 100%;
    height: 15em;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .submenu-left {
      padding-left: 1em;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .header-menu-item {
        cursor: pointer;
        font-size: 1em;
        font-weight: 900;
        color: #1a2328;
        text-transform: uppercase;
        letter-spacing: -1px;
        &:hover {
          color: #02b875;
        }
        &:first-child {
          margin-left: 0;
        }
        &:last-child {
          margin-right: 0;
        }
      }
      .header-menu-item-btn {
        background-color: #02b875;
        text-transform: uppercase;
        font-size: 14px;
        font-weight: 700;
        color: #ffffff;
        padding: 8px 11px 10px 11px;
        height: 38px;
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
    .submenu-right {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      text-align: right;
      padding-right: 1em;
      .header-menu-item {
        cursor: pointer;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-size: .9em;
        font-weight: 350;
        color: #1a2328;
        &:hover {
          color: #02b875;
        }
        &:first-child {
          margin-left: 0;
        }
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
  .breakline {
    border: solid lightgray 1px;
  }
  .submenu-lower {
    padding-top: 1em;
    padding-left: 1.2em;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: .9em;
    color: #a0a8be;
    .contact-title {
      font-weight: 700;
      padding-bottom: .6em;
    }
    .submenu-lower-item {
      cursor: pointer;
      padding-top: .3em;
      padding-bottom: .3em;
      padding-left: .5em;
      &:hover {
        color: #02b875;
      }
    }
    .isFlexStart {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
    }
  }
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
  .header-container-desktop {
    padding-top: 2em;
    padding-bottom: 1em;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .header-container-mobile {
    display: none;
  }
  .submenu {
    display: none;
  }

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
      padding: 1.6em 0;
      max-width: 16em; 
    }
  }
}

@keyframes header_slide {
    from {transform: translateY(-100px);}
    to {transform: translateY(0);}
}
</style>
