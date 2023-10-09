<template>
   <main class=" font-arabic ">
      <div class=" md:-mt-4">
         <div class="flex flex-col justify-center items-center overflow-hidden">
                  <div
                     class="w-screen flex relative  rounded-t-[15px] md:flex-row  justify-end items-center font-arabic  text-center md:text-start md:hero hero-mob bg-no-repeat aspect-[2/1] bg-cover  ">
             
                  </div>
      
                  </div>
         <!-- <HeroSection /> -->
      </div>
      <section class=" font-arabic flex justify-center  items-center pb-10">
         <div class="container flex justify-around items-center text-center md:text-start gap-10 flex-col md:flex-row ">
            <div class=" max-w-[690px]">
               <h1 class="title"> {{ $t( " مين ريفاين ؟" ) }}</h1>
               <p class=" text-[18px]">هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
                  هذا النص من مولد النص
                  العربى، حيث يمكنك أن تولد مثل هذا النص أو
                  ذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
                  هذا النص من مولد النص
                  العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد
                  العديد من النصوص الأخرى إضافة إلى زيادة عدد
               </p>
               <p class=" text-[18px]">هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
                  هذا النص من مولد النص
                  العربى، حيث يمكنك أن تولد مثل هذا النص أو
                  ذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
                  هذا النص من مولد النص
                  العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد
                  العديد من النصوص الأخرى إضافة إلى زيادة عدد
               </p>
               <p class=" text-[18px]">هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
                  هذا النص من مولد النص
                  العربى، حيث يمكنك أن تولد مثل هذا النص أو
                  ذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
                  هذا النص من مولد النص
                  العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد
                  العديد من النصوص الأخرى إضافة إلى زيادة عدد
               </p>
               <p class=" text-[18px]">هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
                  هذا النص من مولد النص
                  العربى، حيث يمكنك أن تولد مثل هذا النص أو
                  ذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
                  هذا النص من مولد النص
                  العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد
                  العديد من النصوص الأخرى إضافة إلى زيادة عدد
               </p>
            </div>
            <div class=" md:order-first">
               <img width="171" src="Group 47562@2x.png" alt="">
            </div>
         </div>
      </section>
      <div class=" bg-[#ECF5FB]">
         <NumbersSection />
         <section class="md:h-[314px] py-5 bg-prim text-center flex justify-center flex-col items-center">
            <h1 class=" text-[48px] text-white">{{ $t( 'هل لديك أي إستفسار يسعدنا تواصلك معنا' ) }}</h1>
            <a href="">
               <button
                  class=" text-[23px] text-prim bg-white px-[73px] py-2.5 rounded-[10px] my-[34px]">{{
                     $t( 'تواصل معنا' ) }}</button>
            </a>
         </section>
         <PartnersSection />
      </div>
   </main>
</template>

<script setup>

import NumbersSection from '../components/HomeComponents/NumbersSection.vue'
import PartnersSection from '../components/HomeComponents/PartnersSection.vue'


</script>

<style  scoped>

.hero{
    background-image: url('/585 Project (1).jpg');
}
.hero-mob{
       background-image: url('https://www.curtin.edu.au/healthandsafety/wp-content/uploads/2022/08/laboratory_microscope-scaled-aspect-ratio-2-1-1-480x240.jpg');
}
</style>