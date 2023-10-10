<template>
   <section class=" container py-[50px]  text-[#191933] font-arabic text-[20px] h-[176px]">
      <div class=" flex flex-col lg:flex-row lg:justify-between  justify-center items-center gap-4 border-t opacity-80 pt-[33px] ">
         <div>
                     <a class="md:order-first" href="/"><img
                  class="max-w-[75px] object-cover rounded-md aspect-square" src="/src/assets/group47550.svg"
                  alt=""></a>
         </div>

            <ul class=" flex md:gap-[62px] gap-4 flex-col lg:flex-row justify-center items-center">
               <li>
                  <RouterLink to="/privacy">{{ $t( "سياسة الخصوصية") }}</RouterLink>
               </li>
               <li>
                  <RouterLink to="/return">{{ $t("سياسة الاسترجاع" ) }}</RouterLink>
               </li>
               <li>
                  <RouterLink to="/terms">{{ $t( "شروط الاستخدام") }}</RouterLink>
               </li>
                  <li class="hidden lg:block">|</li>
                  <li>
                     <RouterLink to="/contact-us">{{ $t( "تواصل معنا" ) }}</RouterLink>
                  </li>
            </ul>
         <div class=" h-[45px] px-4 rounded-[26px] border-2 flex justify-around items-center gap-4">
            <h3 class=" text-[15px]">{{ $t('تابعنا علي') }}</h3>
            <div class="flex justify-center items-center gap-2">
               <!-- <a href="https://www.instagram.com/" ><img width="16" src="/instagram.png" alt=""></a> -->
               <!-- <a href="https://twitter.com/"><img width="16" src="/twitter.png" alt=""></a> -->
               <a target=”_blank” href="https://www.facebook.com/refinecare"><img width="16" src="/src/assets/facebook-app-symbol.png" alt=""></a>
                        <a href="https://www.youtube.com/@refinecare"><img width="16" target='_blank' src="/src/assets/youtube.png" alt=""></a>
               <!-- <a href="https://www.telegram.com/"><img width="16" src="/telegram.png" alt=""></a> -->
               <!-- <a href="https://www.x.com/"><img width="16" src="/twitter (2).png" alt=""></a> -->
      
         
               <a href="https://linkedin.com/company/refine-care" target=”_blank”><img width="16" src="/src/assets/linkedin.png" alt=""></a>
         
            </div>
         </div>
      </div>
      <div class="flex flex-col lg:flex-row lg:justify-between justify-center items-cente text-center lg:text-end text-[15px]  py-[10px] items-center">
         <h6 class="flex justify-center opacity-60">{{ $t("جميع الحقوق محفوظة © 2023 Refine") }} </h6>
             <h6 class=" text-center "><span class="opacity-60 ">Powerd by</span> <a class=" opacity-90 font-semibold text-prim" href="https://paymac.net">Paymac</a></h6>
      </div>
      <h6 class=" flex justify-center items-center text-xs lg:-mt-6"><span class=" text-center opacity-60">{{ $t('يتبع هذا الموقع شركة PAYMAC للحلول الرقمية الكاملة') }}</span><span class=" opacity-90 aspect-[2/1] max-w-[150px]"><a href="https://paymac.net"><img src="/src/assets/paylogo.png" alt="  paymac logo"></a></span></h6>
  
   </section>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>