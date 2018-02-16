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
#start-container {
  min-height: 80vh;  
  display: flex;
  flex-direction: column;
 justify-content: center;
 }
 
 #start-wrapper {
   display: flex;
  flex-direction: row;
   flex-wrap: nowrap;
  width: 100%;
   height: auto;
   max-width: 1240px;
  
   margin: 0 auto;
 }
 
 #hacksu-logo {
  width: 50%;
  height: 100%;
  padding: 0 6%;
 }
 
 #start-text {
  width: 50%;
  padding: 0 20px; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Abel', sans-serif;
 }
 
   #start-text button {
    margin: 36px 0 48px;
   }
 
section {
  background-color: #EBEEF0 ;
  color: #041017;
  padding: 48px 0;
}
  .green-section {
  background: linear-gradient(to top left, #35c982, #4683FF); 
  color: white;
 }
 
 .green-section h1 {
   margin-bottom: 0.375em;
 }
 
 .meeting-list {
    color: black;
     box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);
     border-radius: 10px;
     margin: 0 15px;
 }
 
 .meeting-list li {
     background: white;
     border-bottom: 1px solid #ddd;
     display: block;
     min-height: 3rem;
     line-height: 3rem;
     cursor: pointer;
     padding: 0 1rem;
     list-style-type: none;
     opacity: 1;
     text-align: left;
 }
 
 .content {
    line-height: 1em;
    padding-bottom: 1em;
 }
 
 .half-container {
   width: 50%;
 }

.text-container {
  width: 100%;
  max-width: 768px;
  padding: 0 5vw;
  margin: 0 auto;
}
  .flex-row {
   display: flex;
   flex-direction: row;
   
  flex-wrap: wrap;
 }
 
 .flex-col {
   display: flex;
   flex-direction: column;
   
  justify-content: center;
 }
 
 .member-container {
  display: flex;
  justify-content: space-around;
   flex-wrap: wrap;
   margin-top: 40px;
 }
 
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
   height: auto;
  
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
 
 .member-name {
   position: relative;
   top: -48px;
  
   width: 0;
   padding: 10px 0px;
   
   margin: 0 auto;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.15);
   border-radius: 3px;
   
   background-color: #041017;
   color: white;
  opacity: 0;
  
   font-family: 'Abel', sans-serif;
   text-align: center;
 
  transition: none;
   
   box-sizing: border-box;
   
   z-index: 10;
 }
 
 .member-name:before {
 			content: "";
 			position: absolute;
 			left: 50%;
			bottom: -10px;
 			width: 12px;
 			height: 12px;
			background-color: inherit;
 
 			box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.15); 
 			transform: rotate(45deg) translateX(-50%);
 
 			z-index: 99;
 }
 
 .member-icon:hover .member-name {
   width: 100%;
   padding: 10px 20px;
   opacity: 1;
   
   transition: width 0.2s ease-out, padding 0.2s ease-out;
 }
 
 header {
   display: flex;
   justify-content: flex-end;
  
   width: 100%;
   max-width: 1440px;
 }
 
 header ul li {
   display: inline-block;
   padding: 20px 20px;
  
   font-family: 'Abel', sans-serif;
 }
 
 a {
   color: #4683FF;
   
  text-decoration: none;
   
   transition: color 0.2s ease-out;
 }
 
 a:visited {
   color: #4683FF;
 }
 
 a:hover {
   color: #4683FF;
   text-decoration: underline;
 }
 
 .white-link:hover {
   text-decoration: underline;
  color: white;
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
