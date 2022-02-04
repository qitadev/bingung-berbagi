<template>
  <div class="max-w-5xl mx-auto px-5 my-8">
    <nav>
      <nuxt-link to="/" class="font-bold">
        Home
      </nuxt-link>
      >
      <span>
        Tentang Kami
      </span>
    </nav>
    <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      <img src="~/assets/images/about-page/about.png" alt="About Image" class="rounded-lg">
      <div>
        <h1 class="text-2xl font-bold">Tentang Bingung Berbagi</h1>
        <p class="mt-4 leading-relaxed">
          <b>#KitaBingung KitaBerbagi</b> berlatar dari sekelompok mahasiswa yang kebingungan mengisi waktu luangnya namun ingin berbagi dan mengabdikan dirinya pada masyarakat.
        </p>
        <p class="mt-4 leading-relaxed">
          <b>#KitaBingung KitaBerbagi</b> merupakan gerakan sosial sekaligus wadah donasi untuk memberi serta berbagi kepada kaum duafa khususnya orang jalanan. Dana yang terkumpul berasal dari orang-orang baik yang secara sukarela membantu tim #KitaBingung KitaBerbagi untuk mewujudkan tujuan mulianya.
        </p>
      </div>
    </div>
    <div class="mt-8">
      <h2 class="text-2xl font-bold text-center">
        Bersama Kami
      </h2>
      <ul class="mt-8 flex flex-wrap sm:justify-center">
        <li class="flex items-center my-4">
          <img src="~/assets/images/about-page/adim.png" alt="Foto Adim" class="w-24">
          <div class="p-8">
            <h3>Adim Windi Yad'ulah</h3>
            <a href="#" class="text-sm underline">Lihat Profil</a>
          </div>
        </li>
        <li class="flex items-center my-4">
          <img src="~/assets/images/about-page/ajeng.png" alt="Foto Hersa" class="w-24">
          <div class="p-8">
            <h3>Hersa Ajeng Priska</h3>
            <a href="#" class="text-sm underline">Lihat Profil</a>
          </div>
        </li>
        <li class="flex items-center my-4">
          <img src="~/assets/images/about-page/ika.png" alt="Foto Ika" class="w-24">
          <div class="p-8">
            <h3>Ika Rahmanita</h3>
            <a href="#" class="text-sm underline">Lihat Profil</a>
          </div>
        </li>
        <li class="flex items-center my-4">
          <img src="~/assets/images/about-page/jannet.png" alt="Foto Jannet" class="w-24">
          <div class="p-8">
            <h3>Janneta Filza A.</h3>
            <a href="#" class="text-sm underline">Lihat Profil</a>
          </div>
        </li>
        <li class="flex items-center my-4">
          <img src="~/assets/images/about-page/tyo.png" alt="Foto Tyo" class="w-24">
          <div class="p-8">
            <h3>Muhammad Prasetyo</h3>
            <a href="#" class="text-sm underline">Lihat Profil</a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
}
</script>
