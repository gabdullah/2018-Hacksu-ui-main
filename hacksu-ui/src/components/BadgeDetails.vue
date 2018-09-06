<template>
<div class="full-page">
  <div v-if="badge">
    <router-link tag="p"
                 :to="{name: 'Badges'}"
                 style="cursor:pointer;text-align: left;padding-left: 5vw;">
      View All Badges
    </router-link>
    <h1 class="page-header">
      <img :src="badge.icon">
      {{badge.title}}
    </h1>
    <div class="container">
      <span v-html="badge.description" v-if="badge.description"></span>
      <span v-else>No description for this badge! </span>
    </div>
  </div>
  <div v-else>
    <h1>Could not load badge :(</h1>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      badgeID: this.$route.params.badgeID,
    }
  },
  computed: {
    badge() {
      return this.$parent.badgeObj[this.badgeID] || false;
    }
  }
}
</script>

<style scoped>
  .full-page {
    background: var(--light-bg);
    color: white;
  }
  img {
    height: 70px;;
  }
  .page-header {
    background: var(--bg-black);
  }
  .container {
    width: 90vw;
    padding: 50px 5vw 200px 5vw;
    font-size: 24px;
  }
</style>