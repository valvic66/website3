<template>
  <div class="wrapper">
    <div class="header-container-desktop row">
      <div class="col-md-3 header-logo">
        <div class="header-logo-img">
          <img src="https://image.freepik.com/free-icon/apple-logo_318-40184.jpg" alt="" width="50">
        </div>
        <div class="header-logo-title">Apple</div>
      </div>
      <div class="col-md-9 header-menu">
        <div class="header-menu-item">HOW IT WORKS</div>
        <div class="header-menu-item">WHO WE ARE</div>
        <div class="header-menu-item">SHOW CASE</div>
        <div class="header-menu-item">WHY US</div>
        <div class="header-menu-item header-menu-item-btn">START A PROJECT</div>
        <div class='header-menu-item-more icon-more_horiz' />
      </div>
    </div>

    <div class="header-container-mobile row">
      <div class="header-logo">
        <div class="header-logo-img">
          <img src="https://image.freepik.com/free-icon/apple-logo_318-40184.jpg" alt="" width="60">
        </div>
        <div class="header-logo-title">Apple</div>
      </div>
      <div @click='onHamburgerClick' class="header-sandwich icon-menu" />
    </div>

    <div v-if='isHamburgerClicked' class="submenu row col-md-12">
      <div class="submenu-upper">
        <div class="submenu-left">
          <div class="header-menu-item">HOW IT WORKS</div>
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

        <div class="contact-skype isFlex">
          <div class="icon-brand10" />
          <div class="submenu-lower-item">micuvalentin3</div>
        </div>

        <div class="contact-skype isFlex">
          <div class="icon-brand5" />
          <div class="submenu-lower-item">valvic6@gmail.com</div>
        </div>

        <div class="contact-skype isFlex">
          <div class="icon-brand2" />
          <div class="submenu-lower-item">Constanta, Romania</div>
        </div>
      </div>
    </div>

    <div>Collapsed text</div>

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
.icon-menu:before {
  content: "\e5d2";
}
.icon-more_horiz:before {
  content: "\e5d3";
}
.icon-reorder:before {
  content: "\e8fe";
}

.bc1 {
  background-color: $bc1;
}
.bc2 {
  background-color: $bc2;
}

.wrapper {
  max-width: 1200px;
  margin: 0 auto;
}

.header-container-desktop {
  display: none;
  .header-logo {
    animation-name: logo_slide;
    animation-duration: .3s;
    animation-fill-mode: both;

    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    .header-logo-img {
      margin-left: 1em;
    }
    .header-logo-title {
      font-size: 20px;
      font-weight: 700;
      color: #1a2328;
      text-transform: uppercase;
    }
  }
  .header-menu {
    animation-name: header_slide;
    animation-duration: .3s;
    animation-fill-mode: both;

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
  .header-logo {
    margin-left: 2em;
  }
  .header-sandwich {
    font-size: 1.8em;
    margin-right: 1em;
    &:hover {
      cursor: pointer;
    }
  }
  .header-logo {
    img {
      width: 30px;
      height: 30px;
    }
    .header-logo-title {
      font-size: .9em;
    }
  }
}

.submenu {
  animation-name: submenu_slide;
  animation-duration: .3s;
  animation-fill-mode: both;

  display: flex;
  flex-direction: column;
  padding-top: .5em;

  .submenu-upper {
    width: 100%;
    height: 16em;

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
        font-size: 15px;
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
      .header-menu-item {
        cursor: pointer;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-size: 13px;
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
    font-size: 13px;
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
    .isFlex {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
    }
  }
}

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
}

@keyframes header_slide {
    from {transform: translateY(-100px);}
    to {transform: translateY(0);}
}
@keyframes logo_slide {
    from {transform: translateX(-100px);}
    to {transform: translateX(0);}
}
@keyframes submenu_slide {
    from {transform: translateY(-50px);}
    to {transform: translateY(0);}
}
</style>
