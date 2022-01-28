<template>
  <section id="counter" class="max-w-5xl mx-auto flex md:flex-row flex-col items-center justify-between p-6 sm:p-4">
    <article class="item-wrapper bg-white rounded-xl flex flex-row items-center w-full p-4 shadow-lg">
      <img src="~/assets/images/index-page/user-icon.png" alt="user icon" class="w-16">
      <div class="desc-wrap flex flex-col justify-start ml-4">
        <h1 class="text-3xl font-bold">
          50+
        </h1>
        <p class="text-gray-500 font-light text-sm">Donatur yang bergabung</p>
      </div>
    </article>
    <article class="item-wrapper bg-white rounded-xl flex flex-row items-center w-full p-4 shadow-lg my-4 sm:my-0 sm:mx-8">
      <img src="~/assets/images/index-page/batch-icon.png" alt="user icon" class="w-16">
      <div class="desc-wrap flex flex-col justify-start ml-4">
        <h1 class="text-3xl font-bold">
          7+
        </h1>
        <p class="text-gray-500 font-light text-sm">Batch terbagi</p>
      </div>
    </article>
    <article class="item-wrapper bg-white rounded-xl flex flex-row items-center w-full p-4 shadow-lg">
      <img src="~/assets/images/index-page/money-icon.png" alt="user icon" class="w-16">
      <div class="desc-wrap flex flex-col justify-start ml-4">
        <h1 class="text-3xl font-bold">
          Rp 5jt+
        </h1>
        <p class="text-gray-500 font-light text-sm">Donasi telah dibagikan</p>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Counter.vue"
}
</script>

<style scoped>

</style>
