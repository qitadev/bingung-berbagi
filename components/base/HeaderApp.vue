<template>
  <nav class="md:max-w-5xl w-full mx-auto flex sm:flex-row flex-col sm:justify-between justify-start items-center px-5 py-4">
    <div class="brand-wrapper sm:w-2/6 md:w-1/2 w-full flex flex-row items-center justify-between">
      <div class="wrapper flex flex-row items-center">
        <nuxt-link to="/" class="flex flex-row items-center">
          <span>
            <img src="~/assets/images/bingber-logo.png" alt="Logo bingung berbagi">
          </span>
          Bingung Berbagi
        </nuxt-link>
      </div>
      <button class="sm:hidden p-2 border border-black rounded-lg" @click="toggleBurger">
        <Burger class="w-6 h-6" />
      </button>
    </div>
    <div
      :class="`${expanded ? 'max-h-80 py-4' : 'max-h-0 sm:max-h-80'} transition-max-height overflow-hidden duration-500 ease-in-out nav-wrapper sm:w-4/6 md:w-1/2 w-full flex sm:flex-row flex-col items-center sm:justify-between justify-start text-green-primary`"
    >
      <nuxt-link to="/donations" class="p-2 sm:w-fit w-full sm:mt-0 mt-2 hover:text-orange-primary">Donasi</nuxt-link>
      <nuxt-link to="/gallery" class="p-2 sm:w-fit w-full sm:mt-0 mt-2 hover:text-orange-primary">Galeri</nuxt-link>
      <nuxt-link to="/about" class=" sm:w-fit p-2 w-full sm:mt-0 mt-2 hover:text-orange-primary">Tentang Kami</nuxt-link>
      <a href="https://wa.me/6287833735341" target="_blank" class="bg-green-primary px-6 py-2 rounded-lg text-white sm:w-fit w-full text-center sm:mt-0 mt-2">Hubungi Kami</a>
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
