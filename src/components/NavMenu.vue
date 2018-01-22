<template>
  <div class="header-container">
    <div class="header-container-desktop row">
        <div class="col-md-4 header-logo">
          <div class="header-logo-img">
            <router-link to="/"><img src="https://fmexdirect.com/includes/img/technology-icons/html-css-js.png" alt=""></router-link>
          </div>
          <router-link class="header-logo-title" to="/"><div>FRONTEND DEV</div></router-link>
        </div>

      <div class="col-md-8 header-menu">
        <router-link class="header-menu-item" to="/whoami"><div>WHO AM I</div></router-link>
        <router-link class="header-menu-item" to="/howiwork"><div>HOW DO I WORK</div></router-link>
        <router-link class="header-menu-item header-menu-item-btn" to="/showcase"><div>SHOW CASE</div></router-link>
        <div class='header-menu-item-more' />
      </div>
    </div>

    <div v-bind:class='{isGrey: isHamburgerClicked}' class="header-container-mobile">
      <div class="header-logo">
        <div class="header-logo-img">
          <router-link to="/"><img @click="onLogoClick" src="https://fmexdirect.com/includes/img/technology-icons/html-css-js.png" alt=""></router-link>
        </div>
        <router-link class="header-logo-title" to="/"><div @click="onLogoClick" >FRONTEND DEV</div></router-link>
      </div>
      <div @click='onHamburgerClick' class="header-sandwich icon-menu" />
    </div>

    <div v-if='isHamburgerClicked' class="submenu">
      <div class="submenu-upper">
        <div class="submenu-left">
          <router-link class="header-menu-item" to="/whoami"><div @click='onHamburgerClick'>WHO AM I</div></router-link>
          <router-link class="header-menu-item" to="/howiwork"><div @click='onHamburgerClick'>HOW I WORK</div></router-link>
          <router-link class="header-menu-item header-menu-item-btn" to="/showcase"><div @click='onHamburgerClick'>SHOW CASE</div></router-link>
        </div>
        <div class="submenu-right">
          <div class="header-menu-item">My Stack</div>
          <div class="header-menu-item">HTML 5</div>
          <div class="header-menu-item">CSS 3</div>
          <div class="header-menu-item">REACT JS</div>
          <div class="header-menu-item">Vue JS</div>
          <div class="header-menu-item">WEBPACK</div>
          <div class="header-menu-item">NPM</div>
          <div class="header-menu-item">GIT</div>
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
  </div>
</template>

<script>
export default {
  name: 'NavMenu',
  props: [''],
  data () {
    return {
      isHamburgerClicked: false
    }
  },
  methods: {
    onHamburgerClick: function () {
      this.isHamburgerClicked = !this.isHamburgerClicked
    },
    onLogoClick: function () {
      this.isHamburgerClicked = false
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

.header-container-desktop {
  animation-name: header_slide;
  animation-duration: .4s;
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
      text-decoration: none;
      font-size: 1em;
      font-weight: 600;
      letter-spacing: -2px;
      color: #1a2328;
      text-transform: uppercase;
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
      text-decoration: none;
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
      text-decoration: none;
      font-size: .9em;
      font-weight: 600;
      letter-spacing: -2px;
      color: #1a2328;
      text-transform: uppercase;
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
        font-size: .9em;
        font-weight: 900;
        color: #1a2328;
        text-transform: uppercase;
        text-decoration: none;
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
        // cursor: pointer;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-size: .9em;
        font-weight: 350;
        color: #1a2328;
        &:hover {
          // color: #02b875;
        }
        &:first-child {
          color: #02b875;
          border: solid #02b875 2px;
          border-radius: 8px;
          text-align: center;
        }
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
  .breakline {
    margin-left: 0;
    max-width: 100%;
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

@media screen and (min-width: 768px) {
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

@media screen and (min-width: 990px) {}

@keyframes header_slide {
    from {transform: translateY(-100px);}
    to {transform: translateY(0);}
}
</style>
