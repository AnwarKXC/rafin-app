<template>
   <section class=" relative md:-mt-5  ">
       <div class="z-10 fixed hidden md:flex flex-col  bottom-16  ">
               <a href="#form"><img width="105" src="/Group 39294@2x.png" alt=""></a>
               <div @click=" scrollToTop "  class=" cursor-pointer  w-[105] flex justify-center"><img width="28" src="/Group 39295@2x.png" alt="">
               </div>
            </div>
      <swiper class="mySwiper" :slides-per-view=" 1 " :space-between=" 50 " :loop=" true "
         :grab-cursor=" true " :modules=" [ Pagination ] "  :pagination=" value ">
         
         <swiper-slide>
            <div class="flex flex-col justify-center items-center">
               <div
                  class="w-screen flex relative  rounded-t-[15px] md:flex-row  justify-end items-center font-arabic  text-center md:text-start bg-[url('https://fastly.picsum.photos/id/273/4500/2250.jpg?hmac=p6i3F5PQti10eXK8oOQNb3xcOJwVv_2Y4Kpl8CKyRWs')] bg-contain lg:bg-cover  bg-no-repeat aspect-[2/1] md:max-h-[560px] ">
                  <div class="hidden lg:inline-flex"><down-load-hero-section/></div>
               </div>
                  <div class=" lg:hidden"><down-load-hero-section/></div>
               </div>
            </swiper-slide>
         <swiper-slide>
            <div class="flex flex-col justify-center items-center">
               <div
                  class="w-screen flex relative  rounded-t-[15px] md:flex-row  justify-end items-center font-arabic  text-center md:text-start bg-[url('https://fastly.picsum.photos/id/273/4500/2250.jpg?hmac=p6i3F5PQti10eXK8oOQNb3xcOJwVv_2Y4Kpl8CKyRWs')] bg-contain lg:bg-cover  bg-no-repeat aspect-[2/1] md:max-h-[560px] ">
                  <div class="hidden lg:inline-flex"><down-load-hero-section/></div>
               </div>
                  <div class=" lg:hidden"><down-load-hero-section/></div>
               </div>
            </swiper-slide>
         <swiper-slide>
            <div class="flex flex-col justify-center items-center">
               <div
                  class="w-screen flex relative  rounded-t-[15px] md:flex-row  justify-end items-center font-arabic  text-center md:text-start bg-[url('https://fastly.picsum.photos/id/273/4500/2250.jpg?hmac=p6i3F5PQti10eXK8oOQNb3xcOJwVv_2Y4Kpl8CKyRWs')] bg-contain lg:bg-cover  bg-no-repeat aspect-[2/1] md:max-h-[560px] ">
                  <div class="hidden lg:inline-flex"><down-load-hero-section/></div>
               </div>
                  <div class=" lg:hidden"><down-load-hero-section/></div>
               </div>
            </swiper-slide>
         
         
    
      </swiper>
   </section>

</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import 'swiper/css/pagination'
import 'swiper/css'
import DownLoadHeroSection from '../DownLoadHeroSection.vue'
import {ref} from 'vue'
const value=ref(false)
if ( window.innerWidth > 1024 ) {
   value.value=true
}

function scrollToTop () {
   // Scroll to the top of the page
   window.scrollTo( {
      top: 0,
      behavior: 'smooth' // Smooth scrolling animation
   } )
}
</script>

<style  scoped>
.swiper {
   width: 100%;
}

.swiper-slide {
   text-align: center;
   font-size: 18px;
   background: #fff;

   /* Center slide text vertically */
   display: flex;
   justify-content: center;
   align-items: center;
}
</style>