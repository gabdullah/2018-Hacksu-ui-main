<template>
  <div id="loginModule">
    <h1>Register</h1>
    
    <div>Email:</div>
    <input type="text" v-model="email">
    
    <div>Password:</div>
    <input type="password" v-model="psw">
    
    <div>Confirm Password:</div>
    <input type="password" v-model="psw2">
    
    <div class="flex-container">
      <span style="font-size: 15px;cursor:pointer;"
            @click="$parent.popup = 'login'">
        Log in instead
      </span>
  
      <button @click="signUp()">
        Register!
      </button>
    </div>
    
    <div style="color: white;">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script>
import * as firebase from 'firebase';
import 'firebase/firestore';

export default {
  data() {
    return {
      name: '',
      email: '',
      psw: '',
      psw2: '',
      errorMessage: '',
      forgotPass: false,
      reset: '',
      exist: true,
    }
  },
  methods: {
    signIn() {
      var vm = this;
      firebase.auth().signInWithEmailAndPassword(this.email, this.psw)
      .then((user) => {
        this.$parent.loginModule = false;
        this.$parent.loggedIn = true;
      }).catch((error) => {
        vm.errorMessage = error.message;
      })
    },

    signUp() {
      var vm = this;
      firebase.auth().createUserWithEmailAndPassword(this.email, this.psw)
      .then((user) => {
        firebase.auth().signInWithEmailAndPassword(this.email, this.psw)
        .then((user) => {
          var userId = firebase.auth().currentUser.uid;
          this.$parent.db.collection('users').doc(userId).set({
            email: vm.email,
            name: vm.name,
            profilePicture: "http://placehold.it/100x100.png",
            role: "member"
          }).then(() => {
            this.$parent.loginModule = false;
            this.$parent.loggedIn = true;
          });
        });
      }).catch((error) => {
        vm.errorMessage = error.message;
      })
    },

    sendEmail() {
      var vm = this;
      var auth = firebase.auth();
      auth.sendPasswordResetEmail(this.reset)
      .then(() => {
        vm.errorMessage = 'A confirmation email has been sent!';
        vm.forgotPass = false;
       }).catch((error) => {
        vm.errorMessage = error.message;
      })
       vm.reset = '';
    },
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  input[type=text], input[type=password] {
    width: 75%;
    padding: 0px 20px 15px 20px;
    margin-top: 20px;
    
    border: none;
    margin-bottom: 13px;
    border-bottom: 2px solid white;
/*    transition-duration: .4s;*/

    display: inline-block;
    box-sizing: border-box;
    background: none;
    color: white;
    font-size: 18px;
    outline: none;
    
  }
  input[type=text]:focus, input[type=password]:focus {
    border-bottom: 2px solid var(--purple);
  }
  
  
  label{
    width: 100%;
  }

  button {
    background-color: var(--green);
    color: black;
    padding: 14px 20px;
    margin: 8px 0;
/*    border: 3px black solid;*/
    border: none;
    box-shadow: 0px 0px 10px black;
    cursor: pointer;
    width: 27%;
  }
  
  .psw {
    /*float: right;*/
    padding-top: 16px;
    color: white;
    cursor: pointer;
  }
  #loginModule{
    top: 120px;
    /*height: 400px;*/
    min-height: 300px;
    max-height: 1000px;
    width: 500px;
    background: var(--blue-purple-gradient);
    color: white;
    position: fixed;
    display: static;
    left: 0;
    right: 0;
    z-index: 40;
    margin: auto;
    font-size: 22px;

    padding: 10px 10px 10px 20px;
  }

  
</style>

