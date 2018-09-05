<template>
  <div id="app">
    <header>
    <ul id="banner">
      <div class="bannerItem flex-container"
           id="menu-toggler">
        
        <span>Menu</span>
      </div>
      <router-link to="/" class="bannerItem">
        Home
      </router-link>
      <a href="https://khe.io" class="bannerItem" target="_blank">
        Kent Hack Enough
      </a>
      <router-link to="Contact" class = "bannerItem"> 
        Contact
      </router-link>
      <a href="../static/Constitution_2017_Update.pdf" class="bannerItem" target="blank_">
        Constitution
      </a>
      <router-link to="FAQ" class="bannerItem" v-if="0">
        FAQ
      </router-link>
      <a v-if="!loggedIn" @click="loginPopup()" class="bannerItem">
        Login/Register
      </a>
      <!--<router-link v-else class="bannerItem profileItem" to="Profile">-->
      <a v-else-if="user != null && user != undefined" 
         @click="userMenu = !userMenu" 
         class="bannerItem profileItem">
        {{user.name}}
        <img class="member-image" v-bind:src="user.profilePicture">
      </a>
      
      <div id="user-menu" v-if="userMenu"
           @click="userMenu = false">
        <router-link class="user-menu-opt"
                     tag="div"
                     :to="{name: 'you'}">
          Your profile
        </router-link>
        <router-link class="user-menu-opt"
                     tag="div"
                     v-if="user.isAdmin"
                     :to="{name: 'event-editor'}">
          ⭐Event Editor
        </router-link>
        <router-link class="user-menu-opt"
                     tag="div"
                     v-if="user.isAdmin"
                     :to="{name: 'badge-editor'}">
          ⭐Badge Editor
        </router-link>
        <router-link class="user-menu-opt"
                     tag="div"
                     :to="{name: 'Badges'}">
          Badges
        </router-link>
        <div class="user-menu-opt"
             @click="logout()">
          Log Out
        </div>
      </div>
      <!--</router-link>-->
    </ul>
    </header>
    
    <div id="login-stuff" v-if="popup == 'login'">
      <div id="dimmer" @click="popup = ''"> 
      </div> 
        <login-module>
        </login-module> 
    </div>
    <div id="register-stuff" v-if="popup == 'register'">
      <div id="dimmer" @click="popup = ''"> 
      </div> 
        <register-module>
        </register-module> 
    </div>
    
    
    <router-view/>
  </div>
</template>

<script>
import members from './components/Hacksu2018';
import events from './components/Hacksu2018';
import loginModule from './components/Login';
import registerModule from './components/Register';

import Vue from 'vue';
  
import * as firebase from 'firebase';
import 'firebase/firestore';
  
import VTooltip from 'v-tooltip';

Vue.use(VTooltip);

import { config } from './config';
  
firebase.initializeApp(config);
var db = firebase.firestore();

export default {
  name: 'app',
  components: {
    loginModule,
    registerModule,
  },
  data() {
    return {
      popup: '',
      loggedIn: false,
      loggedInDropdown: false,
      members: [],
      events: [],
      db: null,
      
      user: null,
      userMenu: false,
      
      badges: [],
      badgeObj: {}
    }
  },

  methods: {
    loadUser(id) {
      var vm = this;
      this.db.collection('users').doc(id).get()
      .then((doc) => {
        vm.user = doc.data();
        vm.user.id = doc.id;
      }).catch((err) => {
        console.error("There was a problem getting the user: ", err);
      })
    },
    loadBadges() {
      var vm = this;
      this.badges = [];
      this.db.collection('badges').get().then((snapshot) => {
        snapshot.forEach((doc) => {
          var badge = doc.data();
          this.badges.push(doc.data());
          Vue.set(this.badgeObj, badge.id, badge);
        })
      }).catch((err) => {
        console.error("Error getting badges: ", err);
      })
    },
    loadEvents() {
      var vm = this;
      this.events = [];
      this.db.collection('events').get().then((snapshot) => {
        snapshot.forEach((doc) => {
          this.events.push(doc.data());
        })
      }).catch((err) => {
        console.error("Error getting events: ", err);
      })
    },
    logout() {
      firebase.auth().signOut();
      this.user = null;
      this.loggedIn = false;
      this.userMenu = false;
    },
    loginPopup() {
      if (this.popup == 'login' || this.popup == 'register') {
        this.popup = '';
      } else {
        this.popup = 'register';
      }
    }
  },

  mounted() {
    var vm = this;
    vm.db = db;
    
    firebase.auth().onAuthStateChanged((user) => {
      // This if statement will be true if the user is logged in
      // when the page loads! :) 
      if (user){
        vm.db = firebase.firestore();
        vm.loadUser(user.uid);
        this.loggedIn = true;
        this.loginModule = false;
      }
    });

    vm.db.collection("users")
    .limit(10).get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        vm.members.push(doc.data());
      });
    });

    var today = new Date();
    var weekAgo = new Date(new Date().setDate(today.getDate()-7));
    vm.db.collection("calendarEvents")
    .where("date", ">=", weekAgo)
    .orderBy("date")
    .limit(4).get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        vm.events.push(doc.data());
      });
    });
    
    this.loadBadges();
    this.loadEvents();
  }
};
</script>

