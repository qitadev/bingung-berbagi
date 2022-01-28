<template>
  <section class="w-full bg-green-primary my-20">
    <article class="max-w-5xl px-5 mx-auto py-20 grid md:grid-cols-2 gap-8">
      <section>
        <h1 class="text-3xl font-bold text-white">
          Segera Donasi Sekarang
        </h1>
        <p class="text-white text-lg">
          Bingung Berbagi {{ batch ? batch.batch_name : 'Next Batch' }}
        </p>
        <NuxtLink to="/" class="block px-4 py-2 mt-2 w-44 rounded-md bg-orange-primary text-white text-center">Yuk Donasi</NuxtLink>
      </section>
      <section>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <article class="item flex flex-col justify-center">
            <h1 class="font-semibold text-5xl text-green-primary text-center rounded-xl bg-white p-4">
              10
            </h1>
            <p class="font-semibold text-lg text-white text-center mt-2">
              HARI
            </p>
          </article>
          <article class="item flex flex-col justify-center">
            <h1 class="font-semibold text-5xl text-green-primary text-center rounded-xl  bg-white p-4">
              06
            </h1>
            <p class="font-semibold text-lg text-white text-center mt-2">
              JAM
            </p>
          </article>
          <article class="item flex flex-col justify-center">
            <h1 class="font-semibold text-5xl text-green-primary text-center rounded-xl  bg-white p-4">
              28
            </h1>
            <p class="font-semibold text-lg text-white text-center mt-2">
              MENIT
            </p>
          </article>
          <article class="item flex flex-col justify-center">
            <h1 class="font-semibold text-5xl text-green-primary text-center rounded-xl  bg-white p-4">
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

