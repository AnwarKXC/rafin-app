<template>
   <section class=" w-screen  bg-[#ECF5FB] flex justify-center items-center font-arabic py-5">
      <div class="container text-center font-arabic  text-[20px] leading-[35px]">
         <h1 class="title">{{ $t( 'شركاءنا' ) }}</h1>
         <p class="max-w-[938px] mx-auto">
            توفر منصة ريفاين خدمات شاملة في مجال الرعاية الصحية وبرامج التأمين الطبي المتنوعة، لتمكن
            عملائها من هذه الخدمات وحجزها إلكترونياً بسهولة مع العديد من الميزات والخدمات، مثل تحديد
            وطريقة تقديم الخدمة الطبية حسب المنطقة والمحافظة، وذلك بفضل تقييمات الخدمة التي تقدمها. كما
            ساهم في مقارنة الأسعار</p>
         <div>

            <div class=" flex items-center gap-4 pt-12">
               <div class="swiper-button-next p-2 cursor-pointer rounded-xl bg-[#ACCCFC]    font-arabic">
                  <img class=" ltr:hidden w-6 " src="/src/assets/right-arrow.png" alt="">
                  <img class=" rtl:hidden w-6 " src="/src/assets/left-arrow.png" alt="">
               </div>
               <Swiper :class=" Swiper " :slides-per-view=" 6.25 " :space-between=" 25 " :loop=" true "
                  :breakpoints=" {
                     '200': {
                        slidesPerView: 1,
                        spaceBetween: 50,
                     },
                     '350': {
                        slidesPerView: 2,
                        spaceBetween: 10,
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

                  } " :modules=" [ Autoplay, Navigation ] " :navigation=" {
   nextEl: '.swiper-button-next',
   prevEl: '.swiper-button-prev',
} " :autoplay=" {
   delay: 2000,
   disableOnInteraction: false,
} " class="mySwiper" :grab-cursor=" true ">
                  <swiper-slide>
                     <img src="/src/assets/243533304_129503936096812_1607233722212819204_n@2x.png"
                        alt="">
                  </swiper-slide>

                  <swiper-slide>
                     <img
                        src="https://fastly.picsum.photos/id/357/1500/1500.jpg?hmac=ZioDW5L15DvON8KY0S9IJNZcAb9tz9YzEz3B6yZ-GIc"
                        alt="">
                  </swiper-slide>
                  <swiper-slide>
                     <img src="/src/assets/243533304_129503936096812_1607233722212819204_n@2x.png"
                        alt="">
                  </swiper-slide>
                  <swiper-slide>
                     <img src="/src/assets/243533304_129503936096812_1607233722212819204_n@2x.png"
                        alt="">
                  </swiper-slide>
                  <swiper-slide>
                     <img src="/src/assets/243533304_129503936096812_1607233722212819204_n@2x.png"
                        alt="">
                  </swiper-slide>

                  <swiper-slide>
                     <img
                        src="https://fastly.picsum.photos/id/357/1500/1500.jpg?hmac=ZioDW5L15DvON8KY0S9IJNZcAb9tz9YzEz3B6yZ-GIc"
                        alt="">
                  </swiper-slide>
                  <swiper-slide>
                     <img src="/src/assets/243533304_129503936096812_1607233722212819204_n@2x.png"
                        alt="">
                  </swiper-slide>
                  <swiper-slide>
                     <img src="/src/assets/243533304_129503936096812_1607233722212819204_n@2x.png"
                        alt="">
                  </swiper-slide>
                  <swiper-slide>
                     <img src="/src/assets/243533304_129503936096812_1607233722212819204_n@2x.png"
                        alt="">
                  </swiper-slide>

                  <swiper-slide>
                     <img
                        src="https://fastly.picsum.photos/id/357/1500/1500.jpg?hmac=ZioDW5L15DvON8KY0S9IJNZcAb9tz9YzEz3B6yZ-GIc"
                        alt="">
                  </swiper-slide>
                  <swiper-slide>
                     <img src="/src/assets/243533304_129503936096812_1607233722212819204_n@2x.png"
                        alt="">
                  </swiper-slide>
                  <swiper-slide>
                     <img src="/src/assets/243533304_129503936096812_1607233722212819204_n@2x.png"
                        alt="">
                  </swiper-slide>


               </Swiper>
               <div class="swiper-button-prev cursor-pointer p-2 rounded-xl bg-[#ACCCFC]   font-arabic">
                  <img class=" rtl:hidden w-6 " src="/src/assets/right-arrow.png" alt="">
                  <img class=" ltr:hidden w-6 " src="/src/assets/left-arrow.png" alt="">
               </div>
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