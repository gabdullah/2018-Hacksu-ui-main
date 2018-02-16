/* eslint-disable /
<template>
 <div id="maincontainer"><header>
   </header>
  
  logiiiiiin
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      myName: 'ben',
      names: ['elizabeth', 'alex', 'sami'],
    };
  },
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
  background-color: #041017;
  font-family: 'Abel', sans-serif;
  
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
