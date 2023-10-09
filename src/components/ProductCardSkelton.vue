<template>
   <div class="flex flex-col overflow-hidden max-w-[350px]">
      <div class="bg-blue-500 border border-[#BFBFBF] rounded-t-[15px] overflow-hidden object-contain">
         <AnimatedPlaceholder class="  aspect-[2/1] w-full" />

      </div>

      <div
         class="h-[150px] text-start p-2  border border-[#BFBFBF] border-t-0 rounded-b-[15px] overflow-hidden text-ellipsis">
         <AnimatedPlaceholder class="text-[20px] pb-3" />
         <AnimatedPlaceholder class="text-ellipsis whitespace-nowrap overflow-hidden leading-7" />
      </div>
   </div>
</template>

<script setup>
import AnimatedPlaceholder from "./AnimatedPlaceholder.vue"
</script>

<style lang="scss" scoped></style>