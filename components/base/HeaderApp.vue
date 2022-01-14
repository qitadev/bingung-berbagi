<template>
  <nav class="md:max-w-5xl w-full mx-auto flex sm:flex-row flex-col sm:justify-between justify-start items-center p-4">
    <div class="brand-wrapper sm:w-2/6 md:w-1/2 w-full flex flex-row items-center justify-between">
      <div class="wrapper flex flex-row items-center">
        <img src="~/assets/images/bingber-logo.png" alt="Logo bingung berbagi">
        <nuxt-link to="/">Bingung Berbagi</nuxt-link>
      </div>
      <button class="sm:hidden p-2 border border-black rounded-lg" @click="toggleBurger">
        <Burger class="w-6 h-6" />
      </button>
    </div>
    <div
      :class="`${expanded ? 'max-h-80' : 'max-h-0 sm:max-h-80'} transition-max-height overflow-hidden duration-500 ease-in-out nav-wrapper sm:w-4/6 md:w-1/2 w-full flex sm:flex-row flex-col items-center sm:justify-between justify-start text-green-primary py-4 sm:py-0`"
    >
      <nuxt-link to="#" class="p-2 sm:w-fit w-full sm:mt-0 mt-2">Donasi</nuxt-link>
      <nuxt-link to="#" class="p-2 sm:w-fit w-full sm:mt-0 mt-2">Galeri</nuxt-link>
      <nuxt-link to="#" class=" sm:w-fit p-2 w-full sm:mt-0 mt-2">Tentang Kami</nuxt-link>
      <nuxt-link to="#" class="bg-green-primary px-6 py-2 rounded-lg text-white sm:w-fit w-full text-center sm:mt-0 mt-2">Hubungi Kami</nuxt-link>
    </div>
  </nav>
</template>

<script>
import Burger from "~/components/icons/Burger";
export default {
  components: {
    Burger
  },
  data() {
    return {
      expanded: false
    }
  },
  methods: {
    toggleBurger() {
      this.expanded = !this.expanded
    }
  }
}
</script>
