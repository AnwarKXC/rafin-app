<template>
   <main
      class=" container flex flex-col xl:flex-row justify-center md:gap-16 items-center  font-arabic py-10 md:py-6 ">
      <div class=" text-center  font-arabic  text-[20px] leading-[35px] ">
         <h1 ref="focus" class="title-contact ">{{ $t( "كن علي تواصل معنا" ) }}</h1>
         <div class="max-w-[744px] flex justify-center items-center text-center flex-col">
            <div class="flex flex-col items-center "><img class="contact" src="../assets/22.png"
                  alt="">
               <h2 class="title-contact">{{ $t( 'سعداء بزيارتك' ) }}</h2>
               <p class="form-text">{{ $t( 'السادس من أكتوبر - محافظة الجيزة' ) }}</p>
            </div>
            <div class="flex flex-col items-center"><img class="contact" src="../assets/23.png"
                  alt="">
               <h2 class="title-contact">{{ $t( "إتصل بنا" ) }}</h2>
               <p class="form-text"><a href="tel:01090054067">01090054067</a> - <a href="tel:01090054708">01090054708</a></p>
            </div>
            <div class="flex flex-col items-center"><img class="contact" src="../assets/24.png"
                  alt="">
               <h2 class="title-contact">{{ $t( 'سعداء بزيارتك' ) }}</h2>
               <p class="form-text"><a href="mailto:info@refine-care.com">info@refine-care.com</a></p>
            </div>
               <div class="hidden  flex-col absolute bottom-4 ">
                  <img width="105" src="../assets/message.png" alt="">
                  <div class=" w-[105] flex justify-center"><img width="28" src="../assets/up.png"
                        alt="">
                  </div>
               </div>
         </div>

      </div>
      <div class=" container text-center  font-arabic  text-[20px] leading-[35px] mt-20 md:-mt-4 xl:max-w-[70%] ">
         <FormSection />
      </div>
   </main>

</template>

<script setup>
import FormSection from '../components/FormSection.vue'

import { ref, onMounted } from 'vue'
const scroll = () => {
   window.scrollTo( 0, 0 )
}
// to auto force page to view on top
const focus = ref( null )
onMounted( () => {
   if ( focus.value ) {
      focus.value.focus()
   }
   scroll()
} )

</script>

<style lang="scss" scoped></style>