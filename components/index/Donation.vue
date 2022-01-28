<template>
  <section class="max-w-5xl flex flex-col mx-auto p-4">
    <h1 class="text-base text-green-primary">Program Donasi</h1>
    <h2 class="font-bold text-2xl leading-normal">
      Berbagi Senyuman dan <br> Berbagi Kebahagiaan Bersama Kami
    </h2>
    <section v-if="sortedDescBatch" class="w-full py-8 overflow-auto whitespace-nowrap">
      <div v-for="batch in sortedDescBatch" :key="batch.id" class="inline-block mr-4">
        <article class="flex flex-col border rounded-lg">
          <section class="w-full h-44">
            <img :src="batch.batch_img" alt="batch 1" class="w-full overflow-y-hidden rounded-lg">
          </section>
          <section class="flex-1 rounded-b-lg p-4 bg-white">
            <div class="flex flex-row items-center justify-between">
              <h1>
                Bingung Berbagi
              </h1>
              <p class="py-1 px-2 bg-gray-100 rounded-lg text-gray-500" style="font-size: 12px">{{ batch.batch_name }}</p>
            </div>
            <div class="flex items-center mt-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p class="text-gray-500 ml-2 text-sm">{{ batch.location }}</p>
            </div>
            <NuxtLink v-if="batch.is_done" :to="`/donations/${batch.id}`" class="w-full rounded-lg border border-orange-primary text-orange-primary mt-4 py-1 block text-center">
              Lihat laporan
            </NuxtLink>
            <NuxtLink v-else :to="`/donations/${batch.id}`" class="w-full rounded-lg bg-orange-primary mt-4 py-1 text-white block text-center">
              Donasi Sekarang
            </NuxtLink>
          </section>
        </article>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Donation",
  props: {
    batches: {
      type: Array,
      default: () => ([]),
    }
  },
  data() {
    return {
      //
    }
  },
  computed: {
    sortedDescBatch() {
      return (this.batches || []).sort((a,b) => b.id - a.id);
    }
  }
}
</script>

<style scoped>

</style>
