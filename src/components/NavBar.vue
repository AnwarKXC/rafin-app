<template>
   <header
      class="container md:h-[106px] py-2 flex justify-between  md:gap-8 items-center text-lg  uppercase  ">
      <div class=" flex gap-10 justify-center items-center">
         <a class="md:order-first" href="/"><img
               class="max-w-[75px] object-cover rounded-md aspect-square" src="../assets/group47550.svg"
               alt=""></a>
         <nav class="hidden md:inline-flex font-medium">
            <ul class=" flex gap-6 xl:gap-[36px]">
               <li>
                  <RouterLink to="/">{{ $t( 'الرئيسية' ) }}</RouterLink>
               </li>
               <li>
                  <RouterLink to="/about-us">{{ $t( "من نحن" ) }}</RouterLink>
               </li>
               <li>
                  <RouterLink to="/contact-us">{{ $t( "تواصل معنا" ) }}</RouterLink>
               </li>
               <li>
                  <RouterLink to="/blog">{{ $t( "المدونة" ) }}</RouterLink>
               </li>
            </ul>
         </nav>
         <BaseModal :modalActive=" modalActive " @close-modal=" toggleModal ">

            <ul class=" flex gap-[62px] flex-col">
               <li>
                  <RouterLink to="/">{{ $t( 'الرئيسية' ) }}</RouterLink>
               </li>
               <li>
                  <RouterLink to="/about-us">{{ $t( "من نحن" ) }}</RouterLink>
               </li>
               <li>
                  <RouterLink to="/contact-us">{{ $t( "تواصل معنا" ) }}</RouterLink>
               </li>
               <li>
                  <RouterLink to="/blog">{{ $t( "المدونة" ) }}</RouterLink>
               </li>
            </ul>

         </BaseModal>
         <div class="md:hidden cursor-pointer " @click=" toggleModal ">
            <img v-if=" lang === 'EN' " width="36" src="/src/assets/left-alignment.svg" alt="">
            <img v-if=" lang === 'AR' " width="36" src="/src/assets/Untitled.svg" alt="">
         </div>

      </div>

      <div class=" xl:gap-[160px] font-arabic">
         <button class=" button-sec" v-if=" lang === 'EN' " @click=" Ar ">AR</button>
         <button class=" button-sec " v-if=" lang === 'AR' " @click=" En ">EN</button>
      </div>
   </header>
</template>

<script setup>
const lang = localStorage.getItem( "lang" )
function Ar () {
   localStorage.setItem( "lang", "AR" )
   location.reload()
}
function En () {
   localStorage.setItem( "lang", "EN" )
   location.reload()

}



import { ref } from 'vue'
import BaseModal from './BaseModal.vue'
const modalActive = ref( null )
const toggleModal = () => {
   modalActive.value = !modalActive.value
}
</script>

<style lang="scss" scoped></style>