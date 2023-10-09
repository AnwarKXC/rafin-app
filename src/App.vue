<template >

    <div :dir="dir">
      <RouterView  v-slot=" { Component } ">
        <NavBar />
        <component :is="Component" />
        <FooterBar />
      </RouterView>
    </div>

</template>

<script setup>
import {ref} from 'vue'
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