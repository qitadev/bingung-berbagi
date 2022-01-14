<template>
  <div class="w-full bg-index-countdown bg-cover bg-center my-8">
    <div class="max-w-5xl px-6 mx-auto py-12 flex sm:flex-row flex-col items-center">
      <div class="text-wrapper flex flex-col justify-start sm:w-2/5 w-full">
        <h1 class="text-2xl font-bold text-white">
          Countdown Open Donation
        </h1>
        <p class="text-white text-lg">
          Bingung Berbagi {{ batch ? batch.batch_name : 'Next Batch' }}
        </p>
        <NuxtLink to="/" class="px-4 py-2 mt-2 w-44 rounded-full bg-orange-primary text-white text-center">Yuk Donasi</NuxtLink>
      </div>
      <div class="countdown-wrapper w-full sm:w-3/5 flex flex-row sm:justify-between items-center p-2 sm:p-4 mt-2">
        <div class="item flex flex-col justify-center">
          <h1 class="font-semibold text-7xl text-white text-center rounded-xl bg-white/50 p-4">
            10
          </h1>
          <p class="font-light text-lg text-white text-center mt-2">
            HARI
          </p>
        </div>
        <div class="item flex flex-col justify-center">
          <h1 class="font-semibold text-7xl text-white text-center rounded-xl bg-white/50 p-4">
            10
          </h1>
          <p class="font-light text-lg text-white text-center mt-2">
            HARI
          </p>
        </div>
        <div class="item flex flex-col justify-center">
          <h1 class="font-semibold text-7xl text-white text-center rounded-xl bg-white/50 p-4">
            10
          </h1>
          <p class="font-light text-lg text-white text-center mt-2">
            HARI
          </p>
        </div>
        <div class="item flex flex-col justify-center">
          <h1 class="font-semibold text-7xl text-white text-center rounded-xl bg-white/50 p-4">
            10
          </h1>
          <p class="font-light text-lg text-white text-center mt-2">
            HARI
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Jumbotron",
  props: {
    batch: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

