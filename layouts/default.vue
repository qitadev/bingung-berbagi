<template>
  <div class="bg-primary-bg-color">
    <HeaderApp />
    <main>
      <Nuxt />
    </main>
  </div>
</template>

<script>
import HeaderApp from "~/components/base/HeaderApp";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "default",
  components: {
    HeaderApp
  }
}
</script>

