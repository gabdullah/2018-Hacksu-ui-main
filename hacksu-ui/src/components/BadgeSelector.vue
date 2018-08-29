<template>
<div>
  <div v-for="badge in $parent.$parent.badges">
    <img :src="badge.icon" class="badge-icon">
  </div>
</div>
</template>

<script>
export default {
  
}
</script>