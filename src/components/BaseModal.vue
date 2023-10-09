<template>
  <Teleport to="body" >
    <Transition name="modal-outer">
      <div v-show=" modalActive "  :dir=" dir " :class="[dir==='ltr'?'justify-start':'justify-end']"
        class="absolute w-full bg-black bg-opacity-50 h-screen top-0 left-0 z-20"
        @click="$emit( 'close-modal' )">
        <Transition name="modal-inner">
          <div v-if=" modalActive " class="p-3 z-50  bg-white  h-full w-3/4   ">

            <div class="pt-6 px-2 ">
              <slot />
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
defineEmits( [ "close-modal" ] )
const props = defineProps( {
  modalActive: {
    type: Boolean,
    default: false,
  },
} )



let dir = 'rtl'
if ( localStorage.getItem( 'lang' ) === 'EN' ) {
  dir = 'ltr'
} else {
  dir = 'rtl'
}



</script>

<style scoped>
.modal-outer-enter-active,
.modal-outer-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-outer-enter-from,
.modal-outer-leave-to {
  opacity: 0;
}

.modal-inner-enter-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}

.modal-inner-leave-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-inner-enter-from {
  opacity: 0;
  transform: scale(0.8);
}

.modal-inner-leave-to {
  transform: scale(0.8);
}
</style>
