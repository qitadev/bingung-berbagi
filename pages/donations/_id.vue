<template>
  <div class="max-w-5xl mx-auto px-5 my-8">
    <nav>
      <nuxt-link to="/" class="font-bold">
        Home
      </nuxt-link>
      >
      <nuxt-link to="/donations" class="font-bold">
        Donasi
      </nuxt-link>
      >
      <span>
        Batch {{ donation ? `#${donation.batch}` : '-' }}
      </span>
    </nav>
    <div v-if="donation" class="mt-8 grid md:grid-cols-2 gap-8">
      <div>
        <img :src="donation.batchImg" alt="Foto Batch" class="w-full rounded-lg border">
        <p class="inline-block mt-8 border-b-2 border-orange-primary">
          Detail
        </p>
        <h1 class="mt-4 font-bold text-xl">
          Bingung Berbagi Batch #{{ donation.batch }}
        </h1>
        <p class="mt-4 text-justify text-sm leading-loose">
          {{ donation.description }}
        </p>

        <h2 class="inline-block mt-8 border-b-2 border-orange-primary">
          Dokumentasi
        </h2>
        <ul v-if="images.length" class="mt-4 grid grid-cols-2 gap-4">
          <li v-for="image in images" :key="image.id">
            <img :src="image.imgUrl" alt="Foto Dokumentasi" class="w-full rounded-lg">
          </li>
        </ul>
        <p v-else class="mt-4">
          Belum ada dokumentasi.
        </p>
      </div>
      <div v-if="donation.isDone == 1">
        <div class="rounded-lg bg-white border p-4">
          <h2 class="text-center text-xl font-bold text-green-primary">Bingung Berbagi Batch #{{ donation.batch }}</h2>
          <p class="mt-2 text-center">Donasi sudah ditutup</p>
          <img src="~/assets/images/donation-page/closed.png" alt="Closed" class="w-64 m-auto">
        </div>
      </div>
      <div v-else>
        <h2 class="text-lg font-bold">
          Donasi Akan Ditutup Dalam
        </h2>
        <div class="mt-4 grid grid-cols-4 gap-4">
          <div>
            <div class="text-4xl rounded-lg bg-white border p-4 text-center">
              {{ countdown.days }}
            </div>
            <p class="text-center mt-2">
              HARI
            </p>
          </div>
          <div>
            <div class="text-4xl rounded-lg bg-white border p-4 text-center">
              {{ countdown.hours }}
            </div>
            <p class="text-center mt-2">
              JAM
            </p>
          </div>
          <div>
            <div class="text-4xl rounded-lg bg-white border p-4 text-center">
              {{ countdown.minutes }}
            </div>
            <p class="text-center mt-2">
              MENIT
            </p>
          </div>
          <div>
            <div class="text-4xl rounded-lg bg-white border p-4 text-center">
              {{ countdown.seconds }}
            </div>
            <p class="text-center mt-2">
              DETIK
            </p>
          </div>
        </div>
        <div class="mt-8 rounded-lg border bg-white p-6">
          <h2 class="text-lg mb-2 font-bold">
            Bingung Berbagi Batch #{{ donation.batch }}
          </h2>
          <span class="text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {{ donation.location  }}
          </span>
          <ul class="mt-8">
            <li>
               <div class="flex items-center">
                 <img src="~/assets/images/payment/mandiri.png" alt="Mandiri">
                 <span class="ml-4 text-sm">
                   Bank Mandiri a.n. Janneta Filza A
                 </span>
               </div>
               <div class="mt-2 border mandiri-text bg-primary-bg-color px-4 py-2 rounded-lg flex justify-between items-center">
                 <input
                   type="number"
                   class="bg-primary-bg-color p-0 active:border-0 focus:border-0"
                   value="1370019442942" disabled>
                 <button
                   id="mandiriButton"
                   class="ml-2 text-xs px-2 py-1 rounded-lg border border-orange-primary text-orange-primary"
                   @click="copyText">
                   Salin
                 </button>
               </div>
            </li>
            <li class="mt-8">
               <div class="flex items-center">
                 <img src="~/assets/images/payment/gopay.png" alt="Gopay">
                 <span class="ml-4 text-sm">
                   Gopay a.n. Janneta Filza A
                 </span>
               </div>
               <div class="mt-2 border bg-primary-bg-color px-4 py-2 rounded-lg flex justify-between items-center">
                 <input
                   type="number"
                   class="bg-primary-bg-color p-0 active:border-0 focus:border-0"
                   value="087833735341" disabled>
                 <button
                   id="gopayButton"
                   class="ml-2 text-xs px-2 py-1 rounded-lg border border-orange-primary text-orange-primary"
                   @click="copyText">
                   Salin
                 </button>
               </div>
            </li>
            <li class="mt-8">
               <div class="flex items-center">
                 <img src="~/assets/images/payment/shopeepay.png" alt="Shopeepay">
                 <span class="ml-4 text-sm">
                   Shopeepay a.n. Janneta Filza A
                 </span>
               </div>
               <div class="mt-2 border bg-primary-bg-color px-4 py-2 rounded-lg flex justify-between items-center">
                 <input
                   type="number"
                   class="bg-primary-bg-color p-0 active:border-0 focus:border-0"
                   value="085740993396" disabled>
                 <button
                   id="shopeeButton"
                   class="ml-2 text-xs px-2 py-1 rounded-lg border border-orange-primary text-orange-primary"
                   @click="copyText"
                 >
                   Salin
                 </button>
               </div>
            </li>
          </ul>
          <hr class="my-8">
          <blockquote class="rounded-lg border bg-primary-bg-color p-4 flex">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
            </svg>
            <p class="ml-4 flex-1 text-sm">
              Gunakan kode unik "00{{ donation.batch }}" <b>contoh: Rp {{ formatNumber(100000 + +donation.batch) }}</b> serta deskripsi transfer <b>"Bingung Berbagi #{{ donation.batch }}"</b> agar kami mudah menemukan niat baik kamu ya!
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      donation: null,
      images: [],
      countdown: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      }
    }
  },
  async fetch() {
    const donations = await this.$getSheetData(0);
    this.donation = donations.find(donation => donation.id === this.$route.params.id);
    const images = await this.$getSheetData(1);
    this.images = images.filter(image => image.batch === this.donation.batch);
  },
  fetchOnServer: false,
  mounted () {
    setInterval(() => {
      const date = this.$moment(this.donation.date, 'DD-MM-YYYY').add(1, 'days');
      this.countdown.days = date.diff(this.$moment(), 'days');
      this.countdown.hours = date.diff(this.$moment(), 'hours') % 24;
      this.countdown.minutes = date.diff(this.$moment(), 'minutes') % 60;
      this.countdown.seconds = date.diff(this.$moment(), 'seconds') % 60;
    }, 1000);
  },
  methods: {
    formatNumber(number) {
      return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
      }).format(number);
    },
    copyText(event) {
      const inputEl = event.target.parentElement.firstChild;
      event.target.innerText = "Tersalin";

      inputEl.select();
      navigator.clipboard.writeText(inputEl.value);

      setTimeout(() => {
        event.target.innerText = "Salin";
      }, 2000)
    }
  },
}
</script>
