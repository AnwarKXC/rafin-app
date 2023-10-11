<template>

      <div  @click="router.push( `/article/${ item.id }/${ item.name.split( ' ' ).join( '-' ) }` ).then( scroll ).then( reload )"
      class="cursor-pointer flex rounded-[15px] overflow-hidden border border-[#BFBFBF] gap-2 min-w-[400px]     max-h-[90px] aspect-[2/.8] my-2 ">
      <div class=" aspect-[2/1] ">
         <img class="w-full aspect-[2/1] " :src="item.url" alt=" article photo">
      </div>
      <div class=" text-black z-10 ">
         <h2 class="text-[18px] font-bold pt-2  ">{{ item.name }}
         </h2>
         <p  class=" line-clamp-2 leading-6 text-sm">{{ item.content }}</p>
      </div>
   </div>
 

</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

const reload = () => {
   window.location.reload()
}

defineProps( {
   item: {
      type: Object,
      default: () => ( {} ), // Default value for the image prop
   },
} )
 

</script>

<style lang="scss" scoped></style>