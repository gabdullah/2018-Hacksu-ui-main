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
      <img src="/static/badges/new_badge.png"
           class="badge-icon new-badge-icon">
      <div>
        Title: <input type="text" v-model="title"
                class="badge-input"
                placeholder="HTML I">
        <br>
        ID: <u>{{badgeID}}</u>
      </div>
    
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      badgeID: '',
      idSelected: false,
      title: ''
    }
  },
  computed: {
    validID() {
      return (this.badgeID.length > 3)
    }
  },
  methods: {
    selectID() {
      this.idSelected = this.validID;
    }
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
    width: calc(45vw - 20px);
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
  #badge-details {
    display: flex;
  }

</style>






