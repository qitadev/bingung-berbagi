<template>
  <section class="w-full bg-index-countdown bg-no-repeat bg-cover bg-center my-8">
    <article class="max-w-5xl px-6 mx-auto py-12 flex sm:flex-row flex-col items-center">
      <section class="text-wrapper flex flex-col justify-start sm:w-2/5 w-full">
        <h1 class="text-2xl font-bold text-white">
          Countdown Open Donation
        </h1>
        <p class="text-white text-lg">
          Bingung Berbagi {{ batch ? batch.batch_name : 'Next Batch' }}
        </p>
        <NuxtLink to="/" class="px-4 py-2 mt-2 w-44 rounded-full bg-orange-primary text-white text-center">Yuk Donasi</NuxtLink>
      </section>
      <section class="countdown-wrapper w-full sm:w-3/5 flex flex-col lg:flex-row sm:justify-between items-center p-2 sm:p-4 mt-2">
        <div class="flex flex-row w-full justify-evenly mt-4 sm:mt-0">
          <article class="item flex flex-col justify-center">
            <h1 class="font-semibold text-7xl text-white text-center rounded-xl bg-green-primary/50 p-4">
              10
            </h1>
            <p class="font-semibold text-lg text-white text-center mt-2">
              HARI
            </p>
          </article>
          <article class="item flex flex-col justify-center">
            <h1 class="font-semibold text-7xl text-white text-center rounded-xl  bg-green-primary/50 p-4">
              06
            </h1>
            <p class="font-semibold text-lg text-white text-center mt-2">
              JAM
            </p>
          </article>
        </div>
        <div class="flex flex-row w-full justify-evenly mt-4 sm:mt-0">
          <article class="item flex flex-col justify-center">
            <h1 class="font-semibold text-7xl text-white text-center rounded-xl  bg-green-primary/50 p-4">
              28
            </h1>
            <p class="font-semibold text-lg text-white text-center mt-2">
              MENIT
            </p>
          </article>
          <article class="item flex flex-col justify-center">
            <h1 class="font-semibold text-7xl text-white text-center rounded-xl  bg-green-primary/50 p-4">
              59
            </h1>
            <p class="font-semibold text-lg text-white text-center mt-2">
              DETIK
            </p>
          </article>
        </div>
      </section>
    </article>
  </section>
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

