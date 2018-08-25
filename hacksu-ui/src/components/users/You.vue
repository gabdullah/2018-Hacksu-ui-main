<template>
<div class="full-page" id="you">
  <h1>Your Profile</h1>
  <div class="details">
    
    <div class="edit-details">
      <p>Edit your profile:</p>
      <div class="image-uploads">
        <div>
          <div class="picture-upload"
               @click="$refs.profileUpload.click()">
            
            <input type="file" ref="profileUpload" @change="onProfilePicSelected">
            
            <img class="profile-picture" v-if="$parent.user && $parent.user.profilePicture" 
                v-bind:src="$parent.user.profilePicture">
            <img class="profile-picture" v-else 
                src="../../../static/default-profile-pic.png">
            <p>Click to Change</p>
          </div>
          <p v-if="!loadingProfile">Profile picture</p>
          <p v-else>Updating...</p>
        </div>
      
        <div>
          <div class="picture-upload"
               @click="$refs.hoverUpload.click()">
            
            <input type="file" ref="hoverUpload" @change="onHoverPicSelected">
            
            <img class="profile-picture" v-if="$parent.user && $parent.user.hoverPicture" 
                v-bind:src="$parent.user.hoverPicture">
            <img class="profile-picture" v-else 
                src="../../../static/default-hover-pic.png">
            <p>Click to Change</p>
          </div>
          <p v-if="!loadingHover">Hover picture</p>
          <p v-else>Updating...</p>
        </div>
      </div>
      
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
      loadingProfile: false,
      loadingHover: false,
    }
  }, 
  methods: {
    onProfilePicSelected(event) {
      var file = event.target.files[0];
      this.loadingProfile = true;
      this.uploadImage(file, 'profile')
    },
    
    onHoverPicSelected(event) {
      var file = event.target.files[0];
      this.loadingHover = true;
      this.uploadImage(file, 'hover')
    },
    
    // Type should either be 'profile' or 'hover'
    uploadImage(file, type) {
      
      var storageRef = firebase.storage().ref();
      var locationStr = this.$parent.user.id + '/' + type + 'Pic.jpg';
      console.log("Locationstr: ", locationStr);
      var ref = storageRef.child(locationStr);
      
      var vm = this;
      
      // Uploading file to the database: 
      ref.put(file).then(function(snapshot) {
        console.log('Uploaded a file!', snapshot);
        
        var updateObj = {}; // Declaring this out here so we can set whether we're
                            // updating 'profilePicture' or 'hoverPicture'
        updateObj[type + 'Picture'] = snapshot.downloadURL;
        
        // Updating database's image:
        vm.$parent.db.collection('users').doc(vm.$parent.user.id)
        .update(updateObj).then(() =>{
          // Setting current session's image:
          vm.$parent.user[type + 'Picture'] = snapshot.downloadURL;
          // Ending loading:
          vm.loadingProfile = false;
          vm.loadingHover = false;
          
        }).catch((err) => {
          console.error("Error updating your " + type + " image: ", err);
        })
        
      }).catch((err) => {
        console.error("Error uploading your " + type + " pic: ", err);
      })
    },
    
  }
}
</script>

<style scoped>
  input[type=file] {
    display: none;
  }
  #you {
    background: var(--bg-black);
/*    padding: 50px 5vw 200px 5vw;*/
    width: 100vw;
    
    color: white;
  }
  h1 {
    font-size: 5rem;
    text-align: left;
    display: block;
    padding: 50px 5vw 30px 5vw;
    background: var(--light-bg);
  }
  
  .details {
    display: flex;
    padding: 50px 5vw 200px 5vw;
  }
  .edit-details {
    border: solid 2px var(--green);
  }
  .image-uploads {
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
    margin-left: 25px;
  }
  .picture-upload p {
    display: none;
  }
  .picture-upload:hover p {
    display: block;
    position: absolute;
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