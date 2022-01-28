<template>
  <section class="max-w-5xl flex md:flex-row flex-col items-center mx-auto px-5 py-8">
    <article class="content-wrapper md:w-1/2 w-full flex flex-col justify-start">
      <p class="text-green-primary">#KitaBingungKitaBerbagi</p>
      <h1 class="font-bold text-opacity-75 text-5xl break-normal" style="line-height: 1.3">
        Permudah <br> Aktivitas <br> Berbagimu <br> Bersama Kami
      </h1>
      <p class="text-gray-500 my-4">
        Mereka yang paling bahagia adalah mereka yang melakukan paling banyak untuk orang lain" - Booker T. Washington
      </p>
      <div class="action-wrapper flex flex-col justify-start sm:flex-row items-center my-2">
        <NuxtLink to="/" class="px-4 py-2 w-full sm:w-fit rounded-md bg-orange-primary text-white text-center hover:bg-orange-700 focus:bg-orange-700">
          Yuk Donasi
        </NuxtLink>
        <NuxtLink to="/" class="px-4 py-2 w-full sm:w-fit mt-4 sm:mt-0 sm:ml-6 rounded-md border border-orange-primary text-orange-primary text-center hover:bg-orange-primary hover:text-white">
          Dokumentasi Berbagi
        </NuxtLink>
      </div>
    </article>
    <article class="image-wrapper md:w-1/2 w-full p-4">
      <img src="~/assets/images/index-page/hero-illustration.png" class="w-full" alt="Illustration image">
    </article>
  </section>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Hero"
}
</script>

<style scoped>

</style>
