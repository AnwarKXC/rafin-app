<template>
   <section ref="sectionToObserve"
      class="container text-center font-arabic  text-[20px] leading-[35px] py-10 flex justify-center items-center">
      <div class="max-w-[938px]">
         <h1 class="title">{{ $t( 'ريفاين في ارقام' ) }}</h1>
         


         <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص
            العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد
            الحروف</p>
         <div class="flex justify-evenly items-center flex-wrap mt-10 gap-4 " ref="sectionToObserve">
            <div class="text-20px">
               <h1 class="title-num"><count-up v-if=" isVisible " :end-val=" 26 " :duration=" duration "></count-up>+</h1>
               <p>{{ $t( 'معمل تحاليل' ) }}</p>
            </div>
            <div class="target">
               <h1 class="title-num"><count-up v-if=" isVisible " :end-val=" 17 " :duration=" duration "></count-up> +</h1>
               <p>{{ $t( 'مستشفي' ) }}</p>
            </div>
            <div>
               <h1 class="title-num"><count-up v-if=" isVisible " :end-val=" 33 "  :duration=" duration "></count-up>+</h1>
               <p>{{ $t( "معمل أشعة" ) }}</p>
            </div>
            <div>
               <h1 class="title-num"> <count-up v-if=" isVisible " :end-val=" 20 " :duration=" duration "></count-up>+</h1>
               <p>{{ $t( 'عيادة' ) }}</p>
            </div>

         </div>
      </div>
   </section>
</template>

<script setup>
import CountUp from 'vue-countup-v3'
import { ref, onMounted } from 'vue'

const isVisible = ref( false ) 
const sectionToObserve = ref( null )
const duration = 12 
const options = ref( {
   threshold: 1,
} )

onMounted( () => {
   const sectionObserver = new IntersectionObserver( entries => {
      if ( entries[ 0 ].isIntersecting ) {
         setTimeout( () => {
            isVisible.value = true 
            sectionObserver.disconnect() 
         },700)
      }
   }, options.value )

   if ( sectionToObserve.value ) {
      sectionObserver.observe( sectionToObserve.value )
   }
} )
</script>

<style lang="scss" scoped></style>