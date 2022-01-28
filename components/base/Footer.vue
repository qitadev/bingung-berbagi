<template>
  <footer id="footer" class="w-full flex flex-col">
    <article class="w-full bg-green-primary text-white">
      <section class="w-full sm:max-w-5xl mx-auto flex flex-col justify-between sm:flex-row py-8 px-4">
        <section id="deskripsi" class="w-full sm:w-1/4 flex flex-col justify-start">
          <img src="~/assets/images/bingber-logo.png" alt="logo bingber" class="w-16 h-16">
          <p class="mt-4" style="font-size: 14px">
            Bingung berbagi adalah gerakan sosial sekaligus wadah donasi untuk berbagi kepada kaum duafa
          </p>
        </section>
        <section class="wrapper w-full sm:w-2/5 flex flex-col xs:flex-row justify-between items-start mt-6 xs:mt-0">
          <section id="pintasan" class="w-full flex flex-col justify-start">
            <h1 class="font-semibold" style="font-size: 16px">Pintasan</h1>
            <nuxt-link to="/" class="mt-6" style="font-size: 14px">
              Donasi
            </nuxt-link>
            <nuxt-link to="/" class="mt-2" style="font-size: 14px">
              Galeri
            </nuxt-link>
            <nuxt-link to="/" class="mt-2" style="font-size: 14px">
              Tentang Kami
            </nuxt-link>
          </section>
          <section id="informasi" class="w-full flex flex-col justify-start sm:ml-4 md:ml-0">
            <h1 class="font-semibold" style="font-size: 16px">Informasi</h1>
            <p class="mt-6 break-words" style="font-size: 14px">
              kitabingungberbagi@gmail.com
            </p>
            <p class="mt-2" style="font-size: 14px">
              +62 878-3373-5341
            </p>
            <p class="mt-2" style="font-size: 14px">
              Yogyakarta
            </p>
          </section>
        </section>
        <section id="ig-feeds" class="w-full sm:w-1/4 flex flex-col justify-start mt-6 sm:mt-0">
          <h1 class="font-semibold" style="font-size: 16px">Instagram Feeds</h1>

        </section>
      </section>
    </article>
    <article class="w-full bg-green-900 text-white">
      <p class="max-w-5xl mx-auto px-4 py-2 text-center">
        Bingung Berbagi © {{ new Date().getFullYear() }}
      </p>
    </article>
  </footer>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Footer"
}
</script>

<style scoped>

</style>
