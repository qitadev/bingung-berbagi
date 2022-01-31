<template>
  <section class="max-w-5xl flex flex-col mx-auto px-5 mt-20">
    <h1 class="text-base text-green-primary">Galeri</h1>
    <h2 class="font-bold text-2xl leading-normal">
      Berbagi Senyuman dan <br> Berbagi Kebahagiaan Bersama Kami
    </h2>
    <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
      <img v-for="image in images" :key="image.id" :src="image.imgUrl" alt="gallery image" class="w-full h-full rounded-lg object-cover">
    </section>
    <nuxt-link to="/gallery" class="bg-orange-primary px-4 py-2 rounded-lg mt-4 w-fit text-white self-center">
      Lihat lainnya
    </nuxt-link>
  </section>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Gallery",
  data () {
    return {
      images: []
    }
  },
  async fetch () {
    const images = await this.$getSheetData(1);
    this.images = images.sort((a, b) => b.id - a.id).slice(0, 6);
  },
  fetchOnServer: false
}
</script>
