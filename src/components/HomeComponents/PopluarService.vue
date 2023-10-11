<template>
   <section
      class="container text-center font-arabic  text-[20px] leading-[35px]  flex justify-center items-center py-5 overflow-hidden" >
      <div class="max-w-[938px] container">
         <h1 class="title">{{ $t( "أشهر خدماتنا" ) }}</h1>
         <p>

         {{ $t('ريفاين تمكن العملاء من الاستفادة من الرعاية الصحية وبرامج التأمين الطبي بسهولة وملاءمة. توفر المنصة خدمات شاملة ومتنوعة، بما في ذلك ترتيب مقدمي الرعاية ومقارنة الأسعار، مما يساعد العملاء على اتخاذ قرارات مستنيرة وتحسين تجربتهم الصحية.') }}
         </p>

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
                  <div class="serv"><img src="/src/assets/35.png" alt=""></div>
                  <p>{{ $t( 'معمل تحاليل' ) }}</p>
               </div>
            </swiper-slide>
            <swiper-slide>
               <div>
                  <div class="serv"><img src="/src/assets/18.png" alt=""></div>
                  <p>{{ $t( "معمل أشعة" ) }}</p>
               </div>
            </swiper-slide>
            <swiper-slide>
               <div>
                  <div class="serv"><img src="/src/assets/48.png" alt=""></div>
                  <p>{{ $t( 'مستشفي' ) }}</p>
               </div>
            </swiper-slide>
            <swiper-slide>
               <div>
                  <div class="serv"><img src="/src/assets/77.png" alt=""></div>
                  <p>{{ $t( 'عيادة' ) }}</p>
               </div>
            </swiper-slide>

         </Swiper>
      </div>
   </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'

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

