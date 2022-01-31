<template>
  <section class="w-full bg-green-primary my-20">
    <article class="max-w-5xl px-5 mx-auto py-20 flex">
      <section class="flex-1 mr-4">
        <template v-if="batch">
          <h2 class="text-3xl font-bold text-white">
            Segera Donasi Sekarang
          </h2>
          <p class="text-white mt-2">
            Bingung Berbagi #{{batch.batch}}
          </p>
          <NuxtLink :to="`/donations/${batch.id}`" class="block mt-4 px-4 py-2 w-44 rounded-md bg-orange-primary text-white text-center">Yuk Donasi</NuxtLink>
        </template>
        <template v-else>
          <h2 class="text-3xl font-bold text-white">
            Belum Ada Batch Donasi Berikutnya
          </h2>
          <p class="text-white mt-2">
            Pantengin Terus Informasi Donasi Berikutnya.
          </p>
        </template>
      </section>
      <section v-if="batch" class="flex-1">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <article class="item flex flex-col justify-center">
            <h1 class="font-semibold text-5xl text-green-primary text-center rounded-xl bg-white p-4">
              {{ countdown.days }}
            </h1>
            <p class="font-semibold text-lg text-white text-center mt-2">
              HARI
            </p>
          </article>
          <article class="item flex flex-col justify-center">
            <h1 class="font-semibold text-5xl text-green-primary text-center rounded-xl  bg-white p-4">
              {{ countdown.hours }}
            </h1>
            <p class="font-semibold text-lg text-white text-center mt-2">
              JAM
            </p>
          </article>
          <article class="item flex flex-col justify-center">
            <h1 class="font-semibold text-5xl text-green-primary text-center rounded-xl  bg-white p-4">
              {{ countdown.minutes }}
            </h1>
            <p class="font-semibold text-lg text-white text-center mt-2">
              MENIT
            </p>
          </article>
          <article class="item flex flex-col justify-center">
            <h1 class="font-semibold text-5xl text-green-primary text-center rounded-xl  bg-white p-4">
              {{ countdown.seconds }}
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
      default: () => null
    }
  },
  data() {
    return {
      countdown: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      }
    }
  },
  mounted () {
    setInterval(() => {
      if (this.batch) {
        const date = this.$moment(this.batch.date, 'DD-MM-YYYY').add(1, 'days');
        this.countdown.days = date.diff(this.$moment(), 'days');
        this.countdown.hours = date.diff(this.$moment(), 'hours') % 24;
        this.countdown.minutes = date.diff(this.$moment(), 'minutes') % 60;
        this.countdown.seconds = date.diff(this.$moment(), 'seconds') % 60;
      }
    }, 1000);
  },
}
</script>

