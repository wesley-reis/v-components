<template>
  <div id="nav" class="px-20 bg-gray-200 dark:bg-gray-800 p-6 flex justify-between items-center">
    <div class="flex justify-start gap-5 items-center">
      <router-link to="/">Home</router-link>
      <router-link :to="{ name: 'searchList' }">Search List</router-link>
      <router-link :to="{ name: 'toggle' }">Toggle</router-link>
    </div>
    <div class="flex flex-col">
        <svg v-if="this.theme == 'light'" @click="this.theme = 'dark'"  xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-slate-700"
            viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
        <svg v-if="this.theme == 'dark'" @click="this.theme = 'light'"  xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-yellow-200 stroke-yellow-100"
            viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      theme: "",
    };
  },
  watch: {
    theme() {
      localStorage.setItem("theme", this.theme)
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  },
  created() {
    this.theme = localStorage.getItem("theme")
  },
};
</script>
<style>
#nav a {
  color: #b3b7bb;
  font-weight: bold;
}

#nav a.router-link-exact-active {
  color: #34af78;
}
</style>
