<template>
   <section class=" w-screen  bg-[#ECF5FB] py-10 font-arabic flex justify-center items-center">
      <div class="container flex flex-col md:flex-row text-center gap-10 py-5 justify-around items-center ">
         <div class=" max-w-[511px] max-h-[500px]">
            <h1 class="title"> {{ $t( "مين ريفاين ؟" ) }}</h1>
            <p class=" text-[20px]  line-clamp-2">هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص
               العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus debitis minus sequi quis hic. Nobis, laborum omnis? Illum quas soluta, delectus nesciunt repellendus saepe dolore consequatur, voluptates fugiat cupiditate modi!
            
            </p>
               <button class="button-prim mt-[35px]">
                  <RouterLink to="/about-us" > {{ $t('معرفة المزيد') }}</RouterLink>
               </button>
         </div>
         <div class=" max-w-[170px]">
            <img  src="Group 47562@2x.png" alt="">
         </div>
      </div>
   </section>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>