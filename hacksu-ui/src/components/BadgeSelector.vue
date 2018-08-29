<template>
<div class="badge-container">
  <div v-for="badge in $parent.$parent.badges"
       >
    <img :src="badge.icon" class="badge-icon" 
         v-tooltip="badge.title">
  </div>
</div>
</template>

<script>
  

export default {
  
}
</script>

<style scoped>
  .badge-container {
    display: flex;
    flex-flow: row wrap;
    max-width: 500px;
  }
</style>