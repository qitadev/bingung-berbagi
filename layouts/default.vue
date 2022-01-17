<template>
  <div class="bg-primary-bg-color font-Poppins">
    <HeaderApp />
    <main>
      <Nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
import HeaderApp from "~/components/base/HeaderApp";
import Footer from "~/components/base/Footer";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "default",
  components: {
    HeaderApp,
    Footer
  }
}
</script>

