/* eslint-disable /
<template>
 <div id="maincontainer">

<div id="start-container">
  <div id="start-wrapper">
    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/816158/hacksu-logo.svg" alt="Hacksu" title="Hacksu" id="hacksu-logo">
    <div id="start-text">
      <h1>Learn. Grow. Create.</h1>
      <h2 class="subtitle">Hacksu teaches anyone, regardless of skill level or major, how to code.</h2>
      <button v-scroll-to="{
     el: '#get-involved',
     duration: 500,
     easing: 'linear',
     offset: -100,
     cancelable: true,
     y: true}">Get Involved</button>
    </div>
  </div><!-- /Wrapper -->
</div><!-- /Container -->
<section>
  <div class="text-container">
    <h1>Who are we?</h1>
    <p>Hacksu is a student organization at Kent State University focused on learning and utilizing contemporary technologies. We are a very diverse community, spanning multiple majors from Fashion Design to Zoology and are open to students of any skill level. Everyone is welcome!</p>

    <div class= "member-container">
      <div v-for="name in names" class='member-icon'>
        <div class="member-name">
          {{name}}
        </div>
      </div>
    
    <!--<div class="member-icon">
        <div class="member-name">Baymax</div>
        <img class="member-icon-image idle-icon" src="https://i.pinimg.com/736x/87/58/a9/8758a924587757e72147c9810ff4b17c--big-hero--baymax.jpg" />

        <img class="member-icon-image hover-icon"  src="https://i.ytimg.com/vi/ijnF67942ac/maxresdefault.jpg" />
    </div>
    <div class="member-icon">
        <div class="member-name 2">Stitch</div>
        <img class="member-icon-image idle-icon" src="https://s-media-cache-ak0.pinimg.com/originals/94/be/4e/94be4ec04d97aa1d1da94c73843c8789.jpg" />

        <img class="member-icon-image hover-icon"  src="https://s-media-cache-ak0.pinimg.com/474x/88/6c/9e/886c9e242117c1eff5cd0a8a11eddba0.jpg" />
      </div>
      
    <div class="member-icon">
        <div class="member-name 3">Joy</div>
        <img class="member-icon-image idle-icon" src="https://img1.etsystatic.com/111/1/10775770/il_570xN.859857221_58xt.jpg" />

        <img class="member-icon-image hover-icon"  src="https://i.pinimg.com/736x/bc/35/f2/bc35f2bed486518ee901b3c2e0e74295--joy-movie-disney-inside-out.jpg" />
      </div>
      
    <div class="member-icon">
        <div class="member-name">Wall-e</div>
        <img class="member-icon-image idle-icon" src="https://nootrix.com/wp-content/uploads/2014/09/wall-eDisneyMovie-680x365_c.jpg" />

        <img class="member-icon-image hover-icon"  src="https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-12561-of3s1g_a2a6d857.jpeg" />
      </div>-->
    </div>
      
      
      
      </div>
      </section>
      
<section class="green-section" id="meetings">
  <h1 id = 'meetingsheader' class="text-container">Meetings</h1>
  <div class="text-container">
    <div class="text-container">
      <h2>Every Tuesday @ 7pm</h2>
      <h3>Honors College, room 060</h3>
      <p class="white-link" @click="showMap = !showMap">Need directions?</p>
      <iframe v-if="showMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3004.303743944166!2d-81.34756828434958!3d41.1497230186572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8831252c1fee9a43%3A0x65bd231d74579eb9!2sKent+State+University+Honors+College!5e0!3m2!1sen!2sus!4v1519874147929" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
    </div>
    <div class="class-container flex-col">
      <ul class="meeting-list">
        <li>
          <div class="header">Web Basics, ExpressJS</div>
          <div class="content">
            <p>On the beginner side, we'll be learning the basics of web development - making websites! We will mostly be focusing on CSS and HTML. Make sure to bring a laptop! We will also be setting up Github accounts for those who don't have them.</p>
            <br>
            <p>On the advanced side, Isaac will be talking about Express.js, a Javascript framework for creating APIs!</p>

            </div>
        </li>
        <li>
          <div class="header">Web Basics, ExpressJS</div>
        </li>
        <li>
          <div class="header">Web Basics, ExpressJS</div>
        </li>
      </ul>
    </div>
  </div>
</section>
<section id="get-involved">
  <div class="text-container">
    <h1>Get Involved</h1>
    <p>The best way to stay informed is to join our <a href="https://www.facebook.com/groups/hacksu" target="_blank">Facebook Group</a> or sign up for our email list below. Also make sure to follow us on all the social media.</p>
    <br>
    <p>If you're interested in volunteering for Kent Hack Enough, you can join our <a href="https://khe.slack.com" target="_blank">Slack team.</a></p>
    <br><br>
    <label>Subscribe to email updates</label>
    <input type="email" placeholder="Email..."/>
    <button>Submit</button>
    <br>
  </div>
</section>
<footer>
    <div class="social-icons">
    <a href="https://www.facebook.com/groups/hacksu" target="_blank" title="Facebook"><svg viewBox="0 0 512 512"><path d="M211.9 197.4h-36.7v59.9h36.7V433.1h70.5V256.5h49.2l5.2-59.1h-54.4c0 0 0-22.1 0-33.7 0-13.9 2.8-19.5 16.3-19.5 10.9 0 38.2 0 38.2 0V82.9c0 0-40.2 0-48.8 0 -52.5 0-76.1 23.1-76.1 67.3C211.9 188.8 211.9 197.4 211.9 197.4z"/></svg></a>
    <a href="https://twitter.com/_hacksu" target="_blank" title="Twitter" class="twitter">
      <svg viewBox="0 0 512 512"><path d="M419.6 168.6c-11.7 5.2-24.2 8.7-37.4 10.2 13.4-8.1 23.8-20.8 28.6-36 -12.6 7.5-26.5 12.9-41.3 15.8 -11.9-12.6-28.8-20.6-47.5-20.6 -42 0-72.9 39.2-63.4 79.9 -54.1-2.7-102.1-28.6-134.2-68 -17 29.2-8.8 67.5 20.1 86.9 -10.7-0.3-20.7-3.3-29.5-8.1 -0.7 30.2 20.9 58.4 52.2 64.6 -9.2 2.5-19.2 3.1-29.4 1.1 8.3 25.9 32.3 44.7 60.8 45.2 -27.4 21.4-61.8 31-96.4 27 28.8 18.5 63 29.2 99.8 29.2 120.8 0 189.1-102.1 185-193.6C399.9 193.1 410.9 181.7 419.6 168.6z"/></svg></a>
    <a href="https://www.instagram.com/hacksu/" target="_blank" title="Instagram" class="instagram">
    <svg viewBox="0 0 512 512"><path d="M256 109.3c47.8 0 53.4 0.2 72.3 1 17.4 0.8 26.9 3.7 33.2 6.2 8.4 3.2 14.3 7.1 20.6 13.4 6.3 6.3 10.1 12.2 13.4 20.6 2.5 6.3 5.4 15.8 6.2 33.2 0.9 18.9 1 24.5 1 72.3s-0.2 53.4-1 72.3c-0.8 17.4-3.7 26.9-6.2 33.2 -3.2 8.4-7.1 14.3-13.4 20.6 -6.3 6.3-12.2 10.1-20.6 13.4 -6.3 2.5-15.8 5.4-33.2 6.2 -18.9 0.9-24.5 1-72.3 1s-53.4-0.2-72.3-1c-17.4-0.8-26.9-3.7-33.2-6.2 -8.4-3.2-14.3-7.1-20.6-13.4 -6.3-6.3-10.1-12.2-13.4-20.6 -2.5-6.3-5.4-15.8-6.2-33.2 -0.9-18.9-1-24.5-1-72.3s0.2-53.4 1-72.3c0.8-17.4 3.7-26.9 6.2-33.2 3.2-8.4 7.1-14.3 13.4-20.6 6.3-6.3 12.2-10.1 20.6-13.4 6.3-2.5 15.8-5.4 33.2-6.2C202.6 109.5 208.2 109.3 256 109.3M256 77.1c-48.6 0-54.7 0.2-73.8 1.1 -19 0.9-32.1 3.9-43.4 8.3 -11.8 4.6-21.7 10.7-31.7 20.6 -9.9 9.9-16.1 19.9-20.6 31.7 -4.4 11.4-7.4 24.4-8.3 43.4 -0.9 19.1-1.1 25.2-1.1 73.8 0 48.6 0.2 54.7 1.1 73.8 0.9 19 3.9 32.1 8.3 43.4 4.6 11.8 10.7 21.7 20.6 31.7 9.9 9.9 19.9 16.1 31.7 20.6 11.4 4.4 24.4 7.4 43.4 8.3 19.1 0.9 25.2 1.1 73.8 1.1s54.7-0.2 73.8-1.1c19-0.9 32.1-3.9 43.4-8.3 11.8-4.6 21.7-10.7 31.7-20.6 9.9-9.9 16.1-19.9 20.6-31.7 4.4-11.4 7.4-24.4 8.3-43.4 0.9-19.1 1.1-25.2 1.1-73.8s-0.2-54.7-1.1-73.8c-0.9-19-3.9-32.1-8.3-43.4 -4.6-11.8-10.7-21.7-20.6-31.7 -9.9-9.9-19.9-16.1-31.7-20.6 -11.4-4.4-24.4-7.4-43.4-8.3C310.7 77.3 304.6 77.1 256 77.1L256 77.1z"/><path d="M256 164.1c-50.7 0-91.9 41.1-91.9 91.9s41.1 91.9 91.9 91.9 91.9-41.1 91.9-91.9S306.7 164.1 256 164.1zM256 315.6c-32.9 0-59.6-26.7-59.6-59.6s26.7-59.6 59.6-59.6 59.6 26.7 59.6 59.6S288.9 315.6 256 315.6z"/><circle cx="351.5" cy="160.5" r="21.5"/></svg></a>
    <a href="https://github.com/hacksu" title="GitHub" target="_blank"><svg viewBox="0 0 512 512"><path d="M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z"/></svg></a>
    </div>
</footer>
    </div>

</template>

<script>
import * as firebase from 'firebase';
import 'firebase/firestore';

export default {
  name: 'HelloWorld',
  data() {
    return {
      names: ['elizabeth', 'alex', 'sami'],
      profiles: [],
      showMap: false,
    };
  },
  methods: {

  },
  // mounted() {
  //   var vm = this;
  //   this.$parent.db.collection('users').get()
  //     .then((users) => {
  //       vm.profiles = users;
  //     }).catch((error) => {
  //       console.log("Error getting documents: ", error);
  //     });
  // },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  box-sizing: border-box;
}

#maincontainer {
    position:absolute;
    width:100%;
    left:0;
    top:0;
    padding-top:50px;
  background: #041017;
  font-family: 'Abel', sans-serif;
  color:white;
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
  background-color: #EBEEF0;
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
header li {
  display: inline-block;
  padding: 20px 20px;
  font-family: 'Abel', sans-serif;
}
a {
  text-decoration: none;
  /*transition: color 0.2s ease-out;*/
}
a:visited {
}
a:hover {
  text-decoration: underline;
}
  .white-link {
    color: white;
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
button:hover {
  background: #2DAF71;
}
h1, h2, h3, h4, .meeting-list .header, label {
  font-family: 'Ropa Sans', sans-serif;
}
h1 {
  font-size: 3em;
  line-height: 1.5em;
  margin-bottom: 0.5em;
}
h2 {
  font-size: 1.75em;
  line-height: 1.5em;
  font-weight: 300;
}
h3 {
  font-size: 1.5em;
  line-height: 1.375em;
}
.subtitle {
  font-family: 'Abel', sans-serif;
  color: #EAEAEA;
  line-height: 1.2em;
}
p {
  font-family: 'Abel', sans-serif;
  font-size: 1em;
  line-height: 1.2em;
}
  
  
label {
  display: block;
  width: 100%;
  line-height: 1em;
}
input[type=text], input[type=email], input[type=password] {
  width: 100%;
  max-width: 400px;
  padding: 8px 20px;
  margin: 0;
  margin-right: 4px;
  background: white;
  font-size: 1em;
}
footer {
  padding: 1em 0;
}
.social-icons {
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
}
.social-icons svg {
  width: 50px;
  height: auto;
  fill: white;
}

.white-link{
  cursor: pointer;
}

@media screen and (max-width: 768px) {
  #start-container {
    justify-content: flex-start;
  }
  #start-wrapper {
    flex-wrap: wrap;
  }
  #hacksu-logo {
    width: 70%;
    margin: 10% auto 10%;
  }
  #start-text {
    width: 100%;
    margin: 0 auto;
    text-align: center;
  }
  #start-text button {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
  .green-section {
    text-align: center;
  }
  .half-container {
    width: 100%;
    margin-bottom: 1.5em;
  }
  p {
    font-size: 1em;
    line-height: 1.375em;
  }
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
