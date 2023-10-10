<template>
   <section class=" w-screen bg-[#FAFAFB] flex justify-center items-center font-arabic pb-10">
      <div class=" container">
         <div class="flex md:justify-between items-center justify-center">
            <h1 class="title"> {{ $t( 'المدونة' ) }}</h1>
            <a href="/blog">
               <button class="button-prim hidden md:inline-flex"> {{ $t( 'المزيد' ) }} <span
                     class=" font-bold">+</span></button>
            </a>
         </div>
         <div class=" flex justify-center flex-wrap items-center gap-[22px] text-center pt-8 ">
            <ProductList :number="3"/>
         </div>
      </div>
   </section>
</template>

<script setup>
import ProductCard from '../ProductCard.vue'
import ProductList from '../ProductList.vue'


</script>

<style lang="scss" scoped></style>