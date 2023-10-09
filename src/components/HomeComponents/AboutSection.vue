<template>
   <section class=" w-screen  bg-[#ECF5FB] py-10 font-arabic flex justify-center items-center">
      <div
         class="container flex flex-col md:flex-row text-center gap-10 py-5 justify-around items-center ">
         <div class=" max-w-[511px] max-h-[500px]">
            <h1 class="title"> {{ $t( "مين ريفاين ؟" ) }}</h1>
            <p class=" text-[20px]  line-clamp-2">

               توفر منصة ريفاين خدمات شاملة في مجال الرعاية الصحية وبرامج التأمين الطبي المتنوعة، لتمكن
               عملائها من هذه الخدمات وحجزها إلكترونياً بسهولة مع العديد من الميزات والخدمات، مثل تحديد
               وطريقة تقديم الخدمة الطبية حسب المنطقة والمحافظة، وذلك بفضل تقييمات الخدمة التي تقدمها.
               كما ساهم في مقارنة الأسعار
            </p>
            <button class="button-prim mt-[35px]">
               <RouterLink to="/about-us"> {{ $t( 'معرفة المزيد' ) }}</RouterLink>
            </button>
         </div>
         <div class=" max-w-[170px]">
            <img src="/src/assets/logo.png" alt="">
         </div>
      </div>
   </section>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>