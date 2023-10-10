<template>
   <RouterLink :to=" { name: 'article', params: { name: ( item.name ).split( ' ' ).join( '-' ), id: item.id } }">
      <div
      class="cursor-pointer flex rounded-[15px] overflow-hidden border border-[#BFBFBF] gap-2 md:min-h-[125px] lg:min-h-[150px]   xl:min-h-[175px] max-h-[175px] aspect-[2/.8] my-2 ">
      <div class=" aspect-square object-cover">
         <img class="w-full aspect-square " :src="item.url" alt=" article photo">
      </div>
      <div class=" text-black z-10 p-2">
         <h2 class="text-[18px] font-bold pt-2 pb-4 ">{{ item.name }}
         </h2>
         <p  class=" line-clamp-3 leading-7 text-sm">{{ item.content }}</p>
      </div>
   </div>
   </RouterLink>

</template>

<script setup>
import { useRouter } from 'vue-router';


defineProps( {
   item: {
      type: Object,
      default: () => ( {} ), // Default value for the image prop
   },
} )
 

</script>

<style lang="scss" scoped></style>