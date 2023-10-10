<template>
   <div class="gap-[22px] relative flex justify-center flex-wrap items-center">
      <ProductCard :image=" image "
         v-for="        image         in         imagesArr.slice( 0, number )        " :key=" image.id " />
   </div>
</template>

<script setup>
import ProductCard from './ProductCard.vue'
import { ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const imagesArr = ref( [] )
imagesArr.value = store.state.images


const props = defineProps( {
   number: {
      type: Number,
   },
} )


console.log()

</script>

<style lang="scss" scoped></style>