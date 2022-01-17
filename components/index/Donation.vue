<template>
  <section class="max-w-5xl flex flex-col mx-auto p-4">
    <h1 class="text-base text-green-primary">Program Donasi</h1>
    <h2 class="font-bold text-2xl leading-normal">
      Berbagi Senyuman dan <br> Berbagi Kebahagiaan Bersama Kami
    </h2>
    <section v-if="sortedDescBatch" class="w-full py-8">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="batch in sortedDescBatch" :key="batch.id">
          <article class="flex flex-col">
            <section class="w-full h-44">
              <img :src="batch.batch_img" alt="batch 1" class="w-full overflow-y-hidden rounded-lg">
            </section>
            <section class="flex-1 rounded-b-lg p-4 bg-white">
              <div class="flex flex-row items-center justify-between">
                <h1 style="font-size: 14px">
                  Bingung Berbagi
                </h1>
                <p class="py-1 px-2 bg-gray-100 rounded-lg text-gray-500" style="font-size: 12px">{{ batch.batch_name }}</p>
              </div>
              <div class="flex items-center mt-2">
                <img src="~/assets/icons/location.svg" alt="Location logo" class="w-4 self-center">
                <p class="text-gray-500 ml-2" style="font-size: 14px">{{ batch.location }}</p>
              </div>
              <button v-if="batch.is_done" class="w-full rounded-lg border border-orange-primary text-orange-primary mt-4 py-1" style="font-size: 14px">
                Lihat laporan
              </button>
              <button v-else class="w-full rounded-lg bg-orange-primary mt-4 py-1 text-white" style="font-size: 14px">Donasi Sekarang</button>
            </section>
          </article>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </section>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Donation",
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    batches: {
      type: Array,
      default: () => ([]),
    }
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          type: 'progressbar'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        freeMode: true,
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        breakpoints: {
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          425: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          250: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        }
      }
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
