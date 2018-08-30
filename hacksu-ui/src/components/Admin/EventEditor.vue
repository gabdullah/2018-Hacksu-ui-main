<template>
<div class="full-page events">
  <h1 class="page-header">Event Editor</h1>
  <div class="new-event">
    Title: <input type="text" class="basic-input">
    <br>
    Is this a hacksu lesson? <input type="checkbox" v-model="isLesson">
    <div class="side-container">
      <div class="side-1 event-planner">
        <h4>Side A</h4>
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
      </div>
    </div>
  
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
  h1 {
    background: var(--light-bg);
  }
</style>