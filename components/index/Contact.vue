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
    <form name="collaborationForm" class="w-full sm:w-2/3 flex flex-col bg-white px-2 py-6 rounded-lg border mt-6 sm:mt-0 shadow" @submit.prevent="submitForm">
      <div v-if="isSuccess" class="mx-4 mb-4 p-4 text-sm text-green-700 bg-green-100 rounded-lg" role="alert">
        Data berhasil disimpan.
      </div>
      <div v-if="isError" class="mx-4 p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg" role="alert">
        Data gagal disimpan. Silakan coba lagi.
      </div>
      <section class="form-group flex flex-col sm:flex-row sm:justify-between w-full">
        <article id="field_name" class="flex flex-col justify-start w-full sm:w-1/2 px-4 sm:px-2 md:px-4">
          <label for="name" class="text-sm text-gray-500">Nama Lengkap<span class="text-red-500">*</span></label>
          <input id="name" v-model="name" name="name" type="text" class="bg-primary-bg-color focus:outline-none focus:ring focus:ring-green-600 transition px-4 py-2 rounded-lg border mt-2" placeholder="John Doe" required>
        </article>
        <article id="field_email" class="flex flex-col justify-start w-full sm:w-1/2 px-4 sm:px-2 md:px-4 mt-4 sm:mt-0">
          <label for="email" class="text-sm text-gray-500">Email<span class="text-red-500">*</span></label>
          <input id="email" v-model="email" name="email" type="email" class="bg-primary-bg-color focus:outline-none focus:ring focus:ring-green-600 transition px-4 py-2 rounded-lg border mt-2" placeholder="johndoe@mail.com" required>
        </article>
      </section>
      <section class="form-group flex flex-col sm:flex-row sm:justify-between w-full mt-4">
        <article id="field_phone" class="flex flex-col justify-start w-full sm:w-1/2 px-4 sm:px-2 md:px-4">
          <label for="phoneNumber" class="text-sm text-gray-500">Nomor Telpon<span class="text-red-500">*</span></label>
          <input id="phoneNumber" v-model="phoneNumber" name="phoneNumber" type="text" class="bg-primary-bg-color focus:outline-none focus:ring focus:ring-green-600 transition px-4 py-2 rounded-lg border mt-2" placeholder="0812-XXXX-XXXX" required>
        </article>
        <article id="field-domisili" class="flex flex-col justify-start w-full sm:w-1/2 px-4 sm:px-2 md:px-4 mt-4 sm:mt-0">
          <label for="domicile" class="text-sm text-gray-500" >Domisili<span class="text-red-500">*</span></label>
          <input id="domicile" v-model="domicile" name="domicile" type="text" class="bg-primary-bg-color focus:outline-none focus:ring focus:ring-green-600 transition px-4 py-2 rounded-lg border mt-2" placeholder="Kaliurang, Sleman, DIY" required>
        </article>
      </section>
      <article id="field_note" class="flex flex-col justify-start w-full p-4 sm:px-2 md:px-4">
        <label for="notes" class="text-sm text-gray-500">Catatan<span class="text-red-500">*</span></label>
        <textarea id="notes" v-model="notes" rows="4" name="notes" class="bg-primary-bg-color focus:outline-none focus:ring focus:ring-green-600 transition p-4 rounded-lg border mt-2" placeholder="contoh: ingin melakukan kerjasama" required></textarea>
      </article>
      <article id="field_action" class="flex flex-col justify-start w-full p-4 sm:px-2 md:px-4">
        <p class="text-gray-500" style="font-size: 12px">
          <span>
            <img src="~/assets/icons/information.svg" alt="info" class="inline mr-2">
          </span>
          Tuliskan pesan & keperluan dalam kolom catatan
        </p>
        <button :class="`w-full py-2 mt-4 rounded-lg bg-orange-primary text-white focus:ring focus:ring-yellow-400 focus:outline-none ${isLoading ? 'opacity-50' : ''}`" :disabled="isLoading">
          <svg v-if="isLoading" class="animate-spin mr-2 h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span v-else>
            Kirim
          </span>
        </button>
      </article>
    </form>
  </section>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Contact",
  data () {
    return {
      name: '',
      email: '',
      phoneNumber: '',
      domicile: '',
      notes: '',
      isError: false,
      isSuccess: false,
      isLoading: false,
    }
  },
  methods: {
    submitForm () {
      if (this.name && this.email && this.phoneNumber && this.domicile && this.notes) {
        this.isLoading = true;
        const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxlh1uhR2XcpRcdqBkAOMfszuhodZQ9IEtYSVHeeVMVZxC_6vhXpfqJSfY-hSEEqE-q/exec';
        const form = document.forms.collaborationForm
        fetch(SCRIPT_URL, { method: 'POST', body: new FormData(form)})
          .then(_ => {
            this.isLoading = false;
            this.name = '';
            this.email = '';
            this.phoneNumber = '';
            this.domicile = '';
            this.notes = '';
            this.isError = false;
            this.isSuccess = true;
          })
          .catch(_ => {
            this.errorMessage = 'Terdapat kesalahan! Ulangi lagi nanti'
          })
          .finally(_ => {
            this.isLoading = false;
          })
      }
    }
  }
}
</script>

<style scoped>

</style>
