<template>
  <footer id="footer" class="w-full flex flex-col">
    <div class="grid md:grid-cols-4 gap-8 bg-green-primary text-white p-5">
      <div>
        <div class="flex items-center">
          <img src="~/assets/images/bingber-logo.png" alt="Logo Bingber" class="w-14 h-14">
          <p class="font-bold">
            Kita Bingung Kita Berbagi
          </p>
        </div>
      </div>
      <div>
        <h2 class="font-bold uppercase mb-2">Pintasan</h2>
        <ul class="text-sm">
          <li class="mb-2">
            <nuxt-link to="/donations" class="hover:underline">Donasi</nuxt-link>
          </li>
          <li class="mb-2">
            <nuxt-link to="/gallery" class="hover:underline">Galeri</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/about" class="hover:underline">Tentang Kami</nuxt-link>
          </li>
        </ul>
      </div>
      <div>
        <h2 class="font-bold uppercase mb-2">Informasi</h2>
        <ul class="text-sm">
          <li class="mb-2">
            <a href="mailto:kitabingungberbagi@gmail.com" class="hover:underline">kitabingungberbagi@gmail.com</a>
          </li>
          <li class="mb-2">
            <a href="tel:+6287833735341" class="hover:underline">+62 878-3373-5341</a>
          </li>
          <li>
            Yogyakarta, Indonesia
          </li>
        </ul>
      </div>
      <div>
        <h2 class="font-bold uppercase -mb-[18px]">Postingan Terbaru</h2>
        <div class="padding-top: -20px;">
          <div
            loading="lazy"
            data-mc-src="8110cafd-569d-44a6-9a70-db7dd00871e1#instagram" />
          <script
            src="https://cdn2.woxo.tech/a.js#61f9205c420c7d0021f3b024"
            async data-usrc />
        </div>
      </div>
    </div>
    <div class="w-full text-white" style="background-color: #0E7E71;">
      <p class="max-w-5xl mx-auto px-4 py-2 text-center">
        Bingung Berbagi © {{ new Date().getFullYear() }}
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
