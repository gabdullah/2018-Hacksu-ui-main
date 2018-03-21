/* eslint-disable /
<template>
 <div id="maincontainer">
  <section class="contact-container">
   <h1>Contact Us</h1>
    <p>If you have any questions regarding Hacksu, please feel free to contact us. One of us will get back to you as soon as possible.</p>
    <br>
   <div id="text-container"> 
   <label>Subject:</label>
   <br>
   <input id="subject" v-model = "ticket.subject" placeholder="What is the message about?" type = "text"> 
   
   <div v-if = "subjectError" class = "error">Please add a subject to your message. </div>
    <br><br v-if = "!subjectError">
     
   <label>Name:</label>
      <br>
   <input id="Name" v-model = "ticket.name" placeholder="John Doe" type ="text"> 
    
    <div v-if = "nameError" class = "error">Please fill out your name. </div>
     <br><br v-if = "!nameError">
   <label>Email: </label>
      <br>
   <input id="Email" v-model = "ticket.replyTo" placeholder="name@example.com" type = "text">
   
    <div v-if = "replyToError" class = "error">Please fill out your email. </div>  
   <br><br v-if = "!replyToError">
   <label>Body:</label>
      <br>
   <textarea id="Body" v-model = "ticket.body" placeholder="Place message here."></textarea>
   
    <div v-if = "bodyError" class = "error">Your message can't be blank. </div>  
   <br><br v-if = "!bodyError">
   <button @click = "check()" id="contactButton" class="send-email">Send</button>
   <div style = "color: white;">
     {{infoMessage}}
   </div>
   </div>
   </section>
    </div>
</template>

<script>
import Vue from 'vue';

import VueResource from 'vue-resource';
Vue.use(VueResource)
export default {
  data() {
    return {
      ticket: {
        subject: '',
        name: '',
        replyTo: '',
        body: '',
      },
      infoMessage: '',
      canSend: true,
      subjectError: false,
      nameError: false,
      replyToError: false,
      bodyError: false,
    };
  },

  methods: {
    check() {
      var vm = this;
      if (!this.canSend) { return; } // Ensure there's no double sending

      console.log(this.ticket.body);

      //console.log('Checked');
      if (vm.ticket.subject === '') {
        vm.subjectError = true;
      } else {
        vm.subjectError = false;
      }
      if (vm.ticket.name === '') {
        vm.nameError = true;
      } else{
        vm.nameError = false
      }
      if (vm.ticket.replyTo === '') {
        vm.replyToError = true;
      }else {
        vm.replyToError = false;
      } 
      if (vm.ticket.body === '') {
        vm.bodyError = true;
      } else {
        vm.bodyError = false;
        this.sendMessage();
      }
    },

    sendMessage() {
      console.log('success');
      this.canSend = false;
      
      this.$http.post(`https://api.khe.io/v1.0/tickets`, this.ticket)
      .then((response) => {
        console.log('Ticket sent', response);
        this.infoMessage = 'Thanks! Your message was received.';

        this.ticket.subject = '';
        this.ticket.name = '';
        this.ticket.repyTo = '';
        this.ticket.body = '';

        this.canSend = true;
      })
      .catch((error) => {
        // Handle error...
        console.log(error);
        this.infoMessage = 'Message Failed to Send. Try again in a bit.';
        this.canSend = true;
        
        console.log('API responded with:', error.response.data);
        throw error;
      });
    }  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  * {
  box-sizing: border-box;
}

.error{
  color: white;
}
  
  label{
  color: #FFF;
  font-weight: bold;
    
  
  }
  
input{
    background: transparent;
    border: .5px solid #35C982;
    border-width: 5px;
    border-radius: 2px;
    margin-top: 10px;
    outline: 0;
    color: #fff;
    font-size: 1rem;
    font-family: arial;
    text-align: left;
    padding: 20px;
    margin-bottom: 6px;
    width: 60%;
    height: 40px;
  }

textarea{
    background: transparent;
    border: .5px solid #35C982;
    border-width: 5px;
    border-radius: 2px;
    margin-top: 10px;
    outline: 0;
    color: #fff;
    font-size: 1rem;
    font-family: arial;
    text-align: left;
    padding: 15px;
    margin-bottom: 6px;
    width: 60%;
    height: 60px;
  }
  
.contact-container{
    background:#041017; 
  } 
  
#maincontainer {
    position:absolute;
    width:100%;
    height:110%;
    text-align: left;
    padding-left: 12%;
    left:0;
    top:0;
    background-color: #041017;
    font-family: 'arial', sans-serif;
  
  /*color: white;*/
}
section {
  /*background-color: #EBEEF0 ;*/
  color: #041017;
  padding: 48px 0;
}
.text-container {
  width: 100%;
  max-width: 768px;
  padding: 0 5vw;
  margin: 0 auto;
}
button {
  width: auto;
  max-width: 300px;
  margin: 0.5em auto;
  padding: 12px 32px;
  border-radius: 2px;
  font-family: 'Ropa Sans', sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: white;
  background: #35c982;
  box-shadow: none;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease-out;
}
  
p{
  font-family: 'Abel', sans-serif;
  font-size: 1em;
  line-height: 1.2em;
  margin-bottom: 0.5em;
  color: white
    
  }
h1 {
  font-size: 3em;
  line-height: 1.5em;
  margin-bottom: 0.5em;
  color: white
}
</style>