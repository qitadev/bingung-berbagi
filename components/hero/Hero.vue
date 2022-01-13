<template>
  <div class="max-w-5xl flex md:flex-row items-center mx-auto px-4 py-12">
    <div class="content-wrapper md:w-1/2 w-full flex flex-col justify-start">
      <p class="text-green-primary">#KitaBingungKitaBerbagi</p>
      <h1 class="font-bold text-opacity-75 text-5xl my-4 break-normal leading-relaxed">
        Permudah <br> Aktivitas <br> Berbagimu <br> Bersama Kami
      </h1>
      <p class="text-gray-500 my-4">
        Mereka yang paling bahagia adalah mereka yang melakukan paling banyak untuk orang lain" - Booker T. Washington
      </p>
      <div class="action-wrapper flex md:flex-row items-center my-4">
        <NuxtLink to="/" class="px-4 py-2 rounded-md bg-orange-primary text-white">Yuk Donasi</NuxtLink>
        <NuxtLink to="/" class="px-4 py-2 md:ml-6 rounded-md border border-orange-primary text-orange-primary">Dokumentasi Berbagi</NuxtLink>
      </div>
    </div>
    <div class="image-wrapper md:w-1/2 w-full p-4">
      <img src="~/assets/images/index-page/hero-illustration.png" class="w-full" alt="Illustration image">
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Hero"
}
</script>

<style scoped>

</style>
