<template>
 <div class="flex flex-col gap-5 h-full bg-gray-50 dark:bg-gray-700">
    <Header/>
    <router-view/>
 </div>
</template>
<script>
import Header from './components/Header.vue'
export default {
  components:{Header}
}
</script>

