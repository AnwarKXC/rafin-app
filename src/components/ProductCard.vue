<template>
   <RouterLink :to="{name:'article', params:{name: ( image.name).split( ' ' ).join('-'),id:image.id}}">
      <div class="flex flex-col overflow-hidden max-w-[350px] tracking-wide">
         <div class="border border-[#BFBFBF] rounded-t-[15px] overflow-hidden">
            <img class="aspect-[2/1] w-full" :src=" image.url " alt="">
         </div>
         <div class="h-[150px] text-start p-2 border border-[#BFBFBF] border-t-0 rounded-b-[15px]">
            <h3 class="pb-3">{{ image.name }}</h3>
            <p class="line-clamp-2 leading-6 text-sm tracking-wide">{{ image.content }}</p>
         </div>
      </div>
   </RouterLink>
</template>

<script setup>

const props = defineProps( {
   image: {
      type: Object,
      default: () => ( {} ), // Default value for the image prop
   },
} )
</script>

<style lang="scss" scoped></style>






