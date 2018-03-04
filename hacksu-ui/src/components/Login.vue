/* eslint-disable /
<template>
  <div id="loginModule">
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
    <button @click="signUp()">
      Login/Register
    </button>
    <br>
    <button type="button" class="cancelbtn" 
     @click="$parent.loginModule = false"> 
      Cancel
    </button>
    <br><br>
    <span class="psw">
      <a href="#" @click="forgotPass = !forgotPass" style="color:white;"> 
        Forgot Password?
      </a>
    </span>
    <div v-if="forgotPass">
      <input type="text" placeholder="Enter Email" 
      v-model="reset">
      <button @click="sendEmail()">
        Reset
      </button>
    </div>
    <br>
    <div style="color: white;">
      {{ resetMessage }}
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
      uname: '',
      psw: '',
      errorMessage: '',
      forgotPass: false,
      reset: '',
      resetMessage: '',
    }
  },
  methods: {
    signUp() {
      var vm = this;
      firebase.auth().createUserWithEmailAndPassword(this.uname, this.psw)
      .then((user) => {
        console.log('success');
      }).catch((error) => {
        console.log(error.message);
        vm.errorMessage = error.message;
      })
    },

    sendEmail() {
      var vm = this;
      var auth = firebase.auth();
      auth.sendPasswordResetEmail(this.reset)
      .then(() => {
        console.log('email sent');
        vm.resetMessage = 'A confirmation email has been sent!';
        vm.forgotPass = false;
       }).catch((error) => {
        console.log(error.message);
        vm.resetMessage = error.message;
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
  
  span.psw {
    /*float: right;*/
    padding-top: 16px;
    color: white;
  }
  #loginModule{
    top: 120px;
    /*height: 400px;*/
    min-height: 390px;
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

