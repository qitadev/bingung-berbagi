<template>
  <section class="max-w-5xl mx-auto flex flex-col sm:flex-row p-4 sm:items-start my-4">
    <article class="w-full sm:w-1/3 flex flex-col justify-start">
      <h1 class="text-green-primary">
        Kolaborasi
      </h1>
      <h1 class="text-2xl font-bold">
        Yuk bersinergi saling bahu <br> membahu untuk berbagi
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
        <textarea id="note" rows="4" class="bg-white p-4 rounded-lg border border-gray-500 mt-2"></textarea>
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
