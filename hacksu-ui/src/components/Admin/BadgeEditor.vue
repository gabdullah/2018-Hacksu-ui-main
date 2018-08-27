<template>
<div class="full-page badges">
  <h1 class="page-header">Badge editor</h1>
  
  <div class="new-badge">
  
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  mounted() {
    
    this.$parent.db.collection("badges")
    .onSnapshot(function(snapshot) {
        snapshot.docChanges().forEach(function(change) {
            if (change.type === "added") {
                console.log("New city: ", change.doc.data());
            }
            if (change.type === "modified") {
                console.log("Modified city: ", change.doc.data());
            }
            if (change.type === "removed") {
                console.log("Removed city: ", change.doc.data());
            }
        });
    });

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
</style>