<style>
  
/*  WARNING: These are global styles! Anything you change here will affect the whole app
  */
  
:root {
/*  You can use these anywhere in the app like this: var(--blue);         */
  --bg-black: #041017;
  --light-bg: #142027;
  --blue: #5284F7;
  --dark-blue: #4274E7;
  --darker-blue: #2254C7;
  --green: #35c982;
  --purple: #6850D1;
  --orange: #e26b4a;
  
  --green-blue-gradient: linear-gradient(to top left, #35c982, #4683FF);
  --blue-purple-gradient: linear-gradient(to top left, var(--blue), var(--purple));
  
}
  
a {
  text-decoration: none;
}

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
  
  .full-page {
    position: absolute;
    top: 55px;
    left: 0px;
    height: 100%;
    width: 100%;
  }
  
  .page-header {
    width: 90vw;
    padding: 50px 5vw 30px 5vw;
    font-size: 5rem;
    text-align: left;
/*    Add this class and then define background color.*/
  }
  
  .basic-input {
    background: none;
    border: none;
    border-bottom: 2px solid white;
    font-size: 20px;
    color: white;
  }
  
  .badge-icon {
    height: 50px;
    width: 50px;
    padding: 10px;
    margin-right: 10px;
    background: var(--bg-black);
    border-radius: 5px;
    cursor: pointer;
    background: linear-gradient(to bottom left, var(--bg-black), #243037);
  }
  .badge-icon:hover {
    background: linear-gradient(to top right, var(--bg-black), #243037);
  }
  
  .white-button {
    background: white;
    padding: 10px 20px 10px 20px;
    font-size: 14px;
    color: var(--darker-blue);
    font-weight: bolder;
    cursor: pointer;
    transition-duration: .1s;
  }
  
  /* Member-icon styles */
  
  .member-icon {
  position: relative;
  width: 25vw;
  height: 25vw;
  min-width: 90px;
  min-height: 90px;
  max-width: 150px;
  max-height: 150px;
  margin: 4px;
  border-radius: 100%;
  background-color: #FAFAFA;
  cursor: pointer;
}
.member-icon-image {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  transform: translate(-50%, -50%);
}
  
.idle-icon {
  opacity: 1;
}
.hover-icon {
  opacity: 0;
}
.active-icon {
 opacity: 0;
}
.member-icon:hover {
  animation: hop 0.6s cubic-bezier(0.245, 0.325, 0.510, 1.0);
}
.member-icon:hover .idle-icon {
 opacity: 0;
}
.member-icon:hover .hover-icon {
 opacity: 1;
}
/*  Tooltip  */
  
  .tooltip {
  display: block !important;
  z-index: 10000;
  
}

.tooltip .tooltip-inner {
  background: black;
  color: white;
  border-radius: 16px;
  padding: 10px 15px 9px;
  font-family: sans-serif;
}

.tooltip .tooltip-arrow {
  width: 0;
  height: 0;
  border-style: solid;
  position: absolute;
  margin: 5px;
  border-color: black;
  z-index: 1;
}

.tooltip[x-placement^="top"] {
  margin-bottom: 5px;
}

.tooltip[x-placement^="top"] .tooltip-arrow {
  border-width: 5px 5px 0 5px;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-bottom-color: transparent !important;
  bottom: -5px;
  left: calc(50% - 5px);
  margin-top: 0;
  margin-bottom: 0;
}

.tooltip[x-placement^="bottom"] {
  margin-top: 5px;
}

.tooltip[x-placement^="bottom"] .tooltip-arrow {
  border-width: 0 5px 5px 5px;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-top-color: transparent !important;
  top: -5px;
  left: calc(50% - 5px);
  margin-top: 0;
  margin-bottom: 0;
}

.tooltip[x-placement^="right"] {
  margin-left: 5px;
}

.tooltip[x-placement^="right"] .tooltip-arrow {
  border-width: 5px 5px 5px 0;
  border-left-color: transparent !important;
  border-top-color: transparent !important;
  border-bottom-color: transparent !important;
  left: -5px;
  top: calc(50% - 5px);
  margin-left: 0;
  margin-right: 0;
}

.tooltip[x-placement^="left"] {
  margin-right: 5px;
}

.tooltip[x-placement^="left"] .tooltip-arrow {
  border-width: 5px 0 5px 5px;
  border-top-color: transparent !important;
  border-right-color: transparent !important;
  border-bottom-color: transparent !important;
  right: -5px;
  top: calc(50% - 5px);
  margin-left: 0;
  margin-right: 0;
}

.tooltip.popover .popover-inner {
  background: #f9f9f9;
  color: black;
  padding: 24px;
  border-radius: 5px;
  box-shadow: 0 5px 30px rgba(black, .1);
}

.tooltip.popover .popover-arrow {
  border-color: #f9f9f9;
}

.tooltip[aria-hidden='true'] {
  visibility: hidden;
  opacity: 0;
  transition: opacity .15s, visibility .15s;
}

.tooltip[aria-hidden='false'] {
  visibility: visible;
  opacity: 1;
  transition: opacity .15s;
}
  
/*  Banner styles */
  
#banner {
  width: 100%;
  position: fixed;
  background: var(--light-bg);
  z-index: 1000;
  display: flex;
  justify-content: flex-end;
  margin-top: 0px;
  top: 0px;
  margin-right: 0px;
  right: 0px;
  border-bottom: solid 2px var(--blue);
  box-shadow: 0px 0px 10px var(--blue);
}
  #menu-toggler {
    display: none;
  }
  
  
  @media only screen and (max-width: 750px) {
    #banner {
      display: flex;
      flex-direction: column;
      max-height: 60px;
      overflow-y: hidden;
      justify-content: flex-start;
    }
    #menu-toggler {
      display: block;
      text-decoration: underline;
      font-weight: bold;
    }
  }
  
.bannerItem {
  color: white;
  transition-duration: .3s;
  min-height: 100%;
  display: inline-block;
  padding: 20px 20px;
  cursor: pointer;
  font-size: 16px;
  height: 16px;
}
.bannerItem:hover {
  background: #4683FF;
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
    top: 0;
  }
  
.member-image {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 36px;
  height: 36px;
  border-radius: 100%;
}
.profileItem {
  padding-right: 60px;
  
}
  
  .flex-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    
  }
  
  #user-menu {
    position: fixed;
    top: 56px;
    width: 200px;
    min-height: 100px;
    background: var(--light-bg);
    color: white;
    z-index: 999; /*Behind #banner, in front of the rest */
    border-bottom: solid 2px var(--green);
    border-left: solid 2px var(--green);
/*    box-shadow: 0px 0px 5px var(--green);*/
  }
  .user-menu-opt {
    text-align: left;
    padding: 5px 10px 5px 10px;
    background: var(--light-bg); /*Needed for the lighten on hover */
  }
  .user-menu-opt:hover {
    cursor: pointer;
    filter: brightness(150%);
  }

</style>
