<template>
<div class="full-page" id="you">
  <div class="current-status">
   
    
    <div class="picture-upload"
         @click="$refs.profileUpload.click()">
      
      <input type="file" ref="profileUpload" @change="onProfilePicSelected">
      
      <img class="profile-picture" v-if="$parent.user && $parent.user.profilePicture" 
          v-bind:src="$parent.user.profilePicture">
      <img class="profile-picture" v-else 
          src="../../../static/default-profile-pic.png">
      <p>Click to Change</p>
    </div>
    
    <div class="picture-upload">
      <img class="profile-picture" v-if="$parent.user && $parent.user.hoverPicture" 
          v-bind:src="$parent.user.hoverPicture">
      <img class="profile-picture" v-else 
          src="../../../static/default-hover-pic.png">
      <p>Click to Change</p>
    </div>
    
  </div>
</div>
</template>

<script>
import * as firebase from 'firebase';
import 'firebase/firestore';
  
export default {
  data() {
    return {
      selectedProfilePic: null,
    }
  }, 
  methods: {
    onProfilePicSelected(event) {
      var file = event.target.files[0];
      console.log(event);
      
      var storageRef = firebase.storage().ref();
    }
  }
}
</script>

<style scoped>
  input[type=file] {
    display: none;
  }
  #you {
    background: var(--bg-black);
    padding: 50px 5vw 200px 5vw;
  }
  .current-status {
    display: flex;
  }
  .picture-upload {
    color: white;
  }
  .profile-picture {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    position: absolute;
    left: 0px;
  }
  .picture-upload {
    position: relative;
    display: block;
    text-align: center;
    width: 200px;
    height: 200px;
    margin-right: 25px;
  }
  .picture-upload p {
    display: none;
  }
  .picture-upload:hover p {
    display: block;
    position: relative;
    width: 100%;
    text-align: center;
    cursor: pointer;
    
/*    margin-left: 35px;*/
    margin-top: 80px;
    z-index: 100;
    font-weight: bold;
  }
  .picture-upload:hover .profile-picture {
    opacity: .3;
    cursor: pointer;
  }
</style>