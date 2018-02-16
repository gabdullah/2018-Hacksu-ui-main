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
   <input id="subject" name = "subject" placeholder="What is the message about?" type = "text"> 
     <br><br>
   <label>Name:</label>
      <br>
   <input id="Name" name = "name" placeholder="John Doe" type ="text"> 
     <br><br>
   <label>Email:</label>
      <br>
   <input id="Email" name = "email" placeholder="name@example.com" type = "text">
     <br><br>
   <label>Body:</label>
      <br>
   <textarea id="Body" name="body" placeholder="Place message here."></textarea>
   <br><br> 
   <button id="contactButton" class="send-email">Send</button>
   </div>
   </section>
    </div>
</template>

<script>
export default {
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  * {
  box-sizing: border-box;
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
  
  color: white;
}
section {
  background-color: #EBEEF0 ;
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
    
  font-size: 1em;
  line-height: 1.5em;
  margin-bottom: 0.5em;
  color: white
    
  }
h1 {
  font-size: 3em;
  line-height: 1.5em;
  margin-bottom: 0.5em;
  color: white
}
p {
  font-family: 'Abel', sans-serif;
  font-size: 1em;
  line-height: 1.2em;
}
@keyframes hop {
  30% {
    transform: translateY(-12px);
  }
  60% {
    transform: translateY(0px);
  }
  80% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>