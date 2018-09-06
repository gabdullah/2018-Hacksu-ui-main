<template>
<div class="full-page badges">
  <h1 class="page-header">Badge editor</h1>
  
  <div class="new-badge widget">
    <p>How to make a badge:</p>
    <p>Badges come in two varieties: skills and achievements. Currently, we only have a system for skills.</p>
    <p>To make a new skill badge, first you need an icon. You can save and edit this image <img src="/static/badges/empty_badge.png" width="20" style="background:var(--bg-black)"> to add an icon in the center. Look off current badges to see the color scheme you should use for the appropriate level of skill you'd like your badge to represent.</p>
    
    <p>Try to break "skill levels" down to concepts that could be introduced in an hour. Write thorough descriptions for each badge, with examples of specific peices of knowledge someone with that badge should know.</p>
    
    <p>Badge titles use roman numerals to represent skill level. So, the badge with the id <b>html_3</b> has the title <b>HTML III</b>. Keep it fancy!</p>
  </div>
  <div class="new-badge widget">
    <div id="badge-id-selector" v-if="!idSelected">
      <span>Badge ID </span>
      <input type="text" v-model="badgeID"
             class="badge-input"
             @keyup.enter="selectID()"
             placeholder="html_1"
             >
      <p>Please use no spaces & snake_case, & an integer at the end of the name indicating the level of the badge, if applicable.</p>
      
      <button class="white-button"
              @click="selectID()"
              
              :class="{ disabled: !validID }">
        Next
      </button>
    </div>
    <div id="badge-details"
         v-else-if="!submitted">
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
      <button class="white-button"
              @click="submitBadge()"
              v-if="!submitting"
              :class="{ disabled: !validID }">
        Submit
      </button>
      <button class="white-button disabled"
              v-else>
        Submitting...
      </button> 

    </div>
    <div v-else>
      <h4>Submitted</h4>
      <button class="white-button"
              @click="startOver()">
        [DJ Khaled voice]: Anotha one
      </button>
    </div>
  </div>
  <div class="badge-container">
    <badge-selector></badge-selector>
  </div>
</div>
</template>

<script>
import InputTag from 'vue-input-tag';
import * as firebase from 'firebase';
import 'firebase/firestore';
  
import badgeSelector from '../BadgeSelector';

  
export default {
  data() {
    return {
      badgeID: '',
      idSelected: false,
      description: '',
      title: '',
      tags: [],
      badgeImage: '',
      
      submitting: false,
      submitted: false,
    }
  },
  components: {
    InputTag,
    badgeSelector
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
    
    startOver() {
      this.badgeID = '';
      this.idSelected = false;
      this.description = '';
      this.title = '';
      this.tags = [];
      this.badgeImage = '';
      this.submitted = false;
    },
    
    submitBadge() {
      var badge = {
        id: this.badgeID,
        title: this.title,
        tags: this.tags,
        icon: this.badgeImage,
        description: this.description
      }
      this.submitting = true;
      console.log("Uploading this: ", badge);
      
      this.$parent.db.collection('badges').doc(this.badgeID)
        .set(badge).then((docRef) => {
        this.submitting = false;
        this.submitted = true;
        this.$parent.loadBadges();
        console.log("SUCCESS")
      }).catch((err) => {
        console.error("Error adding badge: ", err);
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
  .widget {
    background: var(--darker-blue);
/*    width: calc(40vw - 20px);*/
    margin: 20px 5vw 20px 5vw;
    padding: 20px 5vw 20px 5vw;
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
  .badge-container {
    padding: 0px 5vw 0px 5vw;
  }
  
/*  Um why isn't this working?? TODO: Fix!!! */
  .badge-input::placholder, .badge-input::-webkit-input-placeholder {
    color: white;
    opacity: 1;
  }
  
  .disabled {
    opacity: .5;
    cursor: default;
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






