<template>
<div class="badge-container">
  <div v-for="badge in $parent.$parent.badges"
       @click="selectBadge(badge.id)"
       
       >
    <img :src="badge.icon" class="badge-icon" 
         v-tooltip="badge.title"
         :class="{
               'selected-badge': badgeBool[badge.id]
               }">
  </div>
</div>
</template>

<script>
import Vue from 'vue';

export default {
  props: {
    value: {
      type: Array,
      required: false
    }
  },
  data() {
    return {
      badgeBool: {}, // An object storing booleans referenced by badgeID
      // Will be true if the badge is selected. Used to calculate selected class
      selectedBadges: [],
    }
  },
  mounted() {
    for (var i in this.value) {
      this.selectBadge(this.value[i]);
    }
  },
  methods: {
    selectBadge(id) {
      if (!this.value) {
        console.log("No v-model provided");
        return;
      }

      // Selecting:
      if (!this.badgeBool[id]) {
        // Adding element to our array:
        this.selectedBadges.push(id);
        // Updating 'v-model'ed data:
        this.$emit('input', this.selectedBadges);
        // Updating UI:
        Vue.set(this.badgeBool, id, true);
        console.log(id, " is being set to true!")
      // Deselecting:
      } else {
        // Finding and erasing id from array
        var index = this.selectedBadges.indexOf(id);
        if (index > -1) {
          this.selectedBadges.splice(index, 1);
          // Updating 'v-model'ed data
          this.$emit('input', this.selectedBadges);
          // Updating UI:
          Vue.set(this.badgeBool, id, false);
        }
      }
    }
  }
}
</script>

<style scoped>
  .badge-container {
    display: flex;
    flex-flow: row wrap;
    max-width: 500px;
    margin: 0 auto;
  }
  .selected-badge {
    border: 2px solid white;
    margin-right: 8px;
    margin-left: -2px;
    margin-top: -2px;
    margin-bottom: -2px;
  }
</style>