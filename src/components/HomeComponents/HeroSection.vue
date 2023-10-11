<template>
   <section class=" relative  ">
      <div class="z-10 fixed hidden md:flex flex-col  bottom-10  ">
         <a href="#form"><img width="105" src="../../assets/message.png" alt=""></a>
         <div @click=" scrollToTop " class=" cursor-pointer  w-[105] flex justify-center"><img
               width="28" src="../../assets/up.png" alt="">
         </div>
      </div>
      <swiper class="mySwiper" :slides-per-view=" 1 " :space-between=" 50 " :loop=" true "
      :autoplay=" {
         delay: 2000,
         disableOnInteraction: false,
      } "
         :grab-cursor=" true " :modules=" [ Pagination ] " :pagination=" value ">
         <swiper-slide>
            <SliderImage />
         </swiper-slide>
         <swiper-slide>
            <SliderImage />
         </swiper-slide>
         <swiper-slide>
            <SliderImage />
         </swiper-slide>

      </swiper>
   </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import 'swiper/css/pagination'
import 'swiper/css'
import { ref } from 'vue'
import SliderImage from './sliderImage.vue'
const value = ref( false )
if ( window.innerWidth > 1024 ) {
   value.value = true
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