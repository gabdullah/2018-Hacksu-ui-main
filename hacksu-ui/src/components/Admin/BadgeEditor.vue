<template>
<div class="full-page badges">
  <h1 class="page-header">Badge editor</h1>
  
  <div class="new-badge badge">
    <div id="badge-id-selector" v-if="!idSelected">
      <span>Badge ID </span>
      <input type="text" v-model="badgeID"
             class="badge-input"
             @keyup.enter="selectID()"
             placeholder="html_1"
             >
      <p>Please use no spaces & snake_case, & an integer at the end of the name indicating the level of the badge, if applicable.</p>
      
      <button class="badge-button"
              @click="selectID()"
              
              :class="{ disabled: !validID }">
        Next
      </button>
    </div>
    <div id="badge-details"
         v-else>
      <div class="flex-row">
        <input type="file" ref="pictureUpload" @change="uploadImage">
        <img src="/static/badges/new_badge.png"
             class="badge-icon new-badge-icon"
             @click="$refs.pictureUpload.click()"
             v-if="badgeImage.length == 0">
        <img :src="badgeImage"
             @click="$refs.pictureUpload.click()"
             class="badge-icon"
             v-else>
        <div>
          Title: <input type="text" v-model="title"
                  class="badge-input"
                  placeholder="HTML I">
          <br>
          ID: <u>{{badgeID}}</u>
        </div>
      </div>
      <div class="flex-row">
        <div style="width: 45%;max-width: 50%">
          Tags:
          <input-tag :tags.sync="tags"
                     class="badge-tags-input"></input-tag>
        </div>
        <div>
          Description:<br>
          <textarea v-model="description"></textarea>
        </div>
      </div>
      <button class="badge-button"
              @click="submitBadge()"
              
              :class="{ disabled: !validID }">
        Submit
      </button>

    </div>
  </div>
<!--
  <div class="badge" v-for="badge in $parent.badges">
    <h1>Wow a badge</h1>
  </div>
-->
</div>
</template>

<script>
import InputTag from 'vue-input-tag';
import * as firebase from 'firebase';
import 'firebase/firestore';

  
export default {
  data() {
    return {
      badgeID: '',
      idSelected: false,
      description: '',
      title: '',
      tags: [],
      badgeImage: ''
    }
  },
  components: {
    InputTag
  },
  computed: {
    validID() {
      return (this.badgeID.length > 3)
    }
  },
  methods: {
    selectID() {
      this.idSelected = this.validID;
    },
    
    submitBadge() {
      var badge = {
        id: this.badgeID,
        title: this.title,
        tags: this.tags,
        icon: this.badgeImage,
        description: this.description
      }
      console.log("Uploading this: ", badge);
      
      this.$parent.db.collection('badges').doc(this.badgeID)
        .set(badge).then((docRef) => {
        console.log("SUCCESS")
      }).catch((err) => {
        console.error("Error adding badge: ", err);a
      })
    },
    
    uploadImage(event) {
      var file = event.target.files[0];
      
      var storageRef = firebase.storage().ref();
      var locationStr = 'badges/' + this.badgeID + '.jpg';
      console.log("Locationstr: ", locationStr);
      var ref = storageRef.child(locationStr);
      
      var vm = this;
      
      // Uploading file to the database: 
      ref.put(file).then(function(snapshot) {
        console.log('Uploaded a file!', snapshot);
        
        vm.badgeImage = snapshot.downloadURL;
        
      }).catch((err) => {
        console.error("Error uploading badge pic: ", err);
      })
    },
  },
  mounted() {

  }
}
</script>

<style scoped>
  h1 {
    background: var(--dark-blue);
  }
  .badges {
    background: var(--blue);
    color: white;
  }
  .badge {
    background: var(--darker-blue);
/*    width: calc(40vw - 20px);*/
    margin: 20px 5vw 20px 5vw;
    padding: 20px 20px 20px 20px;
    min-width: 500px;
    text-align: left;
  }
  .badge-input {
    background: none;
    border: none;
    border-bottom: solid white;
    color: white;
    font-size: 16px;
  }
  
/*  Um why isn't this working?? TODO: Fix!!! */
  .badge-input::placholder, .badge-input::-webkit-input-placeholder {
    color: white;
    opacity: 1;
  }
  
  .badge-button {
    background: white;
    padding: 10px 20px 10px 20px;
    font-size: 14px;
    color: var(--darker-blue);
    font-weight: bolder;
    cursor: pointer;
    transition-duration: .1s;
  }
  .disabled {
    opacity: .5;
    cursor: default;
  }
  .badge-icon {
    height: 50px;
    width: 50px;
    padding: 10px;
    margin-right: 10px;
    background: var(--bg-black);
    border-radius: 5px;
  }
  .new-badge-icon {
    cursor: pointer;
  }
  .badge-tags-input {
/*    width: 40%;*/
  }
  .flex-row {
    display: flex;
  }
  
  input[type=file] {
    display: none;
  }
  
  
  
  textarea {
    width: 100%;
  }

</style>






