          /* eslint-disable /
<template>
  <div>
 <h1>FAQ Page</h1>
  <div class= "dropdown">
    <button onclick="myFunction()" class="dropbtn">Dropdown</button>
    <div id="myDropdown" class="dropdown-content">
        <a href="#"> Link </a>
    </div>
  </div>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      
    };
  },
  methods: {

  },
};
  function myfunction(){
    document.getElementById("myDropdown").classList.toggle("show");
  }
  window.onclick  = function(event) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++){
      var openDropdown = dropdown[i];
      if (openDropdown.classList.contains('show')){}
    }
  }
  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .dropbtn {
    background:#4CAF50;
      color:white;
      padding: 16px;
      font-size: 16px;
      border: none;
    cursor: pointer;
  }
  .dropbtn:hover, .dropbtn:focus {
    background-color: #3e8e41;
  }
  .dropdown{ 
    position: relative;
    display: inline-block;
  }
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 106px;
    .dropdown-content a{
      color: black;
      padding: 12px 16px;
      text-decoration: none;
      display: block; 
    }
    .dropdown-content a:hover {backgrounds-color: #f1f1f1}
    .show{display:block;
    }
  }
</style>
