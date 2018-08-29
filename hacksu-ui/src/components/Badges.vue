<template>
<div class="full-page">
  <h1 class="page-header">Badges</h1>
  <div class="container">
    <badge-selector></badge-selector>
  </div>
</div>
</template>

<script>
import badgeSelector from './BadgeSelector';
export default {
  data() {
    return {
      
    }
  },
  components: {
    badgeSelector
  }
}
</script>

<style scoped>
  .full-page {
    background: var(--light-bg);
    color: var(--purple);
  }
  h1 {
    background: var(--bg-black);
  }
  .container {
    padding: 0px 5vw 0px 5vw;
  }
</style>