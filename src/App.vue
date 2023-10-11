<template >

    <div :dir="dir">
      <NavBar />
      <RouterView  v-slot=" { Component } ">
        <div class="pt-28">
          <component :is="Component" />
        </div>
      </RouterView>
      <FooterBar />
    </div>

</template>

<script setup>
import { RouterView } from "vue-router"
import NavBar from "./components/NavBar.vue"
import FooterBar from "./components/FooterBar.vue"

if ( !localStorage.getItem( 'lang' ) ) {
  localStorage.setItem( 'lang', 'AR' )
} else {
  localStorage.getItem( 'lang' )
}

let dir ='rtl'
if ( localStorage.getItem( 'lang' ) === 'EN' ) {
  dir = 'ltr'
} else {
  dir = 'rtl'
}

</script>

<style  scoped></style>