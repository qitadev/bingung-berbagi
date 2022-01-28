<template>
  <section class="max-w-5xl mx-auto flex flex-col sm:flex-row px-5 sm:items-start my-20">
    <article class="w-full sm:w-1/3 flex flex-col justify-start">
      <h1 class="text-green-primary">
        Kolaborasi
      </h1>
      <h1 class="text-2xl font-bold sm:mr-2">
        Yuk bersinergi saling bahu <br class="sm:hidden"> membahu untuk berbagi
      </h1>
    </article>
    <form action="#" class="w-full sm:w-2/3 flex flex-col bg-white px-2 py-6 rounded-lg border border-gray-500 mt-6 sm:mt-0">
      <section class="form-group flex flex-col sm:flex-row sm:justify-between w-full">
        <article id="field_name" class="flex flex-col justify-start w-full sm:w-1/2 px-4 sm:px-2 md:px-4">
          <label for="name" class="text-sm text-gray-500">Nama Lengkap<span class="text-red-500">*</span></label>
          <input id="name" type="text" class="bg-white px-4 py-2 rounded-lg border border-gray-500 mt-2" placeholder="John Doe">
        </article>
        <article id="field_email" class="flex flex-col justify-start w-full sm:w-1/2 px-4 sm:px-2 md:px-4 mt-4 sm:mt-0">
          <label for="email" class="text-sm text-gray-500">Email<span class="text-red-500">*</span></label>
          <input id="email" type="text" class="bg-white px-4 py-2 rounded-lg border border-gray-500 mt-2" placeholder="johndoe@mail.com">
        </article>
      </section>
      <section class="form-group flex flex-col sm:flex-row sm:justify-between w-full mt-4">
        <article id="field_phone" class="flex flex-col justify-start w-full sm:w-1/2 px-4 sm:px-2 md:px-4">
          <label for="phone" class="text-sm text-gray-500">Nomor Telpon<span class="text-red-500">*</span></label>
          <input id="phone" type="text" class="bg-white px-4 py-2 rounded-lg border border-gray-500 mt-2" placeholder="0812-XXXX-XXXX">
        </article>
        <article id="field-domisili" class="flex flex-col justify-start w-full sm:w-1/2 px-4 sm:px-2 md:px-4 mt-4 sm:mt-0">
          <label for="domisili" class="text-sm text-gray-500" >Domisili<span class="text-red-500">*</span></label>
          <input id="domisili" type="text" class="bg-white px-4 py-2 rounded-lg border border-gray-500 mt-2" placeholder="Kaliurang, Sleman, DIY">
        </article>
      </section>
      <article id="field_note" class="flex flex-col justify-start w-full p-4 sm:px-2 md:px-4">
        <label for="note" class="text-sm text-gray-500">Catatan<span class="text-red-500">*</span></label>
        <textarea id="note" rows="4" class="bg-white p-4 rounded-lg border border-gray-500 mt-2" placeholder="contoh: ingin melakukan kerjasama"></textarea>
      </article>
      <article id="field_action" class="flex flex-col justify-start w-full p-4 sm:px-2 md:px-4">
        <p class="text-gray-500" style="font-size: 12px">
          <span>
            <img src="~/assets/icons/information.svg" alt="info" class="inline mr-2">
          </span>
          Tuliskan pesan & keperluan dalam kolom catatan
        </p>
        <button class="w-full py-2 mt-4 rounded-lg bg-orange-primary text-white">
          Kirim
        </button>
      </article>
    </form>
  </section>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Contact"
}
</script>

<style scoped>

</style>
