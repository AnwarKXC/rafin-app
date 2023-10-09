<template>
   <section class=" container py-[50px]  text-[#191933] font-arabic text-[20px] h-[176px]">
      <div class=" flex flex-col lg:flex-row md:justify-between  justify-center items-center gap-4 border-t opacity-80 pt-[33px] ">
         <div>
                     <a class="md:order-first" href="/"><img
                  class="max-w-[75px] object-cover rounded-md aspect-square" src="/Group 47550.svg"
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
               <a target=”_blank” href="https://www.facebook.com/refinecare"><img width="16" src="/facebook-app-symbol.png" alt=""></a>
                        <a href="https://www.youtube.com/@refinecare"><img width="16" target='_blank' src="/youtube.png" alt=""></a>
               <!-- <a href="https://www.telegram.com/"><img width="16" src="/telegram.png" alt=""></a> -->
               <!-- <a href="https://www.x.com/"><img width="16" src="/twitter (2).png" alt=""></a> -->
      
         
               <a href="https://linkedin.com/company/refine-care" target=”_blank”><img width="16" src="/linkedin.png" alt=""></a>
         
            </div>
         </div>
      </div>
      <h6 class="text-center md:text-end text-[15px] opacity-30 py-[10px]">{{ $t('جميع الحقوق محفوظة لشركة © 2023 Paymac') }}</h6>
   </section>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>