/* eslint-disable /
<template>
  <div id="loginModule">
    <form>
          <div class="loginModule">
     <label><b>Username</b></label>
     <input type ="text" placeholder="Enter Username" name="uname" required>
     <label><b>Password</b></label>
     <input type="password" placeholder="Enter Password" name="psw" required>
            <button type="submit">Login</button>
            <input type="checkbox" checked="checked"> Remember Me 
      </div>
      <div class="container" style="background-color :#f1f1f1">
        <button type="button" class="cancelbtn"> Cancel</button>
        <span class="psw"><a href="#"> Forgot Password?</a></span>
        </div>
    </form>
  </div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  input[type=text], input[type=password] {
    width: 75%;
    padding: 15px 20px;
    margin: 20px 0;
    display: inline-block;
    border: 3px solid;
    box-sizing: border-box;
    color:white;
  }
  
  label{
    width: 100%;
    
    
  }
  button {
    background-color: orangered;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: 3px black solid;
    cursor: pointer;
    width: auto;
  }
  
  .cancelbtn {
    width: 50%;
    
    background-color: #f44336;
    
  }
  

  
  span.psw {
    float: right;
    padding-top: 16px;
  }
  

  
</style>

