<template>
   <form  @submit.prevent="submitHandler" class="   text-start md:pt-6   ">
      <div class="   flex flex-col md:flex-row justify-center items-center  lg:gap-10 ">
         <div class="flex flex-col   ">
            <label for="form">{{ $t( 'الإسم' ) }}</label>
            <input autocomplete="additional-name" id="form"  maxlength="100" minlength="10" type="name" v-model=" nameRef "  :placeholder=" $t( 'قم بإدخال الاسم' ) ">
         </div>
         <div class="flex flex-col  ">
            <label for="email">{{ $t( 'البريد الالكتروني' ) }}</label>
            <input autocomplete="additional-name"  v-model="emailRef" type="email" name="email" id="email" :placeholder=" $t( 'قم بإدخال البريد الالكتروني' ) ">
         </div>
      </div>
      <div class="flex flex-col  ">
         <label  for="message">{{ $t( 'الرسالة' ) }}</label>
         <textarea v-model=" messageRef " id="message" :placeholder=" $t( '... يسعدنا قراءة رسالتك' ) " rows="4"></textarea>
      </div>
      <div class="flex justify-center"><button type="submit" class="button-prim mt-10 ">{{ $t( 'يسعدنا انضمامك معنا' ) }}</button></div>
   </form>
</template>

<script setup>
import { ref } from 'vue'

const nameRef = ref( '' )
const emailRef = ref( '' )
const messageRef =ref('')



function submitHandler () {
   
}
</script>

<style lang="scss" scoped></style>