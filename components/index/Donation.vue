<template>
  <section class="max-w-5xl flex flex-col mx-auto p-4">
    <h1 class="text-base text-green-primary">Program Donasi</h1>
    <h2 class="font-bold text-2xl leading-normal">
      Berbagi Senyuman dan <br> Berbagi Kebahagiaan Bersama Kami
    </h2>
    <section class="w-full flex justify-between py-8">
      <article class="flex flex-col">
        <section class="w-full h-44">
          <img src="~/assets/images/index-page/batch-1.png" alt="batch 1" class="w-full h-auto overflow-y-hidden rounded-t-lg">
        </section>
        <section class="flex-1 rounded-b-lg p-4 bg-white">
          <div class="flex flex-row items-center justify-between">
            <h1 class="">
              Bingung Berbagi
            </h1>
            <p class="py-1 px-2 mt-2 sm:mt-0 bg-gray-100 rounded-lg text-gray-500" style="font-size: 12px">Batch 8</p>
          </div>
          <div class="flex items-center mt-2">
            <img src="~/assets/icons/location.svg" alt="Location logo" class="w-4">
            <p class="text-gray-500 ml-4">Yogyakarta</p>
          </div>
          <button class="w-full rounded-lg bg-orange-primary mt-4 py-1 text-white">Donasi Sekarang</button>
        </section>
      </article>
    </section>
  </section>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Donation"
}
</script>

<style scoped>

</style>
