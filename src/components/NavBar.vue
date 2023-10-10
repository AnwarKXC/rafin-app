<template>
   <header
      class="container md:h-[106px] py-2 flex  md:justify-between  md:gap-8 items-center text-lg  uppercase  font-arabic">
      <div class="flex gap-10 md:justify-start  justify-between  flex-grow  items-center">
         <div class="flex justify-end md:justify-start  order-last md:order-first">
            <a class=" " href="/"><img class="max-w-[75px] object-cover rounded-md aspect-square"
                  src="../assets/group47550.svg" alt=""></a>
         </div>
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

         <div class="md:hidden cursor-pointer " @click=" toggleModal ">
            <img v-if=" lang === 'EN' " width="36" src="/src/assets/left-alignment.svg" alt="">
            <img v-if=" lang === 'AR' " width="36" src="/src/assets/Untitled.svg" alt="">
         </div>

      </div>

      <div class=" hidden md:inline-flex xl:gap-[160px] font-arabic">
         <button class=" button-sec" v-if=" lang === 'EN' " @click=" Ar ">AR</button>
         <button class=" button-sec " v-if=" lang === 'AR' " @click=" En ">EN</button>
      </div>
      <BaseModal :modalActive=" modalActive " @close-modal=" toggleModal ">


         <div class=" flex flex-col justify-center">

            <ul class=" flex gap-[62px] justify-center  items-start it flex-col text-2xl">
               <li>
                  <RouterLink class="flex  items-center  gap-3" to="/"> <img class=" invert"
                        src="/src/assets/home.png" alt="">{{ $t( 'الرئيسية' ) }}</RouterLink>
               </li>
               <li>
                  <RouterLink class="flex  items-center  gap-3" to="/about-us"> <img class=" invert"
                        src="/src/assets/information-button.png" alt="">{{ $t( "من نحن" ) }}
                  </RouterLink>
               </li>
               <li>
                  <RouterLink class="flex  items-center  gap-3 " to="/contact-us"> <img class=" invert"
                        src="/src/assets/contact-us.png" alt="">{{ $t( "تواصل معنا" ) }}</RouterLink>
               </li>
               <li>
                  <RouterLink class="flex  items-center  gap-3" to="/blog"> <img class=" invert"
                        src="/src/assets/web-page.png" alt="">{{ $t( "المدونة" ) }}</RouterLink>
               </li>
               <li>
                  <div class=" pb-[64px] xl:gap-[160px] font-arabic ">
                     <button class=" button-sec" v-if=" lang === 'EN' " @click=" Ar ">AR</button>
                     <button class=" button-sec " v-if=" lang === 'AR' " @click=" En ">EN</button>
                  </div>
               </li>
            </ul>

         </div>
      </BaseModal>
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

<style scoped>
li {
   padding: 10px 15px;
   border-radius: 10px;
}

li:hover {
   background-color: #eeeeee15;
}
</style>