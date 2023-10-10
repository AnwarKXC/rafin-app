<template>
   <main class=" container font-arabic pt-7  ">
      <div class="flex flex-col md:flex-row  gap-10 md:gap-4 lg:gap-10">
         <div>

            <h4 ref="focus" class=" text-sm font-bold">{{ article.date }}</h4>
            <h2 class=" text-3xl py-5 font-bold">{{ article.name }}</h2>
            <div class=" relative p-2 ">
               <div class="min-w-[350px]  aspect-[2/1]  rounded-[15px] overflow-hidden relative ">
                  <img class=" w-full absolute inset-0" :src=" article.url " alt="artticle photo">

                  <div class=" flex gap-6 absolute bottom-0 px-6 py-8 bg-gradient-to-t
                  from-black to-[#00000000] w-full">
                     <span v-if=" webShareSupported " @click=" sharePage "
                        class=" text-white cursor-pointer hover:text-prim">{{ $t( 'شارك' ) }}</span>
                     <div class="flex gap-1">
                        <a href=""><img @click=" shareOnFacebook " width="24"
                              src="/src/assets/faceimg.svg" alt=""></a>
                        <a href=""><img @click=" shareOnInstagram " width="24"
                              src="/src/assets/instaimg.svg" alt=""></a>
                        <a href=""><img @click=" shareOnWhatsApp " width="24"
                              src="/src/assets/whatsimg.svg" alt=""></a>
                        <a href=""><img @click=" shareOnTwitter " width="24"
                              src="/src/assets/twitterimg.svg" alt=""></a>
                        <a href=""><img @click=" shareOnLinkedIn " width="24"
                              src="/src/assets/linkdimg.svg" alt=""></a>
                     </div>
                  </div>
               </div>
               <h5 class=" text-[19px] leading-[55px]">
                  {{ article.content }}
               </h5>
            </div>
         </div>
         <div class="py-24 ">
            <h2 class=" text-2xl ">{{ $t( 'آخر المقالات' ) }}</h2>
            <div class=" flex flex-col gap-6 " v-for="    item     in     filterdArr.slice( 0, 2 )    ">
               <LastArticle :item=" item " :key=" item.id " />
            </div>
            <div class=" flex justify-end flex-col md:flex-row">
               <a href="/blog">
                  <button class="button-prim text-xl mt-6"> {{ $t( 'المزيد' ) }}
                     <span class=" font-bold">+</span>
                  </button>
               </a>
            </div>
         </div>
      </div>
      <div class="mt-16 flex justify-center items-center gap-8 flex-col md:flex-row">
         <div class=" flex flex-col gap-4 flex-grow ">
            <h2 class=" text-[21px] font-bold">{{ $t( 'مقالات مقترحة' ) }}</h2>
            <div v-for="   (  item, index  )    in      filterdArr.reverse().slice( 1,4 )   ">

               <div :key=" item.id "
                    @click="router.push( `/article/${ item.id }/${ item.name.split( ' ' ).join( '-' ) }` ).then( scroll ).then( reload )"
                     class=" cursor-pointer relative flex justify-start items-center gap-4 border border-[#BFBFBF] py-5 px-2  rounded-[15px]  font-bold">
                     <span
                        class="w-10 h-10 flex justify-center items-center rounded-full border-2 pl-1 font-bold border-prim"><span
                           class=" mr-1.5">{{ index + 1 }}</span></span>
                     <h2>{{ item.name }}</h2>
                  </div>
                  
            </div>

         </div>
         <div class=" flex flex-col gap-4  flex-grow">
            <h2 class=" text-[21px] font-bold">{{ $t( 'الأكثر قراءة' ) }}</h2>
            <div v-for="   (   item, index   )    in       filterdArr.slice( 0, 3 )    ">

               <div :key="item.id"
                  @click="router.push( `/article/${ item.id }/${ item.name.split( ' ' ).join( '-' ) }` ).then(scroll).then( reload )"
                  class=" cursor-pointer relative flex justify-start items-center gap-4 border border-[#BFBFBF] py-5 px-2  rounded-[15px]  font-bold ">
                  <span
                     class="w-10 h-10 flex justify-center items-center rounded-full border-2 pl-1 font-bold border-prim"><span
                        class=" mr-1.5">{{ index + 1 }}</span></span>
                  <h2>{{ item.name }}</h2>
               </div>
            </div>
         </div>
      </div>
   </main>
</template>

<script setup>
import LastArticle from '../components/LastArticle.vue'
import useShareButton from '../components/composables/useShareButton'
import { ref, onMounted } from 'vue'
const scroll = () => {
   window.scrollTo( 0, 0 )
}
// to auto force page to view on top
const focus = ref( null )
onMounted( () => {
     if ( focus.value ) {
      focus.value.focus()
   }
   scroll()
} )


//global state
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
let allArticles = ref( [] )
let filterdArr = ref( [] )
const store = useStore()
allArticles.value = store.state.images

const route = useRoute()
const id = route.params.id
const article = allArticles.value.find( item => item.id == id )
filterdArr = allArticles.value.filter( item => item.id != id )


//routing
import { useRouter } from 'vue-router'
const router = useRouter()
const reload = () => {
   window.location.reload()
}



// share icons
const { webShareSupported, sharePage } = useShareButton()
const url = window.location.href

function shareOnFacebook () {
   var encodedUrl = encodeURIComponent( url )
   var facebookShareUrl = "https://www.facebook.com/sharer/sharer.php?u=" + encodedUrl
   window.open( facebookShareUrl, "_blank" )
}

function shareOnTwitter () {
   var title = document.title
   window.open( "https://twitter.com/intent/tweet?url=" + encodeURIComponent( url ) + "&text=" + encodeURIComponent( title ) )
}

function shareOnLinkedIn () {
   window.open( "https://www.linkedin.com/sharing/share-offsite/?url=" + encodeURIComponent( url ) )
}
function shareOnWhatsApp () {
   window.open( 'https://wa.me/?text=Check%20out%20this%20awesome%20website:' + encodeURIComponent( url ) )
}

function shareOnInstagram () {
   var url = window.location.href
   window.open( "https://www.instagram.com/?url=" + encodeURIComponent( url ) )
}

</script>

<style  scoped>
p {
   padding: 60px 0;
}
</style>