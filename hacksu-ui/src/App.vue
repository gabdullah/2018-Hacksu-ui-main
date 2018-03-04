<template>
  <div id="app">
    <header>
    <ul id="banner">
      <a href="/" class="bannerItem">
        Home
      </a>
      <a href="https://khe.io" class="bannerItem" target="_blank">
        Kent Hack Enough
      </a>
      <router-link to="Contact" class = "bannerItem"> 
          Contact
      </router-link>
      <a href="#" class="bannerItem">
        Constitution (Not implemented)
      </a>
      <a href="FAQ" class="bannerItem">
        FAQ
      </a>
      <a  @click="loginModule = !loginModule" class="bannerItem">
        <div class="subMenu" v-if="loginShown">
          <a>Login </a>
          <a>Register</a>
        </div>
          
        Login/Register
      </a>
    </ul>
    </header>
    
    <div id="loginStuff" v-if="loginModule">
      <div id="dimmer" @click="loginModule = false"> 
      </div> 
        <login-module>
        </login-module> 
    </div>
    
    <router-view/>
  </div>
</template>

<script>
import loginModule from './components/Login';
import * as firebase from 'firebase';
import 'firebase/firestore';

import { config } from './config';

export default {
  name: 'app',
  components: {
    loginModule
  },
  data() {
    return {
      loginShown: false,
      loginModule: false,
      db: null,
    }
  },

  mounted() {
    var vm = this;
    firebase.initializeApp(config);
    firebase.auth().onAuthStateChanged((user) => {
      if (user){
        vm.db = firebase.firestore();
      }
    })
  }
};
</script>

<style>
  
header {
  display: flex;
  justify-content: flex-end;

  width: 100%;
  max-width: 1440px;
}

header li {
  display: inline-block;
  padding: 20px 20px;

  font-family: 'Abel', sans-serif;
}
  
#banner {
  width: 100%;
  position: fixed;
  background: #041017;
  z-index: 1000;
  display: flex;
  justify-content: flex-end;
  margin-top: 0px;
  top: 0px;
  margin-right: 0px;
  right: 0px;

}
  
.bannerItem {
  color: white;
  transition-duration: .3s;
  height: 100%;
  display: inline-block;
  padding: 20px 20px;
  cursor: pointer;

}
.bannerItem:hover {
  background: #4683FF;

}
  
  .subMenu {
    background: white;
    color: black;
    text-decoration: none;
    position: absolute;
    margin-top: 40px;
    margin-left: -20px;
    box-shadow: 0px 0px 20px rgba(0,0,0,.3);
    animation: slideOut .3s linear;
    overflow: hidden;
  }
  
  .subMenu a {
    display: block;
    padding: 10px;
    border-bottom: solid 1px black;
    min-width: 100px;
    transition-duration: .3s;
  }
  .subMenu a:hover {
    background: lightgray;
  }
  
  @keyframes slideOut {
    from {
      max-height: 0px;
    }
    to {
      max-height: 400px;
    }
  }
  
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  
}
  #dimmer {
    position: fixed;
    width: 1000%;
    height: 100%;
    opacity: 0.5;
    background-color:#000;
    z-index: 20;
    left: 0;
  }
  
</style>
