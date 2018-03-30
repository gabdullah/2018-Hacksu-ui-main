/* eslint-disable /
<template>
  <div id="loginModule">
    <div v-if="!exist">
      <label>
        <b>Name</b>
      </label>
      <input type="text" placeholder="Enter Name"
      v-model="name"
      required>
      <br>
    </div>
   <label>
    <b>
      Email
    </b>
    </label>
    <input type ="text" placeholder="Enter Email"
      v-model="uname"
      required>
    <label>
      <b>Password</b>
    </label>
    <input type="password" placeholder="Enter Password"
      v-model="psw"
      required>
    <br>
    <!-- NEED TO DO -->
    <!--<input type="checkbox" checked="checked"> Remember Me 
    <br>-->
    <!-- Account exists -->
    <div v-if="exist">
      <button @click="signIn()">
        Login
      </button>
      <br><br>
      <span @click="exist = false" class="psw">
        Need an account?
      </span>
      <br><br>
      <span class="psw" @click="forgotPass = !forgotPass"> 
          Forgot Password?
      </span>
      <!-- Password reset -->
      <div v-if="forgotPass">
        <input type="text" placeholder="Enter Email" 
        v-model="reset">
        <button @click="sendEmail()">
          Reset
        </button>
      </div>
    </div>

    <!-- Account doesn't exist -->
    <div v-else>
      <button @click="signUp()">
        Register
      </button>
      <br><br>
      <span @click="exist = true" class="psw">
        Have an account?
      </span>      
    </div>
    <br>
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
      uname: '',
      psw: '',
      errorMessage: '',
      forgotPass: false,
      reset: '',
      exist: true,
    }
  },
  methods: {
    signIn() {
      var vm = this;
      firebase.auth().signInWithEmailAndPassword(this.uname, this.psw)
      .then((user) => {
        //console.log('signed in');
        this.$parent.loginModule = false;
        this.$parent.loggedIn = true;
      }).catch((error) => {
        vm.errorMessage = error.message;
      })
    },

    signUp() {
      var vm = this;
      firebase.auth().createUserWithEmailAndPassword(this.uname, this.psw)
      .then((user) => {
        //console.log('success');
        firebase.auth().signInWithEmailAndPassword(this.uname, this.psw)
        .then((user) => {
          var userId = firebase.auth().currentUser.uid;
          this.$parent.db.collection('users').doc(userId).set({
            email: vm.uname,
            name: vm.name,
            profilePicture: "http://placehold.it/100x100.png",
            role: "member"
          }).then(() => {
            this.$parent.loginModule = false;
            this.$parent.loggedIn = true;
          });
        });
      }).catch((error) => {
        //console.log(error.message);
        vm.errorMessage = error.message;
      })
    },

    sendEmail() {
      var vm = this;
      var auth = firebase.auth();
      auth.sendPasswordResetEmail(this.reset)
      .then(() => {
        //console.log('email sent');
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
    padding: 15px 20px;
    margin: 20px 0;
    display: inline-block;
    border: 3px solid;
    box-sizing: border-box;
    
  }
  
  label{
    width: 100%;
  }

  button {
    background-color: orangered;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: 3px black solid;
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
    background-color: #4683FF;
    position: fixed;
    display: static;
    left: 0;
    right: 0;
    z-index: 40;
    margin: auto;
    
  }

  
</style>

