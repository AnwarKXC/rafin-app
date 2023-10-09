<template>
   <section class=" w-screen  bg-[#ECF5FB] flex justify-center items-center font-arabic py-5">
      <div class="container text-center font-arabic  text-[20px] leading-[35px]">
         <h1 class="title">{{ $t( 'شركاءنا' ) }}</h1>
         <p class="max-w-[938px] mx-auto">هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
            توليد هذا النص من مولد النص
            العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد
            الحروف</p>
         <div>

            <div class="flex items-center gap-4 pt-12">
               <!-- <div class="cursor-pointer p-2 rounded-xl bg-[#ACCCFC]   font-arabic">
                  <img class=" w-6 " src="/right-arrow (2).png" alt="">
               </div> -->
               <Swiper :class=" Swiper " :slides-per-view=" 6.25 " :space-between=" 25 " :loop=" true "
                  :breakpoints=" {
                     '200': {
                        slidesPerView: 1,
                        spaceBetween: 50,
                     },
                     '350': {
                        slidesPerView:2,
                        spaceBetween:10,
                     },
                     '460': {
                        slidesPerView: 2.5,
                        spaceBetween: 40,
                     },
                     '640': {
                        slidesPerView: 3,
                        spaceBetween: 20,
                     },
                     '768': {
                        slidesPerView: 3.50,
                        spaceBetween: 40,
                     },
                     '1024': {
                        slidesPerView: 4.50,
                        spaceBetween: 25,
                     },
                     '1244': {
                        slidesPerView: 6.35,
                        spaceBetween: 25,
                     },

                  } " :modules=" [ Autoplay, Navigation ] " :navigation="true" :autoplay=" {
   delay: 2000,
   disableOnInteraction: false,
} " class="mySwiper" :grab-cursor=" true ">
                  <swiper-slide>
                     <img src="/alfalaboratories.-1024x1024@2x.png" alt="">
                  </swiper-slide>
                  <swiper-slide>
                     <img src="/243533304_129503936096812_1607233722212819204_n@2x.png" alt="">
                  </swiper-slide>
                  <swiper-slide>
                     <img src="/NoPath - Copy (3)@2x.png" alt="">
                  </swiper-slide>
                  <swiper-slide>
                     <img src="/NoPath - Copy (2)@2x.png" alt="">
                  </swiper-slide>
                  <swiper-slide>
                     <img src="/alfalaboratories.-1024x1024@2x.png" alt="">
                  </swiper-slide>
                  <swiper-slide>
                     <img src="/243533304_129503936096812_1607233722212819204_n@2x.png" alt="">
                  </swiper-slide>
                  <swiper-slide>
                     <img src="/NoPath - Copy (2)@2x.png" alt="">
                  </swiper-slide>
                  <swiper-slide>
                     <img src="/alfalaboratories.-1024x1024@2x.png" alt="">
                  </swiper-slide>
                  <swiper-slide>
                     <img src="/alfalaboratories.-1024x1024@2x.png" alt="">
                  </swiper-slide>
                  <swiper-slide>
                     <img src="/243533304_129503936096812_1607233722212819204_n@2x.png" alt="">
                  </swiper-slide>
                  <swiper-slide>
                     <img src="/NoPath - Copy (3)@2x.png" alt="">
                  </swiper-slide>
                  <swiper-slide>
                     <img src="/NoPath - Copy (2)@2x.png" alt="">
                  </swiper-slide>
                  <swiper-slide>
                     <img
                        src="https://fastly.picsum.photos/id/357/1500/1500.jpg?hmac=ZioDW5L15DvON8KY0S9IJNZcAb9tz9YzEz3B6yZ-GIc"
                        alt="">
                  </swiper-slide>
                  <swiper-slide>
                     <img src="/243533304_129503936096812_1607233722212819204_n@2x.png" alt="">
                  </swiper-slide>
                  <swiper-slide>
                     <img src="/NoPath - Copy (2)@2x.png" alt="">
                  </swiper-slide>

               </Swiper>
               <!-- <div class=" p-2 rounded-xl bg-[#ACCCFC]   font-arabic">
                  <img class=" w-6 " src="/left-arrow.png" alt="">
               </div> -->
            </div>

         </div>
         <slot></slot>

      </div>
   </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation } from 'swiper/modules'

import 'swiper/css/pagination'
import 'swiper/css/navigation';

</script>

<style  scoped>
.swiper {

   width: 100%;
   height: 145px;
}

.swiper-slide {
   /* Center slide text vertically */
   max-width: 175px;
   border-radius: 15px;
   aspect-ratio: 1/1;
   overflow: hidden;
   background: rgb(255, 255, 255);
   display: flex;
   justify-content: center;
   align-items: center;

}

.swiper-slide img {
   width: 100%;
   aspect-ratio: 1/1;
}
</style>