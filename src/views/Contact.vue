<template>
   <main
      class=" container flex flex-col xl:flex-row justify-center md:gap-16 items-center  font-arabic py-10 md:py-6 ">
      <div class=" text-center  font-arabic  text-[20px] leading-[35px] ">
         <h1 class="title">{{ $t( "كن علي تواصل معنا" ) }}</h1>
         <div class="max-w-[744px] flex justify-center items-center text-start flex-col">
            <div class="flex flex-col items-center"><img class="contact" src="../assets/22.png"
                  alt="">
               <h2 class="title">{{ $t( 'سعداء بزيارتك' ) }}</h2>
               <p class="form-text">{{ $t( 'السادس من أكتوبر - محافظة الجيزة' ) }}</p>
            </div>
            <div class="flex flex-col items-center"><img class="contact" src="../assets/23.png"
                  alt="">
               <h2 class="title">{{ $t( "إتصل بنا" ) }}</h2>
               <p class="form-text">01234564648 - 01214546535</p>
            </div>
            <div class="flex flex-col items-center"><img class="contact" src="../assets/24.png"
                  alt="">
               <h2 class="title">{{ $t( 'سعداء بزيارتك' ) }}</h2>
               <p class="form-text">Info@refin.com</p>
            </div>
               <div class="hidden  flex-col absolute bottom-4 ">
                  <img width="105" src="../assets/message.png" alt="">
                  <div class=" w-[105] flex justify-center"><img width="28" src="../assets/up.png"
                        alt="">
                  </div>
               </div>
         </div>

      </div>
      <div class=" container text-center  font-arabic  text-[20px] leading-[35px] mt-20">
         <FormSection />
      </div>
   </main>
   <!-- <PartnersSection />
   <section
      class="container flex flex-col md:flex-row text-center md:text-start justify-center items-center font-arabic  mx-auto">
      <div class=" relative ">
         <img src="/Group 47760@2x.png" alt="">
      </div>
      <div class="text-xl md:text-start  max-w-[538px] md:order-first 2xl:pt-40  ">
         <h1 class="title">{{ $t( "حمل تطبيق ريفاين و واطمن علي صحتك في أي وقت" ) }}</h1>
         <div class="font-medium leading-[35px] py-4">
            توفر منصة ريفاين خدمات شاملة في مجال الرعاية الصحية وبرامج التأمين الطبي المتنوعة، لتمكن
            عملائها من الاستفادة من هذه الخدمات وحجزها إلكترونيًا بسهولة. مع العديد من الميزات
            والخدمات، مثل تحديد وترتيب مقدمي الخدمة الطبية حسب المنطقة والمحافظة، وذلك بناءً على
            تقييماتهم وجودة الخدمة التي يقدمونها. كما تتيح للعملاء مقارنة الأسعار
         </div>
         <div class="flex gap-[27px] mt-[27px] justify-center ">
            <a href=""><img src="/NoPath@2x.png" alt=""></a>
            <a href=""><img src="/NoPath - Copy@2x.png" alt=""></a>
         </div>
      </div>
   </section> -->
</template>

<script setup>
import FormSection from '../components/FormSection.vue'
import PartnersSection from '../components/HomeComponents/PartnersSection.vue'


</script>

<style lang="scss" scoped></style>