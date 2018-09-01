<template>
<div class="full-page events">
  <h1 class="page-header">Event Editor</h1>
  <div class="new-event">
    Title: <input type="text" class="basic-input" v-model="title">
    <br>
    Is this a hacksu lesson? <input type="checkbox" v-model="isLesson"><br>
    <date-picker v-model="date" lang="en"></date-picker>
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
          <badge-selector id="reqs" v-model="sideA.requirements"
                          v-if="sideAPart == 1">
          </badge-selector>
          <button class="white-button" @click="sideAPart--">Back</button>
          <button class="white-button" @click="sideAPart++">Next</button>
        </div>
        <div class="skills" v-else-if="sideAPart == 2">
          <p>Skills taught:</p>
          <badge-selector id="skills" v-model="sideA.skills"
                          v-if="sideAPart == 2">
          </badge-selector>
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
    <button class="white-button" 
            v-if="sideAPart == 3 && (!isLesson || sideBPart == 3)"
            @click="submitEvent()"
            >
        Submit event!
      </button>
  
  </div>
</div>
</template>

<script>
import badgeSelector from '../BadgeSelector';
import DatePicker from 'vue2-datepicker';
import {slugifyDate} from '@/utils.js';

export default {
  data() {
    return {
      title: '',
      isLesson: true,
      date: new Date(),
      
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
  methods: {
    submitEvent() {
      var slugDate = slugifyDate(this.date)
      this.$parent.db.collection('events').doc(slugDate)
      .set({
        title: this.title,
        isLesson: this.isLesson,
        date: this.date,
        sideA: this.sideA,
        sideB: this.sideB
      }).then(() => {
        console.log("Successfully submitted event!");
      }).catch((err) => {
        console.error("Error submitting event: ", err);
      })
    }
  },
  components: {
    badgeSelector,
    DatePicker
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