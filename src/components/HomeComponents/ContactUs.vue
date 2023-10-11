<template>
   <section class=" w-screen  bg-[#ECF5FB] flex justify-center items-center font-arabic flex-col py-4">
      <div class="max-w-[744px] text-center  font-arabic  text-[18px] leading-[35px]">
         <div class=" text-start">
            <h1 class="title-contact  text-center">{{ $t( 'تواصل معنا' ) }}</h1>
            <div class=" flex flex-col md:flex-row  justify-between gap-16 items-center  mt-[25px]">
               <div class="flex flex-col text-center items-center "><img class="contact"
                     src="../../assets/22.png" alt="">
                  <h2 class="title-contact text-[23px] text-start  items-start">{{ $t( 'سعداء بزيارتك'
                  ) }}</h2>
                  <p class="form-text">{{ $t( 'مصر' ) }}</p>
               </div>
               <div class="flex flex-col text-center items-center "><img class="contact"
                     src="../../assets/23.png" alt="">
                  <h2 class="title-contact">{{ $t( "إتصل بنا" ) }}</h2>
                  <p class="form-text"><a href="tel:01070549662">01070549662</a> - <a
                        href="tel:01070549663">01070549663</a></p>
               </div>
               <div class="flex flex-col items-center  "><img class="contact" src="../../assets/24.png"
                     alt="">
                  <h2 class="title-contact">{{ $t( 'راسلنا علي' ) }}</h2>
                  <p class="form-text"><a href="mailto:info@refine-care.com">info@refine-care.com</a>
                  </p>
               </div>
            </div>

         </div>
         <div class=" container">
            <FormSection />
         </div>
      </div>

   </section>
</template>

<script setup>
import FormSection from '../FormSection.vue'


</script>
