<template>
  <div id="app">
    <header>
    <ul id="banner">
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
      <router-link to="FAQ" class="bannerItem">
        FAQ
      </router-link>
      <a  v-if="!loggedIn" @click="popup = 'register'" class="bannerItem">
        Login/Register
      </a>
      <!--<router-link v-else class="bannerItem profileItem" to="Profile">-->
      <a v-else-if="user != null && user != undefined" 
         @click="userMenu = !userMenu" 
         class="bannerItem profileItem">
        {{user.name}}
        <img class="member-image" v-bind:src="user.profilePicture">
      </a>
      <div id="userMenu" v-if="userMenu">
        <div class="userMenuOpt"
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

import * as firebase from 'firebase';
import 'firebase/firestore';

import { config } from './config';

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
      userMenu: false
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
    logout() {
      firebase.auth().signOut();
      this.user = null;
      this.loggedIn = false;
      this.userMenu = false;
    }
  },

  mounted() {
    var vm = this;
    firebase.initializeApp(config);
    vm.db = firebase.firestore();    
    
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
  }
};
</script>

<style>
  
/*  WARNING: These are global styles! Anything you change here will affect the whole app
  */
  
:root {
  --bg-black: #041017;
  --blue: #5284F7;
  --green: #35c982;
  --purple: #6850D1;
  
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
  
#banner {
  width: 100%;
  position: fixed;
  background: var(--bg-black);
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
  
  #userMenu {
    position: fixed;
    top: 50px;
    width: 200px;
    min-height: 100px;
    background: black;
    color: white;
  }
  .userMenuOpt:hover {
    cursor: pointer;
    box-shadow: white 0px 0px 5px;
  }

</style>
