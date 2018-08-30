<template>
<div class="full-page events">
  <h1 class="page-header">Event Editor</h1>
  <div class="new-event">
    Title: <input type="text" class="basic-input">
    <br>
    Is this a hacksu lesson? <input type="checkbox" v-model="isLesson">
    <div class="side-container">
      
      <div class="side-1 event-planner">
        <h4 v-if="isLesson">Side A:</h4>
        <h4 v-else>Event details:</h4>
        <div class="desc" v-if="sideAPart == 0">
          <p>Description:</p>
          <textarea v-model="sideA.description"></textarea><br>
          <button class="white-button" @click="sideAPart++">Next</button>
        </div>
        <div class="requirements" v-else-if="sideAPart == 1">
          <p>Required badges:</p>
          <badge-selector v-model="sideA.requirements"></badge-selector>
          <button class="white-button" @click="sideAPart--">Back</button>
          <button class="white-button" @click="sideAPart++">Next</button>
        </div>
        <div class="skills" v-else-if="sideAPart == 2">
          <p>Skills taught:</p>
          <badge-selector v-model="sideA.skills"></badge-selector>
          <button class="white-button" @click="sideAPart--">Back</button>
          <button class="white-button" @click="sideAPart++">Next</button>
        </div>
        <div v-else-if="sideAPart == 3">
          <p>All set! <span v-if="sideBPart != 3 && isLesson">
            Finish the other lesson to submit.
            </span></p>
          <button class="white-button" @click="sideAPart--">Back</button>
        </div>
      </div>
      
      <div class="side-2 event-planner" v-if="isLesson">
        <h4>Side B:</h4>
        <div class="desc" v-if="sideBPart == 0">
          <p>Description:</p>
          <textarea v-model="sideB.description"></textarea><br>
          <button class="white-button" @click="sideBPart++">Next</button>
        </div>
        <div class="requirements" v-else-if="sideBPart == 1">
          <p>Required badges:</p>
          <badge-selector v-model="sideB.requirements"></badge-selector>
          <button class="white-button" @click="sideBPart--">Back</button>
          <button class="white-button" @click="sideBPart++">Next</button>
        </div>
        <div class="requirements" v-else-if="sideBPart == 2">
          <p>Skills taught:</p>
          <badge-selector v-model="sideB.skills"></badge-selector>
          <button class="white-button" @click="sideBPart--">Back</button>
          <button class="white-button" @click="sideBPart++">Next</button>
        </div>
        <div v-else-if="sideBPart == 3">
          <p>All set! <span v-if="sideAPart != 3">
            Finish the other lesson to submit.
            </span></p>
          <button class="white-button" @click="sideBPart--">Back</button>
        </div>
      </div>
      
    </div>
    <button class="white-button" v-if="sideAPart == 3 && (!isLesson || sideBPart == 3)">
        Submit lesson!
      </button>
  
  </div>
</div>
</template>

<script>
import badgeSelector from '../BadgeSelector';

export default {
  data() {
    return {
      isLesson: true,
      
      sideAPart: 0,
      sideA: {
        description: '',
        requirements: [],
        skills: []
      },
      
      sideBPart: 0,
      sideB: {
        description: '',
        requirements: [],
        skills: []
      }
    }
  },
  components: {
    badgeSelector,
  }
}
</script>

<style scoped>
  .events {
    background: var(--bg-black);
    color: white;
    font-size: 20px;
  }
  
  .event-planner {
    flex-grow: .5;
  }
  
  .side-container {
    display: flex;
    justify-content: space-around;
  }
  h1 {
    background: var(--light-bg);
  }
</style>