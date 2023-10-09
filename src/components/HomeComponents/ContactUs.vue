<template>
   <section  class=" w-screen  bg-[#ECF5FB] flex justify-center items-center font-arabic flex-col py-4">
      <div class="max-w-[744px] text-center  font-arabic  text-[18px] leading-[35px]">
         <div class=" text-start">
            <h1 class="title  text-center">{{ $t( 'تواصل معنا' ) }}</h1>
            <div class=" flex flex-col md:flex-row  justify-between gap-16 items-center  mt-[25px]">
               <div class="flex flex-col text-center items-center md:items-start"><img class="contact" src="../../assets/22.png"
                     alt="">
                  <h2 class="title text-[23px] text-start  items-start">{{ $t( 'سعداء بزيارتك' ) }}</h2>
                  <p class="form-text">{{ $t( 'السادس من أكتوبر - محافظة الجيزة' ) }}</p>
               </div>
               <div class="flex flex-col text-center items-center md:items-start"><img class="contact" src="../../assets/23.png"
                     alt="">
                  <h2 class="title">{{ $t( "إتصل بنا" ) }}</h2>
                  <p class="form-text">01234564648 - 01214546535</p>
               </div>
               <div class="flex flex-col items-center md:items-start "><img class="contact" src="../../assets/24.png"
                     alt="">
                  <h2 class="title">{{ $t( 'راسلنا علي' ) }}</h2>
                  <p class="form-text">Info@refin.com</p>
               </div>
            </div>
            
         </div>
      </div>
      <FormSection/>
      <div>
      </div>
   </section>
</template>

<script setup>
import FormSection from '../FormSection.vue'


</script>
