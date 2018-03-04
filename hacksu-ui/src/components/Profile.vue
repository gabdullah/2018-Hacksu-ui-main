/* eslint-disable /
<template>
  <div class="container">
    <div class="topLeft">
      <img class="bigPic" src="http://placehold.it/250x250.png">
    </div>
    <div class="topRight">
      Badges
    </div>
  </div>
</template>

<script>


export default {

  data() {
    return {

    };
  },
  methods: {

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.topLeft {
  border: 1px solid red;
  left: 0px;
  width: 58%;
  min-height: 500px;
  background-color: #FAFAFA;
}

.bigPic {
  /*position: absolute;*/
  display: block;
  border-radius: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
}

.topRight {
  /*display: flex;
  flex-wrap: wrap;*/
  border: 1px solid pink;
  left: 100%;
  width: 250px;
}

</style>
