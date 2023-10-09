<template>
   <section
      class="container text-center font-arabic  text-[20px] leading-[35px]  flex justify-center items-center py-5 overflow-hidden" >
      <div class="max-w-[938px]">
         <h1 class="title">{{ $t( "أشهر خدماتنا" ) }}</h1>
         <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص
            العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد
            الحروف</p>

         <Swiper :class=" Swiper " :slides-per-view=" 6.25 " :space-between=" 25 " :loop=" true "
            :breakpoints=" {
               '200': {
                  slidesPerView: 1,
                  spaceBetween: 50,
               },
               '350': {
                  slidesPerView: 1,
                  spaceBetween: 50,
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
                  slidesPerView: 3,
                  spaceBetween: 40,
               }
            } " :modules=" [ Autoplay ] " :autoplay=" {
   delay: 2000,
   disableOnInteraction: false,
} " class="mySwiper" :grab-cursor=" true ">

            <swiper-slide>
               <div class="text-20px">
                  <div class="serv"><img src="/Group 41435@2x.png" alt=""></div>
                  <p>{{ $t( 'معمل تحاليل' ) }}</p>
               </div>
            </swiper-slide>
            <swiper-slide>
               <div>
                  <div class="serv"><img src="/Group 41318@2x.png" alt=""></div>
                  <p>{{ $t( "معمل أشعة" ) }}</p>
               </div>
            </swiper-slide>
            <swiper-slide>
               <div>
                  <div class="serv"><img src="/Group 41448@2x.png" alt=""></div>
                  <p>{{ $t( 'مستشفي' ) }}</p>
               </div>
            </swiper-slide>
            <swiper-slide>
               <div>
                  <div class="serv"><img src="/Group 41477@2x.png" alt=""></div>
                  <p>{{ $t( 'عيادة' ) }}</p>
               </div>
            </swiper-slide>

         </Swiper>

         <!-- <div class="flex justify-center md:justify-evenly items-center mt-10 flex-wrap gap-8">
               <div class="text-20px">
                  <div class="serv"><img src="/Group 41435@2x.png" alt=""></div>
                  <p>{{ $t( 'معمل تحاليل' ) }}</p>
               </div>
               <div>
                  <div class="serv"><img src="/Group 41318@2x.png" alt=""></div>
                  <p>{{ $t( "معمل أشعة" ) }}</p>
               </div>
               <div>
                  <div class="serv"><img src="/Group 41448@2x.png" alt=""></div>
                  <p>{{ $t( 'مستشفي' ) }}</p>
               </div>
               <div>
                  <div class="serv"><img src="/Group 41477@2x.png" alt=""></div>
                  <p>{{ $t( 'عيادة' ) }}</p>
               </div>
            </div> -->
      </div>
   </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { useSwiper } from 'swiper/vue'

import { Autoplay } from 'swiper/modules'
</script>

<style scoped>
.swiper {

   width: 100%;
   height: 145px;
}

.swiper-slide {
   /* Center slide text vertically */
   width: 150px;
   height: 140px;
   border-radius: 15px;
   aspect-ratio: 1/.8;
   overflow: hidden;
   background: rgb(255, 255, 255);
   display: flex;
   justify-content: center;
   align-items: center;

}

.swiper-slide img {
   width: 100%;
   height: 100%;
   object-fit: contain;
   aspect-ratio: 1/1;
}

/* .swiper-slide img {
   width: 100%;
   height: 100%;
   object-fit: cover;
   aspect-ratio: 1/1;
} */
</style>

