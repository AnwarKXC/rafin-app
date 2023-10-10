<template>
   <div class=" container flex flex-col justify-center items-center">
      <div
         class="flex relative  justify-center items-center font-arabic  text-center md:text-start  bg-no-repeat aspect-[2/.85] ">
         <div>
            <div>
               <img class="flip-img ltr:hidden" src="/src/assets/Slider.png" alt="main section">
               <img class=" rtl:hidden" src="/src/assets/Slider.png" alt="main section">
            </div>
            <div class="hidden lg:inline-flex absolute top-0 ltr:left-0"><DownLoadHeroSection/>
            </div>
         </div>
      </div>
      <div class=" lg:hidden"><DownLoadHeroSection/></div>
      
   </div>
</template>

<script setup>
 import DownLoadHeroSection from '../DownLoadHeroSection.vue'

</script>

<style  scoped>
.flip-img{
   transform: rotateY(180deg);
}
</style>