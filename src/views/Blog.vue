<template>
   <section class=" container font-arabic">
          <div class="z-10 fixed hidden md:flex flex-col  bottom-16  ">
                  <a href="#form"><img width="105" src="../assets/message.png" alt=""></a>
                  <div @click=" scrollToTop "  class=" cursor-pointer  w-[105] flex justify-center"><img width="28" src="../assets/up.png" alt="">
                  </div>
               </div>
      <div class="flex flex-col items-center  ">
         <h1 class="title"> {{ $t( 'المدونة' ) }}</h1>
         <Suspense>
            <ProductList />
            <template #fallback>
               <ProductCardSkelton />
            </template>
         </Suspense>
      </div>
   </section>
   <!-- <RefinAppDownload /> -->
   <section class=" container  font-arabic pt-20 ">

      <div class="flex justify-center pt-14 gap-6">
         <div class=" p-2 rounded-xl border-2 border-prim text-2xl font-arabic flex">
            <img class=" w-8 md:w-6" src="../assets/right-arrow.png" alt="">
         </div>
         <div class="flex text-lg font-semibold gap-2">
            <span class=" p-2 px-3 rounded-xl border-2 border-prim">01</span>
            <span class=" p-2 px-3 rounded-xl border-2 border-prim">02</span>
            <span class=" p-2 px-3 rounded-xl border-2 border-prim">03</span>
         </div>
         <div class="p-2 rounded-xl border-2 border-prim text-2xl font-arabic flex "><img
               class=" w-8 md:w-6" src="../assets/left-arrow.png" alt="">
         </div>

      </div>
   </section>
</template>

<script setup>
import ProductCard from '../components/ProductCard.vue'
import ProductCardSkelton from '../components/ProductCardSkelton.vue'
import ProductList from '../components/ProductList.vue'
import RefinAppDownload from '../components/RefinAppDownload.vue'

function scrollToTop () {
   // Scroll to the top of the page
   window.scrollTo( {
      top: 0,
      behavior: 'smooth' // Smooth scrolling animation
   } )
}

</script>

<style lang="scss" scoped></style>