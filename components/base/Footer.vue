<template>
  <footer id="footer" class="w-full flex flex-col">
    <div class="grid md:grid-cols-4 gap-8 bg-green-primary text-white px-5 py-8">
      <div>
        <div class="flex items-center">
          <img src="~/assets/images/bingber-logo.png" alt="Logo Bingber" class="w-14 h-14">
          <p class="font-bold">
            Bingung Berbagi
          </p>
        </div>
      </div>
      <div>
        <h2 class="font-bold uppercase mb-5">Pintasan</h2>
        <ul class="text-sm">
          <li class="mb-5">
            <nuxt-link to="/donations" class="hover:underline">Donasi</nuxt-link>
          </li>
          <li class="mb-5">
            <nuxt-link to="/gallery" class="hover:underline">Galeri</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/about" class="hover:underline">Tentang Kami</nuxt-link>
          </li>
        </ul>
      </div>
      <div>
        <h2 class="font-bold uppercase mb-5">Informasi</h2>
        <ul class="text-sm">
          <li class="mb-5">
            <a href="mailto:kitabingungberbagi@gmail.com" class="hover:underline">kitabingungberbagi@gmail.com</a>
          </li>
          <li class="mb-5">
            <a href="tel:+6287833735341" class="hover:underline">+62 878-3373-5341</a>
          </li>
          <li>
            Yogyakarta, Indonesia
          </li>
        </ul>
      </div>
      <div>
        <h2 class="font-bold uppercase">Postingan Terbaru</h2>
        <div>
          <div data-mc-src="84c16995-eeca-450b-920c-0d3ea0e06eb4#instagram"></div>
          <script 
            src="https://cdn2.woxo.tech/a.js#61fcc2067cde330021ed8980" 
            async data-usrc>
          </script>
        </div>
      </div>
    </div>
    <div class="w-full text-white" style="background-color: #0E7E71;">
      <p class="max-w-5xl mx-auto px-5 py-4 text-center">
        Kita Bingung Kita Berbagi © {{ new Date().getFullYear() }} - Qitadev Technology
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Footer"
}
</script>
