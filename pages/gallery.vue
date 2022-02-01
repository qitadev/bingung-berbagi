<template>
  <div class="max-w-5xl mx-auto px-5 my-8">
    <nav>
      <nuxt-link to="/" class="font-bold">
        Home
      </nuxt-link>
      >
      <span>
        Galeri
      </span>
    </nav>
    <template v-if="isFetching">
      <ul class="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
        <li v-for="i in 9" :key="i" class="relative pt-[56.25%] bg-gray-300 animate-pulse rounded-lg" />
      </ul>
    </template>
    <template v-for="batch in batches" v-else>
      <h2 :key="batch" class="mt-8 font-bold text-2xl">
        Bingung Berbagi Batch #{{batch}}
      </h2>
      <ul :key="`A${batch}`" class="grid sm-grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        <li v-for="photo in batchPhotos[batch]" :key="photo.id" class="w-full relative pt-[56.25%]">
          <img :src="photo.imgUrl" :alt="`Foto batch #${batch}`" class="absolute inset-0 rounded-lg w-full h-full object-cover">
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
export default {
  name: 'GalleryPage',
  data () {
    return {
      batchPhotos: [],
      batches: [],
      isFetching: true
    }
  },
  async fetch() {
    const photos = await this.$getSheetData(1);
    this.batchPhotos = photos
      .reduce((r, a) => {
        r[a.batch] = [...r[a.batch] || [], a];
        return r;
      }, {})
    this.batches = Object.keys(this.batchPhotos)
    this.batches = this.batches.sort((a, b) => b - a)
    this.isFetching = false
  },
  fetchOnServer: false
}
</script>
