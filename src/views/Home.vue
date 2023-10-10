<template>
   <HeroSection />
   <AboutSection />

   <NumbersSection />

   <PartnersSection>
      <a href="/contact-us"> <button class="button-prim mt-10">{{ $t( 'يسعدنا انضمامك معنا' )
      }}</button></a>
   </PartnersSection>
   <PopluarService />
   <BlogSection />
   <ContactUs />
</template>

<script setup>
import AboutSection from '../components/HomeComponents/AboutSection.vue'
import BlogSection from '../components/HomeComponents/BlogSection.vue'
import ContactUs from '../components/HomeComponents/ContactUs.vue'
import HeroSection from '../components/HomeComponents/HeroSection.vue'
import NumbersSection from '../components/HomeComponents/NumbersSection.vue'
import PartnersSection from '../components/HomeComponents/PartnersSection.vue'
import PopluarService from '../components/HomeComponents/PopluarService.vue'









</script>

<style lang="scss" scoped></style>