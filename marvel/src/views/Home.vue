<template>

   
  <section class="header content">
    <div class="header-video">
      <video src="../assets/video_marvel.mp4" muted autoplay loop></video>
    </div>
  
  </section>
    <Home_Marvel></Home_Marvel>

</template>
<script>

import  Home_Marvel from '../components/Home_Marvel.vue'
export default {
components:{
Home_Marvel
  }
}
</script>
<style>
.header{
  height: 300px;
  display: flex;
  align-items: center;
  color: #fff;
  overflow: hidden;
/*   background: rgb(0, 0, 0);
 */}

.header-video{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  margin-top: 130px;  
}
.header-video video{
/*   min-width: 100%;
  min-height: 100%; */
  width: 100%;
}

.header-content{
  margin: auto;
  z-index: 2; 
  padding: 80px 20px 20px 20px;
/* padding: 255px 100px 50px 100px; */
  overflow: hidden;
}



.header-content p {
  font-size: 18px;
  display: block;
  font-family: "Open Sans", sans-serif;
  text-align: center;
 

}
</style>